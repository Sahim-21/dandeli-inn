"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ─── Animation variants ─────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── SVG icons (24×24) ─────────────────────────────────────────────────── */
function RiverLocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 20 10.2c0 7.3-8 11.8-8 11.8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function HeartUsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BestPriceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockSupportIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ─── Trust points data ───────────────────────────────────────────────────── */
interface TrustPoint {
  icon: ReactNode;
  title: string;
  description: string;
}

const trustPoints: TrustPoint[] = [
  {
    icon: <RiverLocationIcon />,
    title: "Prime location on the banks of the Kali River",
    description: "Nestled directly on the scenic riverbank, offering tranquil water views and immediate access to nature.",
  },
  {
    icon: <HeartUsersIcon />,
    title: "Personalized service from a small local team",
    description: "Warm, authentic hospitality from our dedicated local staff who ensure your stay feels personal and effortless.",
  },
  {
    icon: <BestPriceIcon />,
    title: "Best price guarantee for direct bookings",
    description: "Reserve directly with us to guarantee the lowest available rates with zero hidden fees.",
  },
  {
    icon: <ClockSupportIcon />,
    title: "24/7 support during your stay",
    description: "Around-the-clock guest assistance for activity recommendations, dining needs, and total peace of mind.",
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-24 px-4 bg-mist-100 dark:bg-mist-900 border-y border-sand-300/40 dark:border-earth-800/60"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-forest-700 dark:text-forest-300 font-semibold">
            Why Choose Us
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Experience peaceful Dandeli hospitality in a calm, stress-free environment built around trust.
          </p>
        </motion.div>

        {/* Trust points layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={item}
              className="flex items-start gap-4 p-6 rounded-2xl bg-sand-50/50 dark:bg-sand-950/40 border border-sand-300/60 dark:border-earth-800/80"
            >
              <div className="w-12 h-12 rounded-xl bg-river-100 dark:bg-river-900/60 flex items-center justify-center text-river-600 dark:text-river-300 shrink-0">
                {point.icon}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-forest-700 dark:text-forest-300">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-earth-600 dark:text-earth-300">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
