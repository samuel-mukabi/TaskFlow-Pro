import React from 'react';

const ProjectProgress = () => {

    const projects = [
        {
            name: "Website Redesign",
            tasks: 12,
            members: 4,
            progress: 75,
            color: "indigo"
        },
        {
            name: "Mobile App Development",
            tasks: 24,
            members: 6,
            progress: 45,
            color: "purple"
        },
        {
            name: "Backend Services",
            tasks: 18,
            members: 5,
            progress: 90,
            color: "green"
        }
    ]

    return (
        <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Active Projects Progress</h2>

            <div className="space-y-6">


                {projects.map((project, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 bg-${project.color}-100 rounded-lg flex items-center justify-center`}>
                                    <svg className={`w-5 h-5 text-${project.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">{project.name}</h3>
                                    <p className="text-xs text-slate-600">{project.tasks} tasks · {project.members} members</p>
                                </div>
                            </div>
                            <span className={`text-sm font-semibold text-${project.color}-600`}>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                            <div className={`bg-${project.color}-600 h-2 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default ProjectProgress;
