'use server'

import { redis } from "@/lib/redis.ts";
import { createClient } from "@/utils/supabase/server.ts";
import { WorkspaceDetails } from "@/types";

export async function createWorkspace(userId: string, workspaceDetails: {}): Promise<WorkspaceDetails | null> {
    const supabase = await createClient()

    const insertData = {  owner_id: userId, ...workspaceDetails, }

    const { data, error } = await supabase
        .from('workspaces')
        .insert(insertData)
        .select()
        .single()

    if (error) {
        console.error("Supabase insert error:", error)
        return null
    }

    return data as WorkspaceDetails
}

export async function fetchWorkspaceProfile(userId: string): Promise<WorkspaceDetails | null> {
    const cacheKey = `workspace:details:${userId}`

    try {
        // 1. Try to get from Redis
        const cached = await redis.get<WorkspaceDetails>(cacheKey)
        if (cached) {
            return cached
        }
    } catch (error) {
        console.error("Redis fetch error:", error)
    }
    //Get workspace details from database
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('workspaces')
        .select('*')
        .eq("owner_id", userId)
        .single()

    if (error || !data) {
        console.error("Supabase fetch error:", error?.message)
        return null
    }

    // 3. Save to Redis
    try {
        await redis.set(cacheKey, data, { ex: 600 })
    } catch (error) {
        console.error("Redis set error:", error)
    }

    return data as WorkspaceDetails
}

export async function updateWorkspace(userId: string, workspaceDetails: Partial<WorkspaceDetails>) {
    const supabase = await createClient()

    // Destructure to ensure we don't accidentally update id or owner_id
    const { id, owner_id, created_at, updated_at, ...updateData } = workspaceDetails;

    // Only update the existing workspace row for this owner (no inserts)
    const { data, error } = await supabase
        .from('workspaces')
        .update(updateData)
        .eq('owner_id', userId)
        .select()
        .single()

    if (error) {
        console.error("Supabase update error detail:", error)
        console.error("Supabase update error message:", error.message)
        return null
    }

    // Clear and update redis cache
    const cacheKey = `workspace:details:${userId}`
    try {
        await redis.del(cacheKey)
        if (data) {
            await redis.set(cacheKey, data, { ex: 600 })
        }
    } catch (error) {
        console.error("Redis cache error:", error)
    }

    return data
}