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

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Kali Riverside Lodge — Dandeli, Karnataka",
  description:
    "Escape to Kali Riverside Lodge, a serene eco-retreat on the banks of the Kali river in Dandeli, Karnataka. Book your forest stay today.",
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <BookingProvider>{children}</BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
