import React from 'react'

const pageProps = {
    id: 1,
    title: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design',
    progress: 75,
    status: 'Active',
    teamMembers: [
        { initials: 'JD', color: 'indigo' },
        { initials: 'SK', color: 'purple' },
        { initials: 'AL', color: 'green' },
        { initials: 'MJ', color: 'orange' },
        { initials: 'TC', color: 'pink' },
    ],
    tasks: 12,
    svg: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`,
}

const ProjectDetail = () => {
    return (
        <div className="p-8  min-h-screen">


            {/* Project Header */}
            <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <a href="/projects" className="hover:text-slate-900">Projects</a>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-slate-900 font-medium">Website Redesign</span>
                </div>

                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-1">Website Redesign</h1>
                            <p className="text-slate-600">Complete overhaul of the company website with modern design</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white">JD</div>
                            <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white">SK</div>
                            <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white">AL</div>
                            <div className="w-10 h-10 bg-slate-300 rounded-full border-2 border-white flex items-center justify-center text-sm font-semibold text-slate-600">+2</div>
                        </div>
                        <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition">
                            + Add Member
                        </button>
                        <button className="p-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        <span className="text-sm text-slate-700"><span className="font-semibold">12</span> tasks</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-slate-700"><span className="font-semibold">9</span> completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-slate-700">Due <span className="font-semibold">Feb 15, 2026</span></span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">Progress:</span>
                        <div className="w-32 bg-slate-200 rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full w-3/4"></div>
                        </div>
                        <span className="text-sm font-semibold text-indigo-600">75%</span>
                    </div>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="flex gap-4 overflow-x-auto pb-4">
                {/* To Do Column */}
                <div className="shrink-0 w-80">
                    <div className="bg-slate-100 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                                <h3 className="font-bold text-slate-900">To Do</h3>
                                <span className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full text-xs font-semibold">3</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Design new hero section</h4>
                                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">High</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Create mockups for the landing page hero with new branding</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">SK</div>
                                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">AL</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                        </svg>
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 2 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Update color palette</h4>
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">Med</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Refresh brand colors across all pages</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">AL</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                        </svg>
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 3 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Mobile responsiveness</h4>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">Low</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Ensure all pages work on mobile devices</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">JD</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                        </svg>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* In Progress Column */}
                <div className="flex-shrink-0 w-80">
                    <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <h3 className="font-bold text-slate-900">In Progress</h3>
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">2</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Implement navigation menu</h4>
                                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">High</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Build responsive navigation with dropdown menus</p>
                                <div className="mb-3">
                                    <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                                        <span>Progress</span>
                                        <span className="font-semibold">60%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                                        <div className="bg-blue-600 h-1.5 rounded-full w-3/5"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">JD</div>
                                        <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">MJ</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                        </svg>
                                        <span>7</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 2 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Footer redesign</h4>
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">Med</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Update footer with new links and social media</p>
                                <div className="mb-3">
                                    <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                                        <span>Progress</span>
                                        <span className="font-semibold">30%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                                        <div className="bg-blue-600 h-1.5 rounded-full w-3/10"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">SK</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>2 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* In Review Column */}
                <div className="shrink-0 w-80">
                    <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <h3 className="font-bold text-slate-900">In Review</h3>
                                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">4</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Homepage content</h4>
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">Med</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Review and approve new homepage copy</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">TC</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                        <span>Review</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 2 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Image optimization</h4>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">Low</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Compress and optimize all images for web</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">MJ</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>4/5</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 3 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">SEO optimization</h4>
                                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">High</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Add meta tags and improve page speed</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">JD</div>
                                        <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">MJ</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                        </svg>
                                        <span>12</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 4 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm">Accessibility audit</h4>
                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">Med</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Ensure WCAG 2.1 AA compliance</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">AL</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                        </svg>
                                        <span>8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Done Column */}
                <div className="flex-shrink-0 w-80">
                    <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <h3 className="font-bold text-slate-900">Done</h3>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">3</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200 hover:shadow-md transition cursor-pointer opacity-75">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm line-through">Typography system</h4>
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Define font families and sizes</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">AL</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-green-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Completed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 2 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200 hover:shadow-md transition cursor-pointer opacity-75">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm line-through">Logo redesign</h4>
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Create new logo variations</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">SK</div>
                                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">AL</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-green-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Completed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Task Card 3 */}
                            <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200 hover:shadow-md transition cursor-pointer opacity-75">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-semibold text-slate-900 text-sm line-through">Wireframes</h4>
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Create wireframes for all pages</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">SK</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-green-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
