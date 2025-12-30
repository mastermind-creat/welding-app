import React, { useRef, useEffect } from 'react';
import { Send, User } from 'lucide-react';
import { useChat } from '../../context/ChatContext';
import { useChatbot } from '../../hooks/useChatbot';
import MessageBubble from './MessageBubble';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotUI = () => {
    const { isOpen, toggleChat, messages } = useChat();
    const { sendMessage } = useChatbot();
    const [input, setInput] = React.useState('');
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        sendMessage(input);
        setInput('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-80 md:w-96 bg-white dark:bg-steel-800 border border-steel-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-flame-500 text-white px-4 py-3 font-bold flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/20 grid place-items-center">
                                    <User className="h-4 w-4" />
                                </div>
                                <span>Ask Engineer Owino</span>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="hover:rotate-90 transition-transform duration-300"
                            >
                                <span className="sr-only">Close</span>
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="p-4 h-80 overflow-y-auto space-y-4 bg-steel-50 dark:bg-steel-900 scroll-smooth"
                        >
                            {messages.map((msg) => (
                                <MessageBubble key={msg.id} message={msg} />
                            ))}
                        </div>

                        {/* Input Form */}
                        <form onSubmit={handleSubmit} className="flex border-t border-steel-200 dark:border-white/10 p-3 bg-white dark:bg-steel-800">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your question..."
                                className="flex-1 px-4 py-2 bg-steel-100 dark:bg-steel-900 text-steel-900 dark:text-white rounded-xl border border-steel-200 dark:border-white/5 focus:outline-none focus:ring-1 focus:ring-flame-500 text-sm"
                            />
                            <button
                                type="submit"
                                className="ml-2 p-2 text-flame-500 hover:scale-110 transition-transform"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </form>

                        {/* Footer */}
                        <div className="text-center py-2 text-[10px] text-steel-400 bg-white dark:bg-steel-800 border-t border-steel-100 dark:border-white/5">
                            Powered By{' '}
                            <a href="https://lates-portfolio-v1.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-flame-400 hover:underline">
                                Mastermind
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ChatbotUI;
