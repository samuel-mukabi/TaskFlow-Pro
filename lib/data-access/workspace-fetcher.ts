import { createClient } from "@/database/supabase/server";
import { Workspace } from "@/types";

export async function getWorkspaceByOwnerFromDb(userId: string): Promise<Workspace | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('workspaces')
        .select('*')
        .eq("owner_id", userId)
        .single();

    if (error || !data) {
        if (error) console.error("Supabase fetch workspace by owner error:", error.message);
        return null;
    }

    return data as Workspace;
}

export async function getWorkspaceByIdFromDb(workspaceId: string): Promise<Workspace | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('workspaces')
        .select('*')
        .eq("id", workspaceId)
        .single();

    if (error || !data) {
        if (error) console.error("Supabase fetch workspace by id error:", error.message);
        return null;
    }

    return data as Workspace;
}
