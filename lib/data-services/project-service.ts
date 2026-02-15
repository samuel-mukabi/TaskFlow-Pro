import { getProjectsFromDb, getProjectByIdFromDb, getProjectMembers, RawProject, RawProjectMember } from "../data-access/project-fetcher";
import { getFromRedis, setToRedis } from "../cache-storage/redis-handler";
import { getFromJsonFile, setToJsonFile } from "../cache-storage/json-file-handler";
import { Project, TeamMember } from "@/types";
import { calculateProjectProgress } from "@/app/actions/conversions";

export async function getTieredProjects(workspaceId: string): Promise<Project[]> {
    const cacheKey = `projects:workspace:${workspaceId}`;
    const fileKey = `projects_workspace_${workspaceId}`;

    // 1. Try Redis
    const cached = await getFromRedis<Project[]>(cacheKey);
    if (cached) {
        console.log(`[DEBUG] getTieredProjects: Found in Redis for ${workspaceId}`);
        return cached;
    }

    // 2. Try JSON File
    const fileCached = await getFromJsonFile<Project[]>(fileKey);
    if (fileCached) {
        console.log(`[DEBUG] getTieredProjects: Found in JSON File for ${workspaceId}`);
        await setToRedis(cacheKey, fileCached, 300);
        return fileCached;
    }

    // 3. Try DB
    console.log(`[DEBUG] getTieredProjects: Fetching from DB for ${workspaceId}`);
    const projects = await getProjectsFromDb(workspaceId);
    console.log(`[DEBUG] getTieredProjects: DB returned ${projects.length} projects`);

    const mappedData = projects.map((project: RawProject) => ({
        ...project,
        tasks_count: project.tasks?.length || 0,
        progress: calculateProjectProgress(project.tasks || []),
        project_members: (project.project_members || []).map((pm: RawProjectMember) => ({
            id: pm.profiles?.id || pm.profile_id,
            full_name: pm.profiles?.full_name || "Unknown",
            email: pm.profiles?.email || "",
            avatar_url: pm.profiles?.avatar_url || undefined,
            job_title: pm.profiles?.job_title || undefined,
        })) as TeamMember[]
    })) as Project[];

    if (mappedData.length > 0) {
        await setToRedis(cacheKey, mappedData, 300);
        await setToJsonFile(fileKey, mappedData);
    }

    return mappedData;
}

export async function getTieredProjectById(projectId: string): Promise<Project | null> {
    const cacheKey = `project:${projectId}`;
    const fileKey = `project_${projectId}`;

    // 1. Try Redis
    const cached = await getFromRedis<Project>(cacheKey);
    if (cached) {
        console.log(`[DEBUG] getTieredProjectById: Found in Redis for ${projectId}`);
        return cached;
    }

    // 2. Try JSON File
    const fileCached = await getFromJsonFile<Project>(fileKey);
    if (fileCached) {
        console.log(`[DEBUG] getTieredProjectById: Found in JSON File for ${projectId}`);
        await setToRedis(cacheKey, fileCached, 600);
        return fileCached;
    }

    // 3. Try DB
    console.log(`[DEBUG] getTieredProjectById: Fetching from DB for ${projectId}`);
    const projectData = await getProjectByIdFromDb(projectId);
    console.log(`[DEBUG] getTieredProjectById: DB returned project:`, projectData ? "Found" : "Not Found");

    if (!projectData) return null;

    const mappedData = {
        ...projectData,
        tasks_count: projectData.tasks?.length || 0,
        tasks: projectData.tasks || [],
        progress: calculateProjectProgress(projectData.tasks || []),
        project_members: (projectData.project_members || []).map((pm: RawProjectMember) => ({
            id: pm.profiles?.id || pm.profile_id,
            full_name: pm.profiles?.full_name || "Unknown",
            email: pm.profiles?.email || "",
            avatar_url: pm.profiles?.avatar_url || undefined,
            job_title: pm.profiles?.job_title || undefined,
        })) as TeamMember[]
    } as Project;

    await setToRedis(cacheKey, mappedData, 600);
    await setToJsonFile(fileKey, mappedData);

    return mappedData;
}

export async function getTieredProjectMembers(projectId: string): Promise<TeamMember[]> {
    const cacheKey = `project:members:${projectId}`;
    const fileKey = `project_members_${projectId}`;

    // 1. Try Redis
    const cached = await getFromRedis<TeamMember[]>(cacheKey);
    if (cached) {
        console.log(`[DEBUG] getTieredProjectMembers: Found in Redis for ${projectId}`);
        return cached;
    }

    // 2. Try JSON File
    const fileCached = await getFromJsonFile<TeamMember[]>(fileKey);
    if (fileCached) {
        console.log(`[DEBUG] getTieredProjectMembers: Found in JSON File for ${projectId}`);
        await setToRedis(cacheKey, fileCached, 600);
        return fileCached;
    }

    // 3. Try DB
    const membersData = await getProjectMembers(projectId);
    if (!membersData) return [];

    const members: TeamMember[] = membersData.map((item: RawProjectMember) => ({
        id: item.profiles?.id || item.profile_id,
        full_name: item.profiles?.full_name || "Unknown",
        email: item.profiles?.email || "",
        avatar_url: item.profiles?.avatar_url || undefined,
        job_title: item.profiles?.job_title || undefined,
    }));

    if (members.length > 0) {
        await setToRedis(cacheKey, members, 600);
        await setToJsonFile(fileKey, members);
    }

    return members;
}