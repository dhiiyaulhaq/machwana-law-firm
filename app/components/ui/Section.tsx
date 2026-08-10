import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "white" | "light" | "dark";
};

export default function Section({
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-slate-50",
    dark: "bg-slate-950 text-white",
  };

  return (
    <section
      className={`
        py-24
        md:py-28
        lg:py-32
        ${backgrounds[background]}
        ${className}
      `}
    >
      {children}
    </section>
  );
}