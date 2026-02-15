import { getTasksFromDb, getTaskCountFromDb } from "../data-access/task-fetcher";
import { getFromRedis, setToRedis } from "../cache-storage/redis-handler";
import { getFromJsonFile, setToJsonFile } from "../cache-storage/json-file-handler";
import { Tasks } from "@/types";

export async function getTieredTasks(projectId: string): Promise<Tasks[]> {
    const cacheKey = `tasks:all:${projectId}`;
    const fileKey = `tasks_project_${projectId}`;

    // 1. Try Redis
    const cached = await getFromRedis<Tasks[]>(cacheKey);
    if (cached) return cached;

    // 2. Try JSON File
    const fileCached = await getFromJsonFile<Tasks[]>(fileKey);
    if (fileCached) {
        await setToRedis(cacheKey, fileCached, 90);
        return fileCached;
    }

    // 3. Try DB
    const tasks = await getTasksFromDb(projectId);
    if (tasks.length > 0) {
        await setToRedis(cacheKey, tasks, 90);
        await setToJsonFile(fileKey, tasks);
    }

    return tasks;
}

export async function getTieredTaskCount(projectId: string): Promise<number> {
    const cacheKey = `tasks:count:${projectId}`;
    const fileKey = `tasks_count_project_${projectId}`;

    // 1. Try Redis
    const cached = await getFromRedis<number>(cacheKey);
    if (cached !== null) return cached;

    // 2. Try JSON File
    const fileCached = await getFromJsonFile<number>(fileKey);
    if (fileCached !== null) {
        await setToRedis(cacheKey, fileCached, 300);
        return fileCached;
    }

    // 3. Try DB
    const count = await getTaskCountFromDb(projectId);
    await setToRedis(cacheKey, count, 300);
    await setToJsonFile(fileKey, count);

    return count;
}
