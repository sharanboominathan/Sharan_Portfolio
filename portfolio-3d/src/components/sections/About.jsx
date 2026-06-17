import { motion } from 'framer-motion';
import { stats } from '../../data/skills';

export default function About() {
    return (
        <section id="about" className="py-20 relative bg-dark-secondary/40">
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
                    <p className="text-gray-500 text-lg">Get to know more about my background and expertise</p>
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
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Cloud & DevOps Engineer | Azure Specialist | Kubernetes Administrator
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            I'm a Cloud & DevOps Engineer specializing in designing, automating, securing, and scaling
                            cloud-native applications. My expertise spans{' '}
                            <strong className="text-accent-cyan">Microsoft Azure</strong>,{' '}
                            <strong className="text-accent-cyan">AWS</strong>,{' '}
                            <strong className="text-accent-cyan">Google Cloud Platform (GCP)</strong>, Kubernetes, Docker,
                            CI/CD automation, Infrastructure as Code, cloud migration, and AI-powered solutions.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            I have hands-on experience managing multi-domain enterprise environments, building highly
                            available containerized applications, implementing automated deployment pipelines, optimizing
                            cloud costs, and integrating AI solutions into production systems — including RAG-based
                            assistants powered by{' '}
                            <strong className="text-accent-cyan">LangChain</strong>,{' '}
                            <strong className="text-accent-cyan">Ollama</strong>, and{' '}
                            <strong className="text-accent-cyan">FAISS</strong>.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            My focus is to bridge Development and Operations by creating reliable, scalable, and automated
                            infrastructures that accelerate business growth while ensuring security, performance, and
                            operational excellence. Currently at{' '}
                            <strong className="text-accent-cyan">Assurify Technologies</strong>, I manage a{' '}
                            <strong className="text-accent-cyan">25+ production workload</strong> cloud ecosystem,
                            architect multi-tenant Kubernetes platforms, deploy enterprise SaaS solutions, and
                            deliver AI-powered features — all at 99%+ uptime.
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
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-3">
                            {[
                                { icon: '📧', label: 'Email', value: 'sharanboominathan@gmail.com', href: 'mailto:sharanboominathan@gmail.com' },
                                { icon: '📱', label: 'Phone', value: '+91 7449165870', href: 'tel:+917449165870' },
                                { icon: '📍', label: 'Location', value: 'Chennai, India' },
                                { icon: '🎓', label: 'Education', value: 'B.E. Computer Science — Achariya College of Engineering & Technology' },
                                { icon: '💼', label: 'Current Role', value: 'Cloud & DevOps Engineer @ Assurify Technologies' },
                                { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/sharan-b-devops', href: 'https://linkedin.com/in/sharan-b-devops' },
                                { icon: '🐙', label: 'GitHub', value: 'github.com/sharanboominathan', href: 'https://github.com/sharanboominathan' },
                            ].map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    whileHover={{ x: 10 }}
                                    className="glass p-4 rounded-lg flex items-center gap-4 transform transition-all duration-300"
                                >
                                    <div className="text-2xl">{info.icon}</div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{info.label}</div>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="text-accent-cyan font-medium text-sm hover:underline transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <div className="text-gray-800 font-medium text-sm">{info.value}</div>
                                        )}
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
