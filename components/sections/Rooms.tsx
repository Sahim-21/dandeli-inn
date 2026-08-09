"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { rooms } from "@/lib/rooms";
import { useBooking } from "@/lib/BookingContext";

/* ─── Motion variants ────────────────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */
function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 inline-block mr-1 shrink-0"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function AcLeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 inline-block mr-1 shrink-0"
      aria-hidden="true"
    >
      <path d="M8 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3" />
      <path d="M12 15v7" />
      <path d="M9 18h6" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Rooms() {
  const { selectRoomAndScroll } = useBooking();

  return (
    <section id="rooms" className="py-24 px-4 bg-sand-100 dark:bg-sand-900">
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
            Rooms &amp; Rates
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Pick the room that fits your group. All rates are per room, per night.
          </p>
        </motion.div>

        {/* Room Cards Grid — 3 columns on large screens */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rooms.map((room) => (
            <motion.article
              key={room.id}
              variants={cardVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-mist-100 dark:bg-mist-900 rounded-2xl overflow-hidden border border-sand-300 dark:border-earth-700 shadow-sm flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-52 w-full overflow-hidden bg-forest-900/10 shrink-0">
                <Image
                  src={room.image}
                  alt={room.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />

                {/* AC / Non-AC badge */}
                <span
                  className={`absolute top-3 left-3 inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ${
                    room.ac
                      ? "bg-river-100 dark:bg-river-900/70 text-river-700 dark:text-river-300"
                      : "bg-sand-200/90 dark:bg-earth-700/90 text-earth-700 dark:text-earth-200"
                  }`}
                >
                  {room.ac && <AcLeafIcon />}
                  {room.ac ? "AC" : "Non-AC"}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                {/* Room label */}
                <h3 className="font-heading text-xl text-forest-700 dark:text-forest-300 font-semibold leading-snug">
                  {room.label}
                </h3>

                {/* Capacity + Price row */}
                <div className="flex items-center justify-between gap-2">
                  {/* Capacity */}
                  <span className="flex items-center text-sm text-earth-600 dark:text-earth-300">
                    <UserIcon />
                    Accommodates {room.sharing}{" "}
                    {room.sharing === 1 ? "guest" : "guests"}
                  </span>

                  {/* Price */}
                  <span className="shrink-0">
                    <span className="font-heading text-2xl font-bold text-forest-700 dark:text-forest-300">
                      ₹{room.pricePerNight.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-earth-500 dark:text-earth-400 ml-1">
                      /night
                    </span>
                  </span>
                </div>

                {/* Book button — pushed to bottom */}
                <button
                  type="button"
                  onClick={() => selectRoomAndScroll(room.id)}
                  className="mt-auto w-full py-2.5 px-4 rounded-xl bg-forest-700 text-sand-100 hover:bg-forest-600 dark:bg-forest-600 dark:hover:bg-forest-500 font-semibold text-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-river-500"
                >
                  Book This Room
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
