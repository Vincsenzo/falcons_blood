import { Sword, Scroll, Crown } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card flex flex-col items-center text-center p-8 group hover:-translate-y-2 transition-transform duration-300">
        <div className="mb-6 p-4 rounded-full bg-falcon-red/10 text-falcon-red group-hover:bg-falcon-red group-hover:text-white transition-colors duration-300">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-falcon-gold">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const About = () => {
    return (
        <section className="py-24 px-4 bg-falcon-dark relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-falcon-gold/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title">A Nation's Legacy</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                        <span className="text-falcon-gold font-bold">Magyarok Krónikái (Chronicles of Hungarians)</span> is a historical strategy-action game developed by Hungarian historians and artists. Experience the turbulent and heroic history of Hungary, making strategic decisions that will shape the fate of the Carpathian Basin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Sword}
                        title="Epic Battles"
                        description="Lead your armies in legendary conflicts. From the arrows of the conquering tribes to the street fights of 1956. Master the art of war across centuries."
                    />
                    <FeatureCard
                        icon={Scroll}
                        title="Historical Accuracy"
                        description="Developed in collaboration with historians and linguists. Every costume, weapon, and building is authentically recreated to preserve our heritage."
                    />
                    <FeatureCard
                        icon={Crown}
                        title="Forge Your Destiny"
                        description="Make critical diplomatic and economic decisions. Will you ally with the West or the East? Your choices echo through the ages."
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
