import { Play, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero.png';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-falcon-dark"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <div className="mb-6 animate-fade-in-down">
                    <h2 className="text-xl md:text-2xl text-falcon-gold tracking-[0.5em] uppercase mb-2">Magyarok Krónikái</h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                        FALCON'S<br />BLOOD
                    </h1>
                </div>

                <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 animate-fade-in-up delay-200 font-light">
                    Relive the thousand-year history of the Hungarian nation. From the Conquest to the Revolution of '56.
                    <br />
                    <span className="text-falcon-gold italic mt-2 block">Honor. Sacrifice. Freedom.</span>
                </p>

                <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up delay-300">
                    <button className="btn-primary flex items-center gap-2 group">
                        Pre-order Now
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <button className="btn-secondary flex items-center gap-2 group">
                        <Play size={20} className="fill-current" />
                        Watch Trailer
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <ChevronDown size={32} />
            </div>
        </div>
    );
};

export default Hero;
