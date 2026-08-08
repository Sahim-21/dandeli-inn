"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ─── Motion Variants ────────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */
function BusIcon() {
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
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M6 15h.01" />
      <path d="M18 15h.01" />
      <path d="M4 19v2" />
      <path d="M20 19v2" />
    </svg>
  );
}

function TrainIcon() {
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
      <rect width="16" height="12" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="M8 8h.01" />
      <path d="M16 8h.01" />
      <path d="m8 15-3 5" />
      <path d="m16 15 3 5" />
      <path d="M9 19h6" />
    </svg>
  );
}

function PlaneIcon() {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.7-.2-1.5.1-1.9.7l-.8 1.2c-.4.6-.2 1.5.4 1.9l5.3 3.6-2.5 2.5-2.3-.6c-.5-.1-1.1.1-1.4.5l-.5.5c-.3.4-.2 1 .2 1.3l2.8 2.2 2.2 2.8c.3.4.9.5 1.3.2l.5-.5c.4-.3.6-.9.5-1.4l-.6-2.3 2.5-2.5 3.6 5.3c.4.6 1.3.8 1.9.4l1.2-.8c.6-.4.9-1.2.7-1.9z" />
    </svg>
  );
}

/* ─── Transit Data ───────────────────────────────────────────────────────── */
interface TransitPoint {
  name: string;
  icon: ReactNode;
  distance: string;
  time: string;
}

const transitPoints: TransitPoint[] = [
  {
    name: "Dandeli Bus Stand",
    icon: <BusIcon />,
    distance: "2 km",
    time: "5 min",
  },
  {
    name: "Alnavar Railway Station",
    icon: <TrainIcon />,
    distance: "30 km",
    time: "45 min",
  },
  {
    name: "Londa Junction",
    icon: <TrainIcon />,
    distance: "45 km",
    time: "1 hr",
  },
  {
    name: "Hubli Airport",
    icon: <PlaneIcon />,
    distance: "75 km",
    time: "1.5 hrs",
  },
  {
    name: "Goa (Dabolim) Airport",
    icon: <PlaneIcon />,
    distance: "120 km",
    time: "2.5 hrs",
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Distance() {
  return (
    <section
      id="distance"
      className="py-24 px-4 bg-mist-100 dark:bg-mist-900 border-y border-sand-300/40 dark:border-earth-800/60"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-forest-700 dark:text-forest-300 font-semibold">
            Distance & Connectivity
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Conveniently accessible from major bus terminals, railway junctions, and regional airports.
          </p>
        </motion.div>

        {/* Transit Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {transitPoints.map((point) => (
            <motion.div
              key={point.name}
              variants={cardVariant}
              className="bg-sand-100 dark:bg-sand-950/60 rounded-2xl p-5 text-center border border-sand-300 dark:border-earth-700/80 flex flex-col items-center justify-between shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-forest-100 dark:bg-forest-900/60 text-forest-600 dark:text-forest-300 flex items-center justify-center mb-4 shrink-0">
                {point.icon}
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-heading text-base font-semibold text-forest-700 dark:text-forest-300 leading-snug">
                  {point.name}
                </h3>

                <div className="mt-3 pt-3 border-t border-sand-300/40 dark:border-earth-800/80 w-full">
                  <p className="text-sm font-semibold text-earth-700 dark:text-earth-200">
                    {point.distance}
                  </p>
                  <p className="text-xs text-earth-500 dark:text-earth-400 mt-0.5">
                    ~{point.time} drive
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
