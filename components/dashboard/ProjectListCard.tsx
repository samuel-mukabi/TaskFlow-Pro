'use client'

import React from 'react'
import Link from "next/link";
import { Project } from "@/types";

const ProjectListCard = ({ id, title, description, progress, status, project_members, tasks_count, color }: Project) => {
    return (
        <Link href={`/projects/${id}`} className="block">
            <div className="bg-white border border-stone-500 rounded-xl px-4 py-8 hover:shadow-md transition cursor-pointer flex items-center gap-6">
                {/* Status Column */}
                <div className="shrink-0 w-18">
                    <span
                        className={`inline-block px-2 py-1 text-[10px] font-semibold rounded-full text-center w-full ${status === 'Active' ? 'bg-green-100 text-green-700' : status === 'Planning' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                        {status}
                    </span>
                </div>

                {/* Title and Description Column */}
                <div className="grow min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 truncate">{title}</h3>
                    <p className="text-sm text-slate-500 truncate">{description}</p>
                </div>

                {/* Progress Column */}
                <div className="shrink-0 w-48">
                    <div className="flex items-center gap-3">
                        <div className="grow bg-slate-200 rounded-full h-1.5">
                            <div
                                className="h-1.5 rounded-full transition-all duration-500"
                                style={{
                                    width: `${progress}%`,
                                    backgroundColor: color
                                }}></div>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-600 w-8">{progress}%</span>
                    </div>
                </div>

                {/* Members Column */}
                <div className="shrink-0 flex -space-x-1.5">
                    {project_members && project_members.slice(0, 3).map((member) => (
                        <img
                            key={member.id}
                            src={member.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.full_name)}`}
                            alt={member.full_name}
                            className="w-5 h-5 rounded-full border-2 border-white"
                        />
                    ))}
                    {project_members && project_members.length > 3 && (
                        <span
                            className="w-5 h-5 rounded-full bg-slate-200 text-[10px] text-slate-600 flex items-center justify-center border-2 border-white">
                            +{project_members.length - 3}
                        </span>
                    )}
                </div>

                {/* Tasks Column */}
                <div className="shrink-0 w-24 flex items-center gap-1.5 text-xs text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    <span>{tasks_count} tasks</span>
                </div>
            </div>
        </Link>
    )
}

export default ProjectListCard
