"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-cyan-900/20
        bg-zinc-950/90
        backdrop-blur
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between
        "
      >
        <Link
          href="/"
          className="
            text-xl
            font-bold
            tracking-wider
          "
        >
          TU SAGA
        </Link>

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-8
          "
        >
          <Link href="/">
            Inicio
          </Link>

          <Link href="/universo">
            Universo
          </Link>

          <Link href="/libros">
            Libros
          </Link>

          <Link href="/cronologia">
            Cronología
          </Link>

          <Link href="/extras">
            Extras
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className="
            lg:hidden
            border-t
            border-cyan-900/20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              p-6
            "
          >
            <Link href="/">Inicio</Link>
            
            <Link href="/libros">
              Libros
            </Link>

            <Link href="/universo">
              Universo
            </Link>

            <Link href="/cronologia">
              Cronología
            </Link>

            <Link href="/extras">
              Extras
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}