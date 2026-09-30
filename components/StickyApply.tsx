"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/content";
import { Arrow } from "./Icons";

/** Phone-only apply bar: appears after the hero, hides at the closing call to action. */
export default function StickyApply() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const end = document.getElementById("apply");
    let raf = 0;
    const update = () => {
      raf = 0;
      const past = window.scrollY > window.innerHeight * 0.8;
      const atEnd = end ? end.getBoundingClientRect().top < window.innerHeight * 0.7 : false;
      setShow(past && !atEnd);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a
      className="sticky-apply btn btn--gold"
      data-show={show}
      href={EVENT.applyUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={show ? 0 : -1}
    >
      Apply for invitation <Arrow />
    </a>
  );
}
