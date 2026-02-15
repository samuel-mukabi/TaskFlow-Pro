import { getWorkspaceByOwnerFromDb, getWorkspaceByIdFromDb } from "../data-access/workspace-fetcher";
import { getWorkspaceMembersFromDb } from "../data-access/profile-fetcher";
import { getFromRedis, setToRedis } from "../cache-storage/redis-handler";
import { getFromJsonFile, setToJsonFile } from "../cache-storage/json-file-handler";
import { Workspace, UserProfile } from "@/types";

export async function getTieredWorkspaceProfile(userId: string): Promise<Workspace | null> {
    const cacheKey = `workspace:details:${userId}`;
    const fileKey = `workspace_owner_${userId}`;

    const cached = await getFromRedis<Workspace>(cacheKey);
    if (cached) return cached;

    const fileCached = await getFromJsonFile<Workspace>(fileKey);
    if (fileCached) {
        await setToRedis(cacheKey, fileCached, 600);
        return fileCached;
    }

    const dbData = await getWorkspaceByOwnerFromDb(userId);
    if (dbData) {
        await setToRedis(cacheKey, dbData, 600);
        await setToJsonFile(fileKey, dbData);
        return dbData;
    }

    return null;
}

export async function getTieredWorkspaceMembers(workspaceId: string): Promise<UserProfile[]> {
    const cacheKey = `workspace:members:${workspaceId}`;
    const fileKey = `workspace_members_${workspaceId}`;

    const cached = await getFromRedis<any[]>(cacheKey);
    if (cached) return cached;

    const fileCached = await getFromJsonFile<any[]>(fileKey);
    if (fileCached) {
        await setToRedis(cacheKey, fileCached, 3600);
        return fileCached;
    }

    const membersData = await getWorkspaceMembersFromDb(workspaceId);
    const members = membersData.map((item) => ({
        id: item.id,
        full_name: item.full_name,
        email: item.email,
        avatar_url: item.avatar_url,
        job_title: item.job_title,
        status: item.status,
        department: item.department,
        role: item.role,
        joined_at: item.joined_at
    }));

    if (members.length > 0) {
        await setToRedis(cacheKey, members, 3600);
        await setToJsonFile(fileKey, members);
    }

    return members;
}
