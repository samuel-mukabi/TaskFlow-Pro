import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className="antialiased"
      >
          <Navbar  fontClass={montserrat.className} />
        {children}
          <Footer />
      </main>
  );
}
