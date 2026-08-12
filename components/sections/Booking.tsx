"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { rooms } from "@/lib/rooms";
import { useBooking } from "@/lib/BookingContext";

/* ─── Helpers ────────────────────────────────────────────────────────────── */

/** Midnight-today in local time — used to block past dates */
function today(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/** "12 Aug 2026" format for display and WhatsApp message */
function formatDate(d: Date): string {
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/** Difference in whole nights (checkout - checkin) */
function calcNights(checkin: Date, checkout: Date): number {
  const ms = checkout.getTime() - checkin.getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

/* ─── Tiny inline calendar field ─────────────────────────────────────────── */
function DateField({
  id,
  label,
  value,
  onChange,
  disabledBefore,
  placeholder,
}: {
  id: string;
  label: string;
  value: Date | undefined;
  onChange: (d: Date | undefined) => void;
  disabledBefore: Date;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-sand-200 mb-1.5"
      >
        {label} <span className="text-gold-400">*</span>
      </label>

      {/* Trigger button styled as an input */}
      <button
        id={id}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`w-full text-left bg-forest-950/60 border rounded-xl px-4 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-river-400 ${
          value
            ? "text-sand-100 border-sand-100/20"
            : "text-sand-400/60 border-sand-100/20"
        }`}
      >
        {value ? formatDate(value) : placeholder}
      </button>

      {/* Calendar popover */}
      {open && (
        <div
          role="dialog"
          aria-label={label}
          className="absolute z-50 mt-2 left-0 bg-forest-900 border border-sand-100/20 rounded-2xl shadow-2xl p-3"
        >
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(d) => {
              onChange(d);
              if (d) setOpen(false);
            }}
            disabled={{ before: disabledBefore }}
            defaultMonth={value ?? disabledBefore}
            showOutsideDays
          />
        </div>
      )}
    </div>
  );
}

/* ─── WhatsApp SVG icon ───────────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface RoomSelection {
  roomId: string;
  count: number;
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function Booking() {
  const { selectedRoomId, setSelectedRoomId } = useBooking();

  const [name, setName] = useState("");
  const [checkin, setCheckin] = useState<Date | undefined>(undefined);
  const [checkout, setCheckout] = useState<Date | undefined>(undefined);
  const [phone, setPhone] = useState("");

  /* ── Room selections — one or more rows ─────────────────────────────────── */
  const [roomSelections, setRoomSelections] = useState<RoomSelection[]>([
    { roomId: "", count: 1 },
  ]);

  const [cleared, setCleared] = useState(false);

  /* Sync context → row[0] when "Book This Room" fires from the Rooms section */
  useEffect(() => {
    // If we haven't cleared the initial context state yet...
    if (!cleared) {
      if (selectedRoomId !== "") {
        setSelectedRoomId(""); // Clear it so any future click registers as a change
      }
      setCleared(true); // Mark as cleared
      return;
    }

    // Normal sync behavior for actual clicks
    if (selectedRoomId) {
      setRoomSelections((prev) => {
        if (prev[0]?.roomId === selectedRoomId) return prev; // no change needed
        const next = [...prev];
        next[0] = { ...next[0], roomId: selectedRoomId };
        return next;
      });
    }
  }, [selectedRoomId, cleared, setSelectedRoomId]);

  const todayDate = today();

  /* ── Derived values ─────────────────────────────────────────────────────── */
  const nights =
    checkin && checkout && checkout > checkin
      ? calcNights(checkin, checkout)
      : 0;

  const estimatedCost =
    nights > 0
      ? roomSelections.reduce((sum, sel) => {
          const room = rooms.find((r) => r.id === sel.roomId);
          return sum + (room ? room.pricePerNight * nights * sel.count : 0);
        }, 0)
      : 0;

  /* ── Validation ─────────────────────────────────────────────────────────── */
  const validSelections = roomSelections.filter((s) => s.roomId !== "");
  const isValid =
    validSelections.length > 0 &&
    validSelections.every((s) => s.count >= 1) &&
    checkin !== undefined &&
    checkout !== undefined &&
    checkout > checkin;

  /* ── Room selection helpers ─────────────────────────────────────────────── */
  function updateRoomId(index: number, roomId: string) {
    setRoomSelections((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], roomId };
      return next;
    });
    // Keep BookingContext in sync with the first row
    if (index === 0) setSelectedRoomId(roomId);
  }

  function updateCount(index: number, count: number) {
    setRoomSelections((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], count: Math.min(5, Math.max(1, count)) };
      return next;
    });
  }

  function removeRow(index: number) {
    setRoomSelections((prev) => {
      const next = prev.filter((_, i) => i !== index);
      // Keep context in sync if first row was removed
      if (index === 0 && next.length > 0) setSelectedRoomId(next[0].roomId);
      return next;
    });
  }

  function addRow() {
    setRoomSelections((prev) => [...prev, { roomId: "", count: 1 }]);
  }

  /* ── When checkin changes, clear a checkout that's now invalid ──────────── */
  function handleCheckinChange(d: Date | undefined) {
    setCheckin(d);
    if (d && checkout && checkout <= d) setCheckout(undefined);
  }

  /* ── WhatsApp message ───────────────────────────────────────────────────── */
  function handleCheckAvailability() {
    if (!isValid || !checkin || !checkout) return;

    const phoneText = phone.trim() || "Not provided";

    const roomLines = roomSelections
      .filter((sel) => sel.roomId !== "")
      .map((sel) => {
        const room = rooms.find((r) => r.id === sel.roomId);
        return `  – ${room?.label ?? sel.roomId} × ${sel.count} room${sel.count > 1 ? "s" : ""}`;
      });

    const lines = [
      `Hello Dandeli Inn!`,
      ``,
      `I would like to check availability for a stay:`,
      `• Guest Name: ${name.trim() || "Not provided"}`,
      `• Rooms:`,
      ...roomLines,
      `• Check-in:  ${formatDate(checkin)}`,
      `• Check-out: ${formatDate(checkout)}`,
      `• Nights:    ${nights}`,
      `• Phone:     ${phoneText}`,
      `• Estimated Total: ₹${estimatedCost.toLocaleString("en-IN")}`,
      ``,
      `Please let me know if these dates are available. Thank you!`,
    ];

    const url = `https://wa.me/917259109986?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
  }

  /* ── Render ─────────────────────────────────────────────────────────────── */
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
            Pick your rooms and dates to get an instant price estimate, then
            check availability on WhatsApp.
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
          {/* Name */}
          <div>
            <label
              htmlFor="guest-name"
              className="block text-sm font-medium text-sand-200 mb-1.5"
            >
              Full Name{" "}
              <span className="text-sand-400/80 text-xs font-normal">
                (Optional)
              </span>
            </label>
            <input
              id="guest-name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-forest-950/60 border border-sand-100/20 rounded-xl px-4 py-3 text-sand-100 placeholder-sand-400/60 focus-visible:outline-2 focus-visible:outline-river-400 text-sm transition-colors"
            />
          </div>

          {/* ── Room Selection Rows ────────────────────────────────────────── */}
          <div>
            <p className="block text-sm font-medium text-sand-200 mb-2">
              Room Type <span className="text-gold-400">*</span>
            </p>

            <div className="space-y-2">
              {roomSelections.map((sel, i) => {
                const room = rooms.find((r) => r.id === sel.roomId) ?? rooms[0];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2"
                  >
                    {/* Room type dropdown */}
                    <select
                      id={i === 0 ? "room-type-select" : `room-type-select-${i}`}
                      value={sel.roomId}
                      onChange={(e) => updateRoomId(i, e.target.value)}
                      className="flex-1 min-w-0 bg-forest-950/60 border border-sand-100/20 rounded-xl px-3 py-3 text-sand-100 focus-visible:outline-2 focus-visible:outline-river-400 text-sm cursor-pointer transition-colors"
                    >
                      <option value="" disabled className="bg-sand-900 text-sand-400">
                        Select Room
                      </option>
                      {rooms.map((r) => (
                        <option
                          key={r.id}
                          value={r.id}
                          className="bg-sand-900 text-sand-100"
                        >
                          {r.label} — ₹{r.pricePerNight.toLocaleString("en-IN")}/night
                        </option>
                      ))}
                    </select>

                    {/* Quantity stepper */}
                    <div className="flex items-center shrink-0 bg-forest-950/60 border border-sand-100/20 rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => updateCount(i, sel.count - 1)}
                        disabled={sel.count <= 1}
                        aria-label="Decrease room count"
                        className="px-3 py-3 text-sand-200 hover:text-sand-100 hover:bg-sand-100/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-base leading-none"
                      >
                        −
                      </button>
                      <span className="px-2 text-sm font-semibold text-sand-100 min-w-[1.75rem] text-center tabular-nums">
                        {sel.count}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateCount(i, sel.count + 1)}
                        disabled={sel.count >= 5}
                        aria-label="Increase room count"
                        className="px-3 py-3 text-sand-200 hover:text-sand-100 hover:bg-sand-100/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-base leading-none"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove row — only when more than one row exists */}
                    {roomSelections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeRow(i)}
                        aria-label={`Remove ${room.label} row`}
                        className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl text-sand-300/70 hover:text-sand-100 hover:bg-sand-100/15 transition-colors text-lg leading-none"
                      >
                        ×
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Add another room row */}
            {roomSelections.length < rooms.length && (
              <button
                type="button"
                onClick={addRow}
                className="mt-2 text-xs font-medium text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1"
              >
                <span className="text-base leading-none">+</span> Add another room type
              </button>
            )}
          </div>

          {/* Check-in / Check-out — side by side on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DateField
              id="checkin-date"
              label="Check-in Date"
              value={checkin}
              onChange={handleCheckinChange}
              disabledBefore={todayDate}
              placeholder="Select check-in date"
            />
            <DateField
              id="checkout-date"
              label="Check-out Date"
              value={checkout}
              onChange={setCheckout}
              disabledBefore={
                checkin
                  ? new Date(checkin.getTime() + 86400000)
                  : new Date(todayDate.getTime() + 86400000)
              }
              placeholder="Select check-out date"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-sand-200 mb-1.5"
            >
              Phone Number{" "}
              <span className="text-sand-400/80 text-xs font-normal">
                (Optional)
              </span>
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

          {/* ── Cost Breakdown ─────────────────────────────────────────────── */}
          <div className="rounded-xl bg-sand-100/10 border border-sand-100/20 p-4 sm:p-5 space-y-2">
            {nights > 0 ? (
              <>
                {roomSelections.map((sel, i) => {
                  const room = rooms.find((r) => r.id === sel.roomId);
                  if (!room) return null;
                  const subtotal = room.pricePerNight * nights * sel.count;
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs sm:text-sm text-sand-200"
                    >
                      <span>
                        {room.label}
                        {sel.count > 1 && (
                          <span className="text-sand-300/70"> × {sel.count} rooms</span>
                        )}{" "}
                        × {nights} night{nights > 1 ? "s" : ""}
                      </span>
                      <span className="font-mono shrink-0 ml-2">
                        ₹{subtotal.toLocaleString("en-IN")}
                      </span>
                    </div>
                  );
                })}
              </>
            ) : (
              <p className="text-xs text-sand-300/70 italic">
                Select check-in and check-out dates to see an estimate.
              </p>
            )}

            <div className="pt-3 border-t border-sand-100/20 flex items-center justify-between">
              <div>
                <span className="font-heading text-lg sm:text-xl font-bold text-gold-400 block">
                  Estimated Total
                </span>
                <span className="text-[11px] text-sand-300/75 block">
                  *Estimate only, subject to availability
                </span>
              </div>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-gold-400 font-mono">
                {nights > 0
                  ? `₹${estimatedCost.toLocaleString("en-IN")}`
                  : "—"}
              </span>
            </div>
          </div>

          {/* Submit */}
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
            <WhatsAppIcon />
            Check Availability on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
