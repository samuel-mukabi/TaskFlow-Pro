'use server'

import { Tasks } from "@/types";

import { getTieredTasks, getTieredTaskCount } from "@/lib/data-services/task-service";

export async function fetchTasks(projectId: string): Promise<Tasks[]> {
    return getTieredTasks(projectId);
}

export async function getTaskCount(projectId: string): Promise<number> {
    return getTieredTaskCount(projectId);
}
