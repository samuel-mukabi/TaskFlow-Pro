'use client'

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import {useUserProfile} from "@/hooks/useUserProfile";
import {Project} from "@/types";
import {fetchProjects} from "@/app/actions/projects.ts";


const ProjectCard = ({id, title, description, progress, status, project_members, tasks_count, icon, color}: Project) => {
    return (
        <Link href={`/projects/${id}`} className="block">
            <div
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                    <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center p-2"
                        style={{backgroundColor: color}}>
                        {icon && icon.startsWith('<svg') ? (
                            <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:text-white fill-white"
                                 dangerouslySetInnerHTML={{__html: icon}}/>
                        ) : (
                            <span className="text-xl font-bold text-white">{icon || title[0]}</span>
                        )}
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

const Projects = () => {
    const [activeTab, setActiveTab] = useState("All Projects");
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const {profile, loading: profileLoading} = useUserProfile();

    useEffect(() => {
        const getProjects = async () => {
            if (profileLoading) return;

            if (!profile?.workspace_id) {
                setProjects([]);
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            try {
                const projectsData = await fetchProjects(profile.workspace_id);
                setProjects(projectsData || []);
            } catch (error) {
                console.error("Error in getProjects:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getProjects();
    }, [profile, profileLoading]);

    const tabs = [
        {name: 'All Projects'},
        {name: 'Active'},
        {name: 'Planning',},
        {name: 'Archived',},
    ]

    const filteredProjects = projects
        .filter(project =>
            activeTab === 'All Projects' || project.status === activeTab
        )
        .filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
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



            <div className="flex items-center gap-4 mb-6 border-b border-slate-200">

            {/* Filter Tabs */}
                {tabs.map((tab, index) => (
                    <button
                        onClick={() => setActiveTab(tab.name)}
                        key={index}
                        className={`px-4 py-2 text-sm font-medium ${activeTab === tab.name ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-600 hover:text-slate-900 border-b-2 border-transparent'}`}>
                        {tab.name}
                    </button>
                ))}
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                {isLoading ? (
                    <div className="col-span-full flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            progress={project.progress}
                            status={project.status}
                            project_members={project.project_members}
                            tasks_count={project.tasks_count}
                            icon={project.icon}
                            color={project.color}
                            created_by={project.created_by}
                            created_at={project.created_at}
                            updated_at={project.updated_at} start_date={""} end_date={""}                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-600">No projects found for this tab.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
