-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspace_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

-- Helper function to check workspace membership
CREATE OR REPLACE FUNCTION public.get_user_workspace_ids()
RETURNS TABLE (workspace_id uuid) AS $$
BEGIN
    RETURN QUERY
    SELECT wm.workspace_id
    FROM public.workspace_members wm
    WHERE wm.profile_id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles Policies
CREATE POLICY "Profiles are viewable by workspace members" ON public.profiles
    FOR SELECT USING (
        workspace_id IN (SELECT get_user_workspace_ids())
        OR id = auth.uid()
    );

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (id = auth.uid());

-- Workspaces Policies
CREATE POLICY "Workspaces are viewable by members" ON public.workspaces
    FOR SELECT USING (
        id IN (SELECT get_user_workspace_ids())
    );

CREATE POLICY "Owners can update workspace" ON public.workspaces
    FOR UPDATE USING (owner_id = auth.uid());

-- Workspace Members Policies
CREATE POLICY "Workspace members are viewable by fellow members" ON public.workspace_members
    FOR SELECT USING (
        workspace_id IN (SELECT get_user_workspace_ids())
    );

-- Projects Policies
CREATE POLICY "Projects are viewable by workspace members" ON public.projects
    FOR SELECT USING (
        workspace_id IN (SELECT get_user_workspace_ids())
    );

CREATE POLICY "Workspace members can create projects" ON public.projects
    FOR INSERT WITH CHECK (
        workspace_id IN (SELECT get_user_workspace_ids())
    );

CREATE POLICY "Owners and creators can update projects" ON public.projects
    FOR UPDATE USING (
        created_by = auth.uid()
        OR workspace_id IN (
            SELECT id FROM public.workspaces WHERE owner_id = auth.uid()
        )
    );

CREATE POLICY "Owners and creators can delete projects" ON public.projects
    FOR DELETE USING (
        created_by = auth.uid()
        OR workspace_id IN (
            SELECT id FROM public.workspaces WHERE owner_id = auth.uid()
        )
    );

-- Project Members Policies
CREATE POLICY "Project members are viewable by workspace members" ON public.project_members
    FOR SELECT USING (
        project_id IN (
            SELECT id FROM public.projects WHERE workspace_id IN (SELECT get_user_workspace_ids())
        )
    );

CREATE POLICY "Workspace members can add project members" ON public.project_members
    FOR INSERT WITH CHECK (
        project_id IN (
            SELECT id FROM public.projects WHERE workspace_id IN (SELECT get_user_workspace_ids())
        )
    );

-- Tasks Policies
CREATE POLICY "Tasks are viewable by workspace members" ON public.tasks
    FOR SELECT USING (
        project_id IN (
            SELECT id FROM public.projects WHERE workspace_id IN (SELECT get_user_workspace_ids())
        )
    );

CREATE POLICY "Workspace members can manage tasks" ON public.tasks
    FOR ALL USING (
        project_id IN (
            SELECT id FROM public.projects WHERE workspace_id IN (SELECT get_user_workspace_ids())
        )
    );

-- Activities Policies
CREATE POLICY "Activities are viewable by workspace members" ON public.activities
    FOR SELECT USING (
        profile_id = auth.uid()
        OR project_id IN (
            SELECT id FROM public.projects WHERE workspace_id IN (SELECT get_user_workspace_ids())
        )
    );
