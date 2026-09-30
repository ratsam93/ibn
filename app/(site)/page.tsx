import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import { Arrow, Mail } from "@/components/Icons";
import { Station } from "@/components/Station";
import { asset } from "@/lib/asset";
import { AWARDS, DAYS, EVENT, PILLARS } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO: the line starts at Westminster */}
      <section className="stn tone-gold hero">
        <div className="stn__rail" aria-hidden>
          <span className="stn__seg" />
          <span className="stn__dot stn__dot--terminus" />
        </div>
        <div className="stn__body hero__body">
          <div className="hero__copy">
            <p className="plaque">
              <span>Westminster</span>
              <span>London</span>
            </p>
            <h1 className="hero__title">
              Global Indian <em>Business Excellence</em> Awards 2026
            </h1>
            <p className="hero__lede">
              An exclusive gathering honouring Indian business leaders creating global impact:
              Leadership, Innovation &amp; Excellence.
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href={EVENT.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply for Delegate Invitation <Arrow />
              </a>
              <Link className="btn btn--ghost" href="/partners">
                Become a partner
              </Link>
            </div>
            <p className="hero__fine">
              By invitation only. Capped at 100 distinguished guests. Applications are processed on
              a rolling basis and close at capacity.
            </p>
            <dl className="facts">
              <div>
                <dt>Venue</dt>
                <dd>{EVENT.venue}</dd>
              </div>
              <div>
                <dt>Dates</dt>
                <dd>{EVENT.dates}</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>{EVENT.audience}</dd>
              </div>
            </dl>
            <Countdown />
          </div>
        </div>
        <div className="hero__tower" aria-hidden>
          <Image src={asset("/img/bigben.jpg")} alt="" width={667} height={1700} priority sizes="(max-width: 900px) 70vw, 34vw" />
        </div>
      </section>

      {/* PURPOSE */}
      <Station>
        <h2 className="h2 h2--wide">Empowering Global Indian Leadership</h2>
        <p className="lede">
          Presented by the Indian Business Network (IBN), the {EVENT.name} convenes an intimate
          circle of visionary entrepreneurs, investors, and executives shaping the global economy.
        </p>
        <ol className="pillars">
          {PILLARS.map((p) => (
            <li key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </Station>

      {/* ROUTE SUMMARY */}
      <Station>
        <h2 className="h2 h2--wide">Five days. One route.</h2>
        <p className="lede">From the historic halls of Westminster to Europe’s most revered intellectual hubs.</p>
        <ol className="route-list">
          {DAYS.map((d) => (
            <li key={d.n} className={`tone-${d.color}`}>
              <Link href={`/programme#day-${d.n}`}>
                <b>Day {d.n}</b>
                <span className="route-list__name">{d.short}</span>
                <span className="route-list__date">
                  {d.weekday.slice(0, 3)} {d.date.replace(" 2026", "")}
                </span>
                <Arrow />
              </Link>
            </li>
          ))}
        </ol>
        <div className="cta-row">
          <Link className="btn btn--ghost" href="/programme">
            See the full programme <Arrow />
          </Link>
        </div>
      </Station>

      {/* AWARDS TEASER */}
      <Station>
        <h2 className="h2 h2--wide">Eight awards, peer-nominated</h2>
        <p className="lede awards-line">{AWARDS.join(" · ")}</p>
        <div className="cta-row">
          <Link className="btn btn--ghost" href="/awards">
            All award categories <Arrow />
          </Link>
        </div>
      </Station>

      {/* TERMINUS */}
      <section id="apply" className="stn tone-gold terminus">
        <div className="stn__rail" aria-hidden>
          <span className="stn__seg" />
          <span className="stn__dot stn__dot--terminus" />
        </div>
        <div className="stn__body">
          <h2 className="terminus__title">Join the 100 Global Indian Leaders</h2>
          <p className="lede">
            Due to parliamentary security lead times and venue capacity, registrations are
            processed on a rolling basis and close immediately upon reaching capacity.
          </p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href={EVENT.applyUrl} target="_blank" rel="noopener noreferrer">
              Submit Delegate Application <Arrow />
            </a>
            <Link className="btn btn--ghost btn--lg" href="/partners">
              <Mail /> Partner with the summit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
