'use server'

import { redis } from "@/lib/redis.ts";
import { Project } from "@/types";
import { createClient } from "@/utils/supabase/server.ts";


export async function fetchProjects(workspaceId: string): Promise<Project[] | null> {
    const cachedKey = `projects:workspace:${workspaceId}`

    // Try to get from Redis
    try {
        const cached = await redis.get(cachedKey);
        if (cached) return cached as Project[];
    } catch (error) {
        console.error("Redis fetch error:", error)
    }

    // Fetch from supabase if not in cache
    try {
        const supabase = await createClient()

        const { data: projectData, error: projectError } = await supabase
            .from('projects')
            .select("*, tasks(count)")
            .eq('workspace_id', workspaceId)

        if (projectError) {
            console.error("Supabase fetch error:", projectError.message)
            return null
        }

        if (!projectData) return [];

        const mappedData = projectData.map((project: any) => ({
            ...project,
            tasks_count: project.tasks?.[0]?.count || 0
        })) as Project[];

        // Cache the result in Redis for 5 minutes
        try {
            await redis.set(cachedKey, mappedData, { ex: 300 })
        } catch (error) {
            console.error("Redis set error:", error)
        }

        return mappedData;
    } catch (error) {
        console.error("Supabase fetch error:", error)
        return null
    }
}

export async function fetchProjectById(projectId: string): Promise<Project | null> {
    const cachedKey = `project:${projectId}`

    // Try to get from Redis
    try {
        const cached = await redis.get(cachedKey);
        if (cached) return cached as Project;
    } catch (error) {
        console.error("Redis fetch error:", error)
    }

    // Fetch from supabase if not in cache
    try {
        const supabase = await createClient()

        const { data: projectData, error: projectError } = await supabase
            .from('projects')
            .select("*, tasks(*)")
            .eq('id', projectId)
            .single()

        if (projectError) {
            console.error("Supabase fetch error:", projectError.message)
            return null
        }

        if (!projectData) return null;

        const mappedData = {
            ...projectData,
            tasks_count: projectData.tasks?.length || 0,
            tasks: projectData.tasks || []
        } as Project;

        // Cache the result in Redis for 10 minutes
        try {
            await redis.set(cachedKey, mappedData, { ex: 600 })
        } catch (error) {
            console.error("Redis set error:", error)
        }

        return mappedData;
    } catch (error) {
        console.error("Supabase fetch error:", error)
        return null
    }
}