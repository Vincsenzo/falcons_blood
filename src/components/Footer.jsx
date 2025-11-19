import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">FALCON'S BLOOD</h2>
                        <p className="text-sm leading-relaxed max-w-md mb-6">
                            A historical journey through the ages of Hungary. Developed with passion and precision to honor the legacy of our ancestors.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-falcon-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-falcon-gold transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-falcon-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-falcon-gold transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Game</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Media</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; 2024 Falcon's Blood Game Studio. All rights reserved.</p>
                    <div className="flex gap-6 opacity-50">
                        <span>STEAM</span>
                        <span>PLAYSTATION</span>
                        <span>XBOX</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
