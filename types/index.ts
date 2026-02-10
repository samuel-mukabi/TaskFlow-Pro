export interface UserProfile {
    id: string;
    full_name: string | null;
    email: string | null;
    avatar_url?: string | null;
    job_title?: string | null;
    bio?: string | null;
    updated_at?: string | null;
}

export interface SidebarLink {
    name: string;
    href: string;
    fontClass?: string;
}

export interface ProjectCardProps {
    id: number;
    title: string
    description: string
    progress: number
    status: 'Active' | 'Planning' | 'Archived'
    teamMembers: { initials: string, color: string }[]
    tasks: number
    svg: string
    projectColor?: string
}

export interface WorkspaceDetails {
    id?: string;
    name: string;
    url: string;
    logo?: string | null;
    owner_id: string;
    created_at?: string;
    updated_at?: string;
}