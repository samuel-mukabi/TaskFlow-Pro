import {createClient} from './client'
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import {ProfileUpdates} from "@/utils/supabase/types/types";

const supabase = createClient()

// Email/password sign-in
export async function logInWithEmail(email: string, password: string, router: AppRouterInstance) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error('Login error:', error.message)
        return {error}
    }

    router.push('/dashboard')
    return {data}
}

// Email/password sign-up
export async function registerWithEmail(fullName: string, email: string, password: string, jobTitle: string, router: AppRouterInstance) {
    const {data, error} = await supabase.auth.signUp({
        options: {
            data: {
                full_name: fullName,
                job_title: jobTitle,
            }
        },
        email,
        password,
    })

    if (error) {
        console.error('Sign-up error:', error.message)
        return {error}
    }
    router.push('/dashboard')
    return {data}
}

// OAuth sign-in (GitHub, Google, etc.)
export async function signInWithOAuth(provider: 'github' | 'google' | 'gitlab', router: AppRouterInstance) {
    try {
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        })
        router.push('/dashboard')
    } catch (e) {
        console.error('An unexpected error occurred. Please try again.', e);
    }
}

// Sign out
export async function signOut(router: AppRouterInstance) {
    const {error} = await supabase.auth.signOut()
    if (error) {
        console.error('Sign-out error:', error.message)
    }
    router.push('/login')
}

//Update User Profile
export async function updateProfile(updates: ProfileUpdates)  {
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
        console.error('User fetch error:', userError?.message)
        return { error: userError || new Error('User not found') }
    }

    // 1️⃣ Update auth user (email + metadata)
    const { error: authError } = await supabase.auth.updateUser({
        email: updates.email,
        data: {
            full_name: updates.fullName,
            job_title: updates.jobTitle,
            bio: updates.bio
        }
    })

    if (authError) {
        console.error('Auth profile update error:', authError.message)
        return { error: authError }
    }

    // 2️⃣ Update public users table
    const { error: profileError } = await supabase
        .from('users')
        .update({
            full_name: updates.fullName,
            job_title: updates.jobTitle,
            bio: updates.bio,
            email: updates.email
        })
        .eq('id', user.id)

    if (profileError) {
        console.error('Public user update error:', profileError.message)
        return { error: profileError }
    }

    return { success: true }
}
