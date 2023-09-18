import React, { useEffect, useRef, useState } from 'react'
import ChatBox from './ChatBox';
import axios from 'axios';
import { chatLayoutProperties } from '../types';

const ChatLayout = ({ conversation, loading }: chatLayoutProperties) => {

    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) {
            const element = chatRef.current;
            element.scrollTop = element.scrollHeight;
        }
    }, [conversation]);

    return (
        <div className="p-6 h-[calc(100%-163px)] overflow-auto" ref={chatRef}>
            {
                conversation?.messages.map((item, index) => {
                    return (
                        <ChatBox type={item.type} name={item.name} message={item.message} key={index} id={item.id} time={item.time} />
                    )
                })
            }
            {
                loading ?
                    <div className='w-[100px] h-[100px] block mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="bg-transparent block object-cover" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx="84" cy="50" r="10" fill="#747474">
                                <animate attributeName="r" repeatCount="indefinite" dur="0.25s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                                <animate attributeName="fill" repeatCount="indefinite" dur="1s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#747474;#747474;#f5f5f1;#221f1f;#747474" begin="0s"></animate>
                            </circle><circle cx="16" cy="50" r="10" fill="#747474">
                                <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                            </circle><circle cx="50" cy="50" r="10" fill="#221f1f">
                                <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s"></animate>
                            </circle><circle cx="84" cy="50" r="10" fill="#f5f5f1">
                                <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s"></animate>
                            </circle><circle cx="16" cy="50" r="10" fill="#747474">
                                <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate>
                                <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s"></animate>
                            </circle>
                        </svg>
                    </div> : null
            }
        </div>
    )
}

export default ChatLayout
