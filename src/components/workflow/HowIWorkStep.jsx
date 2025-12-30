import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../utils/cn';

const HowIWorkStep = ({ step, isLast }) => {
    const Icon = LucideIcons[step.icon] || LucideIcons.Settings;

    return (
        <div className="flex flex-col items-center relative group">
            {/* Icon Circle */}
            <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
                step.isMandatory
                    ? "bg-flame-500 shadow-[0_0_20px_rgba(255,106,0,0.5)] border-2 border-white/20"
                    : "bg-white dark:bg-steel-700 border border-steel-200 dark:border-white/10 group-hover:bg-steel-50 dark:group-hover:bg-steel-600"
            )}>
                <Icon className={cn(
                    "h-8 w-8",
                    step.isMandatory ? "text-white" : "text-flame-500 dark:text-flame-400"
                )} />
            </div>

            {/* Content */}
            <div className="mt-6 text-center max-w-[200px]">
                <h3 className="font-display font-bold text-lg mb-2 text-steel-900 dark:text-white">
                    {step.id}. {step.title}
                </h3>
                <p className="text-sm text-steel-600 dark:text-white/70 leading-relaxed">
                    {step.description}
                </p>
            </div>

            {/* Mandatory Badge */}
            {step.isMandatory && (
                <span className="absolute -top-2 -right-4 bg-flame-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-lg">
                    Required
                </span>
            )}
        </div>
    );
};

export default HowIWorkStep;
