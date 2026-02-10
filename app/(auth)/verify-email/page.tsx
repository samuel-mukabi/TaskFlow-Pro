import React from 'react';
import { Mail, ArrowLeft, Zap } from 'lucide-react';

const VerifyEmailPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 font-sans text-slate-900">

            <div className="mb-8 flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Zap className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight">TaskFlow Pro</span>
            </div>

            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-indigo-600" />
                </div>

                <h1 className="text-2xl font-bold text-slate-900 mb-3">Check your inbox</h1>

                <p className="text-slate-600 mb-8 leading-relaxed">
                    We sent a verification link to <span className="font-bold text-slate-900">name@company.com</span>.
                    Please click the link to verify your account and get started.
                </p>

                <div className="space-y-4">
                    <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition shadow-lg shadow-indigo-200">
                        Open Email App
                    </button>

                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                        Didn't receive the email?
                        <button className="text-indigo-600 font-bold hover:underline">Click to resend</button>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <a href="/login" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition">
                        <ArrowLeft className="w-4 h-4" /> Back to log in
                    </a>
                </div>
            </div>

        </div>
    );
};

export default VerifyEmailPage;