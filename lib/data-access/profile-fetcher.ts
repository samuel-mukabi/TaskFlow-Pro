import { createClient } from "@/database/supabase/server";
import { UserProfile } from "@/types";

export async function getProfileFromDb(userId: string): Promise<UserProfile | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

    if (error || !data) {
        if (error) console.error("Supabase fetch profile error:", error.message);
        return null;
    }

    return data as UserProfile;
}

export async function getWorkspaceMembersFromDb(workspaceId: string): Promise<UserProfile[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('workspace_id', workspaceId);

    if (error) {
        console.error("Supabase fetch workspace members error:", error.message);
        return [];
    }

    return data as UserProfile[];
}
