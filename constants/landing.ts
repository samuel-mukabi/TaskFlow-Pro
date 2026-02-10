import { Zap, Layout, Shield, BarChart3, Cpu, Users, Github } from 'lucide-react';

export const SOCIAL_PROOF_LOGOS = [
    { name: "ACME Corp" },
    { name: "GlobalTech" },
    { name: "Nebula" },
    { name: "FoxRun" },
    { name: "Circle" },
];

export const FEATURES = [
    {
        title: "Real-time Sync",
        description: "See who's online with Presence, watch cursors move in real-time, and get instant updates via Supabase Realtime subscriptions.",
        icon: Zap,
        colorClass: "text-blue-600",
        bgClass: "bg-blue-100"
    },
    {
        title: "Advanced Kanban",
        description: "Drag-and-drop tasks, set priority levels, and attach files directly to cards. Manage workflows with effortless precision.",
        icon: Layout,
        colorClass: "text-purple-600",
        bgClass: "bg-purple-100"
    },
    {
        title: "Enterprise Security",
        description: "Role-based access control (RBAC) powered by Postgres Row Level Security (RLS). Your data is safe and segregated.",
        icon: Shield,
        colorClass: "text-green-600",
        bgClass: "bg-green-100"
    },
    {
        title: "Deep Analytics",
        description: "Track team velocity and productivity with real-time charts powered by high-performance Postgres views.",
        icon: BarChart3,
        colorClass: "text-orange-600",
        bgClass: "bg-orange-100"
    },
    {
        title: "AI Assistant",
        description: "Leverage OpenAI to autogenerate task descriptions, summarize long threads, and suggest sub-tasks.",
        icon: Cpu,
        colorClass: "text-pink-600",
        bgClass: "bg-pink-100"
    },
    {
        title: "Team Collaboration",
        description: "Comment threads, @mentions, and email notifications via Resend keep everyone in the loop without the noise.",
        icon: Users,
        colorClass: "text-indigo-600",
        bgClass: "bg-indigo-100"
    }
];

export const INTEGRATION_FEATURES = [
    {
        icon: Github,
        text: "Link commits & PRs to tasks.",
        highlight: "GitHub API:",
        highlightColor: "text-indigo-400"
    },
    {
        icon: Cpu,
        text: "Generative text for specs.",
        highlight: "OpenAI:",
        highlightColor: "text-indigo-400"
    },
    {
        icon: Zap,
        text: "Auth, Storage & Realtime DB.",
        highlight: "Supabase:",
        highlightColor: "text-indigo-400"
    }
];
