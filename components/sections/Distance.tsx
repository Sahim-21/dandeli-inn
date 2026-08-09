"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* ─── Motion variants ────────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */
function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-6 h-6"}
      aria-hidden="true"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.7-.2-1.5.1-1.9.7l-.8 1.2c-.4.6-.2 1.5.4 1.9l5.3 3.6-2.5 2.5-2.3-.6c-.5-.1-1.1.1-1.4.5l-.5.5c-.3.4-.2 1 .2 1.3l2.8 2.2 2.2 2.8c.3.4.9.5 1.3.2l.5-.5c.4-.3.6-.9.5-1.4l-.6-2.3 2.5-2.5 3.6 5.3c.4.6 1.3.8 1.9.4l1.2-.8c.6-.4.9-1.2.7-1.9z" />
    </svg>
  );
}

function TrainIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-6 h-6"}
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

function CarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-6 h-6"}
      aria-hidden="true"
    >
      <path d="M19 17H5v-7l3-5h8l3 5z" />
      <path d="M3 17v2h18v-2" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
    </svg>
  );
}

function BusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-6 h-6"}
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

function WalkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-5 h-5"}
      aria-hidden="true"
    >
      <circle cx="12" cy="4" r="1" />
      <path d="m6 20 4-4" />
      <path d="m6 8 4 4 2-4 4 4" />
      <path d="m14 20-2-5.5" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "w-4 h-4"}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
interface RouteEntry {
  name: string;
  distance: string;
}

interface RouteCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  entries: RouteEntry[];
}

const routeCards: RouteCard[] = [
  {
    id: "flight",
    title: "Arrival via Flight",
    subtitle: "Nearest Airports",
    icon: <PlaneIcon />,
    entries: [
      { name: "Hubli Airport (HBX)", distance: "65 Kms" },
      { name: "Belgaum Airport (IXG)", distance: "98 Kms" },
      { name: "Goa Airport (GOI)", distance: "125 Kms" },
    ],
  },
  {
    id: "train",
    title: "Arrival via Train",
    subtitle: "Nearest Stations",
    icon: <TrainIcon />,
    entries: [
      { name: "Alnavar (LWR)", distance: "32 Kms" },
      { name: "Londa (LD)", distance: "35 Kms" },
      { name: "Dharwad (DWR)", distance: "52 Kms" },
      { name: "Hubli (UBL)", distance: "68 Kms" },
      { name: "Belgaum (BGM)", distance: "98 Kms" },
    ],
  },
  {
    id: "road",
    title: "Arrival via Road",
    subtitle: "Major Cities",
    icon: <CarIcon />,
    entries: [
      { name: "Bengaluru", distance: "425 Kms" },
      { name: "Pune", distance: "430 Kms" },
      { name: "Mumbai", distance: "580 Kms" },
      { name: "Hyderabad", distance: "580 Kms" },
      { name: "Chennai", distance: "830 Kms" },
    ],
  },
];

/* ─── Accordion card ─────────────────────────────────────────────────────── */
function AccordionCard({ card }: { card: RouteCard }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="bg-sand-100 dark:bg-sand-950/60 rounded-2xl border border-sand-300 dark:border-earth-700/80 shadow-sm overflow-hidden"
    >
      {/* Header — always visible, clickable */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 p-5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-river-500 focus-visible:outline-offset-[-2px]"
      >
        {/* Icon bubble */}
        <span className="shrink-0 w-11 h-11 rounded-xl bg-forest-100 dark:bg-forest-900/60 text-forest-600 dark:text-forest-300 flex items-center justify-center">
          {card.icon}
        </span>

        {/* Titles */}
        <span className="flex-1 min-w-0">
          <span className="block font-heading text-base font-semibold text-forest-700 dark:text-forest-300 leading-snug">
            {card.title}
          </span>
          <span className="block text-xs text-earth-500 dark:text-earth-400 mt-0.5">
            {card.subtitle}
          </span>
        </span>

        {/* Chevron */}
        <span
          className={`shrink-0 text-earth-500 dark:text-earth-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </button>

      {/* Expandable list */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="px-5 pb-4 space-y-2 border-t border-sand-300/40 dark:border-earth-800/60 pt-3">
              {card.entries.map((entry) => (
                <li
                  key={entry.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-earth-700 dark:text-earth-200">
                    {entry.name}
                  </span>
                  <span className="font-semibold text-forest-700 dark:text-forest-300 tabular-nums">
                    {entry.distance}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Distance() {
  return (
    <section
      id="distance"
      className="py-24 px-4 bg-mist-100 dark:bg-mist-900 border-y border-sand-300/40 dark:border-earth-800/60"
    >
      <div className="max-w-4xl mx-auto space-y-16">

        {/* ── Part 1: How to Reach Dandeli ─────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-forest-700 dark:text-forest-300 font-semibold">
              How to Reach Us
            </h2>
            <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
              Dandeli is well connected by air, rail, and road. Click any card
              to see nearby options.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {routeCards.map((card) => (
              <AccordionCard key={card.id} card={card} />
            ))}
          </motion.div>
        </div>

        {/* ── Part 2: Once You're in Dandeli ───────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h3 className="font-heading text-2xl md:text-3xl text-forest-700 dark:text-forest-300 font-semibold">
              Once You&rsquo;re in Dandeli
            </h3>
            <p className="mt-2 text-earth-600 dark:text-earth-300 text-sm max-w-md mx-auto">
              You&rsquo;re practically already here.
            </p>
          </motion.div>

          {/* Hero highlight card — prominently larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative max-w-lg mx-auto bg-forest-700 dark:bg-forest-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Subtle texture ring */}
            <div
              aria-hidden="true"
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-forest-600/30 dark:bg-forest-600/20"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-forest-600/20"
            />

            <div className="relative p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Icon */}
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-sand-100/15 text-sand-100 flex items-center justify-center">
                <BusIcon className="w-8 h-8" />
              </div>

              {/* Text */}
              <div className="text-center sm:text-left flex-1">
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 mb-3">
                  <WalkIcon className="w-3.5 h-3.5" />
                  Just 3 minutes away!
                </span>

                <h4 className="font-heading text-2xl sm:text-3xl font-bold text-sand-50 leading-snug">
                  Dandeli Bus Stand
                  <span className="block text-sm font-normal text-sand-200/80 mt-0.5">
                    NWKRTC
                  </span>
                </h4>

                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-gold-400">
                      300 m
                    </p>
                    <p className="text-xs text-sand-300/80 mt-0.5">distance</p>
                  </div>
                  <div className="w-px h-10 bg-sand-100/20 hidden sm:block" />
                  <div className="text-center">
                    <p className="font-heading text-3xl font-bold text-gold-400">
                      ~3 min
                    </p>
                    <p className="text-xs text-sand-300/80 mt-0.5">walk</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-sand-200/75 leading-relaxed">
                  Step off your bus and you&rsquo;re practically at our door —
                  no auto-rickshaw needed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
