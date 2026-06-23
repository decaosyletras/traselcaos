"use client";

import { useMemo, useState } from "react";

interface SearchItem {
  id: string;
  title: string;
  description?: string;
}

interface SmartSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  items: SearchItem[];
}

export default function SmartSearch({
  value,
  onChange,
  placeholder,
  items,
}: SmartSearchProps) {
  const [focused, setFocused] = useState(false);

  const suggestions = useMemo(() => {
    const term = value.toLowerCase().trim();

    if (!term) return [];

    return items
      .filter((item) =>
        item.title.toLowerCase().includes(term)
      )
      .slice(0, 6);
  }, [value, items]);

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() =>
          setTimeout(() => setFocused(false), 150)
        }
        className="
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          px-4
          py-3
          outline-none
          focus:border-cyan-500
          transition
        "
      />

      {focused && suggestions.length > 0 && (
        <div
          className="
            absolute
            top-full
            left-0
            right-0
            mt-2
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            overflow-hidden
            z-50
            shadow-xl
          "
        >
          {suggestions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.title)}
              className="
                w-full
                text-left
                px-4
                py-3
                hover:bg-zinc-800
                transition
              "
            >
              <div className="font-medium">
                {item.title}
              </div>

              {item.description && (
                <div className="text-xs text-zinc-500 mt-1">
                  {item.description}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}