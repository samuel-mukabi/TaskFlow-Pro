import { createClient } from './client'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const supabase = createClient()

// Email/password sign-in
export async function logInWithEmail(email: string, password: string, router: AppRouterInstance) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error('Login error:', error.message)
        return { error }
    }

    router.push('/dashboard')
    return { data }
}

// Email/password sign-up
export async function registerWithEmail(fullName: string, email: string, password: string, jobTitle: string, router: AppRouterInstance) {
    const { data, error } = await supabase.auth.signUp({
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
        return { error }
    }
    router.push('/dashboard')
    return { data }
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
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Sign-out error:', error.message)
    }
    router.push('/login')
}
