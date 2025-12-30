import React, { useState } from 'react';
import { MessageCircle, MessageSquare, Plus, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../../context/ChatContext';
import { cn } from '../../utils/cn';

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleChat, isOpen: isChatOpen } = useChat();

    const menuItems = [
        {
            id: 'whatsapp',
            icon: MessageCircle,
            label: 'WhatsApp',
            color: 'bg-green-500',
            action: () => window.open('https://wa.me/254705455409', '_blank'),
        },
        {
            id: 'chatbot',
            icon: MessageSquare,
            label: 'AI Assistant',
            color: 'bg-flame-500',
            action: () => {
                toggleChat();
                setIsOpen(false);
            },
        },
        {
            id: 'call',
            icon: Phone,
            label: 'Call Us',
            color: 'bg-blue-500',
            action: () => window.open('tel:+254705455409', '_self'),
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col items-end gap-3 mb-2">
                        {menuItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={item.action}
                                className="flex items-center gap-3 group"
                            >
                                <span className="bg-white dark:bg-steel-800 text-steel-900 dark:text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {item.label}
                                </span>
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110",
                                    item.color
                                )}>
                                    <item.icon className="h-6 w-6" />
                                </div>
                            </motion.button>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform",
                    isOpen ? "bg-steel-800 dark:bg-white dark:text-steel-900 rotate-0" : "bg-flame-500 hover:scale-105"
                )}
            >
                {isOpen ? <X className="h-7 w-7" /> : <Plus className="h-8 w-8" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 animate-ping inline-flex h-4 w-4 rounded-full bg-flame-400 opacity-75"></span>
                )}
            </button>

            {/* Quick context label for the main button when closed */}
            {!isOpen && !isChatOpen && (
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-steel-800 text-steel-900 dark:text-white text-xs px-2 py-1 rounded-md shadow-lg border border-white/10 whitespace-nowrap pointer-events-none transition-opacity group-hover:opacity-100">
                    Need Help?
                </span>
            )}
        </div>
    );
};

export default FloatingMenu;
