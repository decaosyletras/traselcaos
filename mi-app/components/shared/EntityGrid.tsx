import { ReactNode } from "react";

interface EntityGridProps {
  children: ReactNode;
}

export default function EntityGrid({ children }: EntityGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        2xl:grid-cols-6
        gap-5
      "
    >
      {children}
    </div>
  );
}