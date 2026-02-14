'use server'

import { Project, TeamMember } from "@/types";
import { getTieredProjects, getTieredProjectById, getTieredProjectMembers } from "@/lib/data-services/project-service";




export async function fetchProjects(workspaceId: string): Promise<Project[] | null> {
    return getTieredProjects(workspaceId);
}

export async function fetchProjectById(projectId: string): Promise<Project | null> {
    return getTieredProjectById(projectId);
}

export async function fetchProjectMembers(projectId: string): Promise<TeamMember[]> {
    return getTieredProjectMembers(projectId)
}