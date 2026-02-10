import { FEATURES } from "@/constants/landing";

const Features = () => {
    return (
        <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Everything you need to ship
                    faster</h2>
                <p className="mt-4 text-lg text-slate-600">Built for speed, reliability, and scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURES.map((feature) => (
                    <div
                        key={feature.title}
                        className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition duration-300">
                        <div className={`w-12 h-12 ${feature.bgClass} rounded-xl flex items-center justify-center mb-6`}>
                            <feature.icon className={`${feature.colorClass} w-6 h-6`} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-slate-600">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
