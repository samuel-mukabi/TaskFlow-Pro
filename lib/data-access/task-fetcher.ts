import { createClient } from "@/database/supabase/server";
import { Tasks } from "@/types";

export async function getTasksFromDb(projectId: string): Promise<Tasks[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('tasks')
        .select("*")
        .eq('project_id', projectId);

    if (error) {
        console.error("Supabase fetch tasks error:", error.message);
        return [];
    }

    return data as Tasks[];
}

export async function getTaskCountFromDb(projectId: string): Promise<number> {
    const supabase = await createClient();
    const { count, error } = await supabase
        .from('tasks')
        .select('*', { count: 'exact', head: true })
        .eq('project_id', projectId);

    if (error) {
        console.error("Supabase task count error:", error.message);
        return 0;
    }

    return count || 0;
}
