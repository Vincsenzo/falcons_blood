import battleImg from '../assets/battle.png';
import mapImg from '../assets/map.png';
import heroImg from '../assets/hero.png'; // Reusing hero for gallery

const Gallery = () => {
    const images = [
        { src: battleImg, caption: "Visceral Combat" },
        { src: mapImg, caption: "Strategic Depth" },
        { src: heroImg, caption: "Immersive World" },
    ];

    return (
        <section className="py-24 bg-falcon-grey relative">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="section-title">Glimpse of History</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-sm aspect-video cursor-pointer shadow-xl">
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-falcon-gold font-serif text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.caption}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
