import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/common/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Industrial Welding',
        details: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hi Engineer Owino, I need a quote for ${formData.service}. My details: ${formData.details}. Name: ${formData.name}, Phone: ${formData.phone}`;
        const whatsappUrl = `https://wa.me/254705455409?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const contactInfo = [
        { icon: Phone, label: 'Call Me', value: '+254 705 455 409', href: 'tel:+254705455409' },
        { icon: Mail, label: 'Email Us', value: 'staramisiengineering@gmail.com', href: 'mailto:staramisiengineering@gmail.com' },
        { icon: MapPin, label: 'Location', value: 'Workshop: Nairobi, Kenya', href: '#' },
        { icon: Clock, label: 'Hours', value: 'Mon - Fri: 8AM - 6PM', href: '#' },
    ];

    return (
        <div className="pt-32 pb-24" id="contact">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div data-aos="fade-right">
                        <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-6 text-steel-900 dark:text-white">Get a <span className="text-flame-400">Quote</span></h1>
                        <p className="text-steel-600 dark:text-white/70 text-lg mb-10 leading-relaxed">
                            Ready to start your project? Fill out the form or reach out directly via WhatsApp for a faster response. I typically reply within 24 hours.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.href}
                                    className="p-6 rounded-2xl bg-steel-50 dark:bg-white/5 border border-steel-100 dark:border-white/5 hover:border-flame-500/50 transition-colors group shadow-sm dark:shadow-none"
                                >
                                    <info.icon className="h-6 w-6 text-flame-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-sm text-steel-400 dark:text-white/50 mb-1 uppercase tracking-widest">{info.label}</h4>
                                    <p className="text-steel-900 dark:text-white font-medium">{info.value}</p>
                                </a>
                            ))}
                        </div>

                        <div className="rounded-3xl overflow-hidden border border-steel-200 dark:border-white/10 shadow-2xl h-64 relative group">
                            <iframe
                                title="Workshop Location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=36.806%2C-1.292%2C36.836%2C-1.272&layer=mapnik"
                                className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 dark:border-steel-900/50"></div>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <div className="rounded-3xl border border-steel-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 backdrop-blur-sm relative shadow-xl dark:shadow-none">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-flame-500/10 blur-3xl rounded-full -z-10"></div>

                            <h3 className="text-2xl font-bold mb-8 text-steel-900 dark:text-white">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-steel-500 dark:text-white/60 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full rounded-xl bg-steel-50 dark:bg-steel-900 border border-steel-200 dark:border-white/10 focus:border-flame-400 focus:ring-1 focus:ring-flame-400 px-4 py-3 transition-colors outline-none text-steel-900 dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-steel-500 dark:text-white/60 ml-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full rounded-xl bg-steel-50 dark:bg-steel-900 border border-steel-200 dark:border-white/10 focus:border-flame-400 focus:ring-1 focus:ring-flame-400 px-4 py-3 transition-colors outline-none text-steel-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-steel-500 dark:text-white/60 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full rounded-xl bg-steel-50 dark:bg-steel-900 border border-steel-200 dark:border-white/10 focus:border-flame-400 focus:ring-1 focus:ring-flame-400 px-4 py-3 transition-colors outline-none text-steel-900 dark:text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-steel-500 dark:text-white/60 ml-1">Service Needed</label>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full rounded-xl bg-steel-50 dark:bg-steel-900 border border-steel-200 dark:border-white/10 focus:border-flame-400 focus:ring-1 focus:ring-flame-400 px-4 py-3 transition-colors outline-none appearance-none text-steel-900 dark:text-white"
                                    >
                                        <option>Industrial Welding</option>
                                        <option>Repairs & Maintenance</option>
                                        <option>Custom Fabrication</option>
                                        <option>Mobile / On‑Site</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-steel-500 dark:text-white/60 ml-1">Project Details</label>
                                    <textarea
                                        rows="4"
                                        required
                                        value={formData.details}
                                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                        placeholder="Dimensions, materials, or any specific requirements..."
                                        className="w-full rounded-xl bg-steel-50 dark:bg-steel-900 border border-steel-200 dark:border-white/10 focus:border-flame-400 focus:ring-1 focus:ring-flame-400 px-4 py-3 transition-colors outline-none resize-none text-steel-900 dark:text-white"
                                    ></textarea>
                                </div>

                                <Button type="submit" className="w-full py-4 text-lg">
                                    Launch Inquiry on WhatsApp
                                    <MessageCircle className="ml-2 h-5 w-5" />
                                </Button>

                                <p className="text-center text-xs text-steel-400 dark:text-white/40 mt-6 font-medium">
                                    Encryption: Your message will be sent through WhatsApp's secure platform.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
