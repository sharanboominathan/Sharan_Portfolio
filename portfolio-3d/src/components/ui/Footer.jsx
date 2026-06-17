export default function Footer() {
    return (
        <footer className="bg-dark-secondary py-8 border-t border-dark-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-center md:text-left">
                        Designed & Built by{' '}
                        <a href="#home" className="text-accent-cyan hover:text-accent-blue transition-colors font-semibold">
                            Sharan B
                        </a>
                    </p>
                    <p className="text-gray-500">© 2026 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
