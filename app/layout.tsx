import type { Metadata, Viewport } from "next";
import { Gloock, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--nf-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--nf-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Indian Business Excellence Awards 2026 | House of Commons, London",
  description:
    "An invitation-only, five-day leadership programme for 100 Indian business leaders and investors, opening at the House of Commons on 5 November 2026. Presented by the Indian Business Network.",
  openGraph: {
    title: "Global Indian Business Excellence Awards 2026",
    description:
      "House of Commons, London • 5–9 November 2026 • Capped at 100 distinguished guests.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050d1b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
