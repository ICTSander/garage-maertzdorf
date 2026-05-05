"use client";

import { useEffect, useRef, ReactNode } from "react";

type Variant = "up" | "left" | "right" | "fade";

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "up",
  threshold = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => el.classList.add("is-visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`anim-base anim-${variant} ${className}`}>
      {children}
    </div>
  );
}
