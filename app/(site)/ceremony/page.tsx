import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { NextStop, PageHead, Station } from "@/components/Station";
import { AWARDS, DAYS, EVENT } from "@/lib/content";
import { POSTER } from "@/lib/poster";

export const metadata: Metadata = {
  title: "The Awards Ceremony | Global Indian Business Excellence Awards 2026",
  description: "Thursday 5 November 2026 at the House of Commons: the Awards ceremony and Executive Reception.",
};

const day = DAYS[0];

export default function Ceremony() {
  return (
    <>
      <PageHead
        tone="red"
        title="The Awards Ceremony, House of Commons"
        lede="Thursday 5 November 2026. Global Indian Business Excellence Awards & Executive Reception, inside the parliamentary estate."
      />

      <Station tone="red">
        <dl className="meta meta--wide">
          <div>
            <dt>Date</dt>
            <dd>
              {day.weekday}, {day.date}
            </dd>
          </div>
          {day.meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
          <div>
            <dt>Guests</dt>
            <dd>{EVENT.audience}, limited to 100 distinguished guests</dd>
          </div>
        </dl>
      </Station>

      <Station tone="red">
        <h2 className="h2 h2--wide">On the evening</h2>
        <ul className="points points--wide">
          {day.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </Station>

      <Station tone="red">
        <h2 className="h2 h2--wide">Eight awards, presented in Parliament</h2>
        <p className="lede awards-line">{AWARDS.join(" · ")}</p>
        <div className="cta-row">
          <Link className="btn btn--ghost" href="/awards">
            About the categories <Arrow />
          </Link>
        </div>
      </Station>

      <Station tone="red">
        <h2 className="h2 h2--wide">How an invitation works</h2>
        <div className="invite">
          <p>{POSTER.invitation.lead}</p>
          <p className="invite__strong">{POSTER.invitation.strong}</p>
          <p>{POSTER.invitation.fees}</p>
          <p>
            Access to the Palace of Westminster requires advance security clearance. Delegates submit
            their full legal name, matching their passport, at least 30 days before the event and
            present the physical passport at the Cromwell Green entrance.
          </p>
        </div>
        <div className="cta-row">
          <a className="btn btn--gold" href={EVENT.applyUrl} target="_blank" rel="noopener noreferrer">
            Apply for Delegate Invitation <Arrow />
          </a>
        </div>
      </Station>
      <NextStop href="/event-details" label="Event details" note="Delegate packages, timeline and what every delegate receives." />
    </>
  );
}
