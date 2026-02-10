import React from 'react';
import {
    Zap, Layout, Cpu,
    CheckCircle2, MessageSquare
} from 'lucide-react';

const FeaturesPage = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="text-4xl md:text-5xl font-extrabold mb-6">
                        <h1 className=" text-slate-900">Powerful tools for</h1>
                        <h1 className="text-indigo-600">modern workflows.</h1>
                    </div>
                    <p className="text-xl text-slate-600">
                        From planning to shipping, TaskFlow Pro provides the real-time infrastructure your team needs to stay aligned and move fast.
                    </p>
                </div>
            </section>

            {/* Feature Block [id]: Real-time Collaboration */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Zap className="text-blue-600 w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Real-time Synchronization</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Stop refreshing your browser. TaskFlow Pro uses Supabase Realtime to push updates instantly.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold">Live Presence</h4>
                                    <p className="text-sm text-slate-500">See who is viewing a task and typing in real-time.</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
                                <div>
                                    <h4 className="font-bold">Instant State Updates</h4>
                                    <p className="text-sm text-slate-500">Drag a card, and it moves on everyone's screen instantly.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 bg-slate-100 rounded-2xl aspect-video flex items-center justify-center border border-slate-200 shadow-lg">
                        {/* Placeholder for real-time collaboration GIF/Image */}
                        <span className="text-slate-400 font-medium">[Image: Multiple cursors moving on a Kanban board]</span>
                    </div>
                </div>
            </section>

            {/* Feature Block 2: Project Management */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <Layout className="text-purple-600 w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Flexible Project Views</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Visualize your work your way. Switch between Kanban boards, Lists, and Calendar views seamlessly.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-purple-500 w-6 h-6 shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Kanban Boards</h4>
                                        <p className="text-sm text-slate-500">Drag-and-drop tasks through custom workflow stages.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-purple-500 w-6 h-6 shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Smart Filters</h4>
                                        <p className="text-sm text-slate-500">Filter by assignee, priority, or tags with full-text search.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-white rounded-2xl aspect-video flex items-center justify-center border border-slate-200 shadow-lg">
                            <span className="text-slate-400 font-medium">[Image: Kanban Board with filters active]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Block 3: AI & Automation */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                            <Cpu className="text-pink-600 w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">AI-Powered Assistant</h2>
                        <p className="text-lg text-slate-600 mb-6">
                            Let AI handle the busy work. Integrated directly into the task editor.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" /> Auto-Summarization
                                </h4>
                                <p className="text-sm text-slate-600 mt-1">Catch up on long comment threads with one-click AI summaries.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                    <Zap className="w-4 h-4" /> Task Generation
                                </h4>
                                <p className="text-sm text-slate-600 mt-1">Describe a feature, and AI breaks it down into sub-tasks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl aspect-video flex items-center justify-center border border-slate-700 shadow-2xl text-white">
                        <span className="text-slate-400 font-medium">[Image: AI Chat interface generating tasks]</span>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FeaturesPage;