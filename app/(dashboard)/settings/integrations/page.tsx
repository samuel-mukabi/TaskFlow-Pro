"use client";

import { Search, ExternalLink } from "lucide-react";

const integrations = [
    { name: "Slack", description: "Get notifications about tasks in your Slack channels.", category: "Communication", icon: "💬", status: "Connected" },
    { name: "GitHub", description: "Sync tasks with GitHub issues and pull requests.", category: "Development", icon: "🐙", status: "Not Connected" },
    { name: "Google Calendar", description: "Keep your task deadlines in sync with your calendar.", category: "Productivity", icon: "📅", status: "Connected" },
    { name: "Discord", description: "Broadcasting task updates to Discord webhooks.", category: "Communication", icon: "👾", status: "Not Connected" },
    { name: "Trello", description: "Import and export boards smoothly between apps.", category: "Management", icon: "📋", status: "Not Connected" },
    { name: "Zoom", description: "Easily schedule meetings from within your tasks.", category: "Video", icon: "📹", status: "Not Connected" },
];

export default function IntegrationsSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Integrations</h2>
                        <p className="text-sm text-slate-500">Connect your favorite tools to supercharge your workflow.</p>
                    </div>
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search apps..."
                            className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-black w-full sm:w-64"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {integrations.map((app) => (
                        <div key={app.name} className="border border-slate-200 rounded-xl p-4 hover:border-indigo-300 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-xl">
                                    {app.icon}
                                </div>
                                {app.status === "Connected" ? (
                                    <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">
                                        Connected
                                    </span>
                                ) : (
                                    <button className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition">
                                        Connect
                                    </button>
                                )}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                {app.name}
                                <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-slate-500 opacity-0 group-hover:opacity-100 transition" />
                            </h3>
                            <p className="text-sm text-slate-500 mb-4 h-10 line-clamp-2">
                                {app.description}
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{app.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-indigo-600 rounded-xl p-6 text-white overflow-hidden relative">
                <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2">Build your own integration?</h3>
                    <p className="text-indigo-100 text-sm mb-4 max-w-sm">
                        Access our developer API to create custom workflows for your team.
                    </p>
                    <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-50 transition">
                        Explore Documentation
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full -mr-8 -mt-8 opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-400 rounded-full mr-12 -mb-8 opacity-20"></div>
            </div>
        </div>
    );
}
