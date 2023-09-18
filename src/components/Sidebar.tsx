import React, { useEffect, useState } from 'react'
import History from './History'
import Prompt from './Prompt'
import { sidebarProperties } from '../types';

const Sidebar = ({onConversationChange,onConversationHistoryChange}: sidebarProperties) => {

    const handleHistoryChange = (id: string) => {
        onConversationChange(id);
    }

    const handleConversationHistoryChange = (value: string) => {
        onConversationHistoryChange(value);
     }

    return (
        <div className="w-5/12 pr-5">
            <div className="flex flex-col h-full">
                <Prompt onPromptChangingConversation={ (event) => handleConversationHistoryChange(event) } />
                <History onHistoryChange={ (event) => handleHistoryChange(event) } />
            </div>
        </div>
    )
}

export default Sidebar
