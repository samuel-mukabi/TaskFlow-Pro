"use client"

import React, {useState} from 'react'
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {useUser} from "@/context/UserContext";

interface NavbarProps {
    fontClass?: string; // optional font class
}

const Navbar = ({fontClass}: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {user} = useUser()

    return (
        <nav
            className={`${fontClass ?? ""} sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 text-center`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2 min-w-50">
                        <Link href="/" className="font-bold text-xl tracking-tight">TaskFlow Pro</Link>
                    </div>

                    {/* Desktop Nav */}
                        <div className="flex items-center space-x-12">
                            <Link href="/features"
                                  className="text-slate-600 hover:text-indigo-600 transition">Features</Link>
                            <Link href="/integrations"
                                  className="text-slate-600 hover:text-indigo-600 transition">Integrations</Link>
                            <Link href="/pricing"
                                  className="text-slate-600 hover:text-indigo-600 transition">Pricing</Link>
                        </div>
                        <div className="flex items-center space-x-5 min-w-50 justify-end">
                            {!user ?
                                (
                                    <>
                                        <Link href="/login" className="text-slate-900 hover:text-indigo-600 px-2 py-1">Log in</Link>
                                        <Link href="/register" className="bg-indigo-600 text-white px-2 py-1 rounded-sm text-[14px] font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">Get Started</Link>
                                    </>
                                ) : (<Link href="/dashboard" className="text-slate-900 hover:text-indigo-600 px-2 py-1">Dashboard</Link>)

                            }
                        </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4">
                    <Link href="/features" className="block text-slate-600">Features</Link>
                    <Link href="/integrations" className="block text-slate-600">Integrations</Link>
                    <Link href="/login" className="w-full text-left font-medium text-indigo-600">Log in</Link>
                    <Link href="/register" className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg">Get
                        Started</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar