import React, { useEffect } from 'react'
import PromptBox from './PromptBox'

interface chatFooterProperties {
    onTypingPrompt: (value: string) => void
}

const ChatFooter = ({onTypingPrompt}: chatFooterProperties) => {

    const handlePrompt = (value: string) => {
        onTypingPrompt(value);
    }
    return (
        <div className="h-[99px] flex items-center border-t border-[#CCCCCC8C] bg-white rounded-b-[10px] px-6">
            <PromptBox wand={true} onUpdatePrompt={(event) => handlePrompt(event)} maxTokens={1000} />
        </div>
    )
}

export default ChatFooter
