import type { Metadata } from "next";
import { Arrow, Plus } from "@/components/Icons";
import { NextStop, PageHead, Station } from "@/components/Station";
import { EVENT, FAQS, INCLUSIONS, NOTICE } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Delegates | Global Indian Business Excellence Awards 2026",
  description: "What every executive delegate receives, the protocol notice, and answers to common questions.",
};

export default function Delegates() {
  return (
    <>
      <PageHead
        title="What every executive delegate receives"
        lede="Every accredited delegate participates in a comprehensive 5-day leadership experience designed to facilitate lasting business connections."
      />
      <Station>
        <dl className="inclusions">
          {INCLUSIONS.map((i) => (
            <div key={i.name}>
              <dt>{i.name}</dt>
              <dd>{i.text}</dd>
            </div>
          ))}
        </dl>
        <aside className="notice" aria-labelledby="notice-h">
          <h2 id="notice-h">Statutory &amp; institutional protocol notice</h2>
          <p>{NOTICE}</p>
        </aside>
        <div className="cta-row">
          <a className="btn btn--gold" href={EVENT.applyUrl} target="_blank" rel="noopener noreferrer">
            Submit Delegate Application <Arrow />
          </a>
        </div>
      </Station>
      <Station id="faq">
        <h2 className="h2 h2--wide">Frequently asked questions</h2>
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>
                <span>{f.q}</span>
                <Plus />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </Station>
      <NextStop href="/partners" label="Partners" note="Corporate partnership and delegate sponsorship." />
    </>
  );
}
