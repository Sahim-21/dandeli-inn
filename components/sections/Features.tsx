"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ─── Animation variants ─────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ─── SVG icons (24×24, stroke 1.75) ─────────────────────────────────────── */
function DeskIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      <path d="M4 11h16" />
      <path d="M12 11v8" />
      <path d="M8 19v2" />
      <path d="M16 19v2" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

function AcIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <rect width="18" height="8" x="3" y="3" rx="2" />
      <path d="M6 11v3" />
      <path d="M10 11v4" />
      <path d="M14 11v4" />
      <path d="M18 11v3" />
      <path d="M7 19c.7 1.3 2 2 3.5 2s2.8-.7 3.5-2" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <rect width="20" height="15" x="2" y="3" rx="2" />
      <path d="m17 21-5-3-5 3" />
    </svg>
  );
}

function HotWaterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function HousekeepingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M12 3l1.91 3.87 4.27.62-3.09 3.01.73 4.25L12 12.74 8.18 14.75l.73-4.25-3.09-3.01 4.27-.62z" />
      <path d="M5 21h14" />
    </svg>
  );
}

function PowerBackupIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

/* ─── Feature data ───────────────────────────────────────────────────────── */
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <DeskIcon />,
    title: "Writing desk and chair",
    description: "Dedicated work surface and comfortable seating provided in every room.",
  },
  {
    icon: <WifiIcon />,
    title: "Free Wi-Fi",
    description: "Complimentary high-speed internet access available for all guests.",
  },
  {
    icon: <AcIcon />,
    title: "Air conditioning",
    description: "Climate-controlled comfort with both AC and Non-AC room options.",
  },
  {
    icon: <TvIcon />,
    title: "Flat-screen TV",
    description: "In-room entertainment for relaxing after a full day of sightseeing.",
  },
  {
    icon: <HotWaterIcon />,
    title: "Hot water",
    description: "Hot water available 24 hours a day for your comfort.",
  },
  {
    icon: <HousekeepingIcon />,
    title: "Daily housekeeping",
    description: "Clean, fresh linen and thoroughly maintained rooms every day.",
  },
  {
    icon: <PowerBackupIcon />,
    title: "Power backup",
    description: "Uninterrupted power supply ensuring comfort throughout your stay.",
  },
  {
    icon: <ParkingIcon />,
    title: "Free parking",
    description: "On-site parking space for guest cars and two-wheelers.",
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-4 bg-sand-100 dark:bg-sand-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-forest-700 dark:text-forest-300 font-semibold">
            Room &amp; Lodge Features
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Essential comforts included with every stay at Dandeli Inn.
          </p>
        </motion.div>

        {/* Feature grid — 4 columns on large screens */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={card}
              className="group bg-mist-100 dark:bg-mist-900 rounded-2xl p-6 border border-sand-300 dark:border-earth-700
                         transition-shadow duration-200 hover:shadow-lg hover:shadow-forest-700/5 dark:hover:shadow-forest-400/5 cursor-default flex flex-col justify-between"
            >
              <div>
                {/* Icon badge */}
                <div className="w-11 h-11 rounded-xl bg-forest-100 dark:bg-forest-900 flex items-center justify-center text-forest-600 dark:text-forest-300 mb-4">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-base font-semibold text-forest-700 dark:text-forest-300 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-earth-600 dark:text-earth-300">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
