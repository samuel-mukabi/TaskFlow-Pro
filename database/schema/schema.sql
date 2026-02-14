CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE public.profiles
(
    id           uuid PRIMARY KEY,
    email        TEXT,
    full_name    TEXT,
    avatar_url   TEXT,
    job_title    TEXT,
    bio          TEXT,
    role         TEXT        DEFAULT 'Member'::TEXT,
    department   TEXT,
    status       TEXT        DEFAULT 'Active'::TEXT,
    created_at   timestamptz DEFAULT timezone('utc'::TEXT, NOW()),
    updated_at   timestamptz DEFAULT timezone('utc'::TEXT, NOW()),
    workspace_id uuid        DEFAULT gen_random_uuid()
);

CREATE TABLE public.workspaces
(
    id         uuid PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
    name       TEXT NOT NULL,
    owner_id   uuid,
    created_at timestamptz      DEFAULT timezone('utc'::TEXT, NOW()),
    updated_at timestamptz      DEFAULT timezone('utc'::TEXT, NOW()),
    logo       CHARACTER VARYING,
    url        TEXT
);

CREATE TABLE public.workspace_members
(
    workspace_id uuid NOT NULL,
    profile_id   uuid NOT NULL,
    role         TEXT        DEFAULT 'Member'::TEXT,
    joined_at    timestamptz DEFAULT timezone('utc'::TEXT, NOW()),
    PRIMARY KEY (workspace_id, profile_id)
);

CREATE TABLE public.projects
(
    id           uuid PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
    workspace_id uuid NOT NULL,
    title        TEXT NOT NULL,
    description  TEXT,
    status       TEXT             DEFAULT 'Planning'::TEXT,
    priority     TEXT             DEFAULT 'Medium'::TEXT,
    start_date   timestamptz,
    end_date     timestamptz,
    color        TEXT,
    icon         TEXT,
    created_by   uuid,
    created_at   timestamptz      DEFAULT timezone('utc'::TEXT, NOW()),
    updated_at   timestamptz      DEFAULT timezone('utc'::TEXT, NOW())
);

CREATE TABLE public.project_members
(
    project_id uuid NOT NULL,
    profile_id uuid NOT NULL,
    role       TEXT        DEFAULT 'Member'::TEXT,
    joined_at  timestamptz DEFAULT timezone('utc'::TEXT, NOW()),
    PRIMARY KEY (project_id, profile_id)
);

CREATE TABLE public.tasks
(
    id          uuid PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
    project_id  uuid NOT NULL,
    title       TEXT NOT NULL,
    description TEXT,
    status      TEXT             DEFAULT 'To Do'::TEXT,
    priority    TEXT             DEFAULT 'Medium'::TEXT,
    assignee_id uuid,
    due_date    timestamptz,
    created_at  timestamptz      DEFAULT timezone('utc'::TEXT, NOW()),
    updated_at  timestamptz      DEFAULT timezone('utc'::TEXT, NOW())
);

CREATE TABLE public.activities
(
    id         uuid PRIMARY KEY DEFAULT extensions.uuid_generate_v4(),
    profile_id    uuid NOT NULL,
    project_id uuid,
    task_id    uuid,
    action     TEXT NOT NULL,
    metadata   jsonb            DEFAULT '{}'::jsonb,
    created_at timestamptz      DEFAULT timezone('utc'::TEXT, NOW())
);

-- Foreign key constraints

ALTER TABLE public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users (id);

ALTER TABLE public.profiles
    ADD CONSTRAINT profiles_workspace_id_fkey FOREIGN KEY (workspace_id) REFERENCES public.workspaces (id);

ALTER TABLE public.workspaces
    ADD CONSTRAINT workspaces_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.profiles (id);

ALTER TABLE public.workspace_members
    ADD CONSTRAINT workspace_members_workspace_id_fkey FOREIGN KEY (workspace_id) REFERENCES public.workspaces (id),
    ADD CONSTRAINT workspace_members_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles (id);

ALTER TABLE public.projects
    ADD CONSTRAINT projects_workspace_id_fkey FOREIGN KEY (workspace_id) REFERENCES public.workspaces (id),
    ADD CONSTRAINT projects_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.profiles (id);

ALTER TABLE public.project_members
    ADD CONSTRAINT project_members_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects (id),
    ADD CONSTRAINT project_members_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles (id);

ALTER TABLE public.tasks
    ADD CONSTRAINT tasks_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects (id),
    ADD CONSTRAINT tasks_assignee_id_fkey FOREIGN KEY (assignee_id) REFERENCES public.profiles (id);

ALTER TABLE public.activities
    ADD CONSTRAINT activities_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles (id),
    ADD CONSTRAINT activities_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects (id),
    ADD CONSTRAINT activities_task_id_fkey FOREIGN KEY (task_id) REFERENCES public.tasks (id);

-- Indexes (recommended based on common RLS/lookups)

CREATE INDEX IF NOT EXISTS idx_profiles_workspace_id ON public.profiles (workspace_id);
CREATE INDEX IF NOT EXISTS idx_workspace_members_profile_id ON public.workspace_members (profile_id);
CREATE INDEX IF NOT EXISTS idx_projects_workspace_id ON public.projects (workspace_id);
CREATE INDEX IF NOT EXISTS idx_tasks_project_id ON public.tasks (project_id);
CREATE INDEX IF NOT EXISTS idx_tasks_assignee_id ON public.tasks (assignee_id);
CREATE INDEX IF NOT EXISTS idx_activities_user_id ON public.activities (profile_id);