"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-triggered reveal animations
 * Applies fade-up animation when element enters viewport
 * Can be used on any section throughout the website
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the revealed class when element enters viewport
            entry.target.classList.add("evespire-scroll-revealed");
            // Stop observing after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before element is in view
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
}
