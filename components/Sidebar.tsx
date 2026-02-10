"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUserProfile } from "@/hooks/useUserProfile";
import { SIDEBAR_LINKS } from "@/constants/navigation";

const Sidebar = ({ fontClass }: { fontClass?: string }) => {
    const pathname = usePathname()
    const { profile } = useUserProfile()

    // Default to empty strings if the profile is loading or null
    const fullName = profile?.full_name || ""
    const email = profile?.email || ""
    const avatar = profile?.avatar_url || ""

    // Calculate initials safely
    const initials = fullName
        ? fullName.trim().split(' ').map(name => name[0]).join('').toUpperCase().slice(0, 2)
        : "";

    return (
        <div className="max-h-screen sticky top-0 left-0 w-64 border-r border-stone-300 flex flex-col bg-stone-50">
            <h1 className="text-md font-bold px-3 py-4 border-b border-stone-300">TaskFlow Pro</h1>

            <nav className={`flex-1 px-4 py-4 ${fontClass ?? ''}`}>
                <ul className={`space-y-2 ${fontClass ?? ''}`}>
                    {SIDEBAR_LINKS.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`block px-3 py-2 rounded-md text-xs font-medium transition-colors ${pathname === link.href
                                    ? 'bg-stone-200 text-slate-900'
                                    : 'text-slate-700 hover:bg-stone-100 hover:text-slate-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <section className="absolute bottom-0 w-full px-4 py-3 border-t border-gray-300">
                <div className="flex flex-row gap-2 items-center">
                    {/* Placeholder for user avatar and name */}
                        <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-sm font-medium text-slate-600">
                            {!avatar ? initials : <img src={avatar} alt="" className="rounded-full" />}
                        </div>
                    <div className="flex flex-col leading-tight">
                        <p className="text-sm font-extrabold text-black">{fullName}</p>
                        <p className="text-[11px]">{email}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Sidebar
