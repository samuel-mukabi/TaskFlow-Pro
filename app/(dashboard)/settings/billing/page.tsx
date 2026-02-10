"use client";

import { CreditCard, Check, Clock } from "lucide-react";

export default function BillingSettings() {
    return (
        <div className="space-y-6">
            {/* Current Plan Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Current Plan</h2>
                        <p className="text-sm text-slate-500">Manage your subscription and billing preferences.</p>
                    </div>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
                        Pro Plan
                    </span>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-900">$29.00 / month</span>
                        <span className="text-xs text-slate-500 italic">Renews on Oct 12, 2026</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mt-4">
                        <div className="bg-indigo-600 h-2 rounded-full w-[75%]"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">75% of your 100GB storage used</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">Unlimited Projects</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">Priority Support</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">Advanced Analytics</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">Custom Domain</span>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-200">
                    <button className="px-4 py-2 bg-transparent border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition">
                        Compare Plans
                    </button>
                    <button className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium transition">
                        Upgrade Plan
                    </button>
                </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Method</h2>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center border border-slate-200">
                            <span className="text-[10px] font-bold text-slate-400">VISA</span>
                        </div>
                        <div>
                            <p className="font-medium text-slate-900">Visa ending in 4242</p>
                            <p className="text-sm text-slate-500">Expiry 12/26</p>
                        </div>
                    </div>
                    <button className="text-sm text-indigo-600 font-semibold hover:underline">
                        Edit
                    </button>
                </div>
                <button className="mt-4 text-sm text-slate-600 flex items-center gap-2 hover:text-slate-900 transition">
                    <CreditCard className="w-4 h-4" />
                    Add new payment method
                </button>
            </div>

            {/* Billing History */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900">Billing History</h2>
                    <button className="text-sm text-slate-500 flex items-center gap-2 hover:text-slate-900 transition">
                        <Clock className="w-4 h-4" />
                        View all
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                                <th className="pb-3">Invoice</th>
                                <th className="pb-3">Date</th>
                                <th className="pb-3">Amount</th>
                                <th className="pb-3">Status</th>
                                <th className="pb-3 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <tr>
                                <td className="py-4 text-sm font-medium text-slate-900">Invoice #TF-2026-001</td>
                                <td className="py-4 text-sm text-slate-600">Oct 12, 2026</td>
                                <td className="py-4 text-sm text-slate-600">$29.00</td>
                                <td className="py-4">
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Paid</span>
                                </td>
                                <td className="py-4 text-right">
                                    <button className="text-indigo-600 hover:text-indigo-900 text-sm font-semibold">Download</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 text-sm font-medium text-slate-900">Invoice #TF-2026-002</td>
                                <td className="py-4 text-sm text-slate-600">Sep 12, 2026</td>
                                <td className="py-4 text-sm text-slate-600">$29.00</td>
                                <td className="py-4">
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Paid</span>
                                </td>
                                <td className="py-4 text-right">
                                    <button className="text-indigo-600 hover:text-indigo-900 text-sm font-semibold">Download</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
