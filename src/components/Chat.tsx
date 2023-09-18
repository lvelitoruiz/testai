import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import ChatHeader from './ChatHeader'
import ChatLayout from './ChatLayout'
import ChatFooter from './ChatFooter'
import { ChatImperativeHandles, Conversation, chatProps, messageProps } from '../types'
import axios from 'axios'

const Chat = forwardRef<ChatImperativeHandles, chatProps>((props, ref) => {
    const [input, setInput] = useState<string>("");
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [maxTokens, setMaxTokens] = useState(1000);
    const SYSTEM_MESSAGE = "You are a helpful assistant.";

    useEffect(() => {
        const savedConversations = localStorage.getItem('chat_conversations');
        if (savedConversations) {
            setConversations(JSON.parse(savedConversations));
        }
    }, []);

    useEffect(() => {
        if (input.length > 4) {
            handleAIQuery();
        }
    }, [input])

    const handleAIQuery = async () => {
        let trimmedInput = input;
        const userMessage: messageProps = {
            id: Date.now(),
            type: 'user',
            message: input,
            name: 'Ana Clara',
            time: new Date()
        };

        let updatedConversation = currentConversation ?
            { ...currentConversation, messages: [...currentConversation.messages, userMessage] }
            : {
                conversationId: Date.now(),
                timestamp: new Date().toISOString(),
                messages: [userMessage]
            };

        const updatedConversations = currentConversation ?
            conversations.map(c => c.conversationId === currentConversation.conversationId ? updatedConversation : c)
            : [...conversations, updatedConversation];

        setConversations(updatedConversations);
        setCurrentConversation(updatedConversation);
        localStorage.setItem('chat_conversations', JSON.stringify(updatedConversations));

        const combinedLength = SYSTEM_MESSAGE.length + input.length;
        if (combinedLength > maxTokens) {
            const amountToTrim = combinedLength - maxTokens;
            trimmedInput = input.substring(0, input.length - amountToTrim);
        }

        const payload = {
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": SYSTEM_MESSAGE },
                { "role": "user", "content": trimmedInput }
            ]
        };

        try {
            setIsLoading(true);
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions', payload,
                {
                    headers: {
                        'Authorization': `Bearer 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`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const aiMessage: messageProps = {
                id: Date.now() + 1,
                type: 'ai',
                message: response.data.choices[0].message.content,
                name: 'OdamaChat',
                time: new Date(),
            };

            setIsLoading(false);
            updatedConversation.messages.push(aiMessage);
            setConversations(prevConversations =>
                prevConversations.map(c => c.conversationId === updatedConversation.conversationId ? updatedConversation : c)
            );
            setCurrentConversation(updatedConversation);
            localStorage.setItem('chat_conversations', JSON.stringify(updatedConversations));

        } catch (error) {
            setIsLoading(false);
            console.error("Error:", error);
        }

        setInput('');
    };

    useImperativeHandle(ref, () => ({

        triggerConversationChange: (id: string) => {
            conversations.map((item) => {
                if (parseInt(id) === item.conversationId) {
                    setCurrentConversation(item);
                }
            })
        },

        triggerConversationHistoryChange: (value: string) => {
            setCurrentConversation(null);
            setInput(value)
        }
    }));

    const generateNewConversation = () => {
        setCurrentConversation(null);
    }


    return (
        <div className={`${!props.sidebar ? "w-12/12" : "w-7/12"} h-full border border-[#CCCCCC8C] rounded-[10px]`}>
            <ChatHeader onNewConversation={generateNewConversation} />
            <ChatLayout conversation={currentConversation} loading={isLoading} />
            <ChatFooter onTypingPrompt={(event) => setInput(event)} />
        </div>
    )
})

export default Chat
