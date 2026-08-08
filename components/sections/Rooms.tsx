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

/* ─── SVG User Icon ──────────────────────────────────────────────────────── */
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
      className="w-4 h-4 inline-block mr-1 opacity-75"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Rooms() {
  const { selectRoomAndScroll } = useBooking();

  return (
    <section
      id="rooms"
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
            Accommodations
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Choose from serene riverside cottages and luxury glamping tents surrounded by nature.
          </p>
        </motion.div>

        {/* Room Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {rooms.map((room) => (
            <motion.article
              key={room.id}
              variants={cardVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-mist-100 dark:bg-mist-900 rounded-2xl overflow-hidden border border-sand-300 dark:border-earth-700 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-forest-900/10">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading text-xl text-forest-700 dark:text-forest-300 font-semibold leading-snug">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed mb-4">
                    {room.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-earth-500 dark:text-earth-400 pt-3 border-t border-sand-300/50 dark:border-earth-800">
                    <span className="flex items-center">
                      <UserIcon />
                      Base: {room.baseOccupancy} Guests
                    </span>
                    <span className="font-medium">
                      +₹{room.extraGuestFee}/extra
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0 mt-auto">
                <div className="mb-3">
                  <span className="font-heading text-2xl font-bold text-forest-700 dark:text-forest-300">
                    ₹{room.pricePerNight.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-earth-500 dark:text-earth-400 ml-1">
                    / night
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => selectRoomAndScroll(room.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-forest-700 text-sand-100 hover:bg-forest-600 dark:bg-forest-600 dark:hover:bg-forest-500 font-semibold text-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-river-500"
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
