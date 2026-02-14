import React, {useEffect, useState} from 'react';
import {useUserProfile} from "@/hooks/useUserProfile.ts";
import {Project} from "@/types";
import {fetchProjects} from "@/app/actions/projects.ts";

const ProjectProgress = () => {
    const {profile, loading} = useUserProfile();
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getProjects = async () => {
            if (loading) {
                setIsLoading(true);
                return;
            }

            if (!profile?.workspace_id) {
                setProjects([]);
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            setProjects([]);
            try {
                const data = await fetchProjects(profile.workspace_id);
                setProjects(data || []);
            } catch (error) {
                console.error("Error fetching projects for dashboard:", error);
            } finally {
                setIsLoading(false);
            }

        };
        getProjects();
    }, [profile, loading]);


    const activeProjects = projects.filter(p => p.status === 'Active').slice(0, 5);

    if (!isLoading && activeProjects.length === 0) {
        return (
            <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Active Projects Progress</h2>
                <div className="text-center text-slate-500 py-6">
                    No active projects yet.
                </div>
            </div>
        );
    }

    return (
        <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Active Projects Progress</h2>

            <div className="space-y-6">
                {isLoading ? (
                        <div
                            className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center justify-center min-h-44">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                        </div>
                    ) :
                        activeProjects.map((project) => (
                            <div key={project.id}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{project.title}</h3>
                                            <p className="text-xs text-slate-600">{project.tasks_count} tasks
                                                · {project.project_members?.length || 0} members</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold"
                                          style={{color: project.color}}>{project.progress}%</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full transition-all duration-500"
                                        style={{
                                            width: `${project.progress}%`,
                                            backgroundColor: project.color
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default ProjectProgress;
