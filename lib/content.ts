// Single source of truth for event copy. The landing page reads from here today;
// the attendee app and backend can import the same shapes later.

export const EVENT = {
  name: "Global Indian Business Excellence Awards 2026",
  org: "Indian Business Network",
  orgShort: "IBN",
  tagline: "Connect • Collaborate • Inspire",
  venue: "House of Commons, London",
  dates: "5–9 November 2026",
  audience: "100 CEOs & Investors",
  applyUrl: "https://tally.so/r/NpzrWj",
  email: "events@ibnonline.co.uk",
  siteBase: "https://sentientiaproject.github.io/ibn-london-2026",
} as const;

export const MEDIA = {
  advert16x9: `${EVENT.siteBase}/IBN_London_2026_Cinematic_Advert_15s.mp4`,
  advert9x16: `${EVENT.siteBase}/IBN_London_2026_Cinematic_Advert_9x16.mp4`,
  brochure: `${EVENT.siteBase}/IBN%202026%20POSTER%20-%205-9.pdf`,
} as const;

export const PILLARS = [
  {
    name: "Honour",
    text: "Recognizing transformative Indian business leaders who have built sustainable cross-border enterprises, delivered international impact, and set global benchmarks of excellence.",
  },
  {
    name: "Connect",
    text: "Curating an elite assembly strictly limited to 100 distinguished C-Suite guests, unlocking private bilateral corridors with British political, trade, and financial decision-makers.",
  },
  {
    name: "Inspire",
    text: "Bridging high-growth corporate capital with world-leading academic institutions — including Oxford, Cambridge, and Imperial College London — to drive frontier innovation.",
  },
] as const;

export type Day = {
  n: number;
  short: string;
  weekday: string;
  date: string;
  station: string;
  title: string;
  color: "red" | "saffron" | "indigo" | "green";
  meta: { label: string; value: string }[];
  points: string[];
  aside?: { title: string; text: string };
};

export const DAYS: Day[] = [
  {
    n: 1,
    short: "Parliament",
    weekday: "Thursday",
    date: "5 November 2026",
    station: "Westminster",
    title: "Global Indian Business Excellence Awards & Executive Reception",
    color: "red",
    meta: [
      { label: "Venue", value: "House of Commons, British Parliament" },
      { label: "Dress", value: "Parliamentary Formal / Lounge Suit" },
      { label: "Access", value: "Security accreditation required" },
    ],
    points: [
      "Formal guest arrival and accreditation check-in via the historic Cromwell Green Entrance.",
      "Opening addresses by prominent UK parliamentarians, diplomats, and business delegates.",
      "Presentation of the Global Indian Business Excellence Awards 2026 across 8 categories.",
      "Executive networking reception overlooking the River Thames inside the parliamentary estate.",
    ],
  },
  {
    n: 2,
    short: "Gala Dinner",
    weekday: "Friday",
    date: "6 November 2026",
    station: "Central London",
    title: "Black Tie Gala Dinner & Executive Networking",
    color: "saffron",
    meta: [
      { label: "Venue", value: "Prestigious Central London Ballroom" },
      { label: "Dress", value: "Black Tie / Tuxedo / Formal Evening Attire" },
      { label: "Hospitality", value: "Multi-course gourmet dining" },
    ],
    points: [
      "Red carpet arrival and champagne networking reception with global investors and CXOs.",
      "Keynote addresses focusing on Indo-British bilateral investment opportunities and global trade corridors.",
      "Curated multi-course fine dining and exclusive C-Suite table arrangements for strategic conversations.",
      "Evening cultural performance and celebration of bilateral economic partnerships.",
    ],
    aside: {
      title: "Intimate VIP Dining",
      text: "High-stakes conversations with peer business titans in a discreet luxury setting.",
    },
  },
  {
    n: 3,
    short: "Oxford",
    weekday: "Saturday",
    date: "7 November 2026",
    station: "Oxford",
    title: "Oxford Business Leadership Forum & Panel Discussions",
    color: "indigo",
    meta: [
      { label: "Venue", value: "University of Oxford" },
      { label: "Dress", value: "Business Smart Casual" },
      { label: "Transfer", value: "Dedicated executive coach" },
    ],
    points: [
      "Private executive coach transfer from central London to the intellectual capital of Oxford.",
      "High-level panel debates on macroeconomic outlooks, sustainable enterprise, and global governance.",
      "Interaction with Oxford fellows, leading researchers, and Rhodes scholars.",
      "Walking immersion through historic Oxford collegiate grounds and private lunch.",
    ],
  },
  {
    n: 4,
    short: "Cambridge",
    weekday: "Sunday",
    date: "8 November 2026",
    station: "Cambridge",
    title: "University of Cambridge – Campus & Deep-Tech Immersion",
    color: "green",
    meta: [
      { label: "Venue", value: "University of Cambridge" },
      { label: "Dress", value: "Business Smart Casual" },
      { label: "Focus", value: "Cambridge Innovation Cluster" },
    ],
    points: [
      "Curated executive delegation exploring the world-famous “Cambridge Phenomenon” ecosystem.",
      "Briefing on deep-tech spinouts, venture creation, and bridging academic IP with corporate capital.",
      "Walking tour of iconic Cambridge colleges and King’s College Chapel.",
      "Delegates networking luncheon and bilateral research exchange.",
    ],
  },
  {
    n: 5,
    short: "Imperial",
    weekday: "Monday",
    date: "9 November 2026",
    station: "South Kensington",
    title: "Imperial College London – Innovation & Research Experience",
    color: "red",
    meta: [
      { label: "Venue", value: "Imperial College London" },
      { label: "Dress", value: "Business Formal" },
      { label: "Focus", value: "AI & frontier tech" },
    ],
    points: [
      "Immersive deep dive into Artificial Intelligence, MedTech, and CleanTech commercialisation.",
      "Briefing at Imperial Enterprise Lab with pioneering academic founders and scale-ups.",
      "Concluding delegation luncheon, presentation of certificates, and future collaboration pledges.",
      "Official summit closing reception and farewell networking.",
    ],
  },
];

