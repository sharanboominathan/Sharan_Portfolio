import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Scene3D from '../3D/Scene3D';

const roles = [
    'Cloud/DevOps Engineer',
    'Full-Stack Developer',
    'Azure Specialist',
    'Kubernetes Expert',
    'Software Developer',
    'Vibe Coder 🎵',
    'CI/CD Automation Engineer',
    'Infrastructure Developer',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <Scene3D />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg z-10"></div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-accent-cyan text-lg md:text-xl mb-4 font-light">
                        Hi, my name is
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                        <span className="gradient-text">Sharan B</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-16 md:h-20">
                        <span className="text-white">{displayText}</span>
                        <span className="animate-pulse text-accent-cyan">|</span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Cloud/DevOps Engineer & Full-Stack Developer specializing in Azure and AWS cloud platforms,
                        Kubernetes orchestration, CI/CD automation, and scalable web application development.
                        A passionate "vibe coder" who builds robust, automated solutions and delivers production-ready
                        applications that drive efficiency and reliability.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-accent-cyan text-dark-bg font-semibold rounded-lg hover:bg-accent-blue transition-all duration-300 transform hover:scale-105 glow-hover"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan hover:text-dark-bg transition-all duration-300 transform hover:scale-105"
                        >
                            View My Work
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
