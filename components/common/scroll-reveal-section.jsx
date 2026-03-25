"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * ScrollRevealSection wrapper component
 * Automatically applies scroll-triggered animations to any section
 * Can be used throughout the website for consistent animation behavior
 */
export function ScrollRevealSection({ children, className = "" }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`evespire-scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
