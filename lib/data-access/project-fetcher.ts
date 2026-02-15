import { createClient } from "@/database/supabase/server";
import { Project, TeamMember } from "@/types";

export interface RawProjectMember {
    project_id: string;
    profile_id: string;
    role: string;
    joined_at: string;
    profiles: {
        id: string;
        full_name: string;
        email: string;
        avatar_url?: string | null;
        job_title?: string | null;
    } | null;
}

export interface RawProject extends Omit<Project, 'project_members' | 'tasks'> {
    project_members: RawProjectMember[];
    tasks: { status: string }[];
}

export async function getProjectsFromDb(workspaceId: string): Promise<RawProject[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('projects')
        .select("*, tasks(status), project_members(*, profiles:profile_id(*))")
        .eq('workspace_id', workspaceId);

    if (error) {
        console.error("Supabase fetch projects error:", error.message);
        return [];
    }

    return (data as unknown as RawProject[]) || [];
}

export async function getProjectByIdFromDb(projectId: string): Promise<RawProject | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('projects')
        .select("*, tasks(*), project_members(*, profiles:profile_id(*))")
        .eq('id', projectId)
        .single();

    if (error || !data) {
        if (error) console.error("Supabase fetch project by id error:", error.message);
        return null;
    }

    return data as unknown as RawProject;
}

export async function getProjectMembers(projectId: string): Promise<RawProjectMember[]> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('project_members')
        .select("*, profiles:profile_id(*)")
        .eq('project_id', projectId);

    if (error) {
        console.error("Supabase fetch project members error:", error.message);
    }

    return (data as unknown as RawProjectMember[]) ?? [];
}