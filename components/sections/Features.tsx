"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ─── Animation variants ─────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── SVG icons (24×24, stroke 1.75) ─────────────────────────────────────── */
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

function BonfireIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
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

function TrailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
      <path d="m17 18 2-4 2 4" />
      <path d="m19 6-2-4" />
      <path d="m21 6-2-4" />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
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
    icon: <WifiIcon />,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary high-speed internet across the property.",
  },
  {
    icon: <BonfireIcon />,
    title: "Bonfire & BBQ",
    description: "Gather under the stars for a riverside bonfire with fresh barbecue every evening.",
  },
  {
    icon: <RestaurantIcon />,
    title: "In-house Restaurant",
    description: "Savour authentic Karnataka cuisine and freshly caught river fish, made to order.",
  },
  {
    icon: <ParkingIcon />,
    title: "Free Parking",
    description: "Secure, shaded parking for cars and two-wheelers right at the lodge entrance.",
  },
  {
    icon: <TrailIcon />,
    title: "Nature Trails",
    description: "Guided forest walks through the Dandeli wildlife sanctuary, steps from your room.",
  },
  {
    icon: <PoolIcon />,
    title: "Swimming Pool",
    description: "Cool off in our open-air pool overlooking the Kali river and forest canopy.",
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
            Lodge Amenities
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Everything you need for a comfortable forest getaway, all included with your stay.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={card}
              className="group bg-mist-100 dark:bg-mist-900 rounded-2xl p-6 border border-sand-300 dark:border-earth-700
                         transition-shadow duration-200 hover:shadow-lg hover:shadow-forest-700/5 dark:hover:shadow-forest-400/5 cursor-default"
            >
              {/* Icon badge */}
              <div className="w-11 h-11 rounded-xl bg-forest-100 dark:bg-forest-900 flex items-center justify-center text-forest-600 dark:text-forest-300 mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-semibold text-forest-700 dark:text-forest-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-earth-600 dark:text-earth-300">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
