"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // No mostrar en Home
  if (pathname === "/") {
    return null;
  }

  return (
    <button
      onClick={() => router.back()}
      className="
        fixed
        bottom-6
        left-6
        z-50
        w-12
        h-12
        rounded-full
        bg-cyan-500
        text-black
        font-bold
        shadow-lg
        hover:bg-cyan-400
        transition
      "
      aria-label="Volver"
    >
      ←
    </button>
  );
}