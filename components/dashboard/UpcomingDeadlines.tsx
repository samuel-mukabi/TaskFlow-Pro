import React from 'react';

const UpcomingDeadlines = () => {
    const upcomingDeadlines = [
        {
            title: "Launch Marketing Campaign",
            project: "Website Redesign",
            dueIn: "Due in 2 days",
            color: "red"
        },
        {
            title: "Complete API Documentation",
            project: "Backend Services",
            dueIn: "Due in 5 days",
            color: "orange"
        },
        {
            title: "User Testing Session",
            project: "Mobile App Development",
            dueIn: "Due in [id] week",
            color: "yellow"
        },
        {
            title: "Q1 Budget Review",
            project: "Q1 Planning",
            dueIn: "Due in 2 weeks",
            color: "green"
        }
    ]

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Upcoming Deadlines</h2>

            <div className="space-y-4">

                { upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className={`border-l-4 border-${deadline.color}-500 pl-4 py-2`}>
                        <h4 className="font-semibold text-sm text-slate-900 mb-1">{deadline.title}</h4>
                        <p className="text-xs text-slate-600 mb-2">{deadline.project}</p>
                        <div className="flex items-center gap-2">
                            <svg className={`w-4 h-4 text-${deadline.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className={`text-xs font-medium text-${deadline.color}-600`}>{deadline.dueIn}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default UpcomingDeadlines;
