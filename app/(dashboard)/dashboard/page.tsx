"use client";

import React, {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useUserProfile} from "@/hooks/useUserProfile"
import StatsGrid from '@/components/dashboard/StatsGrid'
import RecentActivity from '@/components/dashboard/RecentActivity'
import UpcomingDeadlines from '@/components/dashboard/UpcomingDeadlines'
import ProjectProgress from '@/components/dashboard/ProjectProgress'

const Dashboard = () => {
    const router = useRouter()
    const {profile, loading, user} = useUserProfile()
    const fullName = profile?.full_name || ""

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login')
        }
    }, [user, loading, router])

    return (
        <div className="p-8 bg-white min-h-screen">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
                <p className="text-slate-600">Welcome back, <span className="font-black">{fullName}!</span> Here's
                    what's happening with your projects.</p>
            </div>

            {/* Stats Grid */}
            <StatsGrid/>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <RecentActivity/>

                {/* Upcoming Deadlines */}
                <UpcomingDeadlines/>
            </div>

            {/* Project Progress Section */}
            <ProjectProgress/>
        </div>
    )
}

export default Dashboard
