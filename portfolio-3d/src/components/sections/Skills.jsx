import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';

const dotColors = {
    cyan: 'bg-accent-cyan',
    blue: 'bg-accent-blue',
    purple: 'bg-accent-purple',
};

export default function Skills() {
    const categories = Object.entries(skillsData);

    return (
        <section id="skills" className="py-20 relative bg-dark-secondary/40">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Skills & Technologies</span>
                    </h2>
                    <p className="text-gray-500 text-lg">My technical expertise and toolset</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {categories.map(([category, data], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="glass p-6 rounded-xl transform transition-all duration-300 hover:glow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">{data.icon}</span>
                                <h3 className="text-lg font-bold text-gray-900">{category}</h3>
                            </div>

                            <div className="space-y-2">
                                {data.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                        className="flex items-center gap-2 group"
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[data.color] ?? 'bg-accent-cyan'} group-hover:scale-150 transition-transform duration-300`}></div>
                                        <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors duration-300">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
