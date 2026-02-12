'use client'

import React, {useEffect, useState} from 'react'
import {useUser} from "@/context/UserContext.tsx";
import {fetchProjectById} from "@/app/actions/projects.ts";
import {Project, Tasks} from "@/types";
import {fetchTasks} from "@/app/actions/tasks.ts";

interface PageProps {
    params: Promise<{ id: string; }>
}

const ProjectDetail = ({params}: PageProps) => {

    const {user} = useUser();
    const {id: projectId} = React.use(params);

    const [project, setProject] = useState<Project | null>(null)
    const [tasks, setTasks] = useState<Tasks[]>([])

    const completedTasksCount = tasks.filter(task => task.status === "Completed").length;
    const ToDoTasks = tasks.filter(task => task.status === 'To Do')
    const InProgress = tasks.filter(task => task.status === 'In Progress')
    const InReview = tasks.filter(task => task.status === 'In Review')
    const Completed = tasks.filter(task => task.status === 'Completed')


    useEffect(() => {
        if (!user || !projectId) return;

        const loadData = async () => {
            try {
                const data = await fetchProjectById(projectId);
                if (data) {
                    setProject(data);
                }
            } catch (error) {
                console.error("Error loading project data:", error);
            }


            try {
                const tasks = await fetchTasks(projectId)
                if (tasks) {
                    setTasks(tasks);
                }
            } catch (error) {
                console.error("Error loading tasks data:", error);
            }
        }

        loadData();
    }, [user, projectId]);

    const completedProgress = Completed.length * 100
    const inReviewProgress = InReview.length * 75
    const inProgressProgress = InProgress.length * 25
    const toDoProgress = 0

    const totalProgress = tasks.length === 0 ? 0 : Math.round(((completedProgress + inReviewProgress + inProgressProgress + toDoProgress) / (tasks.length * 100)) * 100)
    const members = project?.project_members
    console.log(members)

    return (
        <div className="p-8  min-h-screen">


            {/* Project Header */}
            <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <a href="/projects" className="hover:text-slate-900">Projects</a>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="text-slate-900 font-medium">{project?.title}</span>
                </div>

                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="">
                            <h1 className="text-3xl font-bold text-slate-900 mb-1">{project?.title}</h1>
                            <p className="text-slate-600">{project?.description}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div
                                className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white">JD
                            </div>
                            <div
                                className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white">SK
                            </div>
                            <div
                                className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white">AL
                            </div>
                            <div
                                className="w-10 h-10 bg-slate-300 rounded-full border-2 border-white flex items-center justify-center text-sm font-semibold text-slate-600">+2
                            </div>
                        </div>
                        <button
                            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition">
                            + Add Member
                        </button>
                        <button
                            className="p-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Project Stats */}
                <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        <span className="text-sm text-slate-700"><span
                            className="font-semibold">{project?.tasks_count}</span> tasks</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-slate-700"><span
                            className="font-semibold">{completedTasksCount}</span> completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm text-slate-700">Due <span
                            className="font-semibold">{project?.end_date}</span></span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">Progress:</span>
                        <div className="w-32 bg-slate-200 rounded-full h-2">
                            <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${totalProgress}%` }}
                            ></div>
                        </div>
                        <span className="text-sm font-semibold text-indigo-600">{totalProgress}%</span>
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
                                <span
                                    className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full text-xs font-semibold">{ToDoTasks.length}</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            { ToDoTasks.length > 0 ? ToDoTasks.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-slate-900 text-sm">{task.title}</h4>

                                        {task.priority && (<span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">{task.priority}</span>)}

                                    </div>

                                    {task.description && (<p className="text-xs text-slate-600 mb-3">{task.description}</p>
                                    )}
                                </div>
                            )) :
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                    <h6 className="text-slate-900 text-sm">No Tasks Are Scheduled</h6>
                                </div>
                            }
                        </div>

                    </div>
                </div>

                {/* In Progress Column */}
                <div className="shrink-0 w-80">
                    <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <h3 className="font-bold text-slate-900">In Progress</h3>
                                <span
                                    className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{InProgress.length}</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            { InProgress.length > 0 ? InProgress.map((task) => (
                                <div key={task.id}
                                     className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 hover:shadow-md transition cursor-pointer">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-slate-900 text-sm">{task.title}</h4>
                                        <span
                                            className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">{task.priority}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 mb-3">{task.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-1">
                                            <div
                                                className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">{task.assigned_to}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )):
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                    <h6 className="text-slate-900 text-sm">No Tasks Are In Progress</h6>
                                </div>
                            }

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
                                <span
                                    className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">{InReview.length}</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            { InReview.length > 0 ? InReview.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-slate-900 text-sm">{task.title}</h4>
                                        <span
                                            className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded">{task.priority}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 mb-3">{task.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-1">
                                            <div
                                                className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">{task.assigned_to}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) :
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                    <h6 className="text-slate-900 text-sm">No Tasks Under Review</h6>
                                </div>
                            }

                        </div>
                    </div>
                </div>

                {/* Done Column */}
                <div className="shrink-0 w-80">
                    <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <h3 className="font-bold text-slate-900">Completed</h3>
                                <span
                                    className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">{Completed.length}</span>
                            </div>
                            <button className="text-slate-600 hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {/* Task Card [id] */}
                            { Completed.length > 0 ? Completed.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-white rounded-lg p-4 shadow-sm border border-green-200 hover:shadow-md transition cursor-pointer opacity-75">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-slate-900 text-sm line-through">{task.title}</h4>
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-xs text-slate-600 mb-3">{task.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-1">
                                            <div
                                                className="w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">{task.assigned_to}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-green-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>{task.status}</span>
                                        </div>
                                    </div>
                                </div>
                            )) :
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 hover:shadow-md transition cursor-pointer">
                                    <h6 className="text-slate-900 text-sm">No Tasks Are Completed</h6>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
