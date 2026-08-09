"use client";

import { motion } from "framer-motion";

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */
function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-forest-600 dark:text-forest-300 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function NavigationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

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
      className="w-3.5 h-3.5 shrink-0 ml-1 inline-block"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Location() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=15.2457258,74.6227294+(Dandeli+Holiday+Inn+Lodge)&z=16&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Dandeli+Holiday+Inn+Lodge&destination_place_id=ChIJUau4rbUhvzsRxXDL6lUkipg";

  const placeUrl =
    "https://www.google.com/maps/place/?q=place_id:ChIJUau4rbUhvzsRxXDL6lUkipg";

  return (
    <section
      id="location"
      className="py-24 px-4 bg-mist-100 dark:bg-mist-900 border-y border-sand-300/40 dark:border-earth-800/60"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-forest-700 dark:text-forest-300 font-semibold">
            Find Us
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-md mx-auto">
            Conveniently located in the heart of Dandeli — just 300 m from the bus stand.
          </p>
        </motion.div>

        {/* Address Card & Get Directions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
          className="bg-sand-100 dark:bg-sand-950/60 rounded-2xl p-6 md:p-8 border border-sand-300 dark:border-earth-700/80 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-start gap-3.5">
            <MapPinIcon />
            <div>
              <h3 className="font-heading text-lg font-semibold text-forest-700 dark:text-forest-300">
                Dandeli Holiday Inn Lodge
              </h3>
              <p className="text-sm text-earth-600 dark:text-earth-300 mt-1 leading-relaxed">
                J.N Road, opp. Sunday Market, Bangur Nagar, Dandeli, Karnataka 581325
              </p>
              <p className="text-xs text-earth-500 dark:text-earth-400 mt-1">
                GPS: 15.2457258, 74.6227294
              </p>
            </div>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 text-sand-950 hover:bg-gold-400 active:scale-[0.98] font-semibold text-sm transition-all shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            <NavigationIcon />
            Get Directions
          </a>
        </motion.div>

        {/* Responsive Google Maps iFrame */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.16 }}
          className="space-y-3"
        >
          <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-sand-300 dark:border-earth-700/80 shadow-md bg-sand-200/50 dark:bg-sand-900/50">
            <iframe
              title="Dandeli Holiday Inn Lodge Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Secondary link near map */}
          <div className="flex justify-end px-1">
            <a
              href={placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-medium text-forest-700 dark:text-forest-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
            >
              View us on Google Maps
              <ExternalLinkIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
