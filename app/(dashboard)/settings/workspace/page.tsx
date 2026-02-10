"use client";

import { Camera } from "lucide-react";

export default function WorkspaceSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Workspace Settings
                </h2>

                {/* Workspace Logo */}
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-200">
                    <div className="w-20 h-20 bg-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-200">
                        <Camera className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Workspace Logo</h3>
                        <p className="text-sm text-slate-500 mb-3">
                            This logo will appear on your dashboard and notifications.
                        </p>
                        <div className="flex items-center gap-3">
                            <button className="px-3 py-2 text-sm bg-stone-900 text-white rounded-md font-medium hover:bg-stone-800 transition">
                                Upload Logo
                            </button>
                            <button className="px-3 py-2 text-sm bg-transparent border border-slate-300 text-slate-700 rounded-md font-medium hover:bg-slate-50 transition">
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
                            defaultValue="My TaskFlow Team"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Workspace URL
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                                taskflow.pro/
                            </span>
                            <input
                                type="text"
                                defaultValue="my-team"
                                className="flex-1 px-4 py-2 border border-slate-300 rounded-r-lg focus:outline-none focus:border-black"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-200">
                    <button className="px-3 py-2 text-white rounded-lg text-sm font-medium bg-stone-900 transition">
                        Save Changes
                    </button>
                </div>
            </div>

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
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                        Delete Workspace
                    </button>
                </div>
            </div>
        </div>
    );
}
