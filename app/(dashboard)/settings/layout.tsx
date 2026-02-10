"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Shield, Bell, Briefcase, CreditCard, Layers } from "lucide-react";

const sidebarItems = [
    { name: "Profile", href: "/settings", icon: User },
    { name: "Account", href: "/settings/account", icon: User }, // Placeholder, maybe same as profile? Or distinct. Original had both.
    { name: "Notifications", href: "/settings/notifications", icon: Bell },
    { name: "Workspace", href: "/settings/workspace", icon: Briefcase },
    { name: "Billing", href: "/settings/billing", icon: CreditCard },
    { name: "Integrations", href: "/settings/integrations", icon: Layers },
    { name: "Security", href: "/settings/security", icon: Shield },
];

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="p-8 min-h-screen">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
                <p className="text-slate-600">
                    Manage your account and workspace preferences.
                </p>
            </div>

            {/* Settings Navigation */}
            <div className="flex gap-8">
                {/* Sidebar Navigation */}
                <div className="w-64 shrink-0">
                    <nav className="space-y-1">
                        {sidebarItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${isActive
                                            ? "bg-zinc-100 text-stone-700"
                                            : "text-slate-700 hover:bg-zinc-50"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 max-w-4xl">{children}</div>
            </div>
        </div>
    );
}
