import React from 'react'

const Teams = () => {
    return (
        <div className="p-8 min-h-screen">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Teams</h1>
                    <p className="text-slate-600">Manage your team members and their roles.</p>
                </div>
                <button className="px-3 py-2 text-sm bg-transparent border border-neutral-400 text-neutral-800 rounded-md font-semibold hover:border-stone-900 hover:bg-stone-900 hover:text-white transition flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Invite Members
                </button>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">18</h3>
                    <p className="text-sm text-slate-600">Total Members</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">14</h3>
                    <p className="text-sm text-slate-600">Active Now</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">6</h3>
                    <p className="text-sm text-slate-600">Departments</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">3</h3>
                    <p className="text-sm text-slate-600">Pending Invites</p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search members..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Developer</option>
                    <option>Designer</option>
                </select>

                <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>All Departments</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                </select>
            </div>

            {/* Team Members Table */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Member</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Department</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Projects</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {/* Member [id] */}
                        <tr className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">JD</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">John Doe</p>
                                        <p className="text-sm text-slate-600">john.doe@company.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Admin</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">Engineering</td>
                            <td className="px-6 py-4 text-sm text-slate-700">8 projects</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-sm text-slate-700">Active</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-600 hover:text-slate-900">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>

                        {/* Member 2 */}
                        <tr className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">SK</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Sarah Kim</p>
                                        <p className="text-sm text-slate-600">sarah.kim@company.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Manager</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">Design</td>
                            <td className="px-6 py-4 text-sm text-slate-700">5 projects</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-sm text-slate-700">Active</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-600 hover:text-slate-900">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>

                        {/* Member 3 */}
                        <tr className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">MJ</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Mike Johnson</p>
                                        <p className="text-sm text-slate-600">mike.j@company.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Developer</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">Engineering</td>
                            <td className="px-6 py-4 text-sm text-slate-700">6 projects</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-sm text-slate-700">Active</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-600 hover:text-slate-900">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>

                        {/* Member 4 */}
                        <tr className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">AL</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Anna Lee</p>
                                        <p className="text-sm text-slate-600">anna.lee@company.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">Designer</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">Design</td>
                            <td className="px-6 py-4 text-sm text-slate-700">4 projects</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                    <span className="text-sm text-slate-700">Away</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-600 hover:text-slate-900">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>

                        {/* Member 5 */}
                        <tr className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">TC</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Tom Chen</p>
                                        <p className="text-sm text-slate-600">tom.chen@company.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Developer</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">Engineering</td>
                            <td className="px-6 py-4 text-sm text-slate-700">7 projects</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-sm text-slate-700">Active</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-600 hover:text-slate-900">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>

                        {/* Member 6 */}
                        <tr className="hover:bg-slate-50 transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-white">DW</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">David Wong</p>
                                        <p className="text-sm text-slate-600">david.w@company.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Developer</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">Engineering</td>
                            <td className="px-6 py-4 text-sm text-slate-700">3 projects</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                    <span className="text-sm text-slate-700">Offline</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-slate-600 hover:text-slate-900">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pending Invitations */}
            <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Pending Invitations</h2>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">emma.wilson@company.com</p>
                                <p className="text-sm text-slate-600">Invited 2 days ago · Developer</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700">Revoke</button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">robert.brown@company.com</p>
                                <p className="text-sm text-slate-600">Invited 5 days ago · Designer</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700">Revoke</button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">lisa.martinez@company.com</p>
                                <p className="text-sm text-slate-600">Invited 1 week ago · Manager</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700">Revoke</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams
