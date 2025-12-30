import React, { useState } from 'react';
import { projects } from '../data/projects';
import Button from '../components/common/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Play, Maximize2 } from 'lucide-react';
import { cn } from '../utils/cn';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(6);

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'industrial', label: 'Industrial' },
        { id: 'residential', label: 'Residential' },
        { id: 'gates', label: 'Gates & Fences' },
        { id: 'custom', label: 'Custom Fabrication' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const displayProjects = filteredProjects.slice(0, visibleCount);

    return (
        <div className="pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4 text-steel-900 dark:text-white">Project Portfolio</h1>
                    <p className="text-steel-600 dark:text-white/60 max-w-2xl mx-auto">
                        Explore my work across various sectors. Every project is handled with precision and care.
                    </p>
                </div>

                {/* Video Highlights */}
                <div className="mb-24" data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-steel-900 dark:text-white">
                        <Play className="h-6 w-6 text-flame-500" />
                        Work in Progress
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-steel-200 dark:border-white/10 shadow-2xl relative group">
                            <video
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                poster="/videos/video.mp4"
                                controls
                            >
                                <source src="/videos/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-steel-200 dark:border-white/10 shadow-2xl relative group">
                            <video
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                poster="/videos/video1.mp4"
                                controls
                            >
                                <source src="/videos/video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                {/* Filtering */}
                <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setFilter(cat.id); setVisibleCount(6); }}
                            className={cn(
                                "px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                                filter === cat.id
                                    ? "bg-flame-500 text-white shadow-glow"
                                    : "bg-steel-50 dark:bg-white/5 border border-steel-200 dark:border-white/10 text-steel-600 dark:text-white/70 hover:bg-steel-100 dark:hover:bg-white/10"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-steel-200 dark:border-white/10 bg-steel-100 dark:bg-steel-800"
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 100}
                        >
                            <img
                                src={`/${project.src}`}
                                alt={project.alt}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-flame-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                                <h4 className="text-white font-bold text-lg">{project.label}</h4>
                                <div className="mt-4 flex gap-2">
                                    <button className="p-2 rounded-lg bg-white/10 hover:bg-flame-500 transition-colors">
                                        <Maximize2 className="h-4 w-4 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                {visibleCount < filteredProjects.length && (
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => setVisibleCount(prev => prev + 6)}
                        >
                            Load More Projects
                        </Button>
                    </div>
                )}

                {/* Swiper Gallery Section */}
                <div className="mt-32" data-aos="fade-up">
                    <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-flame-500">Quick Glance Gallery</h2>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12"
                    >
                        {projects.slice(0, 10).map((project) => (
                            <SwiperSlide key={`slide-${project.id}`}>
                                <div className="h-72 rounded-2xl overflow-hidden border border-steel-200 dark:border-white/10 shadow-sm">
                                    <img
                                        src={`/${project.src}`}
                                        alt={project.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
