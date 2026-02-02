import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative bg-dark-card/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Work Experience</span>
                    </h2>
                    <p className="text-gray-400 text-lg">My professional journey in cloud and DevOps engineering</p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple"></div>

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-accent-cyan rounded-full border-4 border-dark-bg transform -translate-x-1/2 z-10 glow"></div>

                            {/* Content Card */}
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass p-6 md:p-8 rounded-xl ml-16 md:ml-0 transform transition-all duration-300 hover:glow"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="">
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                        <p className="text-accent-cyan font-semibold text-lg">{exp.company}</p>
                                    </div>
                                    {exp.current && (
                                        <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-xs font-semibold rounded-full border border-accent-cyan/30">
                                            Current
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 text-gray-400 mb-4">
                                    <span>📅</span>
                                    <span>{exp.period}</span>
                                    <span>•</span>
                                    <span>📍 {exp.location}</span>
                                </div>

                                <ul className="space-y-3">
                                    {exp.responsibilities.map((resp, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                            className={`text-gray-300 leading-relaxed flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row' : ''}`}
                                        >
                                            <span className="text-accent-cyan mt-1">▹</span>
                                            <span>{resp}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
