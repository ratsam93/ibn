import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RailFill from "@/components/Rail";
import StickyApply from "@/components/StickyApply";

// Marketing site shell. The attendee app and backend will live in sibling route groups,
// e.g. app/(app)/… and app/api/…, and reuse the tokens in globals.css.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <RailFill />
      <StickyApply />
      <main id="top">{children}</main>
      <Footer />
    </>
  );
}
