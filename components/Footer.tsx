import React from 'react'
import {Zap} from "lucide-react";

const Footer = () => {
    return (
        <div>
            {/* --- Footer --- */}
            <footer className="bg-white border-t border-slate-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                                <Zap className="text-white w-3 h-3"/>
                            </div>
                            <span className="font-bold text-lg">TaskFlow Pro</span>
                        </div>
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} TaskFlow Pro Inc.<br/>All rights reserved.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Integrations</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Changelog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600">Documentation</a></li>
                            <li><a href="#" className="hover:text-indigo-600">API Reference</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </footer></div>
    )
}
export default Footer
