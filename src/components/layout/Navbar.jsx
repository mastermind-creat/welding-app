import React, { useState, useEffect } from 'react';
import { Flame, Sun, Moon, Monitor, Home, Wrench, Briefcase, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsThemeOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Services', href: '/services', icon: Wrench },
        { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
    ];

    const isActive = (path) => location.pathname === path;

    const themeOptions = [
        { id: 'light', icon: Sun, label: 'Light' },
        { id: 'dark', icon: Moon, label: 'Dark' },
        { id: 'system', icon: Monitor, label: 'System' },
    ];

    const CurrentThemeIcon = themeOptions.find(opt => opt.id === theme)?.icon || Monitor;

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'backdrop-blur-md bg-white/90 dark:bg-steel-900/90 border-b border-steel-200 dark:border-white/10 shadow-sm'
                    : 'backdrop-blur-sm bg-white/50 dark:bg-steel-900/50'
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-2 group shrink-0">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-flame-500 to-orange-600 grid place-items-center shadow-glow group-hover:scale-105 transition-transform">
                            <Flame className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-display text-lg sm:text-xl font-bold dark:text-white text-steel-900 hidden sm:block">
                            Engineer <span className="text-flame-400">Owino</span>
                        </span>
                    </Link>

                    {/* Navigation Links - Always Visible */}
                    <div className="flex items-center gap-1 sm:gap-4 md:gap-8">
                        <div className="flex items-center bg-steel-100/50 dark:bg-white/5 p-1 rounded-2xl border border-steel-200/50 dark:border-white/5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        'flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-xl text-[10px] sm:text-sm font-semibold transition-all duration-300',
                                        isActive(link.href)
                                            ? 'bg-white dark:bg-steel-800 text-flame-500 shadow-sm'
                                            : 'text-steel-600 dark:text-white/70 hover:text-flame-400 dark:hover:text-white'
                                    )}
                                >
                                    <link.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setIsThemeOpen(!isThemeOpen)}
                                className="p-2.5 rounded-xl bg-steel-100/50 dark:bg-white/5 border border-steel-200/50 dark:border-white/5 hover:bg-white dark:hover:bg-steel-800 transition-all text-steel-600 dark:text-flame-300 shadow-sm"
                                aria-label="Theme menu"
                            >
                                <CurrentThemeIcon className="h-5 w-5" />
                            </button>

                            <AnimatePresence>
                                {isThemeOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 mt-3 w-36 bg-white/95 dark:bg-steel-800/95 backdrop-blur-xl border border-steel-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden py-1.5 z-50"
                                    >
                                        {themeOptions.map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => { setTheme(opt.id); setIsThemeOpen(false); }}
                                                className={cn(
                                                    "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-steel-50 dark:hover:bg-white/5",
                                                    theme === opt.id ? "text-flame-500 bg-flame-500/5" : "text-steel-600 dark:text-white/70"
                                                )}
                                            >
                                                <opt.icon className="h-4 w-4" />
                                                {opt.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="hidden sm:block">
                            <Button variant="primary" size="sm" onClick={() => window.location.href = '/contact'} className="shadow-glow">
                                Get Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
