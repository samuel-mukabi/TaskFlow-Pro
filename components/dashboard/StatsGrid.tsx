import React from 'react';

const StatsGrid = () => {

    const statsCards = [
        {
            title: "Active Projects",
            value: 24,
            icon: (
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
            ),
            change: "+12%",
            changeType: "positive",
            iconBg: "bg-indigo-100"
        },
        {
            title: "Tasks Completed",
            value: 142,
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            change: "+8%",
            changeType: "positive",
            iconBg: "bg-green-100"
        },
        {
            title: "Team Members",
            value: 18,
            icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            ),
            change: "+3",
            changeType: "positive",
            iconBg: "bg-purple-100"
        },
        {
            title: "Pending Tasks",
            value: 37,
            icon: (
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            change: "Urgent",
            changeType: "warning",
            iconBg: "bg-orange-100"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
                <div key={index}
                     className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                        <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.iconBg}`}>
                            {card.icon}
                        </div>
                        <span
                            className={`text-xs font-medium ${card.changeType === "positive" ? "text-green-600 bg-green-50" : card.changeType === "warning" ? "text-orange-600 bg-orange-50" : "text-gray-600 bg-gray-50"} px-2 py-1 rounded-full`}>
                            {card.change}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{card.value}</h3>
                    <p className="text-sm text-slate-600">{card.title}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
