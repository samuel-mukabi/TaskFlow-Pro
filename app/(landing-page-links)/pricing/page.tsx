"use client"

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="min-h-screen bg-white pt-18">

            {/* Header */}
            <section className="py-16 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Simple, transparent pricing</h1>
                <p className="text-xl text-slate-600 mb-8">
                    Start for free, upgrade as you grow.
                </p>

                {/* Toggle Switch */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-indigo-600"
                    >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                    <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly <span className="text-indigo-600 text-xs ml-1 font-bold">(Save 20%)</span>
          </span>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Free Tier */}
                    <div className="border border-slate-200 rounded-2xl p-8 flex flex-col bg-white">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Starter</h3>
                        <p className="text-slate-500 text-sm mb-6">Perfect for individuals and hobby projects.</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500">/mo</span>
                        </div>
                        <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-lg transition mb-8">
                            Get Started
                        </button>
                        <ul className="space-y-4 flex-1">
                            {['Up to 3 Projects', 'Unlimited Tasks', 'Basic Kanban Board', '50MB Storage', 'Community Support'].map((feat) => (
                                <li key={feat} className="flex items-center text-sm text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pro Tier (Highlighted) */}
                    <div className="border-2 border-indigo-600 rounded-2xl p-8 flex flex-col bg-slate-50 relative shadow-xl">
                        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                            Most Popular
                        </div>
                        <h3 className="text-lg font-semibold text-indigo-600 mb-2">Pro</h3>
                        <p className="text-slate-500 text-sm mb-6">For growing teams that need power.</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">${isAnnual ? '12' : '15'}</span>
                            <span className="text-slate-500">/user/mo</span>
                        </div>
                        <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition mb-8 shadow-lg shadow-indigo-200">
                            Start Free Trial
                        </button>
                        <ul className="space-y-4 flex-1">
                            {[
                                'Unlimited Projects',
                                'AI Assistant (GPT-4)',
                                'GitHub Integration',
                                '10GB Storage',
                                'Advanced Analytics',
                                'Priority Support'
                            ].map((feat) => (
                                <li key={feat} className="flex items-center text-sm text-slate-700 font-medium">
                                    <Check className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="border border-slate-200 rounded-2xl p-8 flex flex-col bg-white">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise</h3>
                        <p className="text-slate-500 text-sm mb-6">Custom security and control.</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">Custom</span>
                        </div>
                        <button className="w-full py-3 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-medium rounded-lg transition mb-8">
                            Contact Sales
                        </button>
                        <ul className="space-y-4 flex-1">
                            {[
                                'SSO (SAML/Okta)',
                                'Dedicated Success Manager',
                                'Custom Contracts',
                                'Unlimited Storage',
                                'Audit Logs',
                                '99.9% Uptime SLA'
                            ].map((feat) => (
                                <li key={feat} className="flex items-center text-sm text-slate-600">
                                    <Check className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-slate-50 py-20 border-t border-slate-100">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold text-lg mb-2">Can I switch plans later?</h4>
                            <p className="text-slate-600">Yes, you can upgrade or downgrade at any time. If you upgrade, the prorated amount will be charged immediately.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">What happens to my data if I cancel?</h4>
                            <p className="text-slate-600">We keep your data for 30 days after cancellation in case you change your mind. After that, it is permanently deleted.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">Is there a discount for non-profits?</h4>
                            <p className="text-slate-600">Yes! We offer a 50% discount for registered non-profit organizations. Contact our sales team for details.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PricingPage;