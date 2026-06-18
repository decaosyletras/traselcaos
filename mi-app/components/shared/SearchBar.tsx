"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar...",
}: SearchBarProps) {
  return (
    <div className="mt-10 mb-12">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-5
            h-5
            text-zinc-500
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            w-full
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            pl-12
            pr-4
            py-3
            text-white
            placeholder:text-zinc-500
            focus:outline-none
            focus:border-cyan-500
            transition-colors
          "
        />
      </div>
    </div>
  );
}