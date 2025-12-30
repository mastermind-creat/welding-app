import React from 'react';
import { motion } from 'framer-motion';

const ArrowConnector = ({ orientation = 'horizontal' }) => {
    if (orientation === 'vertical') {
        return (
            <div className="h-12 w-px bg-gradient-to-b from-flame-500/50 to-transparent my-4">
                <motion.div
                    animate={{ y: [0, 40, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1 h-3 bg-flame-500 rounded-full blur-[1px]"
                />
            </div>
        );
    }

    return (
        <div className="hidden lg:flex flex-1 items-center px-4 -mt-20">
            <div className="h-px flex-1 bg-gradient-to-r from-flame-500/50 via-flame-500 to-flame-500/50 relative">
                <motion.div
                    animate={{ x: ['-10%', '110%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white blur-[2px]"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-flame-500" />
            </div>
        </div>
    );
};

export default ArrowConnector;
