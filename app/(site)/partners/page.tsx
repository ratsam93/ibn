import type { Metadata } from "next";
import { Mail, Phone } from "@/components/Icons";
import { NextStop, PageHead, Station, tel } from "@/components/Station";
import { EVENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partner with the Summit | Global Indian Business Excellence Awards 2026",
  description: "Corporate partner relations and delegate sponsorship are led by IBN's Treasurer.",
};

export default function Partners() {
  return (
    <>
      <PageHead
        title="Partner with the summit"
        lede="Corporate partner relations and delegate sponsorship are led by our Treasurer. Write to the Secretariat to open the conversation."
      />
      <Station>
        <div className="cta-row cta-row--first">
          <a
            className="btn btn--gold btn--lg"
            href={`mailto:${EVENT.email}?subject=Partnership%20enquiry%20%E2%80%94%20IBN%20London%202026`}
          >
            <Mail /> Partnership enquiry
          </a>
          <a className="btn btn--ghost btn--lg" href={tel("+44 7383 969604")}>
            <Phone /> Treasurer: +44 7383 969604
          </a>
        </div>
        <p className="lede">
          Sponsorship terms are agreed directly with the Secretariat: {EVENT.email}.
        </p>
      </Station>
      <NextStop href="/media" label="Media & materials" note="The 15-second advert, brochure, press kit and deal templates." />
    </>
  );
}
