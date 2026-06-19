"use client";

import { useRouter } from "next/navigation";

export default function BookNavigation({
  previousBook,
  nextBook,
}: any) {
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-2 gap-4">

      {/* ANTERIOR */}
      <button
        onClick={() =>
          previousBook && router.replace(`/libros/${previousBook.slug}`)
        }
        className="
          group
          text-left
          block
          rounded-2xl
          border border-cyan-900/30
          bg-zinc-900
          p-5
          transition-all
          hover:border-cyan-500/50
          hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
        "
      >
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Libro anterior
        </p>

        {previousBook && (
          <div className="mt-3 flex items-center gap-3">
            <span className="text-2xl text-cyan-400">←</span>
            <p className="font-semibold group-hover:text-cyan-300 transition-colors">
              {previousBook.title}
            </p>
          </div>
        )}
      </button>

      {/* SIGUIENTE */}
      <button
        onClick={() =>
          nextBook && router.replace(`/libros/${nextBook.slug}`)
        }
        className="
          group
          text-right
          block
          rounded-2xl
          border border-cyan-900/30
          bg-zinc-900
          p-5
          transition-all
          hover:border-cyan-500/50
          hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
        "
      >
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Siguiente libro
        </p>

        {nextBook && (
          <div className="mt-3 flex items-center justify-end gap-3">
            <p className="font-semibold group-hover:text-cyan-300 transition-colors">
              {nextBook.title}
            </p>
            <span className="text-2xl text-cyan-400">→</span>
          </div>
        )}
      </button>

    </div>
  );
}