import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        setIsMobileMenuOpen(false);
        setIsThemeOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
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
                    ? 'backdrop-blur-md bg-white/70 dark:bg-steel-900/80 border-b border-steel-200 dark:border-white/10'
                    : 'bg-transparent'
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-flame-500 to-orange-600 grid place-items-center shadow-glow">
                            <Flame className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-display text-xl font-bold dark:text-white text-steel-900">
                            Engineer <span className="text-flame-400">Owino Ngode</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        'text-sm font-medium transition-colors hover:text-flame-400',
                                        isActive(link.href) ? 'text-flame-500' : 'text-steel-600 dark:text-white/80'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsThemeOpen(!isThemeOpen);
                                    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                                }}
                                className="p-2 rounded-full hover:bg-steel-100 dark:hover:bg-white/5 transition-colors text-steel-600 dark:text-flame-300"
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
                                        className="absolute right-0 mt-2 w-32 bg-white/90 dark:bg-steel-800/90 backdrop-blur-lg border border-steel-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 z-50"
                                    >
                                        {themeOptions.map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => { setTheme(opt.id); setIsThemeOpen(false); }}
                                                className={cn(
                                                    "w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-steel-50 dark:hover:bg-white/5",
                                                    theme === opt.id ? "text-flame-500" : "text-steel-600 dark:text-white/70"
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

                        <Button variant="primary" size="sm" onClick={() => window.location.href = '/contact'}>
                            Get a Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Btn */}
                    <div className="flex items-center gap-2 md:hidden relative">
                        <button
                            onClick={() => {
                                setIsThemeOpen(!isThemeOpen);
                                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                            }}
                            className="p-2 rounded-full hover:bg-steel-100 dark:hover:bg-white/5 text-steel-700 dark:text-white"
                        >
                            <CurrentThemeIcon className="h-5 w-5" />
                        </button>

                        <AnimatePresence>
                            {isThemeOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-10 top-full mt-2 w-32 bg-white/90 dark:bg-steel-800/90 backdrop-blur-lg border border-steel-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 z-[60]"
                                >
                                    {themeOptions.map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => { setTheme(opt.id); setIsThemeOpen(false); }}
                                            className={cn(
                                                "w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-steel-50 dark:hover:bg-white/5",
                                                theme === opt.id ? "text-flame-500" : "text-steel-600 dark:text-white/70"
                                            )}
                                        >
                                            <opt.icon className="h-4 w-4" />
                                            {opt.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                                if (isThemeOpen) setIsThemeOpen(false);
                            }}
                            className="p-2 rounded-xl hover:bg-steel-100 dark:hover:bg-white/5 text-steel-700 dark:text-white"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-1 bg-white/80 dark:bg-steel-900/90 backdrop-blur-xl border border-steel-200 dark:border-white/10 rounded-2xl mb-4 shadow-xl">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            'block px-6 py-3 text-base font-medium transition-colors hover:bg-flame-50 dark:hover:bg-flame-500/10',
                                            isActive(link.href) ? 'text-flame-500 bg-flame-50 dark:bg-flame-500/10' : 'text-steel-600 dark:text-white'
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="px-6 pt-2">
                                    <Button variant="primary" className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/contact'; }}>
                                        Get a Quote
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
