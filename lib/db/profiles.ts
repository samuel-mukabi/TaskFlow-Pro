export async function getUserProfile(supabase: any, userId: string) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

    if (error) {
        console.error('Error fetching user profile:', error)
        return null
    }

    return data
}

export async function updateUserProfile(supabase: any, userId: string, profileData: any) {
    const { data, error } = await supabase
        .from('users')
        .update(profileData)
        .eq('id', userId)

    if (error) {
        console.error('Error updating user profile:', error)
        return null
    }

    return data
}