import React from 'react'
import { chatText } from '../utils/consts'
import Button from './Button'
import { chatHeaderProperties } from '../types'

const ChatHeader = ({ onNewConversation }: chatHeaderProperties) => {
    return (
        <div className="h-[64px] flex items-center border-b border-[#CCCCCC8C] justify-between bg-white rounded-t-[10px] px-6"
            onClick={onNewConversation}>
            <p className="font-semibold text-[#1E293B]">{chatText.TITLE}</p>
            <Button icon={'AddCircle'} text={chatText.BUTTON} />
        </div>
    )
}

export default ChatHeader
