import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionTitleProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  const titleColor =
    theme === "dark"
      ? "text-white"
      : "text-slate-900";

  const descriptionColor =
    theme === "dark"
      ? "text-slate-300"
      : "text-slate-600";

  const eyebrowStyle =
    theme === "dark"
      ? "border-orange-400/30 bg-orange-500/10 text-orange-300"
      : "border-orange-200 bg-orange-50 text-orange-600";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${eyebrowStyle}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-heading text-4xl font-bold leading-tight md:text-5xl ${titleColor}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${descriptionColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}