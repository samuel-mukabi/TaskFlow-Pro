"use client"

import React, {useState} from 'react'

const Inbox = () => {
    const [isActive, setIsActive] = useState<"All" | "Unread" | "Mentions" | "Archived">("All")
    const [loadMore, setLoadMore] = useState<number>(5)

    const messages = [
        {
            id: 1,
            sender: "John Doe",
            content: "Can you review the new hero section? I think we need your input on the color scheme.",
            time: "2 hours ago",
            project: "Website Redesign",
            type: "mention",
            projectColor: "bg-indigo-50",
            projectBorderColor: "border-indigo-100",
            profileColor: "bg-indigo-500",
            read: false
        },
        {
            id: 2,
            sender: "Sarah Kim",
            content: "You've been added as a reviewer for the iOS beta testing phase.",
            time: "3 hours ago",
            project: "Mobile App Development",
            type: "assignment",
            projectColor: "bg-purple-50",
            projectBorderColor: "border-purple-100",
            profileColor: "bg-purple-500",
            read: false
        },
        {
            id: 3,
            sender: "Mike Johnson",
            content: "The REST API endpoints are now fully integrated and tested.",
            time: "5 hours ago",
            project: "Backend Services",
            type: "completion",
            projectColor: "bg-indigo-50",
            projectBorderColor: "border-indigo-100",
            profileColor: "bg-indigo-500",
            read: true
        },
        {
            id: 4,
            sender: null,
            content: "Deadline approaching for 'Launch Marketing Campaign'. This task is due in 2 days. Make sure all deliverables are ready.",
            time: "6 hours ago",
            project: "Marketing Campaign",
            type: "deadline",
            projectColor: "bg-orange-50",
            projectBorderColor: "border-orange-100",
            profileColor: "bg-orange-500",
            read: false
        },
        {
            id: 5,
            sender: "Anna Lee",
            content: "Great insights! I've added some additional notes based on our last meeting.",
            time: "Yesterday",
            project: "Documentation Portal",
            type: "comment",
            projectColor: "bg-indigo-50",
            projectBorderColor: "border-indigo-100",
            profileColor: "bg-indigo-500",
            read: true
        },
        {
            id: 6,
            sender: "Tom Chen",
            content: "You've been added as a collaborator to this project.",
            time: "Yesterday",
            project: "Q1 Planning",
            type: "invitation",
            projectColor: "bg-pink-50",
            projectBorderColor: "border-pink-100",
            profileColor: "bg-pink-500",
            read: false
        },
        {
            id: 7,
            sender: null,
            content: "System notification: Your team's weekly performance report for Jan 27 - Feb 2 is now available.",
            time: "2 days ago",
            project: null,
            type: "system",
            projectColor: "bg-indigo-50",
            projectBorderColor: "border-indigo-100",
            profileColor: "bg-indigo-500",
            read: true
        },
        {
            id: 8,
            sender: "David Wong",
            content: "Check out the updated system architecture for the new microservices.",
            time: "2 days ago",
            project: "Backend Services",
            type: "share",
            projectColor: "bg-indigo-50",
            projectBorderColor: "border-indigo-100",
            profileColor: "bg-indigo-500",
            read: true
        },
        {
            id: 9,
            sender: "Emily Davis",
            content: "Don't forget to submit your timesheet for this week. The deadline is tomorrow at 5 PM.",
            time: "3 days ago",
            project: null,
            type: "archived",
            projectColor: "bg-gray-50",
            projectBorderColor: "border-gray-100",
            profileColor: "bg-gray-500",
            read: false
        }
    ]

    const tabs = [
        {name: "All", active: true},
        {name: "Unread", active: false},
        {name: "Mentions", active: false},
        {name: "Archived", active: false}
    ]
    const MESSAGE_INITIAL_COUNT = loadMore

    const MessageCard = ({message}: { message: typeof messages[0] }) => {
        return (
            <div
                className={`${message.read ? "bg-white" : message.projectColor} ${message.read ? "border-slate-50" : message.projectBorderColor} border-slate-200 border rounded-lg p-4 hover:shadow-md transition cursor-pointer`}>
                <div className="flex items-start gap-4">
                    <div
                        className={`w-10 h-10 ${message.read ? "bg-white" : message.profileColor} rounded-full flex items-center justify-center shrink-0`}>
                        {message.sender ? (
                            <span
                                className={`text-sm font-bold ${message.read ? "text-slate-600" : "text-white"}`}>
                                {message.sender.split(" ").map(name => name[0]).join("")}
                            </span>
                        ) : (
                            <svg className={`w-5 h-5 ${message.read ? "text-slate-600" : "text-white"}`}
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                            <p className={`text-sm ${message.read ? "text-slate-700" : "text-slate-900"}`}>
                                {message.sender && <span
                                    className="font-semibold">{message.sender}</span>} {message.type === "mention" && "mentioned you in"} {message.type === "assignment" && "assigned you to"} {message.type === "completion" && "completed"} {message.type === "deadline" && "Deadline approaching for"} {message.type === "comment" && "commented on"} {message.type === "invitation" && "invited you to"} {message.type === "share" && "shared"} {message.type === "system" && "System notification:"}
                                {message.project && <span className="font-semibold"> "{message.project}"</span>}
                            </p>
                            {
                                !message.read && (
                                    <span
                                        className={`w-2 h-2 ${message.profileColor} rounded-full shrink-0 mt-1.5`}></span>
                                )
                            }
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{message.content}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>{message.time}</span>
                            {message.project && (
                                <>
                                    <span>·</span>
                                    <span
                                        className={`text-${message.type === "mention" ? "indigo" : message.type === "assignment" ? "purple" : message.type === "completion" ? "green" : message.type === "deadline" ? "orange" : message.type === "comment" ? "blue" : message.type === "invitation" ? "pink" : message.type === "share" ? "teal" : "gray"}-600 font-medium`}>
                                        {message.project}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-8 min-h-screen">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Inbox</h1>
                <p className="text-slate-600">Stay updated with all your notifications and mentions.</p>
            </div>

            <div className="flex items-center gap-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 text-sm font-medium ${tab.name === isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-600 hover:text-slate-900 border-b-2 border-transparent"} flex items-center gap-2 mb-6`}
                        onClick={() => setIsActive(tab.name as "All" | "Unread" | "Mentions" | "Archived")}>
                        {tab.name}
                        <span
                            className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full text-xs font-bold">{
                                tab.name === "All" ? messages.length :
                                tab.name === "Unread" ? messages.filter(message => !message.read).length :
                                tab.name === "Mentions" ? messages.filter(message => message.type === "mention").length :
                                messages.filter(message => message.type === "archived").length
                            }</span>
                    </button>
                ))}
            </div>


            {/* Notifications List */}
            <div className="space-y-3">

                {isActive === "All" && messages.slice(0, MESSAGE_INITIAL_COUNT).map((message, index) => (
                    <MessageCard key={index} message={message}/>
                ))}
                {isActive === "Unread" && messages.slice(0, MESSAGE_INITIAL_COUNT).filter(message => !message.read).map((message, index) => (
                    <MessageCard key={index} message={message}/>
                ))}
                {isActive === "Mentions" && messages.slice(0, MESSAGE_INITIAL_COUNT).filter(message => message.type === "mention").map((message, index) => (
                    <MessageCard key={index} message={message}/>
                ))}
                {isActive === "Archived" && messages.slice(0, MESSAGE_INITIAL_COUNT).filter(message => message.type === "archived").map((message, index) => (
                    <MessageCard key={index} message={message}/>
                ))}


            </div>

            {/* Load More */}
            { loadMore < messages.length &&
                <div className="mt-6 text-center">
                <button
                    onClick={() => setLoadMore(prev => prev + 3)}
                    className="px-6 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
                    Load More Notifications
                </button>
            </div>}
        </div>
    )
}

export default Inbox
