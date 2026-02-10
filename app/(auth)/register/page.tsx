"use client"

import React, { useState } from 'react';
import { Zap, Github, Mail, Lock, User, BriefcaseBusiness } from 'lucide-react';
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { registerWithEmail, signInWithOAuth } from "@/utils/supabase/auth";



const RegisterPage = () => {
    const router = useRouter();

    const [fullname, setFullname] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>("")
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);



    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg(null);

        try {
            const { error } = await registerWithEmail(fullname, email, password, jobTitle, router);
            if (error) {
                setErrorMsg(error.message);
            }
        } catch (err) {
            setErrorMsg('An unexpected error occurred.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        await signInWithOAuth('google', router);
    }

    const handleGithubLogin = async () => {
        await signInWithOAuth('github', router);
    }
    return (
        <div className="min-h-screen min-w-screen flex bg-white">

            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-36 py-12">
                <div className="mb-8">
                    <a href="/" className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <Zap className="text-white w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">TaskFlow Pro</span>
                    </a>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Create an account</h1>
                    <p className="text-slate-600">Start your 14-day free trial. No credit card required.</p>
                </div>

                {/* Social Register */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition font-medium text-slate-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>
                    <button onClick={handleGithubLogin} className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition font-medium text-slate-700">
                        <Github className="w-5 h-5" />
                        GitHub
                    </button>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-slate-500">Or sign up with email</span>
                    </div>
                </div>

                {/* Register Form */}
                <form onSubmit={handleSignUp}>
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2.5 border-b border-slate-300 focus:outline-none text-sm focus:border-black focus:placeholder-transparent"
                                    placeholder="John Doe"
                                    required={true}
                                />
                            </div>
                        </div>

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
                                    className="block w-full pl-10 pr-3 py-2.5 border-b border-slate-300 focus:outline-none text-sm focus:border-black focus:placeholder-transparent"
                                    placeholder="name@company.com"
                                    required={true}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2.5 border-b border-slate-300 focus:outline-none text-sm focus:border-black focus:placeholder-transparent"
                                    placeholder="At least 8 characters"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <BriefcaseBusiness className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="Job Title"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2.5 border-b border-slate-300 focus:outline-none text-sm focus:border-black focus:placeholder-transparent"
                                    placeholder="Don't exceed 30 characters"
                                    required={true}
                                />
                            </div>
                        </div>
                        {jobTitle.length > 30 && (
                            <p className="aboslute text-sm text-red-600 my-3">Job title should not exceed 10 characters.</p>
                        )}

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-slate-300 rounded" required={true} />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-slate-700">I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a></label>
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none disabled:opacity-50">
                            Create account
                        </button>
                        {errorMsg && (
                            <p className="text-sm text-red-600">{errorMsg}</p>
                        )}
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-slate-600">
                    Already have an account?{' '}
                    <a href="/login" className="font-bold text-indigo-600 hover:text-indigo-500">
                        Log in
                    </a>
                </p>
            </div>

            {/* Right Side - Benefits */}
            <div className="hidden lg:flex relative lg:w-1/2 bg-slate-50 border-l border-slate-200 flex-col justify-center px-16">
                <div className="absolute inset-0 bg-linear-to-tl from-stone-400/10 to-blue-100/10 z-10"></div>
                <div className="absolute inset-0 overflow-hidden">
                    {/* Abstract Background pattern */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-stone-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-linear-to-t from-stone-300/60 to-transparent z-20"></div>
                </div>


                <h2 className="text-3xl font-bold text-black mb-8">Join thousands of developers shipping faster.</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div>
                            <h3 className="font-bold text-lg text-black">Real-time collaboration</h3>
                            <p className="text-slate-600">See changes as they happen. No refresh needed.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div>
                            <h3 className="font-bold text-lg text-black">AI-Powered Workflows</h3>
                            <p className="text-slate-600">Auto-generate specs and summaries.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div>
                            <h3 className="font-bold text-lg text-black">Enterprise Security</h3>
                            <p className="text-slate-600">SOC2 Type II ready infrastructure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;