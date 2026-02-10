"use client";

import { Shield, Key, Smartphone } from "lucide-react";

export default function SecuritySettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Security Settings
                </h2>

                {/* Password Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Key className="w-5 h-5 text-slate-400" />
                        <h3 className="font-semibold text-slate-900">Change Password</h3>
                    </div>
                    <div className="space-y-4 max-w-md ml-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Current Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                New Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                            />
                        </div>
                        <div className="pt-2">
                            <button className="px-4 py-2 text-white rounded-lg text-sm font-medium bg-stone-900 transition">
                                Update Password
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-slate-200" />

                {/* 2FA Section */}
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-indigo-50 rounded-lg">
                                <Smartphone className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    Two-Factor Authentication
                                </h3>
                                <p className="text-sm text-slate-600 max-w-md">
                                    Add an extra layer of security to your account. We'll verify
                                    your identity with a code sent to your mobile device.
                                </p>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-transparent border border-indigo-600 text-indigo-700 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition">
                            Enable 2FA
                        </button>
                    </div>
                </div>
            </div>

            {/* Active Sessions */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Active Sessions
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">
                                    MacBook Pro • Seattle, USA
                                </p>
                                <p className="text-sm text-slate-500">
                                    Chrome • Active now
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                            Current
                        </span>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                                <Shield className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">
                                    iPhone 13 • Portland, USA
                                </p>
                                <p className="text-sm text-slate-500">
                                    Safari • 2 hours ago
                                </p>
                            </div>
                        </div>
                        <button className="text-sm text-red-600 hover:underline">
                            Revoke
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
