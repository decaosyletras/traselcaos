interface Props {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function FilterChip({
  label,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4
        py-2
        rounded-full
        transition
        ${
          active
            ? "bg-cyan-500 text-black"
            : "bg-zinc-900 text-zinc-300"
        }
      `}
    >
      {label}
    </button>
  );
}