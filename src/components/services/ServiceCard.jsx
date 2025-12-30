import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../utils/cn';

const ServiceCard = ({ service }) => {
    const Icon = LucideIcons[service.icon] || LucideIcons.Settings;

    return (
        <div
            className="group rounded-2xl border border-steel-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-6 hover:bg-steel-50 dark:hover:bg-white/[0.06] transition-all duration-300 hover:border-flame-500/50 hover:-translate-y-1 shadow-sm dark:shadow-none"
            data-aos="zoom-in"
            data-aos-delay={service.aosDelay}
        >
            <div className="w-12 h-12 rounded-xl bg-steel-100 dark:bg-steel-800 border border-steel-200 dark:border-white/5 flex items-center justify-center group-hover:bg-flame-500 transition-colors">
                <Icon className="h-6 w-6 text-flame-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-steel-900 dark:text-white">{service.title}</h3>
            <p className="mt-2 text-sm text-steel-600 dark:text-white/70 leading-relaxed">
                {service.description}
            </p>
        </div>
    );
};

export default ServiceCard;
