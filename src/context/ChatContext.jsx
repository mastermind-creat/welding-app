import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'Engineer Owino',
            text: "Hi there! I'm here to answer your questions about welding services, projects, or anything else you'd like to know.",
            side: 'left',
        },
    ]);

    const toggleChat = () => setIsOpen(!isOpen);

    const addMessage = (text, sender = 'You', side = 'right') => {
        const newMessage = {
            id: Date.now(),
            sender,
            text,
            side,
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <ChatContext.Provider value={{ isOpen, toggleChat, messages, addMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};
