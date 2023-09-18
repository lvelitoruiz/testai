import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import ChatHeader from './ChatHeader';
import ChatLayout from './ChatLayout';
import ChatFooter from './ChatFooter';
import { ChatImperativeHandles, Conversation, chatProps, messageProps } from '../types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateConversation } from '../slices/chatSlice'; 
import { RootState } from '../store/store'



const Chat = forwardRef<ChatImperativeHandles, chatProps>((props, ref) => {
    const dispatch = useDispatch();
    const conversations = useSelector( (state: RootState) => state.chat); 

    const maxToken = useSelector((state: RootState) => state.maxToken);

    const [input, setInput] = useState<string>("");
    const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const SYSTEM_MESSAGE = "You are a helpful assistant.";

    useEffect(() => {
        if (input.length > 4) {
            handleAIQuery();
        }
    }, [input]);

    const handleAIQuery = async () => {
        let trimmedInput = input;
        const userMessage: messageProps = {
            id: Date.now(),
            type: 'user',
            message: input,
            name: 'Ana Clara',
            time: new Date().toISOString(),
        };

        let updatedConversation = currentConversation ?
            { ...currentConversation, messages: [...currentConversation.messages, userMessage] }
            : {
                conversationId: Date.now(),
                timestamp: new Date().toISOString(),
                messages: [userMessage],
                active: false,
            };

        dispatch(addOrUpdateConversation(updatedConversation));
        setCurrentConversation(updatedConversation);

        const combinedLength = SYSTEM_MESSAGE.length + input.length;
        if (combinedLength > maxToken) {
            const amountToTrim = combinedLength - maxToken;
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
                        'Authorization': `Bearer ${process.env.GATSBY_AI_APIKEY}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const aiMessage: messageProps = {
                id: Date.now() + 1,
                type: 'ai',
                message: response.data.choices[0].message.content,
                name: 'OdamaChat',
                time: new Date().toISOString(),
            };

            updatedConversation = {
                ...updatedConversation,
                messages: [...updatedConversation.messages, aiMessage]
            };
            dispatch(addOrUpdateConversation(updatedConversation));
            setCurrentConversation(updatedConversation);

        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
            setInput('');
        }
    };

    useImperativeHandle(ref, () => ({
        triggerConversationChange: (id: string) => {
            const conversationToSet = conversations.find(item => item.conversationId === parseInt(id));
            if (conversationToSet) {
                setCurrentConversation(conversationToSet);
            }
        },
        triggerConversationHistoryChange: (value: string) => {
            setCurrentConversation(null);
            setInput(value);
        }
    }));

    const generateNewConversation = () => {
        setCurrentConversation(null);
    };

    return (
        <div className={`${!props.sidebar ? "w-12/12" : "w-7/12"} h-full border border-[#CCCCCC8C] rounded-[10px]`}>
            <ChatHeader onNewConversation={generateNewConversation} />
            <ChatLayout conversation={currentConversation} loading={isLoading} />
            <ChatFooter onTypingPrompt={(event) => setInput(event)} />
        </div>
    );
});

export default Chat;
