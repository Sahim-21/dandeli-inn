"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* ─── Stagger orchestrator ───────────────────────────────────────────────── */
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
} satisfies Variants;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
} satisfies Variants;

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* ── Background image ─────────────────────────────────────────── */}
      <Image
        src="/images/hero.jpg"
        alt="Lush forest canopy with sunlight rays filtering through the trees at Dandeli Wildlife Sanctuary"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ── High-contrast gradient overlay — ensures readability over bright spots ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/50 to-forest-950/75"
      />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        {/* Top welcome badge */}
        <motion.div variants={fadeUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-950/60 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-md">
            ✨ Budget-Friendly Comfort in Dandeli
          </span>
        </motion.div>

        {/* Heading — sole <h1> on the page */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] leading-tight"
        >
          Dandeli <span className="text-gold-400">Inn</span>
        </motion.h1>

        {/* Tagline inside a subtle glass card for optimal contrast */}
        <motion.div
          variants={fadeUp}
          className="mt-6 p-4 sm:p-5 rounded-2xl bg-forest-950/40 border border-sand-100/15 backdrop-blur-md max-w-2xl mx-auto shadow-xl"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium text-sand-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed">
            A comfortable, budget-friendly stay in the heart of Dandeli — just{" "}
            <span className="text-gold-300 font-semibold underline decoration-gold-400/60 underline-offset-4">
              300 m from the bus stand
            </span>
            .
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gold-400 text-forest-950 font-bold text-sm sm:text-base
                       hover:bg-gold-300 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-gold-500/20
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400
                       min-w-[170px] min-h-[50px]"
          >
            Book Now
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-forest-950/50 border border-sand-100/30 text-white font-semibold text-sm sm:text-base
                       hover:bg-forest-900/70 hover:border-sand-100/50 active:scale-[0.98] transition-all duration-150 backdrop-blur-md shadow-lg
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-200
                       min-w-[170px] min-h-[50px]"
          >
            View Rooms
          </a>
        </motion.div>
      </motion.div>

      {/* ── Bottom gradient fade — smooth blend into the next section ── */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent"
      />
    </section>
  );
}
