export interface UserProfile {
    id: string;
    full_name: string | null;
    email: string | null;
    avatar_url?: string | null;
    job_title?: string | null;
    bio?: string | null;
    updated_at?: string | null;
    workspace_id?: string | null;
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
    due_date: string | null;
    assigned_to: string | null; // user ID
    project_id: string;
    created_at: string;
    updated_at: string;
}

export interface TeamMember {
    id: string;
    full_name: string;
    email: string;
    avatar_url?: string | null;
    job_title?: string | null;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    status: 'Active' | 'Planning' | 'Archived';
    progress: number;
    start_date: string;
    end_date: string;
    created_by: string; // user ID
    created_at: string;
    updated_at: string;
    project_members?: TeamMember[];
    tasks_count: number;
    tasks?: Tasks[];
    icon?: string; // SVG string
    color?: string; // Hex color code
}