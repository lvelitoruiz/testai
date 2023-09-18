import { Cancel, Check, Search, Timer, Trash } from 'iconoir-react'
import React, { useState } from 'react'
import { ItemProps } from '../types';
import Hour from './Hour';

const HistoryItem = ({ activeItem, title, time, onActivateItem, conversationId }: ItemProps) => {
    const [removeItem,setRemoveItem] = useState(false);

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        setRemoveItem(true);
    }

    const handleConfirm = (event: React.MouseEvent, value: boolean) => {
        event.stopPropagation();
        setRemoveItem(false);
    }

    const truncateText = (input: string): string => {
        const words = input.split(" "); 
        
        if (words.length <= 5) {
            return input; 
        }
        
        return words.slice(0, 5).join(" ") + "..."; 
    }

    return (
        <div className={`flex items-center justify-between cursor-pointer px-5 py-3 rounded mb-4 ${activeItem ? "bg-[#fff6ea]" : ""}`} onClick={() => onActivateItem(conversationId)}>
            <div className="flex items-center gap-4">
                <div className="bg-[#FDBA74] h-[34px] w-[34px] rounded-full flex items-center justify-center">
                    <Search className='text-sm text-white' />
                </div>
                <div>
                    <p className="text-[#1E293B] font-medium leading-none pb-1">{truncateText(title)}</p>
                    <div className="flex items-center gap-1">
                        <Timer className='text-[#94A3B8] text-xs' />
                        <Hour time={time} />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {
                    removeItem ?
                        <>
                            <button className="h-5" onClick={(event) => handleConfirm(event,true)}>
                                <Check className='text-[#FDBA74] text-sm' />
                            </button>
                            <button className="h-5" onClick={(event) => handleConfirm(event,false)}>
                                <Cancel className='text-[#FDBA74] text-sm' />
                            </button>
                        </> :
                        <button className="h-5" onClick={(event) => handleRemove(event)}>
                            <Trash className='text-[#FDBA74] text-sm' />
                        </button>

                }
            </div>
        </div>
    )
}

export default HistoryItem
