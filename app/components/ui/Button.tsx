import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  arrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-orange-600 text-white hover:bg-orange-700 hover:-translate-y-1 shadow-lg hover:shadow-xl",

    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:-translate-y-1",
  };

  return (
    <Link
      href={href}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {children}

      {arrow && <ArrowRight size={18} />}
    </Link>
  );
}