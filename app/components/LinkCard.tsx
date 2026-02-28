"use client";

import Link from "next/link";
import { ComponentProps, CSSProperties } from "react";
import clsx from "clsx";

type LinkCardProps = {
  href: string;
  ariaLabel?: string;
} & ComponentProps<"a">;

export default function LinkCard({
  href,
  ariaLabel,
  className,
  onMouseMove,
  onMouseLeave,
  onFocus,
  onBlur,
  children,
  ...rest
}: LinkCardProps) {
  // Mouse/focus handlers set CSS vars so the radial gradients can follow pointer/focus ring
  const setXY = (el: HTMLElement, x: number, y: number) => {
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(
        "relative isolate overflow-hidden rounded-2xl border border-[#262626] bg-[#171717] group",
        // ---- Spotlight layers ----
        // big, subtle halo (behind content)
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:content-[''] before:opacity-0 before:transition-opacity before:[background:radial-gradient(800px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.06),transparent_40%)]",
        // tight bright halo (behind content)
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] after:opacity-0 after:transition-opacity after:[background:radial-gradient(500px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.1),transparent_40%)]",
        // show halos on hover/focus-visible
        "hover:before:opacity-100 hover:after:opacity-100 focus-visible:before:opacity-100 focus-visible:after:opacity-100",
        className
      )}
      onMouseMove={(e) => {
        const t = e.currentTarget;
        const r = t.getBoundingClientRect();
        setXY(t, e.clientX - r.left, e.clientY - r.top);
        onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        // fade out by moving glow off-card (optional)
        const t = e.currentTarget;
        setXY(t, -9999, -9999);
        onMouseLeave?.(e);
      }}
      onFocus={(e) => {
        // center glow on keyboard focus
        const t = e.currentTarget;
        const r = t.getBoundingClientRect();
        setXY(t, r.width / 2, r.height / 2);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        const t = e.currentTarget;
        setXY(t, -9999, -9999);
        onBlur?.(e);
      }}
      // Ensures TS accepts CSS custom props on style
      style={{ "--x": "-9999px", "--y": "-9999px" } as CSSProperties}
      {...rest}
    >
      {/* Your card content */}
      {children}
    </Link>
  );
}
