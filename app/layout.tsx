import type {Metadata} from "next";
import "./globals.css";
import {UserProvider} from "@/context/UserContext";

export const metadata: Metadata = {
    title: "TaskFlow Pro",
    description: "A real-time team project management application where teams can create projects, assign tasks, track progress and collaborate.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className="antialiased"
        >
        <UserProvider>
            {children}
        </UserProvider>
        </body>
        </html>
);
}
