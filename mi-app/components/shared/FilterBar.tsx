interface FilterBarProps {
  children: React.ReactNode;
}

export default function FilterBar({
  children,
}: FilterBarProps) {
  return (
    <div
      className="
        mb-10
        flex
        flex-wrap
        gap-3
      "
    >
      {children}
    </div>
  );
}