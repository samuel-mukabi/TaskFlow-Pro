'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createClient } from "@/database/supabase/client";

const UserContext = createContext<{ user: any; session: any, loading: boolean } | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
    const supabase = createClient()
    const [user, setUser] = useState<any | null>(null)
    const [session, setSession] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check active session and validate with server
        const checkUser = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession()

                if (session?.user) {
                    // Validate session with server (checks if the user still exists)
                    const { data: { user }, error } = await supabase.auth.getUser()

                    if (error || !user) {
                        // User is deleted or a token is invalid on the server side
                        await supabase.auth.signOut()
                        setSession(null)
                        setUser(null)
                    } else {
                        setSession(session)
                        setUser(user)
                    }
                } else {
                    setSession(null)
                    setUser(null)
                }
            } catch (error) {
                console.error("Error checking user session:", error)
                setSession(null)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        checkUser()

        // Listen for login/logout
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session)
                setUser(session?.user ?? null)
                setLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    return (
        <UserContext.Provider value={{ user, session, loading }}>
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