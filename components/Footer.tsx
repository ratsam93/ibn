import Link from "next/link";
import { EVENT, MAIN_SITE } from "@/lib/content";
import { tel } from "./Station";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <p className="footer__brand">Indian Business Network</p>
          <p className="footer__tag">{EVENT.tagline}</p>
          <p className="footer__blurb">
            Fostering bilateral trade, executive leadership, and cross-border innovation between
            India and the United Kingdom.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="footer__h">Explore</p>
          <Link href="/ceremony">The Awards Ceremony</Link>
          <Link href="/event-details">Event details</Link>
          <Link href="/programme">5-day programme</Link>
          <Link href="/awards">Award categories</Link>
          <Link href="/delegates">Delegates &amp; FAQ</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/media">Media &amp; materials</Link>
          <Link href="/about">About IBN</Link>
        </nav>
        <div>
          <p className="footer__h">Secretariat</p>
          <a href={`mailto:${EVENT.email}`}>{EVENT.email}</a>
          <a href={MAIN_SITE}>ibnonline.co.uk</a>
          <a href={tel("+44 7587 260254")}>Event Coordinator: +44 7587 260254</a>
          <a href={tel("+44 7960 446339")}>Secretary: +44 7960 446339</a>
          <a href={tel("+44 7383 969604")}>Treasurer: +44 7383 969604</a>
        </div>
      </div>
      <p className="footer__legal">
        © 2026 Indian Business Network. All rights reserved. House of Commons, British Parliament,
        Westminster, London, UK.
      </p>
    </footer>
  );
}
