import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { BookingProvider } from "@/lib/BookingContext";
import { rooms } from "@/lib/rooms";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
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

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dandeli Inn — stay near Dandeli Bus Stand in Bangur Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
};

/* ─── JSON-LD — Hotel / LocalBusiness ───────────────────────────────────── */
const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: SITE_NAME,
  alternateName: "Dandeli Holiday Inn Lodge",
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/images/hero.jpg`,
  url: `${SITE_URL}/`,
  telephone: "+91 72591 09986",
  email: "stay@dandeliinn.com",
  priceRange: "₹899–₹2999",
  currenciesAccepted: "INR",
  checkinTime: "11:00",
  checkoutTime: "11:00",
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
  hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJUau4rbUhvzsRxXDL6lUkipg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "292",
    bestRating: "5",
    worstRating: "1",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hot water", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Flat-screen TV", value: true },
    { "@type": "LocationFeatureSpecification", name: "Daily housekeeping", value: true },
    { "@type": "LocationFeatureSpecification", name: "Power backup", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "CCTV", value: true },
  ],
  containsPlace: rooms.map((room) => ({
    "@type": "HotelRoom",
    name: room.label,
    occupancy: {
      "@type": "QuantitativeValue",
      value: room.sharing,
    },
    amenityFeature: room.ac
      ? [
          {
            "@type": "LocationFeatureSpecification",
            name: "Air conditioning",
            value: true,
          },
        ]
      : [],
    offers: {
      "@type": "Offer",
      price: room.pricePerNight,
      priceCurrency: "INR",
      url: `${SITE_URL}/#rooms`,
    },
  })),
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
        text: "Yes, hot water is available 24 hours a day.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
        />
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
