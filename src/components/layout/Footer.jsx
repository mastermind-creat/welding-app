import React from 'react';
import { Flame, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 border-t border-steel-200 dark:border-white/5 bg-steel-50 dark:bg-steel-800/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 group mb-6">
                            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-flame-500 to-orange-600 grid place-items-center shadow-glow">
                                <Flame className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-display text-xl font-bold text-steel-900 dark:text-white">
                                Engineer <span className="text-flame-400">Owino Ngode</span>
                            </span>
                        </Link>
                        <p className="text-steel-600 dark:text-white/70 mb-6">
                            Precision welding and metal fabrication services with over 10 years of experience.
                        </p>
                        <div className="flex items-center gap-4 text-steel-500 dark:text-white/70">
                            <a href="https://web.facebook.com/joseph.owino.31508" className="hover:text-flame-300 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-flame-300 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-flame-300 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="hover:text-flame-300 transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-bold mb-6 text-steel-900 dark:text-white">Services</h3>
                        <ul className="space-y-3 text-steel-600 dark:text-white/70">
                            <li><Link to="/services" className="hover:text-flame-300 transition">Industrial Welding</Link></li>
                            <li><Link to="/services" className="hover:text-flame-300 transition">Repairs & Maintenance</Link></li>
                            <li><Link to="/services" className="hover:text-flame-300 transition">Custom Fabrication</Link></li>
                            <li><Link to="/services" className="hover:text-flame-300 transition">Mobile / On-Site</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-bold mb-6 text-steel-900 dark:text-white">Quick Links</h3>
                        <ul className="space-y-3 text-steel-600 dark:text-white/70">
                            <li><Link to="/" className="hover:text-flame-300 transition">Home</Link></li>
                            <li><Link to="/portfolio" className="hover:text-flame-300 transition">Portfolio</Link></li>
                            <li><Link to="/services" className="hover:text-flame-300 transition">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-flame-300 transition">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-display text-lg font-bold mb-6 text-steel-900 dark:text-white">Contact Info</h3>
                        <ul className="space-y-3 text-steel-600 dark:text-white/70">
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-flame-500 mt-0.5" />
                                <div className="flex flex-col">
                                    <a href="tel:+254705455409" className="hover:text-flame-300">+254 705 455 409</a>
                                    <a href="tel:+254792533963" className="hover:text-flame-300">+254 792 533 963</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-flame-500" />
                                <a href="mailto:staramisiengineering@gmail.com" className="hover:text-flame-300">staramisiengineering@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-flame-500" />
                                <span>Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-flame-500" />
                                <span>Mon-Fri: 8AM - 6PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-steel-200 dark:border-white/5 text-center text-steel-500 dark:text-white/60 text-sm">
                    <p>© {currentYear} Engineer Owino Ngode. All rights reserved.</p>
                    <p className="mt-2 text-steel-400">
                        Powered by {' '}
                        <a href="https://tech-safi-k21q.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-flame-400 hover:underline">
                            TechSafi
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
