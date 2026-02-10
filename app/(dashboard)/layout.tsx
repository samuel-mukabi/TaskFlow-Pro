import Sidebar from "@/components/Sidebar";



export default function DashboardLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="antialiased flex min-h-screen">
          <Sidebar fontClass="font-body"/>
          <div className="flex-1 max-w-7xl mx-auto">
            {children}
          </div>
      </main>
  );
}
