import Footer from "@/components/Footer";

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className="antialiased flex items-center justify-center min-h-screen min-w-screen"
      >
        {children}
      </main>
  );
}
