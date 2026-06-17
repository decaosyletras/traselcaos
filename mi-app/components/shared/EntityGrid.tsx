import { ReactNode } from "react";

interface EntityGridProps {
  children: ReactNode;
}

export default function EntityGrid({
  children,
}: EntityGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
      "
    >
      {children}
    </div>
  );
}