import Link from "next/link";
import { Arrow } from "./Icons";

export type Tone = "gold" | "red" | "saffron" | "indigo" | "green";

export const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;

/** One stop on the transit line: a rail cell (segment + roundel) beside its content. */
export function Station({
  id,
  tone = "gold",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`stn tone-${tone} ${className}`}>
      <div className="stn__rail" aria-hidden>
        <span className="stn__seg" />
        <span className="stn__dot" />
      </div>
      <div className="stn__body">{children}</div>
    </section>
  );
}

/** Opening station of a sub-page. */
export function PageHead({ title, lede, tone = "gold" }: { title: string; lede?: string; tone?: Tone }) {
  return (
    <Station tone={tone} className="page-head">
      <h1 className="h1">{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </Station>
  );
}

/** Closing station of a sub-page: the line ends at a roundel that links onward. */
export function NextStop({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <section className="stn tone-gold nextstop">
      <div className="stn__rail" aria-hidden>
        <span className="stn__seg" />
        <span className="stn__dot stn__dot--terminus" />
      </div>
      <div className="stn__body">
        <Link className="nextstop__link" href={href}>
          <span className="nextstop__note">Next stop</span>
          <span className="nextstop__label">
            {label} <Arrow />
          </span>
          <span className="nextstop__desc">{note}</span>
        </Link>
      </div>
    </section>
  );
}
