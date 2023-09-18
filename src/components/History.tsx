import React, { useEffect, useState } from 'react'
import HistoryItem from './HistoryItem'
import { sidebar } from '../utils/consts';
import { historyItem, historyProperties } from '../types';



const History = ({chatList,onHistoryChange}: historyProperties) => {

    const [historyList, setHistoryList] = useState<historyItem[]>(JSON.parse(chatList));

    const handleActivateItem = (id: string) => {
        let newStory = [...historyList];
        newStory.map((item) => {
            item.active = false;
            if (item.conversationId === id) {
                item.active = true;
            }
        })

        setHistoryList(newStory.reverse());
        onHistoryChange(id);
    }

    return (
        <div className="border border-[#CCCCCC8C] bg-white rounded-[10px] shadow-[0_0_6px_0_rgba(46,58,90,0.09)] h-full">
            <div className="h-[64px] flex items-center border-b border-[#CCCCCC8C] justify-between bg-white rounded-t-[10px] px-6">
                <p className="font-semibold text-[#1E293B]">{sidebar.HISTORIAL.TITLE}</p>
            </div>
            <div className="p-6 h-[calc(100vh-468px)] overflow-auto">
                {
                    historyList.length > 0 && historyList.reverse().map((item, index) => {
                        return (
                            <HistoryItem key={index} activeItem={item.active} title={item.messages[0].message} time={item.timestamp} conversationId={item.conversationId} onActivateItem={(event) => handleActivateItem(event)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History
