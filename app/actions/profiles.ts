'use server'

import { createClient } from "@/database/supabase/server"
import { redis } from "@/caching/redis"
import { UserProfile } from "@/types"


import { getTieredProfile } from "@/lib/data-services/profile-service";

export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
    return getTieredProfile(userId);
}

export async function clearProfileCache(userId: string) {
    const cacheKey = `user:profile:${userId}`
    try {
        await redis.del(cacheKey)
    } catch (error) {
        console.error("Redis delete error:", error)
    }
}

export async function updateProfile(userId: string, profileData: Partial<UserProfile>) {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('profiles')
        .update(profileData)
        .eq('id', userId)

    if (error) {
        console.error("Supabase update error:", error.message)
        return null
    }

    // Clear cache after update
    await clearProfileCache(userId)

    return data
}