"use client";

import { useEffect, useState } from "react";

// Awards open 5 Nov 2026 (London is on GMT that day).
const TARGET = Date.parse("2026-11-05T00:00:00Z");

export default function Countdown() {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setMs(TARGET - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (ms === null || ms <= 0) return <div className="count" aria-hidden />;

  const s = Math.floor(ms / 1000);
  const parts = [
    { v: Math.floor(s / 86400), l: "days" },
    { v: Math.floor((s % 86400) / 3600), l: "hours" },
    { v: Math.floor((s % 3600) / 60), l: "min" },
    { v: s % 60, l: "sec" },
  ];

  return (
    <div className="count" role="timer" aria-label={`${parts[0].v} days until the Awards open at the House of Commons`}>
      <p className="count__lead">Awards open in</p>
      <ul>
        {parts.map((p) => (
          <li key={p.l}>
            <b>{String(p.v).padStart(2, "0")}</b>
            <span>{p.l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
