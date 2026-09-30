"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EVENT } from "@/lib/content";

const LINKS = [
  { href: "/programme", label: "Programme" },
  { href: "/awards", label: "Awards" },
  { href: "/delegates", label: "Delegates" },
  { href: "/partners", label: "Partners" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close the sheet whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="nav" data-open={open}>
      <div className="nav__bar">
        <Link className="nav__brand" href="/" aria-label="Indian Business Network, home">
          <Image src="/img/lotus.png" alt="" width={430} height={272} className="nav__mark" priority />
          <span className="nav__word">
            Indian Business Network
            <small>London 2026</small>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Sections">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <a className="btn btn--gold nav__cta" href={EVENT.applyUrl} target="_blank" rel="noopener noreferrer">
          Apply for invitation
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-sheet"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <i aria-hidden />
          <i aria-hidden />
        </button>
      </div>

      <div id="nav-sheet" className="nav__sheet">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
        <a className="btn btn--gold" href={EVENT.applyUrl} target="_blank" rel="noopener noreferrer">
          Apply for invitation
        </a>
      </div>
    </header>
  );
}
