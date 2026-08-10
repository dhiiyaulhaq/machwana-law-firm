import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
};

export default function Grid({
  children,
  columns = 2,
  className = "",
}: GridProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  };

  return (
    <div
      className={`
        grid
        ${gridClass[columns]}
        gap-10
        lg:gap-16
        ${className}
      `}
    >
      {children}
    </div>
  );
}