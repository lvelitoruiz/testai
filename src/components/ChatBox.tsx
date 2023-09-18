import React from 'react'
import Hour from './Hour'
import { messageProps } from '../types'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const ChatBox = ({ type, name, message, time, id }: messageProps) => {
    return (
        <div className="bg-white rounded-[10px] shadow-[0_0_6px_0_rgba(46,58,90,0.09)] px-6 mb-5">
            <div className="flex items-center h-[65px] border-b border-[#CCCCCC8C] gap-3">
                <p className={`${type === "user" ? "text-[#10B981]" : "text-[#F97316]"} font-semibold`}>{name}</p>
                <Hour time={time.toString()} />
            </div>
            <div className="py-4">
                <div className="text-[#1E293B] chat-box">
                    <ReactMarkdown
                        children={message}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        {...props}
                                        children={String(children).replace(/\n$/, '')}
                                        style={dark}
                                        language={match[1]}
                                        PreTag="div"
                                    />
                                ) : (
                                    <code {...props} className={className}>
                                        {children}
                                    </code>
                                )
                            }
                        }} />
                </div>
            </div>
        </div>
    )
}

export default ChatBox
