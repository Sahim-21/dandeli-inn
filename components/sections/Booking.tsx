"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { rooms } from "@/lib/rooms";
import { useBooking } from "@/lib/BookingContext";

export default function Booking() {
  const { selectedRoomId, setSelectedRoomId } = useBooking();

  const [name, setName] = useState("");
  const [guests, setGuests] = useState<number>(2);
  const [nights, setNights] = useState<number>(1);
  const [phone, setPhone] = useState("");

  const selectedRoom = rooms.find((r) => r.id === selectedRoomId) || rooms[0];

  /* ── Cost Calculation ─────────────────────────────────────────────────── */
  const safeNights = Math.max(1, nights || 1);
  const safeGuests = Math.max(1, guests || 1);

  const baseCost = selectedRoom.pricePerNight * safeNights;
  const extraGuestsCount = Math.max(0, safeGuests - selectedRoom.baseOccupancy);
  const extraGuestCost = extraGuestsCount * selectedRoom.extraGuestFee * safeNights;
  const estimatedCost = baseCost + extraGuestCost;

  /* ── Form Validation ─────────────────────────────────────────────────── */
  const isValid =
    name.trim().length > 0 &&
    selectedRoomId.length > 0 &&
    guests >= 1 &&
    nights >= 1;

  /* ── WhatsApp Action ───────────────────────────────────────────────────── */
  const handleCheckAvailability = () => {
    if (!isValid) return;

    const phoneText = phone.trim() ? phone.trim() : "Not provided";

    const messageLines = [
      `Hello Kali Riverside Lodge!`,
      ``,
      `I would like to check availability for a stay:`,
      `• Guest Name: ${name.trim()}`,
      `• Room Type: ${selectedRoom.name}`,
      `• Number of Guests: ${safeGuests}`,
      `• Number of Nights: ${safeNights}`,
      `• Phone: ${phoneText}`,
      `• Estimated Total: ₹${estimatedCost.toLocaleString("en-IN")}`,
      ``,
      `Please let me know if these dates are available. Thank you!`,
    ];

    const rawText = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/919591524573?text=${encodeURIComponent(rawText)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="booking"
      className="py-24 px-4 bg-forest-700 dark:bg-forest-900 text-sand-100"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-sand-100 font-semibold">
            Book Your Stay
          </h2>
          <p className="mt-3 text-sand-200/90 max-w-md mx-auto text-sm md:text-base">
            Select your preferences below to estimate your cost and check instant availability via WhatsApp.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.12 }}
          className="bg-sand-100/10 dark:bg-sand-950/40 rounded-2xl p-6 sm:p-8 border border-sand-100/20 backdrop-blur-sm space-y-6 shadow-xl"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="guest-name"
              className="block text-sm font-medium text-sand-200 mb-1.5"
            >
              Full Name <span className="text-gold-400">*</span>
            </label>
            <input
              id="guest-name"
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-forest-950/60 border border-sand-100/20 rounded-xl px-4 py-3 text-sand-100 placeholder-sand-400/60 focus-visible:outline-2 focus-visible:outline-river-400 text-sm transition-colors"
            />
          </div>

          {/* Room Type Selector */}
          <div>
            <label
              htmlFor="room-type-select"
              className="block text-sm font-medium text-sand-200 mb-1.5"
            >
              Room Type <span className="text-gold-400">*</span>
            </label>
            <select
              id="room-type-select"
              required
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full bg-forest-950/60 border border-sand-100/20 rounded-xl px-4 py-3 text-sand-100 focus-visible:outline-2 focus-visible:outline-river-400 text-sm cursor-pointer transition-colors"
            >
              {rooms.map((room) => (
                <option key={room.id} value={room.id} className="bg-sand-900 text-sand-100 py-1">
                  {room.name} — ₹{room.pricePerNight.toLocaleString("en-IN")}/night (Base: {room.baseOccupancy} guests)
                </option>
              ))}
            </select>
          </div>

          {/* Guests & Nights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Number of Guests */}
            <div>
              <label
                htmlFor="guests-count"
                className="block text-sm font-medium text-sand-200 mb-1.5"
              >
                Number of Guests <span className="text-gold-400">*</span>
              </label>
              <input
                id="guests-count"
                type="number"
                min={1}
                required
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
                className="w-full bg-forest-950/60 border border-sand-100/20 rounded-xl px-4 py-3 text-sand-100 focus-visible:outline-2 focus-visible:outline-river-400 text-sm transition-colors"
              />
            </div>

            {/* Number of Nights */}
            <div>
              <label
                htmlFor="nights-count"
                className="block text-sm font-medium text-sand-200 mb-1.5"
              >
                Number of Nights <span className="text-gold-400">*</span>
              </label>
              <input
                id="nights-count"
                type="number"
                min={1}
                required
                value={nights}
                onChange={(e) => setNights(parseInt(e.target.value, 10) || 1)}
                className="w-full bg-forest-950/60 border border-sand-100/20 rounded-xl px-4 py-3 text-sand-100 focus-visible:outline-2 focus-visible:outline-river-400 text-sm transition-colors"
              />
            </div>
          </div>

          {/* Phone Number (Optional) */}
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-sand-200 mb-1.5"
            >
              Phone Number <span className="text-sand-400/80 text-xs font-normal">(Optional)</span>
            </label>
            <input
              id="phone-number"
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-forest-950/60 border border-sand-100/20 rounded-xl px-4 py-3 text-sand-100 placeholder-sand-400/60 focus-visible:outline-2 focus-visible:outline-river-400 text-sm transition-colors"
            />
          </div>

          {/* ── Live Cost Breakdown Box ──────────────────────────────────── */}
          <div className="rounded-xl bg-sand-100/10 border border-sand-100/20 p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm text-sand-200">
              <span>
                {selectedRoom.name} ({safeNights} night{safeNights > 1 ? "s" : ""})
              </span>
              <span className="font-mono">
                ₹{selectedRoom.pricePerNight.toLocaleString("en-IN")} × {safeNights} = ₹{baseCost.toLocaleString("en-IN")}
              </span>
            </div>

            {extraGuestsCount > 0 ? (
              <div className="flex items-center justify-between text-xs sm:text-sm text-sand-200">
                <span>
                  Extra guests ({extraGuestsCount} guest{extraGuestsCount > 1 ? "s" : ""} above base {selectedRoom.baseOccupancy})
                </span>
                <span className="font-mono">
                  +₹{extraGuestCost.toLocaleString("en-IN")}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs text-sand-300/80 italic">
                <span>Base occupancy included ({selectedRoom.baseOccupancy} guests max)</span>
                <span>No extra charge</span>
              </div>
            )}

            <div className="pt-3 border-t border-sand-100/20 flex items-center justify-between">
              <div>
                <span className="font-heading text-lg sm:text-xl font-bold text-gold-400 block">
                  Estimated Total
                </span>
                <span className="text-[11px] text-sand-300/75 block">
                  *Estimate only, subject to date availability
                </span>
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-gold-400 font-mono">
                ₹{estimatedCost.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Submit / Check Availability Button */}
          <motion.button
            type="button"
            onClick={handleCheckAvailability}
            disabled={!isValid}
            whileHover={isValid ? { scale: 1.02 } : {}}
            whileTap={isValid ? { scale: 0.98 } : {}}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-150 shadow-md ${
              isValid
                ? "bg-gold-500 text-sand-950 hover:bg-gold-400 cursor-pointer"
                : "bg-sand-100/20 text-sand-400/60 cursor-not-allowed opacity-60"
            }`}
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Check Availability on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
