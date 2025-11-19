import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, recommended = false }) => (
    <div className={`relative p-8 rounded-sm border transition-all duration-300 flex flex-col ${recommended
            ? 'bg-falcon-red/10 border-falcon-gold scale-105 shadow-[0_0_30px_rgba(212,175,55,0.15)] z-10'
            : 'bg-falcon-grey/50 border-white/10 hover:border-white/30'
        }`}>
        {recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-falcon-gold text-black font-bold px-4 py-1 text-sm uppercase tracking-wider rounded-full">
                Most Popular
            </div>
        )}

        <h3 className={`text-2xl font-serif font-bold mb-2 ${recommended ? 'text-falcon-gold' : 'text-white'}`}>
            {title}
        </h3>
        <div className="mb-8">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-400">.99</span>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check size={18} className="text-falcon-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-3 px-6 font-bold uppercase tracking-wider transition-colors duration-300 ${recommended
                ? 'bg-falcon-gold text-black hover:bg-white'
                : 'bg-transparent border border-white/20 hover:bg-white/10 text-white'
            }`}>
            Pre-order
        </button>
    </div>
);

const Pricing = () => {
    return (
        <section className="py-24 px-4 bg-falcon-dark">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title">Join the Chronicle</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                    <PricingCard
                        title="Standard Edition"
                        price="39"
                        features={[
                            "Base Game",
                            "Digital Manual",
                            "Pre-order Bonus: Honfoglalás Skin Pack"
                        ]}
                    />
                    <PricingCard
                        title="Deluxe Edition"
                        price="54"
                        recommended={true}
                        features={[
                            "Base Game",
                            "Season Pass (3 DLCs)",
                            "Digital Soundtrack",
                            "Digital Artbook",
                            "Exclusive In-game Mount",
                            "3 Days Early Access"
                        ]}
                    />
                    <PricingCard
                        title="Collector's Edition"
                        price="89"
                        features={[
                            "Everything in Deluxe",
                            "Physical Map of Carpathian Basin",
                            "Falcon Statuette (Digital Replica)",
                            "Behind the Scenes Documentary",
                            "Developer Commentary Mode",
                            "Name in Credits"
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
