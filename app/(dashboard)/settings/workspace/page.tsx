"use client";

import { Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createWorkspace, fetchWorkspaceProfile, updateWorkspace } from "@/app/actions/workspace.ts";
import { useUser } from "@/context/UserContext.tsx";


export default function WorkspaceSettings() {
    const [newName, setNewName] = useState("")
    const [newLogoUrl, setNewLogoUrl] = useState<string | null>(null)


    const [isSaving, setIsSaving] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    const { user } = useUser();
    const userId = user?.id || ""

    const theWorkspaceUrl = newName.split(" ").join("-").toLowerCase()

    useEffect(() => {
        const fetchWorkspace = async () => {
            if (!user) return
            const profile = await fetchWorkspaceProfile(userId)
            if (!profile) return null

            if (profile) {
                const name = profile.name || ""
                const logoUrl = profile.logo || ""

                setNewName(name)
                setNewLogoUrl(logoUrl)
            }
        }
        fetchWorkspace()
    }, [user, userId]);



    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage(null);
        }, 3000);

        return () => clearTimeout(timer);
    }, [message]);


    const handleSave = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setIsSaving(true)
        setMessage(null)

        try {
            const result = await updateWorkspace(userId, { name: newName, logo: newLogoUrl, url: theWorkspaceUrl })

            if (result) {
                setMessage({ type: 'success', text: 'Workspace updated successfully!' })
            } else {
                const created = await createWorkspace(userId, { name: newName, logo: newLogoUrl, url: theWorkspaceUrl })

                if (created) {
                    setMessage({ type: 'success', text: 'Workspace created successfully!' })
                } else {
                    setMessage({ type: 'error', text: 'Failed to save workspace.' })
                }
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'An unexpected error occurred.' })
            console.error(error)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="space-y-6">
            <form
                onSubmit={handleSave}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Workspace Settings
                </h2>

                {message && (
                    <div
                        className={`mb-6 text-sm font-medium ${message.type === 'success' ? ' text-green-700' : 'text-red-700'
                            }`}>
                        {message.text}
                    </div>
                )}

                {/* Workspace Logo */}
                <div
                    className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-200">
                    <div
                        className="w-20 h-20 bg-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-200">
                        {!newLogoUrl ? <Camera className="w-8 h-8 text-indigo-400" /> :
                            <img src={newLogoUrl} alt="Workspace Logo"
                                className="w-full h-full object-cover rounded-lg" />}
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Workspace Logo</h3>
                        <p className="text-sm text-slate-500 mb-3">
                            This logo will appear on your dashboard and notifications.
                        </p>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="px-3 py-2 text-sm bg-stone-900 text-white rounded-md font-medium hover:bg-stone-800 transition">
                                Upload Logo
                            </button>
                            <button
                                type="button"
                                onClick={() => setNewLogoUrl(null)}
                                className="px-3 py-2 text-sm bg-transparent border border-slate-300 text-slate-700 rounded-md font-medium hover:bg-slate-50 transition">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Workspace Name
                        </label>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Workspace URL
                        </label>
                        <div className="flex">
                            <span
                                className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                                taskflow.pro/
                            </span>
                            <input
                                type="text"
                                value={theWorkspaceUrl}
                                disabled={true}
                                className="flex-1 px-4 py-2 border border-slate-300 rounded-r-lg focus:outline-none focus:border-black cursor-not-allowed"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-200">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="px-3 py-2 text-white rounded-lg text-sm font-medium bg-stone-900 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </form>


            {/* Danger Zone */}
            <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h2>
                <div className="flex items-center justify-between py-3">
                    <div>
                        <h3 className="font-semibold text-slate-900">Delete Workspace</h3>
                        <p className="text-sm text-slate-600">
                            Permanently delete this workspace and all its data
                        </p>
                    </div>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                        Delete Workspace
                    </button>
                </div>
            </div>
        </div>
    );
}
