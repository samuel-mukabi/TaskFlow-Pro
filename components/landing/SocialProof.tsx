import { SOCIAL_PROOF_LOGOS } from "@/constants/landing";

const SocialProof = () => {
    return (
        <section className="py-10 border-y border-slate-100 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                    Trusted by modern engineering teams
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                    {SOCIAL_PROOF_LOGOS.map((logo) => (
                        <span key={logo.name} className="text-xl font-bold">{logo.name}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
