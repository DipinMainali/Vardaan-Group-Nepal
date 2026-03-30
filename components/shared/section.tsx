import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "gray" | "dark" | "primary";
}

export default function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  const variants = {
    default: "bg-white",
    gray: "bg-dark-50",
    dark: "bg-dark-900 text-white",
    primary: "bg-primary text-white",
  };

  return (
    <section
      id={id}
      className={cn("section-padding", variants[variant], className)}
    >
      <div className="container-main">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="heading-primary">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-body max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-primary",
          centered && "mx-auto",
        )}
      />
    </div>
  );
}
