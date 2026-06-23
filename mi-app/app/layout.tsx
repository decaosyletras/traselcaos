import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/BackButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-950 text-white">

        <Navbar />

        <ScrollToTop />

        <main className="pt-16">
          {children}
        </main>

        <Footer />
        <BackButton />

      </body>
    </html>
  );
}