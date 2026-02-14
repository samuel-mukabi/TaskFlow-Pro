import { Redis } from '@upstash/redis'

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.warn("Redis environment variables are missing. Caching will be disabled.")
}

export const redis = Redis.fromEnv()
