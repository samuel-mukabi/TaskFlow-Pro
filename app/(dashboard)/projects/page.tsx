'use client'

import React, { useEffect, useState } from 'react'
import { useUserProfile } from "@/hooks/useUserProfile";
import { Project } from "@/types";
import { fetchProjects } from "@/app/actions/projects.ts";
import { Grid, List } from "lucide-react";
import ProjectGridCard from "@/components/dashboard/ProjectGridCard.tsx";
import ProjectListCard from "@/components/dashboard/ProjectListCard.tsx";


const Projects = () => {
    const [activeTab, setActiveTab] = useState("All Projects");
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [view, setView] = useState<"list" | "grid">("grid")

    const { profile, loading: profileLoading } = useUserProfile();

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
        { name: 'All Projects' },
        { name: 'Active' },
        { name: 'Planning', },
        { name: 'Archived', },
    ]

    const filteredProjects = projects.filter(project => activeTab === 'All Projects' || project.status === activeTab).filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
                    <button
                        onClick={() => setView('grid')}
                        className={`p-2 border rounded-lg transition-colors ${view === 'grid' ? 'bg-stone-800 text-white border-stone-800' : 'bg-white text-stone-500 hover:bg-slate-50'}`}>
                        <Grid size={20} />
                    </button>
                    <button
                        onClick={() => setView("list")}
                        className={`p-2 border rounded-lg transition-colors ${view === 'list' ? 'bg-stone-800 text-white border-stone-800' : 'bg-white text-stone-500 hover:bg-slate-50'}`}>
                        <List size={20} />
                    </button>
                </div>
            </div>

            {/* Projects Container */}
            <div className={view === 'grid' ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` : `flex flex-col gap-4`}>
                {isLoading ? (
                    <div className="col-span-full flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        view === 'grid' ? (
                            <ProjectGridCard
                                key={project.id}
                                {...project}
                            />
                        ) : (
                            <ProjectListCard
                                key={project.id}
                                {...project}
                            />
                        )
                    ))
                ) : (
                    <div
                        className="col-span-full text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                        <p className="text-slate-600">No projects found for this tab.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
