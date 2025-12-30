import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
    return (
        <a
            href="https://wa.me/254705455409"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-40 group"
            aria-label="Chat on WhatsApp"
        >
            <span className="absolute -top-1 -right-1 animate-ping inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-7 w-7 text-white" />
            </span>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-steel-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                Chat with Engineer Owino
            </span>
        </a>
    );
};

export default FloatingCTA;
