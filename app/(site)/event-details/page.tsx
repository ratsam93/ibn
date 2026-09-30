import type { Metadata } from "next";
import { Arrow, Download, Mail, Phone } from "@/components/Icons";
import { NextStop, PageHead, Station, tel } from "@/components/Station";
import { DAYS, EVENT, MEDIA } from "@/lib/content";
import { POSTER } from "@/lib/poster";

export const metadata: Metadata = {
  title: "Event Details | Global Indian Business Excellence Awards 2026",
  description: "Executive Delegate Packages: the programme timeline, the Awards invitation, and what every delegate receives.",
};

export default function EventDetails() {
  return (
    <>
      <PageHead title="Executive Delegate Packages" lede={POSTER.packagesLede} />

      <Station>
        <h2 className="h2 h2--wide">Programme timeline</h2>
        <table className="timeline">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Programme</th>
            </tr>
          </thead>
          <tbody>
            {POSTER.timeline.map((t) => (
              <tr key={t.day} className={`tone-${DAYS[t.day - 1].color}`}>
                <th scope="row">
                  <span className="timeline__day">Day {t.day}</span>
                  {t.date}
                </th>
                <td>
                  <strong>{t.name}</strong>
                  <span>{t.sub}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Station>

      <Station>
        <h2 className="h2 h2--wide">Exclusive awards invitation</h2>
        <div className="invite">
          <p>{POSTER.invitation.lead}</p>
          <p className="invite__strong">{POSTER.invitation.strong}</p>
          <p>{POSTER.invitation.fees}</p>
        </div>
      </Station>

      <Station>
        <h2 className="h2 h2--wide">Every executive delegate receives</h2>
        <ul className="receives">
          {POSTER.receives.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <aside className="notice" aria-labelledby="note-h">
          <h3 id="note-h">Important note</h3>
          <p>{POSTER.note}</p>
        </aside>
      </Station>

      <Station>
        <h2 className="h2 h2--wide">{POSTER.enquiries.label}</h2>
        <p className="lede">
          {POSTER.enquiries.name}, {POSTER.enquiries.role}
        </p>
        <div className="cta-row">
          <a className="btn btn--gold" href={EVENT.applyUrl} target="_blank" rel="noopener noreferrer">
            Submit Delegate Application <Arrow />
          </a>
          <a className="btn btn--ghost" href={`mailto:${EVENT.email}`}>
            <Mail /> {EVENT.email}
          </a>
          <a className="btn btn--ghost" href={tel(POSTER.enquiries.phone)}>
            <Phone /> {POSTER.enquiries.phone}
          </a>
          <a className="link cta-row__link" href={MEDIA.brochure}>
            <Download /> Download the poster (PDF)
          </a>
        </div>
      </Station>
      <NextStop href="/programme" label="The full programme" note="Day by day, from Westminster to South Kensington." />
    </>
  );
}
