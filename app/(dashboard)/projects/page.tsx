import React from 'react'
import Link from "next/link";
import {ProjectCardProps} from "@/types";

const Projects = () => {
    const ProjectCard = ({
                             id,
                             title,
                             description,
                             progress,
                             status,
                             teamMembers,
                             tasks,
                             svg,
                             projectColor
                         }: ProjectCardProps) => {
        return (
            <Link href={`/projects/${id}`} className="block">
                <div
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                        <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${status === 'Active' ? projectColor : status === 'Planning' ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                            {svg}
                        </div>
                        <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${status === 'Active' ? 'bg-green-100 text-green-700' : status === 'Planning' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                        {status}
                    </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{description}</p>

                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                            <span>Progress</span>
                            <span className="font-semibold">{progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${status === 'Active' ? projectColor : status === 'Planning' ? 'bg-yellow-600' : 'bg-gray-600'}`}
                                style={{width: `${progress}%`}}></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex -space-x-2">
                            {teamMembers.map((member, index) => (
                                <div key={index}
                                     className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${member.color}`}>
                                    {member.initials}
                                </div>
                            ))}
                            {teamMembers.length > 4 && (
                                <div
                                    className="w-8 h-8 bg-slate-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-600">
                                    +{teamMembers.length - 4}
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                            <span>{tasks} tasks</span>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }


    return (
        <div className="p-8 min-h-screen">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Projects</h1>
                    <p className="text-slate-600">Manage and track all your team projects in one place.</p>
                </div>
                <button
                    className="px-3 py-2 text-sm bg-transparent border border-neutral-400 text-neutral-800 rounded-md font-semibold hover:border-stone-900 hover:bg-stone-900 hover:text-white transition flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    New Project
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-4 mb-6 border-b border-slate-200">
                <button className="px-4 py-2 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600">
                    All Projects (24)
                </button>
                <button
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 border-b-2 border-transparent">
                    Active (18)
                </button>
                <button
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 border-b-2 border-transparent">
                    Archived (6)
                </button>
            </div>

            {/* Search and View Toggle */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-b focus:rounded-none focus:border-x-transparent focus:border-t-transparent focus:border-b-black"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                    </button>
                    <button className="p-2 border border-slate-300 rounded-lg bg-indigo-50 text-indigo-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Replace the hardcoded project cards below with dynamic rendering using the ProjectCard component and passing appropriate props for each project. */}
                <ProjectCard id={1}
                             svg={""}
                             projectColor={"bg-stone-500"}
                             title={"Website Design"}
                             description={"Complete overhaul of the company website with modern design and improved UX."}
                             progress={75}
                             status={"Active"}
                             teamMembers={[
                                 {initials: "JD", color: "bg-indigo-500"},
                                 {initials: "SK", color: "bg-purple-500"},
                                 {initials: "AL", color: "bg-green-500"},
                             ]}
                             tasks={12}/>


                <ProjectCard id={2}
                             svg={""}
                             projectColor={"bg-red-500"}
                             title={"Mobile App Development"}
                             description={"Native iOS and Android app for seamless mobile experience."}
                             progress={45}
                             status={"Active"}
                             teamMembers={[
                                 {initials: "TC", color: "bg-pink-500"},
                                 {initials: "MJ", color: "bg-orange-500"},
                                 {initials: "RK", color: "bg-blue-500"},
                             ]}
                             tasks={24}/>


                <ProjectCard id={3}
                             svg={""}
                             projectColor={"bg-purple-500"}
                             title={"Backend Services"}
                             description={"Scalable API infrastructure and microservices architecture."}
                             progress={90}
                             status={"Active"}
                             teamMembers={[
                                 {initials: "DW", color: "bg-pink-500"},
                                 {initials: "LM", color: "bg-orange-500"},
                             ]}
                             tasks={18}/>


                <ProjectCard id={4}
                             svg={""}
                             projectColor={"bg-yellow-500"}
                             title={"Marketing Campaign"}
                             description={"Q1 product launch campaign across all channels."}
                             progress={20}
                             status={"Planning"}
                             teamMembers={[
                                 {initials: "EM", color: "bg-rose-500"},
                                 {initials: "JB", color: "bg-amber-500"},
                             ]}
                             tasks={8}/>


                <ProjectCard id={5}
                             svg={""}
                             projectColor={"bg-blue-500"}
                             title={"Documentation Portal"}
                             description={"Comprehensive developer documentation and API reference"}
                             progress={60}
                             status={"Active"}
                             teamMembers={[
                                 {initials: "NH", color: "bg-sky-500"},
                                 {initials: "PG", color: "bg-violet-500"},
                             ]}
                             tasks={15}/>


                <ProjectCard id={6}
                             svg={""}
                             projectColor={"bg-green-500"}
                             title={"Q1 Planning"}
                             description={"Strategic planning and budget allocation for Q1 2026."}
                             progress={35}
                             status={"Active"}
                             teamMembers={[
                                 {initials: "SL", color: "bg-fuchsia-500"},
                                 {initials: "KW", color: "bg-emerald-500"},
                             ]}
                             tasks={10}/>
            </div>
        </div>
    )
}

export default Projects
