"use client"

import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Features from "@/components/landing/Features";
import Integrations from "@/components/landing/Integrations";
import CTA from "@/components/landing/CTA";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const LandingPage = () => {

    return (
        <>
            <Navbar fontClass={montserrat.className} />
            <div className="min-h-screen bg-white font-sans text-slate-900">
                <Hero />
                <SocialProof />
                <Features />
                <Integrations />
                <CTA />
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;