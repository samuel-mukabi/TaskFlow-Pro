'use client'

import React, { useEffect, useState } from 'react'
import { useUser } from "@/context/UserContext";
import {fetchUserProfile, updateProfile} from "@/app/actions/profiles";

const Settings = () => {
    const { user } = useUser()
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [jobTitle, setJobTitle] = useState<string>("")
    const [newFirstName, setNewFirstName] = useState<string>("")
    const [newLastName, setNewLastName] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [avatar, setAvatar] = useState<string | null>(null)

    useEffect(() => {
        if (!user) return
        const fetchProfile = async () => {
            if (!user) return

            const profile = await fetchUserProfile(user.id)
            if (profile) {
                const loadedFullName = profile.full_name || ""
                const first = loadedFullName.split(' ')[0] || ""
                const last = loadedFullName.split(' ')[1] || ""

                setFullName(loadedFullName)
                setNewFirstName(first)
                setNewLastName(last)
                setEmail(profile.email || "")
                setJobTitle(profile.job_title || "")
                setBio(profile.bio || "")
                setAvatar(profile.avatar_url || null)
            }
        }

        fetchProfile()
    }, [user])

    const initials = `${newFirstName[0] || ''}${newLastName[0] || ''}`.toUpperCase()


    return (
        <div className="space-y-6">
            {/* Profile Section */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Profile Information</h2>

                {/* Avatar Upload */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-200">
                    {avatar ? <img src={avatar} alt="Avatar" className="w-20 h-20 rounded-full object-cover" />
                        :
                        <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">{initials}</span>
                        </div>
                    }
                    <div className="flex items-center gap-6">
                        <button
                            className="px-3 py-2 text-sm bg-transparent border border-neutral-400 text-neutral-800 rounded-md font-semibold hover:border-stone-900 hover:bg-stone-900 hover:text-white transition flex items-center gap-2">
                            Change Avatar
                        </button>
                        <button onClick={() => setAvatar(null)}
                            className="px-3 py-2 text-white rounded-lg text-sm font-medium bg-stone-900 transition">
                            Remove
                        </button>
                    </div>
                </div>

                {/* Form Fields */}
                <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                        e.preventDefault()
                        setLoading(true)

                        const finalFullName = `${newFirstName} ${newLastName}`.trim()
                        await updateProfile(
                                user.id,
                            {
                                full_name: finalFullName,
                                avatar_url: avatar,
                                email: email,
                                job_title: jobTitle,
                                bio: bio,
                        })
                        setLoading(false)
                    }}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                            <input
                                type="text"
                                value={newFirstName}
                                onChange={(e) => setNewFirstName(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                value={newLastName}
                                onChange={(e) => setNewLastName(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title</label>
                        <input
                            type="text"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Bio</label>
                        <textarea
                            rows={4}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                            placeholder="Tell us a bit about yourself..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Time Zone</label>
                        <select
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black">
                            <option>UTC (GMT+0:00)</option>
                            <option>EST (GMT-5:00)</option>
                            <option>PST (GMT-8:00)</option>
                            <option>CET (GMT+1:00)</option>
                            <option>JST (GMT+9:00)</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-200">
                        <button
                            type="submit"
                            className="px-3 py-2 text-white rounded-lg text-sm font-medium bg-stone-900 transition">
                            {!loading ? "Save Changes" : "Saving..."}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings
