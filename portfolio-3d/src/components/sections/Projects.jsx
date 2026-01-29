import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsData, categories } from '../../data/projects';

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
                    <p className="text-gray-400 text-lg mb-4">
                        25+ cloud-native applications, SaaS platforms, and AI integrations deployed on Azure
                    </p>
                    <div className="glass p-4 rounded-lg max-w-4xl mx-auto">
                        <p className="text-gray-300">
                            <strong className="gradient-text">Designed, deployed, and scaled 25+ cloud-native Django applications and SaaS platforms</strong>{' '}
                            using Azure, Docker, Kubernetes (AKS), CI/CD pipelines, SSL automation, and AI integrations.
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
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === cat.id
                                    ? 'bg-accent-cyan text-dark-bg glow'
                                    : 'glass text-gray-300 hover:text-white'
                                }`}
                        >
                            <span className="mr-2">{cat.icon}</span>
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
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass p-6 rounded-xl transform transition-all duration-300 hover:glow card-3d"
                        >
                            <div className="text-5xl mb-4">{project.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1 text-xs rounded-full bg-${project.color}-500/20 text-${project.color}-400 border border-${project.color}-500/30`}
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
