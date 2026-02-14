import React from 'react';

const RecentActivity = () => {

    const recentActivities = [
        {
            profile: "JD",
            name: "John Doe",
            action: "completed task",
            task: "Update landing page design",
            time: "2 hours ago",
            project: "Website Redesign",
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            statusIcon: (
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            profile: "SK",
            name: "Sarah Kim",
            action: "added 3 new tasks to",
            task: "Mobile App Development",
            time: "4 hours ago",
            project: "Mobile App Development",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            statusIcon: (
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
            )
        },
        {
            profile: "MJ",
            name: "Mike Johnson",
            action: "commented on",
            task: "API Integration",
            time: "5 hours ago",
            project: "Backend Services",
            iconBg: "bg-slate-100",
            iconColor: "text-slate-600",
            statusIcon: (
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
            )
        },
        {
            profile: "AL",
            name: "Anna Lee",
            action: "moved task to",
            task: "In Review",
            time: "Yesterday",
            project: "Marketing Campaign",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            statusIcon: (
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            )
        },
        {
            profile: "TC",
            name: "Tom Chen",
            action: "created new project",
            task: "Q1 Planning",
            time: "2 days ago",
            project: "Q1",
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-600",
            statusIcon: (
                <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
            )
        }
    ]; // This would be fetched from an API in a real application
    return (
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Activity</h2>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
            </div>

            <div className="space-y-4">

                { recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-slate-100">
                        <div className={`w-10 h-10 ${activity.iconBg} rounded-full flex items-center justify-center shrink-0`}>
                            <span className={`text-sm font-bold ${activity.iconColor}`}>{activity.profile}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-900">
                                <span className="font-semibold">{activity.name}</span> {activity.action}
                                <span className="font-semibold"> {activity.task}</span>
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{activity.time} · {activity.project}</p>
                        </div>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                            {activity.statusIcon}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default RecentActivity;
