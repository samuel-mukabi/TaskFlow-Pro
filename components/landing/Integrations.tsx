import { INTEGRATION_FEATURES } from "@/constants/landing";

const Integrations = () => {
    return (
        <section id="integrations" className="py-20 bg-slate-900 text-white">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div
                        className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-sm font-medium mb-4">
                        Developer First
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Integrations & Tech Stack</h2>
                    <p className="text-slate-400 text-lg mb-8">
                        We connect with the tools you already use. Link GitHub commits directly to tasks to
                        track code deployment status.
                    </p>

                    <ul className="space-y-4">
                        {INTEGRATION_FEATURES.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <item.icon className="text-white" />
                                <span><strong className={item.highlightColor}>{item.highlight}</strong> {item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 bg-slate-800 rounded-2xl p-2 border border-slate-700 shadow-2xl">
                    {/* Placeholder for architecture or integration visual */}
                    <div
                        className="bg-slate-900 rounded-xl h-64 flex items-center justify-center text-slate-500">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
