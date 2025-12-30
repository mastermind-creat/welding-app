import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-flame-500 hover:bg-flame-400 text-white shadow-glow',
        secondary: 'border border-steel-200 dark:border-white/10 hover:border-steel-300 dark:hover:border-white/30 bg-steel-50 dark:bg-white/0 hover:bg-steel-100 dark:hover:bg-white/5 text-steel-900 dark:text-white',
        outline: 'border border-flame-500 text-flame-500 hover:bg-flame-500 hover:text-white',
        ghost: 'hover:bg-steel-50 dark:hover:bg-white/5 text-steel-600 dark:text-white',
        whatsapp: 'bg-green-600 hover:bg-green-500 text-white',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'p-2',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
