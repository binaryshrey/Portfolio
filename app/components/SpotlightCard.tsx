"use client";

import { ComponentProps, CSSProperties } from "react";
import clsx from "clsx";

type SpotlightCardProps = ComponentProps<"div">;

export default function SpotlightCard({
  className,
  onMouseMove,
  onMouseLeave,
  onFocus,
  onBlur,
  children,
  ...rest
}: SpotlightCardProps) {
  const setXY = (el: HTMLElement, x: number, y: number) => {
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      tabIndex={0}
      className={clsx(
        "relative isolate overflow-hidden rounded-2xl border border-[#262626] bg-[#171717]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:content-[''] before:opacity-0 before:transition-opacity before:[background:radial-gradient(800px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.06),transparent_40%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] after:opacity-0 after:transition-opacity after:[background:radial-gradient(500px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.1),transparent_40%)]",
        "hover:before:opacity-100 hover:after:opacity-100 focus-visible:before:opacity-100 focus-visible:after:opacity-100",
        className
      )}
      onMouseMove={(e) => {
        const t = e.currentTarget as HTMLDivElement;
        const r = t.getBoundingClientRect();
        setXY(t, e.clientX - r.left, e.clientY - r.top);
        onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        const t = e.currentTarget as HTMLDivElement;
        setXY(t, -9999, -9999);
        onMouseLeave?.(e);
      }}
      onFocus={(e) => {
        const t = e.currentTarget as HTMLDivElement;
        const r = t.getBoundingClientRect();
        setXY(t, r.width / 2, r.height / 2);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        const t = e.currentTarget as HTMLDivElement;
        setXY(t, -9999, -9999);
        onBlur?.(e);
      }}
      style={{ "--x": "-9999px", "--y": "-9999px" } as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}
