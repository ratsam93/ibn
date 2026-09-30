"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Signature interaction: the transit line draws itself as the reader travels
 * down the page. Each `.stn__seg` gets a --fill (0..1) from scroll position.
 * Without JS, or with reduced motion, every segment is fully drawn.
 */
export default function RailFill() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // scroll reveals: content is visible by default; only hidden once JS is ready
    const items = Array.from(document.querySelectorAll<HTMLElement>(".stn:not(.hero) .stn__body > *"));
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    for (const el of items) {
      if (el.getBoundingClientRect().top > vh) {
        el.classList.add("reveal");
        io.observe(el);
      }
    }

    const segs = Array.from(document.querySelectorAll<HTMLElement>(".stn__seg"));
    let raf = 0;

    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.62;
      for (const seg of segs) {
        const r = seg.getBoundingClientRect();
        const fill = Math.min(1, Math.max(0, (line - r.top) / Math.max(r.height, 1)));
        seg.style.setProperty("--fill", fill.toFixed(3));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
