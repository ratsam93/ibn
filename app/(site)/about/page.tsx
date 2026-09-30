import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, Phone } from "@/components/Icons";
import { NextStop, PageHead, Station, tel } from "@/components/Station";
import { asset } from "@/lib/asset";
import { ABOUT_IBN, LEADERS, MAIN_SITE, MEMBERSHIP, PAST_EVENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About IBN | Global Indian Business Excellence Awards 2026",
  description: "The Indian Business Network Secretariat, its earlier Parliament event, and membership.",
};

export default function About() {
  return (
    <>
      <PageHead
        title="The Indian Business Network Secretariat"
        lede="Our leadership team oversees institutional liaisons, parliamentary compliance, and executive concierge services."
      />
      <Station>
        <ul className="leaders">
          {LEADERS.map((l) => (
            <li key={l.name}>
              <Image src={asset(l.img)} alt={`Portrait of ${l.name}`} width={216} height={216} className="leaders__img" />
              <div>
                <h2>{l.name}</h2>
                <p className="leaders__role">{l.role}</p>
                <p>{l.text}</p>
                {l.phone && (
                  <a className="link" href={tel(l.phone)}>
                    <Phone /> {l.phone}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Station>
      <Station>
        <h2 className="h2 h2--wide">The network behind the summit</h2>
        <p className="lede">{ABOUT_IBN.lead}</p>
        <p className="lede lede--sub">{ABOUT_IBN.more}</p>
        <ul className="record">
          {PAST_EVENT.photos.map((ph) => (
            <li key={ph.src}>
              <Image src={ph.src} alt={ph.alt} width={600} height={399} sizes="(max-width: 900px) 90vw, 340px" />
            </li>
          ))}
        </ul>
        <p className="record__cap">
          {PAST_EVENT.text}{" "}
          <a className="link" href={PAST_EVENT.source}>
            Read the post
          </a>
        </p>
        <h3 className="members__h">IBN membership, monthly</h3>
        <ul className="members">
          {MEMBERSHIP.map((m) => (
            <li key={m.level}>
              <p className="members__level">{m.level}</p>
              <p className="members__price">
                {m.price}
                {m.price !== "Free" && <small>/month</small>}
              </p>
              <p className="members__who">{m.who}</p>
              {m.href ? (
                <a className="link" href={m.href}>
                  Sign up <Arrow />
                </a>
              ) : (
                <p className="tag tag--gold">Invite only</p>
              )}
            </li>
          ))}
        </ul>
        <div className="cta-row">
          <a className="btn btn--ghost" href={MAIN_SITE}>
            Visit ibnonline.co.uk <Arrow />
          </a>
        </div>
      </Station>
      <NextStop href="/" label="Back to Westminster" note="Apply for one of the 100 delegate places." />
    </>
  );
}
