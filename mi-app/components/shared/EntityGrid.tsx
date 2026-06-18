import { ReactNode } from "react";

interface EntityGridProps {
  children: ReactNode;
}

export default function EntityGrid({ children }: EntityGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-3
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
      "
    >
      {children}
    </div>
  );
}