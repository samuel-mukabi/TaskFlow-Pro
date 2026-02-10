import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Now with AI-Powered Task Summaries
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
                Manage projects at the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500">
                    speed of thought.
                </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                The real-time collaboration platform where teams build faster.
                Featuring Kanban boards, live presence and AI assistance—powered by the security of Supabase.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <button
                    className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-ms font-bold hover:bg-indigo-700 transition shadow-xl text-lg">
                    Start for free <ArrowRight className="w-5 h-5" />
                </button>
                <button
                    className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-3 py-2 rounded-md font-bold hover:bg-slate-50 transition text-lg">
                    View Live Demo
                </button>
            </div>

            {/* Hero Image / Dashboard Mockup */}
            <div
                className="relative rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-slate-50 aspect-video mx-auto max-w-5xl group">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">

                </div>
                {/* Overlay Gradient */}
                <div
                    className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Hero;
