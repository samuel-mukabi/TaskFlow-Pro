'use server'

import { redis } from "@/caching/redis.ts";
import { createClient } from "@/database/supabase/server.ts";
import { Workspace } from "@/types";

export async function createWorkspace(userId: string, workspaceDetails: {}): Promise<Workspace | null> {
    const supabase = await createClient()

    const insertData = { owner_id: userId, ...workspaceDetails, }

    const { data, error } = await supabase
        .from('workspaces')
        .insert(insertData)
        .select()
        .single()

    if (error) {
        console.error("Supabase insert error:", error)
        return null
    }

    return data as Workspace
}

import { getTieredWorkspaceProfile, getTieredWorkspaceMembers } from "@/lib/data-services/workspace-service";

export async function fetchWorkspaceProfile(userId: string): Promise<Workspace | null> {
    return getTieredWorkspaceProfile(userId);
}

export async function updateWorkspace(userId: string, workspaceDetails: Partial<Workspace>) {
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

export async function fetchWorkspaceMembers(workspaceId: string | null | undefined) {
    if (!workspaceId) return [];
    return getTieredWorkspaceMembers(workspaceId);
}

export async function addWorkspaceMember(workspaceId: string, userId: string) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('workspace_members')
        .insert({ workspace_id: workspaceId, profile_id: userId })

    if (error) {
        console.error("Supabase insert error:", error)
        return null
    }
    const cacheKey = `workspace:members:${workspaceId}`
    try {
        if (data) {
            await redis.set(cacheKey, data, { ex: 600 })
        }
    } catch (error) {
        console.error("Redis cache error:", error)
    }
    return data
}

export async function addProjectMember(projectId: string, userId: string) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('project_members')
        .insert({ project_id: projectId, profile_id: userId })
        .select()
        .single()
    if (error) {
        console.error("Supabase insert error:", error)
        return null
    }
    const cacheKey = `project:members:${projectId}`
    try {
        await redis.del(cacheKey)
    } catch (error) {
        console.error("Redis cache error:", error)
    }
    return data
}