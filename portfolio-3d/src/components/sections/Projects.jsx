import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsData, categories } from '../../data/projects';

// Fixed tech badge styles safe for Tailwind's JIT (no dynamic class names)
const techBadgeStyle = {
    cyan: 'bg-violet-100 text-violet-700 border border-violet-200',
    blue: 'bg-orange-100 text-orange-700 border border-orange-200',
    purple: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
};

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Production Portfolio</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-4">
                        30+ cloud-native applications, SaaS platforms, and AI integrations
                    </p>
                    <div className="glass p-4 rounded-lg max-w-4xl mx-auto">
                        <p className="text-gray-600">
                            <strong className="gradient-text">Designed, deployed, and scaled 30+ cloud-native Django applications and SaaS platforms</strong>{' '}
                            using Azure, AWS, GCP, Docker, Kubernetes, CI/CD pipelines, SSL automation, and AI integrations.
                        </p>
                    </div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm ${
                                activeCategory === cat.id
                                    ? 'bg-accent-cyan text-white shadow-lg glow'
                                    : 'glass text-gray-600 hover:text-accent-cyan'
                            }`}
                        >
                            <span className="mr-1.5">{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass p-6 rounded-xl transform transition-all duration-300 hover:glow card-3d"
                        >
                            <div className="text-4xl mb-3">{project.icon}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`px-2.5 py-1 text-xs rounded-full font-medium ${techBadgeStyle[project.color] ?? techBadgeStyle.cyan}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
