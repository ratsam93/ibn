import type { Metadata } from "next";
import { NextStop, PageHead, Station } from "@/components/Station";
import { DAYS } from "@/lib/content";

export const metadata: Metadata = {
  title: "5-Day Programme | Global Indian Business Excellence Awards 2026",
  description: "Parliament, a Black Tie Gala, Oxford, Cambridge and Imperial College London: 5–9 November 2026.",
};

export default function Programme() {
  return (
    <>
      <PageHead
        title="Five days, one route: Westminster to South Kensington"
        lede="An extraordinary journey spanning the historic halls of Westminster to Europe’s most revered intellectual and deep-tech innovation hubs."
      />
      {DAYS.map((d) => (
        <Station key={d.n} id={`day-${d.n}`} tone={d.color} className="day">
          <p className="plaque plaque--day">
            <span>{d.station}</span>
          </p>
          <div className="day__grid">
            <div className="day__head">
              <p className="day__n" aria-label={`Day ${d.n}`}>
                {d.n}
              </p>
              <p className="day__date">
                {d.weekday}, {d.date}
              </p>
              <h2 className="h3">{d.title}</h2>
              <dl className="meta">
                {d.meta.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="day__detail">
              <ul className="points">
                {d.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {d.aside && (
                <p className="aside">
                  <strong>{d.aside.title}.</strong> {d.aside.text}
                </p>
              )}
            </div>
          </div>
        </Station>
      ))}
      <NextStop href="/awards" label="The Awards" note="Eight categories, vetted by the IBN Advisory Committee." />
    </>
  );
}
