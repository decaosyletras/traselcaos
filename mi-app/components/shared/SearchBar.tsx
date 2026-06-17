interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Buscar...",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-cyan-900/20
          bg-zinc-900
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-cyan-500
        "
      />
    </div>
  );
}