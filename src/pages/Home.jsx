import React, { useEffect } from 'react';
import { BadgeCheck, ShieldCheck, Hammer, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { workflowSteps } from '../data/workflowSteps';
import HowIWorkStep from '../components/workflow/HowIWorkStep';
import ArrowConnector from '../components/workflow/ArrowConnector';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 spark-bg overflow-hidden min-h-[90vh] flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1544829099-26de0c2226c6?q=80&w=1400&auto=format&fit=crop"
                    alt="Welder at work"
                    className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-20 pointer-events-none select-none"
                />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 items-center gap-16">
                        <div data-aos="fade-right">
                            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-flame-500 dark:text-flame-300/90 font-bold">
                                <BadgeCheck className="h-4 w-4" />
                                Over 10 Years of Precision Welding
                            </span>
                            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold mt-4 leading-[1.1] text-steel-900 dark:text-white">
                                Reliable <span className="text-flame-400">Welding</span> & Metal Fabrication
                            </h1>
                            <p className="mt-6 text-lg text-steel-600 dark:text-steel-100/90 max-w-xl leading-relaxed">
                                By Engineer Owino Ngode. Delivering clean welds, tight tolerances, and on‑time results across steel, stainless, and aluminum for industrial and residential projects.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link to="/portfolio">
                                    <Button size="lg">
                                        View Projects
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button variant="secondary" size="lg">
                                        Request a Quote
                                    </Button>
                                </Link>
                            </div>
                            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-steel-500 dark:text-white/70">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-flame-500" />
                                    Certified Welder
                                </div>
                                <div className="flex items-center gap-2">
                                    <Hammer className="h-5 w-5 text-flame-500" />
                                    Industrial & Residential
                                </div>
                            </div>
                        </div>

                        <div className="relative" data-aos="fade-left">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="relative group">
                                    <img
                                        src="/images/logo.jpeg"
                                        alt="Engineer Owino"
                                        className="w-48 h-48 rounded-full border-4 border-flame-500 shadow-2xl mb-8 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-flame-500/10 dark:bg-flame-500/20 blur-2xl -z-10 group-hover:bg-flame-500/40 transition-colors"></div>
                                </div>

                                <div className="w-full max-w-md aspect-[4/3] rounded-3xl border border-steel-200 dark:border-white/10 bg-white/50 dark:bg-gradient-to-br dark:from-steel-700/50 dark:to-steel-800/50 p-6 shadow-2xl backdrop-blur-sm">
                                    <div className="h-full w-full rounded-2xl bg-steel-50 dark:bg-white/[0.02] flex flex-col items-center justify-center text-center">
                                        <Sparkles className="h-10 w-10 opacity-80 text-flame-500 mb-4" />
                                        <p className="font-bold text-xl mb-1 text-steel-900 dark:text-white">TIG • MIG • Stick</p>
                                        <p className="text-steel-500 dark:text-white/60 text-sm mb-8">Steel · Stainless · Aluminum</p>

                                        <div className="grid grid-cols-2 gap-3 w-full">
                                            <div className="rounded-xl border border-steel-200 dark:border-white/5 bg-white dark:bg-white/5 p-3 text-xs text-steel-600 dark:text-white/70">Custom Fabrication</div>
                                            <div className="rounded-xl border border-steel-200 dark:border-white/5 bg-white dark:bg-white/5 p-3 text-xs text-steel-600 dark:text-white/70">On‑Site Repairs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How I Work Section */}
            <section className="py-24 bg-steel-50 dark:bg-steel-800/30 border-y border-steel-100 dark:border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-4 text-steel-900 dark:text-white">How I Work</h2>
                        <p className="text-steel-600 dark:text-white/60 max-w-2xl mx-auto">
                            A streamlined, professional process designed to deliver excellence from initial talk to final delivery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
                        {workflowSteps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <div data-aos="fade-up" data-aos-delay={index * 100}>
                                    <HowIWorkStep step={step} isLast={index === workflowSteps.length - 1} />
                                </div>
                                {index < workflowSteps.length - 1 && (
                                    <ArrowConnector orientation="horizontal" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Highlights */}
            <section id="about" className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="font-display text-3xl font-bold mb-6 text-steel-900 dark:text-white">Expertise & Experience</h2>
                            <p className="text-steel-600 dark:text-white/70 mb-8 text-lg leading-relaxed">
                                With a decade of hands-on experience, I've mastered the art of fusion. My work isn't just about joining metals; it's about structural integrity, aesthetics, and lasting value.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'AWS D1.1 Certified Welder',
                                    'OSHA Safety Trained',
                                    '100+ Projects Delivered',
                                    'Mobile Shop Capabilities'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-flame-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-flame-500"></div>
                                        </div>
                                        <span className="text-steel-700 dark:text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4" data-aos="zoom-in">
                            <div className="space-y-4 pt-8">
                                <img src="/images/projects/486124588_1846145352828793_833158236320688693_n.jpg" className="rounded-2xl shadow-xl border border-steel-100 dark:border-white/5 object-cover h-64 w-full" alt="Welding Project" />
                                <img src="/images/projects/486284888_1845834682859860_197904292425281864_n.jpg" className="rounded-2xl shadow-xl border border-steel-100 dark:border-white/5 object-cover h-48 w-full" alt="Metal Work" />
                            </div>
                            <div className="space-y-4">
                                <img src="/images/projects/486534859_1845325132910815_5937163277297906848_n.jpg" className="rounded-2xl shadow-xl border border-steel-100 dark:border-white/5 object-cover h-48 w-full" alt="Steel Fabrication" />
                                <img src="/images/projects/492241297_1868473683929293_1643552352663611582_n.jpg" className="rounded-2xl shadow-xl border border-steel-100 dark:border-white/5 object-cover h-64 w-full" alt="Welding Detail" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
