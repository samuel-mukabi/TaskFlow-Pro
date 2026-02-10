'use server'

import { createClient } from "@/utils/supabase/server"
import { redis } from "@/lib/redis"
import { UserProfile } from "@/types"

const CACHE_TTL = 3600 // 1 hour

export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
    const cacheKey = `user:profile:${userId}`

    try {
        // 1. Try to get from Redis
        const cached = await redis.get<UserProfile>(cacheKey)
        if (cached) {
            return cached
        }
    } catch (error) {
        console.error("Redis fetch error:", error)
    }
    console.log(`Fetching user profile: ${userId}`)

    // 2. Cache miss: Fetch from Supabase
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

    if (error || !data) {
        console.error("Supabase fetch error:", error?.message)
        return null
    }

    // 3. Save to Redis
    try {
        await redis.set(cacheKey, data, { ex: CACHE_TTL })
    } catch (error) {
        console.error("Redis set error:", error)
    }

    return data as UserProfile
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