export const AWARDS = [
  "Global Business Leader of the Year",
  "Disruptive Tech Innovator Award",
  "Cross-Border Trade & Manufacturing",
  "Sustainable Enterprise & ESG Leadership",
  "Healthcare & Life Sciences Pioneer",
  "Next-Gen Entrepreneur of the Year",
  "Financial Services & Investment",
  "Women in Global Business Leadership",
] as const;

export const INCLUSIONS = [
  {
    name: "Executive Delegate Badge",
    text: "Official accredited credential granting full access to summit sessions, private coach transits, and academic venues.",
  },
  {
    name: "Parliamentary & Gala Passes",
    text: "Nomination for attendance at the House of Commons Awards & Reception, plus a seat at the Central London Black Tie Gala.",
  },
  {
    name: "Academic Leadership Forums",
    text: "Full access to the Oxford Business Leadership Forum, Cambridge innovation tour, and Imperial College London showcase.",
  },
  {
    name: "Participation Certificate",
    text: "Formally endorsed Certificate of Leadership Participation from the Indian Business Network.",
  },
  {
    name: "Delegate Welcome Kit",
    text: "Curated executive summit briefcase, commemorative mementos, stationery, and comprehensive city guides.",
  },
  {
    name: "Professional Media Kit",
    text: "High-resolution personal and corporate photography by official UK press photographers with full PR distribution rights.",
  },
] as const;

export const NOTICE =
  "The Global Indian Business Excellence Awards 2026 at the House of Commons, British Parliament, London, is an invitation-only event. Invitations are extended at the sole discretion of the organisers and are subject to venue capacity and parliamentary security vetting. No fee is charged for attendance at the Awards Ceremony, and invitations are not sold or assigned any monetary value. Delegate package fees relate solely to participation in the IBN Business Leadership Programme, academic forums at Oxford, Cambridge & Imperial, hospitality, and associated logistics.";

export const COLLATERAL = [
  {
    name: "Luxury Print-Ready Brochure (PDF)",
    text: "High-resolution CMYK multi-page commemorative brochure formatted for physical printing with gold-foil specifications. Included in every physical delegate welcome briefcase and available for immediate digital download.",
    cta: "Download the brochure",
    href: MEDIA.brochure,
  },
  {
    name: "Award Winner Press Release Kit",
    text: "Pre-drafted, standardized press release templates and high-res digital award crests distributed to winners to instantly syndicate to international news agencies (Bloomberg, PTI, Reuters, Financial Times).",
    cta: "Request the PR template kit",
    href: `mailto:${EVENT.email}?subject=Press%20release%20template%20kit`,
  },
  {
    name: "Bilateral Partnership & MoU Templates",
    text: "Standardized bilateral business cooperation agreements and investment intent (MoU) templates provided during the Oxford & Imperial forums to facilitate on-the-spot deal signings between delegates.",
    cta: "Request the deal templates",
    href: `mailto:${EVENT.email}?subject=Bilateral%20partnership%20and%20MoU%20templates`,
  },
  {
    name: "Onsite Stationery & Certificate Distribution",
    text: "Embossed executive lanyards, summit pocket handbooks, and formal Participation Certificates formally presented during the Day 5 closing ceremony, backed by encrypted digital certificates in the app.",
    cta: null,
    href: null,
  },
] as const;

