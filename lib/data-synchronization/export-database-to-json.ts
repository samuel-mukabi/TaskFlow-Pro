import { createClient } from "@/database/supabase/server";
import { setToJsonFile } from "../cache-storage/json-file-handler";

export async function exportDatabaseToJson() {
    const supabase = await createClient();

    const tables = ['profiles', 'workspaces', 'projects', 'tasks'];

    console.log("Starting database export to JSON...");

    for (const table of tables) {
        try {
            const { data, error } = await supabase.from(table).select('*');
            if (error) {
                console.error(`Error fetching table ${table}:`, error.message);
                continue;
            }

            if (data) {
                // For simplified file-based caching, we might store them differently,
                // but for a general export, we can just save the whole table
                await setToJsonFile(`table_${table}`, data);
                console.log(`Exported ${data.length} rows from ${table}`);
            }
        } catch (error) {
            console.error(`Unexpected error exporting ${table}:`, error);
        }
    }

    console.log("Database export completed.");
}
