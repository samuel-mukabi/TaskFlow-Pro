import React from 'react';
import {
    Github,
    Slack,
    Mail,
    Database,
    Cpu,
    ArrowUpRight,
    Search
} from 'lucide-react';

const IntegrationsPage = () => {
    const integrations = [
        {
            name: "GitHub",
            category: "Development",
            description: "Link pull requests and commits directly to tasks. Automatically move cards based on PR status.",
            icon: <Github className="w-8 h-8"/>,
            color: "bg-slate-900 text-white"
        },
        {
            name: "OpenAI",
            category: "AI & ML",
            description: "Generate task descriptions, summaries, and subtasks using GPT-4o directly within the editor.",
            icon: <Cpu className="w-8 h-8"/>,
            color: "bg-green-600 text-white"
        },
        {
            name: "Resend",
            category: "Communication",
            description: "Reliable transactional email notifications for task assignments, mentions, and password resets.",
            icon: <Mail className="w-8 h-8"/>,
            color: "bg-black text-white"
        },
        {
            name: "Supabase",
            category: "Infrastructure",
            description: "Deep integration with Supabase Storage for file attachments and Realtime for live updates.",
            icon: <Database className="w-8 h-8"/>,
            color: "bg-green-500 text-white"
        },
        {
            name: "Slack",
            category: "Communication",
            description: "Receive task notifications directly in your team's Slack channels. (Coming Soon)",
            icon: <Slack className="w-8 h-8"/>,
            color: "bg-purple-600 text-white"
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Header */}
            <section className="bg-white border-b border-slate-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">Connect your favorite tools</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        TaskFlow Pro plays nice with the stack you already use. Enhance your workflow with our native
                        integrations.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-8 max-w-md mx-auto relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400"/>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 sm:text-sm"
                            placeholder="Search integrations..."
                        />
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {integrations.map((tool, index) => (
                        <div key={index}
                             className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition cursor-pointer group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg ${tool.color}`}>
                                    {tool.icon}
                                </div>
                                <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 transition"/>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                            <span
                                className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full uppercase tracking-wide">
                {tool.category}
              </span>
                            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                                {tool.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* API Callout */}
            <section className="py-20 bg-slate-900 text-white mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Build your own integrations</h2>
                    <p className="text-slate-400 mb-8">
                        Need something custom? Our full REST API allows you to programmatically manage tasks, projects,
                        and users.
                    </p>
                    <button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">
                        View API Documentation
                    </button>
                </div>
            </section>

        </div>
    );
};

export default IntegrationsPage;