import React from 'react';
import { cn } from '../../utils/cn';

const MessageBubble = ({ message }) => {
    const isBot = message.side === 'left';

    // Basic markdown-like link detection for WhatsApp escalation
    const renderText = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.split(urlRegex).map((part, i) => {
            if (part.match(urlRegex)) {
                return (
                    <a
                        key={i}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold text-flame-300 hover:text-flame-200"
                    >
                        WhatsApp Message
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div
            className={cn(
                'flex w-full',
                isBot ? 'justify-start' : 'justify-end'
            )}
        >
            <div
                className={cn(
                    'max-w-[85%] px-4 py-2 rounded-2xl shadow-md text-sm leading-relaxed',
                    isBot
                        ? 'bg-steel-800 text-white rounded-tl-none border border-white/5'
                        : 'bg-flame-500 text-white rounded-tr-none'
                )}
            >
                <p>{renderText(message.text)}</p>
            </div>
        </div>
    );
};

export default MessageBubble;
