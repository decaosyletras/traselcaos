import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className="
          min-h-screen
          bg-zinc-950
          text-white
        "
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}