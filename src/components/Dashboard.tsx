import React, { useRef, useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { ChatImperativeHandles } from '../types';

const Dashboard = () => {

    const chatRef = useRef<ChatImperativeHandles | null>(null);

    const [sidebarShow, setSidebarShow] = useState(true);

    const handleSidebar = () => {
        setSidebarShow(!sidebarShow);
    }

    const handleConversationChange = (id: string) => {
        chatRef.current?.triggerConversationChange(id);
    }

    const handleConversationHistoryChange = (value: string) => {
        chatRef.current?.triggerConversationHistoryChange(value);
    }

    return (
        <>
            <Header sidebar={sidebarShow} onActivateSidebar={handleSidebar} />
            <section className="h-[calc(100vh-90px)] bg-[#F8FAFC] p-10">
                <div className="flex h-full">
                    {
                        sidebarShow ?
                            <Sidebar onConversationChange={(event) => handleConversationChange(event)} onConversationHistoryChange={(event) => handleConversationHistoryChange(event) } /> : null
                    }
                    <Chat ref={chatRef} sidebar={sidebarShow} />
                </div>
            </section>
        </>
    )
}

export default Dashboard
