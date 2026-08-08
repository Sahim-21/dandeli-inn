"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* ─── Motion Variants ────────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── Location SVG Icon ──────────────────────────────────────────────────── */
function LocationPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 inline-block mr-1 opacity-90"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ─── Attraction Data ────────────────────────────────────────────────────── */
interface SightseeingItem {
  name: string;
  description: string;
  distance: string;
  image: string;
}

const attractions: SightseeingItem[] = [
  {
    name: "Kali River",
    description: "River rafting & adrenaline-filled water sports on white-water rapids.",
    distance: "3 km",
    image: "/images/sightseeing/kali-river.jpg",
  },
  {
    name: "Syntheri Rocks",
    description: "Dramatic 300 ft monolithic granite rock formation & river ravine.",
    distance: "20 km",
    image: "/images/sightseeing/syntheri-rocks.jpg",
  },
  {
    name: "Kavala Caves",
    description: "Ancient limestone cave temple reached by scenic forest steps.",
    distance: "22 km",
    image: "/images/sightseeing/kavala-caves.jpg",
  },
  {
    name: "Dandeli Wildlife Sanctuary",
    description: "Spot rare Malabar pied hornbills, black panthers & exotic flora.",
    distance: "5 km",
    image: "/images/sightseeing/dandeli-wildlife.jpg",
  },
  {
    name: "Supa Dam",
    description: "Scenic reservoir viewpoint surrounded by lush Western Ghats hills.",
    distance: "25 km",
    image: "/images/sightseeing/supa-dam.jpg",
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Sightseeing() {
  return (
    <section
      id="sightseeing"
      className="py-24 px-4 bg-sand-100 dark:bg-sand-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-forest-700 dark:text-forest-300 font-semibold">
            Sightseeing Near You
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Discover breathtaking natural wonders, adventure spots, and wildlife sanctuaries minutes from the lodge.
          </p>
        </motion.div>

        {/* Scrollable Container on Mobile / Grid on Desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 lg:pb-0 lg:grid lg:grid-cols-5 lg:overflow-visible scrollbar-none"
        >
          {attractions.map((spot) => (
            <motion.article
              key={spot.name}
              variants={cardVariant}
              className="group snap-center shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-mist-100 dark:bg-mist-900 rounded-2xl overflow-hidden border border-sand-300 dark:border-earth-700 flex flex-col shadow-sm"
            >
              {/* Full-width Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-forest-900/10">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 20vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
                />
                {/* Distance Badge */}
                <div className="absolute top-3 right-3 bg-sand-950/85 backdrop-blur-md text-sand-100 text-xs font-semibold px-2.5 py-1 rounded-full border border-sand-100/20 shadow-md flex items-center">
                  <LocationPinIcon />
                  {spot.distance}
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-700 dark:text-forest-300 leading-snug">
                    {spot.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-earth-600 dark:text-earth-300">
                    {spot.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
