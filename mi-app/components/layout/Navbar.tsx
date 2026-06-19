"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-900/20 bg-zinc-950/90 backdrop-blur">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wider"
          onClick={closeMenu}
        >
          TU SAGA
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/">Inicio</Link>
          {/*<Link href="/libros">Libros</Link>
          <Link href="/universo">Universo</Link>
          <Link href="/cronologia">Cronología</Link>*/}
          <Link href="/conoceme">Conóceme</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-cyan-900/20">
          <div className="flex flex-col gap-4 p-6">

            <Link href="/" onClick={closeMenu}>
              Inicio
            </Link>

            {/*<Link href="/libros" onClick={closeMenu}>
              Libros
            </Link>

            <Link href="/universo" onClick={closeMenu}>
              Universo
            </Link>

            <Link href="/cronologia" onClick={closeMenu}>
              Cronología
            </Link>*/}

            <Link href="/conoceme" onClick={closeMenu}>
              Conóceme
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}