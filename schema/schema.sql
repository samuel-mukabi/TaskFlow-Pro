
-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- PROFILES
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  full_name text,
  avatar_url text,
  job_title text,
  bio text,
  role text default 'Member', -- 'Admin', 'Manager', 'Developer', etc.
  department text,
  status text default 'Active', -- 'Active', 'Away', 'Offline'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- WORKSPACES
create table if not exists public.workspaces (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  owner_id uuid references public.profiles(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- WORKSPACE MEMBERS
create table if not exists public.workspace_members (
  workspace_id uuid references public.workspaces(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  role text default 'Member',
  joined_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (workspace_id, user_id)
);

-- PROJECTS
create table if not exists public.projects (
  id uuid default uuid_generate_v4() primary key,
  workspace_id uuid references public.workspaces(id) on delete cascade not null,
  title text not null,
  description text,
  status text default 'Planning', -- 'Active', 'Planning', 'Archived'
  progress integer default 0,
  priority text default 'Medium',
  start_date timestamp with time zone,
  end_date timestamp with time zone,
  color text, -- e.g., 'bg-red-500' or hex
  icon text, -- SVG string or icon name
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PROJECT MEMBERS (for granular team assignment)
create table if not exists public.project_members (
  project_id uuid references public.projects(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  role text default 'Member',
  joined_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (project_id, user_id)
);

-- TASKS
create table if not exists public.tasks (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references public.projects(id) on delete cascade not null,
  title text not null,
  description text,
  status text default 'To Do', -- 'To Do', 'In Progress', 'In Review', 'Done'
  priority text default 'Medium', -- 'Low', 'Medium', 'High'
  assignee_id uuid references public.profiles(id) on delete set null,
  due_date timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ACTIVITIES
create table if not exists public.activities (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  project_id uuid references public.projects(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete set null,
  action text not null, -- 'created task', 'completed task', 'commented', etc.
  metadata jsonb default '{}'::jsonb, -- Store dynamic details
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES (Basic setup - can be refined)
alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.tasks enable row level security;
alter table public.activities enable row level security;

-- Simple RLS for now: Users can see everything if they are authenticated. 
-- In a real multi-tenant app, you'd restrict by workspace_members.
create policy "Allow logged-in read access" on public.profiles for select using (auth.role() = 'authenticated');
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

create policy "Allow logged-in read access" on public.workspaces for select using (auth.role() = 'authenticated');
create policy "Allow logged-in read access" on public.projects for select using (auth.role() = 'authenticated');
create policy "Allow logged-in read access" on public.tasks for select using (auth.role() = 'authenticated');
create policy "Allow logged-in read access" on public.activities for select using (auth.role() = 'authenticated');


-- FUNCTIONS & TRIGGERS

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger update_profiles_updated_at before update on public.profiles for each row execute procedure update_updated_at_column();
create trigger update_workspaces_updated_at before update on public.workspaces for each row execute procedure update_updated_at_column();
create trigger update_projects_updated_at before update on public.projects for each row execute procedure update_updated_at_column();
create trigger update_tasks_updated_at before update on public.tasks for each row execute procedure update_updated_at_column();
