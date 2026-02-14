"use client";

import { Mail, Globe, Download, Trash2, LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/database/supabase/auth";
import {fetchUserProfile, updateProfile} from "@/app/actions/profiles";
import { useUser } from "@/context/UserContext";

export default function AccountSettings() {
    const { user } = useUser()
    const userId = user?.id || ""
    const router = useRouter();

    const [email, setEmail] = useState("")
    const [newEmail, setNewEmail] = useState(email)

    useEffect(() => {
        const fetchUser = async () => {
            if (!user) return

            const profile = await fetchUserProfile(userId)
            if (profile) {
                const email = profile.email || ""

                setEmail(email)
                setNewEmail(email)
            }
        }
        fetchUser()
    }, [user]);

    return (
        <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Account Settings</h2>

                {/* Email Section */}
                <form
                    onSubmit={async (e) => {
                        e.preventDefault()
                        await updateProfile(user.id,{ email: newEmail })
                    }}
                    className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-slate-400" />
                        <h3 className="font-semibold text-slate-900">Email Address</h3>
                    </div>
                    <div className="flex gap-4 items-center max-w-lg ml-8">
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium transition">
                            Update
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 ml-8">
                        We'll send a verification email to your new address.
                    </p>
                </form>

                <hr className="my-8 border-slate-200" />

                {/* Language & Region */}
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Globe className="w-5 h-5 text-slate-400" />
                        <h3 className="font-semibold text-slate-900">Language & Region</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ml-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Language</label>
                            <select
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black">
                                <option>English (US)</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Timezone</label>
                            <select
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black">
                                <option>UTC (GMT+0:00)</option>
                                <option>EST (GMT-5:00)</option>
                                <option>PST (GMT-8:00)</option>
                                <option>CET (GMT+1:00)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-slate-200" />

                {/* Data Management */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <Download className="w-5 h-5 text-slate-400" />
                        <h3 className="font-semibold text-slate-900">Data Management</h3>
                    </div>
                    <div className="ml-8">
                        <p className="text-sm text-slate-600 mb-4">
                            Download all your workspace data, including tasks, projects, and activities in JSON
                            format.
                        </p>
                        <button
                            className="px-3 py-2 text-sm bg-transparent border border-neutral-400 text-neutral-800 rounded-md font-semibold hover:border-stone-900 hover:bg-stone-900 hover:text-white transition flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export My Data
                        </button>
                    </div>
                </div>
            </div>

            {/* Logout Section */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-slate-50 rounded-lg">
                            <LogOut className="w-6 h-6 text-slate-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1">Sign Out</h3>
                            <p className="text-sm text-slate-600 max-w-md">
                                Sign out of your account on this device. You can always sign back in later.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => signOut(userId, router)}
                        className="px-3 py-2 text-sm bg-transparent border border-neutral-400 text-neutral-800 rounded-md font-semibold hover:border-stone-900 hover:bg-stone-900 hover:text-white transition flex items-center gap-2">
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h2>
                <div className="flex items-center justify-between py-3">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-red-50 rounded-lg">
                            <Trash2 className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1">Delete Account</h3>
                            <p className="text-sm text-slate-600 max-w-md">
                                Once you delete your account, there is no going back. Please be certain.
                            </p>
                        </div>
                    </div>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
}
