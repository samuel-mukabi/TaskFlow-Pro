'use server'

import { redis } from "@/lib/redis.ts";
import { createClient } from "@/utils/supabase/server.ts";
import { Tasks } from "@/types";

export async function fetchTasks(projectId: string): Promise<Tasks[]> {
    const cacheKey = `tasks:all:${projectId}`

    // Try to get from Redis
    try {
        const cached = await redis.get(cacheKey)
        if (cached) return cached as Tasks[]
    } catch (error) {
        console.error("Redis fetch error:", error)
    }


    //Fetch from supabase if not in cache
    try {
        const supabase = await createClient()
        const { data: tasksData, error: tasksError } = await supabase
            .from('tasks')
            .select("*")
            .eq('project_id', projectId)

        if (tasksError) {
            console.error("Supabase fetch error:", tasksError.message)
            return []
        }
        if (!tasksData) return []


        // Cache the result in Redis for 5 minutes
        try {
            await redis.set(cacheKey, tasksData, { ex: 90 })
            return tasksData as Tasks[]
        } catch (error) {
            console.error("Redis set error:", error)
            return tasksData as Tasks[]
        }

    } catch (error) {
        console.error("Supabase fetch error:", error)
        return []
    }
}

export async function getTaskCount(projectId: string): Promise<number> {
    const supabase = await createClient()

    const { count, error } = await supabase
        .from('tasks')
        .select('*', { count: 'exact', head: true })
        .eq('project_id', projectId)

    if (error) {
        console.error("Supabase count error:", error.message)
        return 0
    }

    return count || 0
}