export const LEADERS = [
  {
    name: "Velou Singaram",
    role: "President",
    phone: null,
    img: "/img/velou.png",
    text: "Leading bilateral institutional relations and presidential summit addresses.",
  },
  {
    name: "Jayabalan",
    role: "Secretary",
    phone: "+44 7960 446339",
    img: "/img/jayabalan.png",
    text: "Parliamentary liaison, secretariat administration, and security protocol accreditation.",
  },
  {
    name: "Nagarajan",
    role: "Treasurer",
    phone: "+44 7383 969604",
    img: "/img/nagarajan.png",
    text: "Financial governance, corporate partner relations, and delegate sponsorship management.",
  },
  {
    name: "Subha Austalekshmi",
    role: "Event Coordinator",
    phone: "+44 7587 260254",
    img: "/img/subha.png",
    text: "Delegate onboarding, UK visa support letters, accommodation, and concierge.",
  },
] as const;

export const FAQS = [
  {
    q: "What are the security requirements for the House of Commons?",
    a: "Access to the Palace of Westminster requires advance security clearance. All delegates must submit their full legal name and details matching their valid government passport at least 30 days prior to the event. Physical passports must be presented at the Cromwell Green entrance for identity verification.",
  },
  {
    q: "Will I receive assistance with my UK Visa application?",
    a: "Yes. Confirmed executive delegates receive an official, stamped UK Visa Support Letter issued by the Indian Business Network to submit alongside their standard UK Business Visitor visa application.",
  },
  {
    q: "What is the dress code across the 5 days?",
    a: "Day 1 (House of Commons): Parliamentary Formal / Dark Lounge Suit / Formal Indian Attire. Day 2 (Gala Dinner): Black Tie / Tuxedo / Formal Evening Attire. Days 3–5 (Oxford, Cambridge, Imperial): Business Smart Casual.",
  },
  {
    q: "How is inter-city transport to Oxford and Cambridge handled?",
    a: "Dedicated private executive luxury coaches depart from a designated Central London pickup hotel directly to the University of Oxford and University of Cambridge, returning delegates to Central London in the evening.",
  },
  {
    q: "Can my spouse or partner attend?",
    a: "Due to strict parliamentary seating constraints, House of Commons access is strictly limited to accredited delegates. However, spouse and partner passes are available for the Black Tie Gala Dinner and the university tours upon request to the secretariat.",
  },
] as const;

// From https://ibnonline.co.uk (IBN's main site)
export const MAIN_SITE = "https://ibnonline.co.uk";

export const ABOUT_IBN = {
  lead: "The IBN helps in creating reciprocal relationships with other members. Through our regular events and IBN members, we enable businesspeople to meet each other, identify potential partners, suppliers and customers, and to learn from top business leaders and commentators, including those on our Advisory Board.",
  more: "IBN serves the city’s economic vitality, innovation, and global competitiveness: supporting members’ businesses, advocating for their interests in key policy forums, and promoting London as a destination for global business.",
} as const;

export const MEMBERSHIP = [
  { level: "Standard", price: "Free", who: "Aspiring professionals, students, cultural ambassadors", href: `${MAIN_SITE}/membership-account/membership-checkout/?level=1` },
  { level: "Bronze", price: "£10", who: "Established businesses, multinationals, industry leaders", href: `${MAIN_SITE}/membership-account/membership-checkout/?level=2` },
  { level: "Silver", price: "£20", who: "Startups, small business owners, growing enterprises", href: `${MAIN_SITE}/membership-account/membership-checkout/?level=3` },
  { level: "Gold", price: "£30", who: "Executives, consultants, academics, independent professionals", href: `${MAIN_SITE}/membership-account/membership-checkout/?level=4` },
  { level: "Platinum", price: "£50", who: "Distinguished individuals recognised for exceptional contributions to business, culture, or society", href: null },
] as const;

export const PAST_EVENT = {
  title: "IBN at Parliament, before",
  text: "IBN has hosted business audiences at Parliament before. These photographs are from its earlier Parliament event.",
  source: `${MAIN_SITE}/objectively-incubate-strategic-growth/`,
  photos: [
    { src: `${MAIN_SITE}/wp-content/uploads/2023/05/Parliament-Event-1-600x399.jpg`, alt: "Panel at an earlier IBN event in Parliament, seated in front of an Indian Business Network banner" },
    { src: `${MAIN_SITE}/wp-content/uploads/2023/05/Parliament-Event-12-600x399.jpg`, alt: "Guests at an earlier IBN event in Parliament" },
    { src: `${MAIN_SITE}/wp-content/uploads/2023/05/Parliament-Event-16-600x399.jpg`, alt: "IBN delegates at an earlier Parliament event" },
  ],
} as const;
