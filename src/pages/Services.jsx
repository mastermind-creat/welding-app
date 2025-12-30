import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';

const ServiceGalleryItem = ({ images, interval = 3000, className }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className={cn("relative overflow-hidden group", className)}>
            <AnimatePresence mode="wait">
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt="Service Gallery"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
        </div>
    );
};

// Simple utility if cn is not imported at top level
const cn = (...classes) => classes.filter(Boolean).join(' ');

const Services = () => {
    const galleryGroups = [
        ['/images/projects/12.jpeg', '/images/projects/13.jpeg', '/images/projects/14.jpeg'],
        ['/images/projects/15.jpeg', '/images/projects/16.jpeg', '/images/projects/17.jpeg'],
        ['/images/projects/18.jpeg', '/images/projects/19.jpeg', '/images/projects/20.jpeg', '/images/projects/21.jpeg'],
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4 text-steel-900 dark:text-white">Professional Services</h1>
                    <p className="text-steel-600 dark:text-white/60 max-w-2xl mx-auto">
                        From heavy industrial projects to delicate custom fabrication, I provide reliable solutions with uncompromising quality.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Detailed Breakdown Section */}
                <div className="mt-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="font-display text-3xl font-bold mb-6 text-steel-900 dark:text-white">Why Choose My Services?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-lg bg-flame-500/10 flex items-center justify-center border border-flame-500/30">
                                        <span className="text-flame-500 font-bold">01</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-steel-900 dark:text-white">Precision Guaranteed</h4>
                                        <p className="text-steel-600 dark:text-white/60 text-sm">We use advanced measurement tools and techniques to ensure every weld and joint is perfectly aligned.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-lg bg-flame-500/10 flex items-center justify-center border border-flame-500/30">
                                        <span className="text-flame-500 font-bold">02</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-steel-900 dark:text-white">High-Grade Materials</h4>
                                        <p className="text-steel-600 dark:text-white/60 text-sm">Supporting your project with the best steel, aluminum, and stainless alloys available on the market.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-lg bg-flame-500/10 flex items-center justify-center border border-flame-500/30">
                                        <span className="text-flame-500 font-bold">03</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-steel-900 dark:text-white">Safety First</h4>
                                        <p className="text-steel-600 dark:text-white/60 text-sm">Strict adherence to safety protocols ensures no accidents on-site and structural stability of every piece.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-steel-50 dark:bg-steel-800 rounded-3xl p-4 border border-steel-200 dark:border-white/5 shadow-2xl" data-aos="fade-left">
                            <h3 className="text-2xl font-bold mb-6 px-4 pt-4 text-steel-900 dark:text-white">Service Gallery</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <ServiceGalleryItem images={galleryGroups[0]} className="h-40 rounded-2xl border border-white/10" />
                                <ServiceGalleryItem images={galleryGroups[1]} className="h-40 rounded-2xl border border-white/10" interval={3500} />
                                <ServiceGalleryItem images={galleryGroups[2]} className="h-48 rounded-2xl border border-white/10 col-span-2" interval={4000} />
                            </div>
                            <p className="mt-4 text-xs text-center text-steel-400 dark:text-white/40 italic">Showcasing constant progress and dedication.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
