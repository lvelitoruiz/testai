import { MagicWand, Send } from 'iconoir-react'
import React, { useEffect, useState } from 'react'
import { sidebar } from '../utils/consts'
import Input from './Input'
import { promptProperties } from '../types'

const PromptBox = ({ className, wand, onUpdatePrompt, maxTokens }: promptProperties) => {
    const [promptValue, setPromptvalue] = useState("");
    const [tokenCount, setTokenCount] = useState(0);

    const handlePromptValue = (value: string) => {
        onUpdatePrompt(value);
        setPromptvalue("");
    }

    const estimateTokens = (input: string) => {
        setTokenCount(input.length);
    };

    useEffect(() => {
        estimateTokens(promptValue);
    }, [promptValue])


    return (
        <div className='flex flex-col w-full'>
            <div className={`flex items-center border border-[#CCCCCC8C] h-10 px-4 rounded w-full gap-4 ${className}`}>
                <Input texto={promptValue} extraStyles='w-full outline-none text-[#1E293B]' placeholder={sidebar.PROMPT.LABEL} name={"sidebarprompt"} onValueChange={(event) => setPromptvalue(event)} />
                <button className={`${promptValue.length <= 4 ? 'opacity-30' : 'opacity-100'}`} disabled={promptValue.length <= 4} onClick={() => handlePromptValue(promptValue)}>
                    <Send className='text-[#F97316] text-sm' />
                </button>
                {
                    wand ? <button>
                        <MagicWand className='text-[#10B981] text-sm' />
                    </button> : null
                }
            </div>
            <p className={`text-xs mt-2 pl-2 ${ tokenCount >= maxTokens ? "text-red-300" : "text-gray-400"}`}>Cantidad de tokens: {tokenCount}. (Máximo {maxTokens} tokens).</p>
        </div>
    )
}

export default PromptBox
