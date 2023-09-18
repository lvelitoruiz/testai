import { Send } from 'iconoir-react'
import React from 'react'
import { sidebar } from '../utils/consts'
import PromptBox from './PromptBox'
import { promptContainerProperties } from '../types'

const Prompt = ({onPromptChangingConversation}: promptContainerProperties) => {

    const handleUPdatePrompt = (value: string) => {
        onPromptChangingConversation(value);
    }

    return (
        <div className="border border-[#CCCCCC8C] bg-white rounded-[10px] p-6 shadow-[0_0_6px_0_rgba(46,58,90,0.09)] mb-5">
            <h2 className="text-[#1E293B] text-[22px] font-semibold pb-2">{sidebar.PROMPT.TITLE}</h2>
            <p className="text-[#64748B]">{sidebar.PROMPT.TEXT}</p>
            <PromptBox className='mt-8' onUpdatePrompt={(event) => handleUPdatePrompt(event)} maxTokens={1000} />
        </div>
    )
}

export default Prompt
