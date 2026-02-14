"use client"

import React, { useState } from 'react';
import { Github, Mail, Lock } from 'lucide-react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { logInWithEmail, signInWithOAuth } from "@/database/supabase/auth";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState<string | null>(null)

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrMsg(null);
        const { error } = await logInWithEmail(email, password, router);
        if (error) {
            setErrMsg(error.message);
        }
        setLoading(false);
    };

    const handleGoogleLogin = () => signInWithOAuth("google", router);
    const handleGithubLogin = () => signInWithOAuth("github", router);

    return (
        <div className="min-h-screen min-w-screen flex bg-white font-sans text-slate-900">

            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-36">
                <div className="mb-8">
                    <a href="/" className="flex items-center gap-2 mb-8">
                        <span className="font-bold text-xl tracking-tight">TaskFlow Pro</span>
                    </a>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
                    <p className="text-slate-600">Please enter your details to access your workspace.</p>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition font-medium text-slate-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>
                    <button
                        onClick={handleGithubLogin}
                        className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition font-medium text-slate-700">
                        <Github className="w-5 h-5" />
                        GitHub
                    </button>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-slate-500">Or continue with email</span>
                    </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleEmailLogin}>
                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2.5 border-b border-slate-300 text-sm focus:outline-none focus:border-black focus:placeholder-transparent"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-slate-700">Password</label>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2.5 border-b border-slate-300 text-sm focus:outline-none focus:border-black focus:placeholder-transparent"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                            Sign in
                        </button>
                        {errMsg && (
                            <p className="text-sm text-red-600">{errMsg}</p>
                        )}
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-slate-600">
                    Don't have an account?{' '}
                    <Link href="/register" className="font-bold text-indigo-600 hover:text-indigo-500">
                        Sign up for free
                    </Link>
                </p>
            </div>

            {/* Right Side - Visuals */}
            <div className="hidden lg:block relative w-1/2 bg-slate-900">
                <div className="absolute inset-0 bg-linear-to-tl from-stone-400/50 stone-100/30 to-blue-100/20 z-10"></div>
                <div className="absolute inset-0 overflow-hidden">
                    {/* Abstract Background pattern */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-neutral-300 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-slate-900 to-transparent z-20"></div>
                </div>

                <div className="relative z-30 flex flex-col justify-end h-full p-16 text-white">
                    <div className="mb-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 max-w-md">
                        <p className="text-lg italic text-slate-200 mb-4">
                            "TaskFlow Pro has completely transformed how our engineering team tracks sprint velocity. The real-time updates are a game changer."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center font-bold">AL</div>
                            <div>
                                <h4 className="font-bold">Sarah Jenkins</h4>
                                <p className="text-sm text-slate-300">CTO at TechGlobal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;