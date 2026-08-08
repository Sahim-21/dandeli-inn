"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Nav links ──────────────────────────────────────────────────────────── */
const links = [
  { label: "Home", href: "#hero" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#features" },
  { label: "Sightseeing", href: "#sightseeing" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book Now", href: "#booking" },
] as const;

/* ─── SVG Icons (inline, no emoji) ───────────────────────────────────────── */
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Hydration guard — avoid theme mismatch flicker */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Scroll listener for sticky blur background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); // check initial position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <motion.header
      id="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-sand-100/85 dark:bg-sand-950/85 backdrop-blur-md border-b border-sand-300/60 dark:border-earth-700/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ── Lodge name ─────────────────────────────────────────────── */}
        <a
          href="#hero"
          className="font-heading text-xl font-semibold text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-200 transition-colors"
        >
          Kali Riverside Lodge
        </a>

        {/* ── Desktop nav ────────────────────────────────────────────── */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                link.label === "Book Now"
                  ? "bg-gold-500 text-sand-950 hover:bg-gold-400 dark:bg-gold-500 dark:text-sand-950 dark:hover:bg-gold-400"
                  : "text-earth-600 dark:text-earth-300 hover:text-forest-700 dark:hover:text-forest-300 hover:bg-sand-200/60 dark:hover:bg-sand-900/60"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* ── Theme toggle (desktop) ───────────────────────────────── */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted
                ? resolvedTheme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
                : "Toggle color theme"
            }
            className="ml-2 p-2 rounded-lg text-earth-600 dark:text-earth-300 hover:bg-sand-200/60 dark:hover:bg-sand-900/60 transition-colors"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )
            ) : (
              /* Placeholder so there's no CLS */
              <span className="block w-5 h-5" />
            )}
          </button>
        </nav>

        {/* ── Mobile controls ────────────────────────────────────────── */}
        <div className="flex md:hidden items-center gap-1">
          {/* Theme toggle (mobile) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted
                ? resolvedTheme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
                : "Toggle color theme"
            }
            className="p-2 rounded-lg text-earth-600 dark:text-earth-300 hover:bg-sand-200/60 dark:hover:bg-sand-900/60 transition-colors"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )
            ) : (
              <span className="block w-5 h-5" />
            )}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="p-2 rounded-lg text-earth-600 dark:text-earth-300 hover:bg-sand-200/60 dark:hover:bg-sand-900/60 transition-colors"
          >
            {mobileOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ──────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Mobile navigation"
            className="md:hidden bg-sand-100/95 dark:bg-sand-950/95 backdrop-blur-md border-b border-sand-300/60 dark:border-earth-700/60 px-4 pb-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      link.label === "Book Now"
                        ? "bg-gold-500 text-sand-950 text-center mt-2 hover:bg-gold-400"
                        : "text-earth-600 dark:text-earth-300 hover:text-forest-700 dark:hover:text-forest-300 hover:bg-sand-200/60 dark:hover:bg-sand-900/60"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
