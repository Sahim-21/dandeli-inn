import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { BookingProvider } from "@/lib/BookingContext";
import "./globals.css";

/* ─── Fonts ──────────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

/* ─── Site constants ─────────────────────────────────────────────────────── */
const SITE_URL = "https://dandeliinn.com";

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dandeli Inn | Budget Stay Near Dandeli Bus Stand, Bangur Nagar",
  description:
    "Budget-friendly rooms in Dandeli, Bangur Nagar — 300m from the bus stand. AC & Non-AC rooms from ₹899/night. Free Wi-Fi, hot water, CCTV security. Book on WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dandeli Inn",
    title: "Dandeli Inn | Budget Stay Near Dandeli Bus Stand, Bangur Nagar",
    description:
      "Budget-friendly rooms in Dandeli, Bangur Nagar — 300m from the bus stand. AC & Non-AC rooms from ₹899/night. Free Wi-Fi, hot water, CCTV security.",
    images: [
      {
        url: `${SITE_URL}/images/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Dandeli Inn — lush forest canopy near Dandeli Wildlife Sanctuary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dandeli Inn | Budget Stay Near Dandeli Bus Stand, Bangur Nagar",
    description:
      "Budget-friendly rooms in Dandeli, Bangur Nagar — 300m from the bus stand. AC & Non-AC rooms from ₹899/night.",
    images: [`${SITE_URL}/images/hero.jpg`],
  },
};

/* ─── JSON-LD — LodgingBusiness ─────────────────────────────────────────── */
const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Dandeli Inn",
  image: `${SITE_URL}/images/hero.jpg`,
  url: SITE_URL,
  telephone: "+91 72591 09986",
  priceRange: "₹899–₹2999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "J.N Road, opp. Sunday Market, Bangur Nagar",
    addressLocality: "Dandeli",
    addressRegion: "Karnataka",
    postalCode: "581325",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.2457258,
    longitude: 74.6227294,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "292",
  },
  sameAs: [
    "https://www.google.com/maps/place/?q=place_id:ChIJUau4rbUhvzsRxXDL6lUkipg",
  ],
};

/* ─── JSON-LD — FAQPage ──────────────────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the check-in and check-out timings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check-in is at 11:00 AM, and check-out is at 11:00 AM the next day.",
      },
    },
    {
      "@type": "Question",
      name: "Does the lodge have Wi-Fi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Wi-Fi is available for guests.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide hot water?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, hot water is available from 7:00 AM to 11:00 AM.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the lodge from Dandeli Bus Stand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 300 metres, making it convenient for travellers.",
      },
    },
    {
      "@type": "Question",
      name: "What activities are available in Dandeli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "River rafting, jungle safari, kayaking, ziplining, and nature experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Is the lodge safe for female travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the lodge is under CCTV surveillance for a safer, more secure environment.",
      },
    },
    {
      "@type": "Question",
      name: "Is parking available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, limited parking is available for guests, subject to availability.",
      },
    },
  ],
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        {/* LodgingBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
        />
        {/* FAQPage structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <BookingProvider>{children}</BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
