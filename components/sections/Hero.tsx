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
        alt="Lush forest canopy along the Kali river in Dandeli"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ── Dark overlay — keeps text readable in both themes ────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-forest-950/75 dark:bg-forest-950/80"
      />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-sand-50 leading-tight"
        >
          Kali Riverside Lodge
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg sm:text-xl text-sand-200/90 max-w-xl mx-auto"
        >
          A peaceful forest retreat on the banks of the Kali river, Dandeli
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gold-500 text-sand-950 font-semibold text-sm
                       hover:bg-gold-400 active:scale-[0.98] transition-all duration-150
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400
                       min-w-[160px] min-h-[48px]"
          >
            Book Now
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-sand-200/30 text-sand-100 font-semibold text-sm
                       hover:bg-sand-100/10 active:scale-[0.98] transition-all duration-150
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-200
                       min-w-[160px] min-h-[48px]"
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
