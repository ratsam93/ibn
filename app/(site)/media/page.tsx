import type { Metadata } from "next";
import { Arrow, Download } from "@/components/Icons";
import { NextStop, PageHead, Station } from "@/components/Station";
import { asset } from "@/lib/asset";
import { COLLATERAL, MEDIA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media & Materials | Global Indian Business Excellence Awards 2026",
  description: "The official 15-second advert, print-ready brochure, press release kit and MoU templates.",
};

export default function Media() {
  return (
    <>
      <PageHead
        title="The 15-second cinematic summit advert"
        lede="The official commercial celebrating global Indian business leadership: masked kinetic typography, gold vector iconography, and a driving 128 BPM corporate hybrid soundtrack."
      />
      <Station>
        <div className="film">
          <figure className="film__wide">
            <video controls preload="none" poster={asset("/img/film-poster.png")} playsInline>
              <source src={MEDIA.advert16x9} type="video/mp4" />
            </video>
            <figcaption>
              <span>16:9 widescreen cinema commercial. Full HD master for summit projection, web banners, and LinkedIn.</span>
              <a className="link" href={MEDIA.advert16x9} download>
                <Download /> Download MP4
              </a>
            </figcaption>
          </figure>
          <figure className="film__tall">
            <video controls preload="none" playsInline>
              <source src={MEDIA.advert9x16} type="video/mp4" />
            </video>
            <figcaption>
              <span>9:16 vertical reel for Instagram Reels, YouTube Shorts, and WhatsApp Status.</span>
              <a className="link" href={MEDIA.advert9x16} download>
                <Download /> Download reel MP4
              </a>
            </figcaption>
          </figure>
        </div>
      </Station>
      <Station>
        <h2 className="h2 h2--wide">Brochure, press kit and deal templates</h2>
        <p className="lede">
          Official print-ready summit brochures, award winner media kits, and bilateral business MoU
          templates distributed during the 5-day summit.
        </p>
        <ul className="collateral">
          {COLLATERAL.map((c) => (
            <li key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.text}</p>
              {c.href ? (
                <a className="link" href={c.href}>
                  {c.cta} <Arrow />
                </a>
              ) : (
                <p className="tag">Distributed onsite in London</p>
              )}
            </li>
          ))}
        </ul>
      </Station>
      <NextStop href="/about" label="About IBN" note="The Secretariat and the network behind the summit." />
    </>
  );
}
