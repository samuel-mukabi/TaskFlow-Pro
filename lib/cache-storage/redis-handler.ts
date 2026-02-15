import { redis } from "@/caching/redis";

export async function getFromRedis<T>(key: string): Promise<T | null> {
    try {
        const cached = await redis.get<T>(key);
        return cached || null;
    } catch (error) {
        console.error(`Redis fetch error for key ${key}:`, error);
        return null;
    }
}

export async function setToRedis(key: string, value: any, ttlSeconds: number = 3600): Promise<void> {
    try {
        await redis.set(key, value, { ex: ttlSeconds });
    } catch (error) {
        console.error(`Redis set error for key ${key}:`, error);
    }
}

export async function deleteFromRedis(key: string): Promise<void> {
    try {
        await redis.del(key);
    } catch (error) {
        console.error(`Redis delete error for key ${key}:`, error);
    }
}
