"use client";

import { motion, type Variants } from "framer-motion";

/* ─── Motion ─────────────────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ─── Google "G" icon ────────────────────────────────────────────────────── */
function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

/* ─── Star icon ──────────────────────────────────────────────────────────── */
function StarFilled({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? "w-5 h-5"}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarHalf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ?? "w-5 h-5"}
      aria-hidden="true"
    >
      {/* left half filled, right half outlined */}
      <defs>
        <linearGradient id="half-fill">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="url(#half-fill)"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

/* ─── Trust point data ───────────────────────────────────────────────────── */
const trustPoints = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    heading: "Unbeatable Central Location",
    body: "Just 300 m from Dandeli Bus Stand — step off and you're practically at our door, no auto-rickshaw needed.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    heading: "Clean & Well-Maintained Rooms",
    body: "Guests consistently highlight neat, tidy rooms with fresh linen — maintained to a high standard of cleanliness.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    heading: "Friendly, Helpful Front Desk",
    body: "Our staff are known for being approachable and responsive — happy to assist with bookings, local tips, and anything you need.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    heading: "Safe & Secure Environment",
    body: "The property is under CCTV surveillance 24/7, providing peace of mind for solo travellers and families alike.",
  },
] as const;

/* ─── External link icon ─────────────────────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 px-4 bg-forest-700 dark:bg-forest-900 text-sand-100"
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Rating badge + heading ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-sand-100 font-semibold mb-6">
            What Guests Say
          </h2>

          {/* Rating card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 bg-sand-100/10 border border-sand-100/20 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            {/* Google logo + score */}
            <div className="flex items-center gap-3">
              <GoogleGIcon className="w-9 h-9 shrink-0" />
              <div className="text-left">
                <p className="text-3xl font-bold text-sand-50 leading-none">
                  4.5
                  <span className="text-base font-normal text-sand-300/80 ml-1">
                    / 5
                  </span>
                </p>
                <p className="text-xs text-sand-300/75 mt-0.5">
                  292 Google Reviews
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-sand-100/20" />

            {/* Stars */}
            <div
              className="flex items-center gap-0.5 text-gold-400"
              aria-label="4.5 out of 5 stars"
            >
              <StarFilled className="w-6 h-6" />
              <StarFilled className="w-6 h-6" />
              <StarFilled className="w-6 h-6" />
              <StarFilled className="w-6 h-6" />
              <StarHalf className="w-6 h-6" />
            </div>
          </div>

          {/* CTA button */}
          <div className="mt-6">
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJUau4rbUhvzsRxXDL6lUkipg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-sand-100/25 text-sand-200 hover:bg-sand-100/10 hover:text-sand-100 transition-colors text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-river-400"
            >
              <GoogleGIcon className="w-4 h-4" />
              Read All Reviews on Google
              <ExternalLinkIcon />
            </a>
          </div>
        </motion.div>

        {/* ── Trust points grid ───────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.heading}
              variants={fadeUp}
              className="flex items-start gap-4 bg-sand-100/10 border border-sand-100/15 rounded-2xl p-5 backdrop-blur-sm"
            >
              {/* Icon bubble */}
              <span className="shrink-0 w-10 h-10 rounded-xl bg-sand-100/10 text-gold-400 flex items-center justify-center mt-0.5">
                {point.icon}
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-sand-100 leading-snug mb-1">
                  {point.heading}
                </h3>
                <p className="text-sm text-sand-200/80 leading-relaxed">
                  {point.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
