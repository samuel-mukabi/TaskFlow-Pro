
const CTA = () => {
    return (
        <section className="py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to streamline your workflow?</h2>
                <p className="text-xl text-slate-600 mb-10">
                    Join thousands of teams who have switched to TaskFlow Pro for a faster, calmer work environment.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mx-4">
                    <button
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md font-bold text-lg hover:bg-indigo-700 transition">
                        Get Started for Free
                    </button>
                    <button
                        className="bg-white text-slate-900 border border-slate-200 px-4 py-2 rounded-md font-bold text-lg hover:bg-slate-50 transition">
                        Read the Docs
                    </button>
                </div>
                <p className="mt-6 text-sm text-slate-500">
                    No credit card required · Free 14-day trial for Pro features
                </p>
            </div>
        </section>
    );
};

export default CTA;
