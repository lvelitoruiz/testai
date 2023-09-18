import React, { useEffect, useState } from 'react'
import History from './History'
import Prompt from './Prompt'
import { sidebarProperties } from '../types';

const Sidebar = ({onConversationChange,onConversationHistoryChange}: sidebarProperties) => {

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "chat_conversations") {
                setChatConversations(localStorage.getItem("chat_conversations"))
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const [chatConversations,setChatConversations] = useState(localStorage.getItem('chat_conversations'));

    const handleHistoryChange = (id: string) => {
        onConversationChange(id);
    }

    const handleConversationHistoryChange = (value: string) => {
        onConversationHistoryChange(value);
     }

     useEffect( () => {
        console.log(chatConversations);
     },[chatConversations]);

    return (
        <div className="w-5/12 pr-5">
            <div className="flex flex-col h-full">
                <Prompt onPromptChangingConversation={ (event) => handleConversationHistoryChange(event) } />
                <History chatList={chatConversations || "" } onHistoryChange={ (event) => handleHistoryChange(event) } />
            </div>
        </div>
    )
}

export default Sidebar
