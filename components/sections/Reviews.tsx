"use client";

import { motion, type Variants } from "framer-motion";
import { reviews } from "@/lib/reviews";

/* ─── Motion Variants ────────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── Google 'G' Icon ────────────────────────────────────────────────────── */
function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
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

/* ─── Star Rating Helper ─────────────────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          className={`w-4 h-4 ${
            star <= rating ? "text-gold-400 fill-gold-400" : "text-sand-400/30"
          }`}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Initials Generator ─────────────────────────────────────────────────── */
function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 px-4 bg-forest-700 dark:bg-forest-900 text-sand-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-sand-100/10 px-3.5 py-1.5 rounded-full border border-sand-100/20 mb-4 text-xs text-sand-200">
            <GoogleGIcon className="w-4 h-4" />
            <span>4.9 / 5.0 Rating from verified Google Reviews</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl text-sand-100 font-semibold">
            Guest Reviews
          </h2>
          <p className="mt-3 text-sand-200/90 max-w-lg mx-auto text-sm md:text-base">
            See what our guests say about their stay at Kali Riverside Lodge.
          </p>
        </motion.div>

        {/* Reviews Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((rev) => (
            <motion.article
              key={rev.author_name}
              variants={cardVariant}
              className="bg-sand-100/10 dark:bg-sand-950/40 rounded-2xl p-6 border border-sand-100/20 backdrop-blur-sm flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Header: Circle Avatar + Name + Relative Time */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Circle Avatar with Initials */}
                    <div className="w-10 h-10 rounded-full bg-forest-900/80 border border-sand-100/30 text-sand-100 flex items-center justify-center font-semibold text-sm shrink-0">
                      {getInitials(rev.author_name)}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-sand-100 leading-snug">
                        {rev.author_name}
                      </h3>
                      <p className="text-xs text-sand-300/75">
                        {rev.relative_time_description}
                      </p>
                    </div>
                  </div>

                  {/* Google 'G' Icon */}
                  <div className="p-1.5 rounded-full bg-sand-100/10 shrink-0" title="Verified Google Review">
                    <GoogleGIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-3">
                  <StarRating rating={rev.rating} />
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-sand-200/90 font-sans">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Card Footer: Posted on Google Badge */}
              <div className="mt-5 pt-4 border-t border-sand-100/15 flex items-center justify-between text-xs text-sand-300/80">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <GoogleGIcon className="w-3.5 h-3.5" />
                  Posted on Google
                </span>
                <span className="text-[11px] text-gold-400">Verified Stay</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
