"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* ─── Data ───────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in is at 11:00 AM, and check-out is at 11:00 AM the next day.",
  },
  {
    q: "Does the lodge have Wi-Fi?",
    a: "Yes, Wi-Fi is available for guests.",
  },
  {
    q: "Do you provide hot water?",
    a: "Yes, hot water is available from 7:00 AM to 11:00 AM.",
  },
  {
    q: "How far is the lodge from Dandeli Bus Stand?",
    a: "Approximately 300 metres, making it convenient for travellers.",
  },
  {
    q: "What activities are available in Dandeli?",
    a: "River rafting, jungle safari, kayaking, ziplining, and nature experiences.",
  },
  {
    q: "Is the lodge safe for female travellers?",
    a: "Yes, the lodge is under CCTV surveillance for a safer, more secure environment.",
  },
  {
    q: "Is parking available?",
    a: "Yes, limited parking is available for guests, subject to availability.",
  },
] as const;

/* ─── Motion ─────────────────────────────────────────────────────────────── */
const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

/* ─── Chevron icon ───────────────────────────────────────────────────────── */
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ─── Single accordion item ──────────────────────────────────────────────── */
function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;

  return (
    <motion.div
      variants={itemVariants}
      className="border border-sand-300 dark:border-earth-700/80 rounded-xl overflow-hidden bg-sand-100 dark:bg-sand-950/50 shadow-sm"
    >
      {/* Question row */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-river-500 focus-visible:outline-offset-[-2px]"
      >
        <span className="font-medium text-sm sm:text-base text-forest-700 dark:text-forest-300 leading-snug">
          {question}
        </span>
        <span className="text-earth-500 dark:text-earth-400">
          <ChevronDown open={open} />
        </span>
      </button>

      {/* Answer — height animates smoothly */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-earth-600 dark:text-earth-300 leading-relaxed border-t border-sand-300/40 dark:border-earth-800/60 pt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Faq() {
  return (
    <section
      id="faq"
      className="py-24 px-4 bg-sand-100 dark:bg-sand-900"
    >
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-forest-700 dark:text-forest-300 font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-earth-600 dark:text-earth-300 max-w-lg mx-auto">
            Everything you need to know before your stay.
          </p>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-3"
        >
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              index={i}
              question={item.q}
              answer={item.a}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
