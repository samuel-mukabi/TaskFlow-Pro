"use client";

import { useEffect, useState } from 'react';
import { useUser } from "@/context/UserContext";
import { fetchUserProfile } from "@/app/actions/profiles";
import { UserProfile } from "@/types";

export const useUserProfile = () => {
    const { user } = useUser();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                const userProfile = await fetchUserProfile(user.id);
                if (userProfile) {
                    setProfile(userProfile);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user]);

    return { profile, loading, user };
};
