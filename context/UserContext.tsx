'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createClient } from "@/utils/supabase/client";

const UserContext = createContext<{ user: any; session: any } | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
    const supabase = createClient()
    const [user, setUser] = useState<any | null>(null)
    const [session, setSession] = useState<any | null>(null)

    useEffect(() => {
        // Get current session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setUser(session?.user ?? null)
        })

        // Listen for login/logout
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session)
                setUser(session?.user ?? null)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    return (
        <UserContext.Provider value={{ user, session }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}