import type { Metadata } from "next";
import { NextStop, PageHead, Station } from "@/components/Station";
import { AWARDS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Award Categories | Global Indian Business Excellence Awards 2026",
  description: "Eight categories honouring benchmark global achievements, peer-nominated and vetted by the IBN Advisory Committee.",
};

export default function Awards() {
  return (
    <>
      <PageHead
        title="Eight awards. Peer-nominated and vetted by the IBN Advisory Committee."
        lede="Honouring benchmark global achievements across key industries. Presented on Day 1 at the House of Commons."
      />
      <Station>
        <ul className="awards">
          {AWARDS.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Station>
      <NextStop href="/delegates" label="For delegates" note="What every executive delegate receives, and how to apply." />
    </>
  );
}
