export interface UserProfile {
    id: string;
    full_name: string | undefined;
    email: string | null;
    avatar_url?: string | null;
    job_title?: string | null;
    bio?: string | null;
    updated_at?: string | null;
    workspace_id?: string | null;
    status: "Active" | "Away" | "Offline";
    department: string | null,
    role: string | null,
    joined_at: Date | null,
}

export interface SidebarLink {
    name: string;
    href: string;
    fontClass?: string;
}

export interface Workspace {
    id: string;
    name: string;
    url: string;
    logo?: string | null;
    owner_id: string;
    created_at?: string;
    updated_at?: string;
}

export interface Tasks {
    id: string;
    title: string;
    description: string;
    status: 'To Do' | 'In Progress' | 'In Review' | 'Completed';
    priority: 'Low' | 'Medium' | 'High';
    due_date: Date | null;
    assigned_to: string | null; // user ID
    project_id: string;
    created_at: string;
    updated_at: string;
}

export interface TeamMember {
    id: string;
    full_name: string;
    email: string;
    avatar_url?: string | undefined;
    job_title?: string | undefined;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    status: 'Active' | 'Planning' | 'Archived';
    start_date?: Date;
    end_date?: Date;
    created_by: string; // user ID
    created_at: Date;
    updated_at: Date;
    project_members?: TeamMember[];
    tasks_count: number;
    progress: number;
    tasks?: Tasks[];
    color?: string; // Hex color code
}