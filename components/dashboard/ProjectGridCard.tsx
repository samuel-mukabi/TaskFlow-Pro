'use client'

import React from 'react'
import Link from "next/link";
import { Project } from "@/types";

const ProjectGridCard = ({ id, title, description, progress, status, project_members, tasks_count, color }: Project) => {
    return (
        <Link href={`/projects/${id}`} className="block">
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer h-80 flex flex-col justify-between">
                <div className="flex items-start justify-end mb-4">
                    <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${status === 'Active' ? 'bg-green-100 text-green-700' : status === 'Planning' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                        {status}
                    </span>
                </div>
                <div className="h-40">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 h-15 line-clamp-2">{title}</h3>
                    <p className="text-sm text-slate-600 mb-4 h-25">{description}</p>
                </div>

                <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                        <span>Progress</span>
                        <span className="font-semibold">{progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                            className="h-2 rounded-full transition-all duration-500"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: color
                            }}></div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex -space-x-2">
                        {project_members && project_members.slice(0, 3).map((member) => (
                            <img
                                key={member.id}
                                src={member.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.full_name)}`}
                                alt={member.full_name}
                                className="w-6 h-6 rounded-full border-2 border-white"
                            />
                        ))}
                        {project_members && project_members.length > 3 && (
                            <span
                                className="w-6 h-6 rounded-full bg-slate-300 text-xs text-slate-600 flex items-center justify-center border-2 border-white">
                                +{project_members.length - 3}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        <span>{tasks_count} tasks</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectGridCard
