import { getProfileFromDb } from "../data-access/profile-fetcher";
import { getFromRedis, setToRedis } from "../cache-storage/redis-handler";
import { getFromJsonFile, setToJsonFile } from "../cache-storage/json-file-handler";
import { UserProfile } from "@/types";

export async function getTieredProfile(userId: string): Promise<UserProfile | null> {
    const cacheKey = `user:profile:${userId}`;
    const fileKey = `profile_${userId}`;

    // 1. Try Redis
    const cached = await getFromRedis<UserProfile>(cacheKey);
    if (cached) return cached;

    // 2. Try JSON File
    const fileCached = await getFromJsonFile<UserProfile>(fileKey);
    if (fileCached) {
        // Promote to Redis
        await setToRedis(cacheKey, fileCached, 3600);
        return fileCached;
    }

    // 3. Try DB
    const dbData = await getProfileFromDb(userId);
    if (dbData) {
        // Update both caches
        await setToRedis(cacheKey, dbData, 3600);
        await setToJsonFile(fileKey, dbData);
        return dbData;
    }

    return null;
}
