import React, { useEffect } from 'react'
import PromptBox from './PromptBox'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface chatFooterProperties {
    onTypingPrompt: (value: string) => void
}

const ChatFooter = ({onTypingPrompt}: chatFooterProperties) => {

    const maxToken = useSelector((state: RootState) => state.maxToken);

    const handlePrompt = (value: string) => {
        onTypingPrompt(value);
    }
    return (
        <div className="h-[99px] flex items-center border-t border-[#CCCCCC8C] bg-white rounded-b-[10px] px-6">
            <PromptBox wand={true} onUpdatePrompt={(event) => handlePrompt(event)} maxTokens={maxToken} />
        </div>
    )
}

export default ChatFooter
