import { motion } from 'framer-motion';
import { stats } from '../../data/skills';

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Get to know more about my background and expertise</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Cloud/DevOps Engineer & Full-Stack Developer
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            I'm a passionate Cloud/DevOps Engineer and Full-Stack Developer with hands-on experience
                            in designing, deploying, and managing scalable cloud infrastructure on Azure and AWS platforms.
                            My expertise spans containerization with Docker, orchestration with Kubernetes, building robust
                            CI/CD pipelines, and developing production-ready web applications.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Currently working at BigFix Gadget care LLP, I wear multiple hats - from deploying microservices
                            on Azure AKS and configuring secure HTTPS infrastructure across multiple domains, to developing
                            and deploying full-stack web applications like <strong className="text-accent-cyan">manchestersuites.in</strong> and{' '}
                            <strong className="text-accent-cyan">aarnadevelopers.in</strong>. I've implemented comprehensive monitoring solutions that
                            have significantly improved system reliability.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            As a self-proclaimed "vibe coder," I thrive on the entire development lifecycle - from writing
                            clean, efficient code to automating deployments and optimizing infrastructure. Whether it's a
                            static website or a complex dynamic application, I bring the same energy and attention to detail.
                            My approach combines technical expertise with creativity, collaboration, and a relentless focus
                            on delivering quality solutions.
                        </p>
                    </motion.div>

                    {/* Right Column - Stats & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass p-6 rounded-xl text-center transform transition-all duration-300 hover:glow"
                                >
                                    <div className="text-3xl mb-2">{stat.icon}</div>
                                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {[
                                { icon: '📧', label: 'Email', value: 'sharanboominathan@gmail.com' },
                                { icon: '📱', label: 'Phone', value: '+91 7305885870' },
                                { icon: '📍', label: 'Location', value: 'Chennai, India' },
                                { icon: '🎓', label: 'Education', value: 'B.E. Computer Science' },
                                { icon: '💼', label: 'Current Role', value: 'DevOps Engineer & Software Developer' },
                            ].map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    whileHover={{ x: 10 }}
                                    className="glass p-4 rounded-lg flex items-center gap-4 transform transition-all duration-300"
                                >
                                    <div className="text-2xl">{info.icon}</div>
                                    <div>
                                        <div className="text-sm text-gray-400">{info.label}</div>
                                        <div className="text-white font-medium">{info.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
