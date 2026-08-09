"use client";

/* ─── Nav links ──────────────────────────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#features" },
  { label: "Sightseeing", href: "#sightseeing" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Now", href: "#booking" },
] as const;

/* ─── SVG Icons ──────────────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-gold-400 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-river-400 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-sand-400 shrink-0 mt-1"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-pink-400 shrink-0"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-earth-950 dark:bg-sand-950 text-sand-200 border-t border-earth-800/80">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* ── Column 1: Lodge Brand & Address ───────────────────────── */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-sand-100 tracking-tight mb-3">
              Dandeli Inn
            </h2>
            <p className="text-sm text-sand-300/80 leading-relaxed mb-6">
              Comfortable, budget-friendly stay in the heart of Dandeli — just 300 m from the bus stand.
            </p>
            <div className="flex items-start gap-2.5 text-xs text-sand-300/80">
              <PinIcon />
              <address className="not-italic leading-relaxed">
                J.N Road, opp. Sunday Market, Bangur Nagar,
                <br />
                Dandeli, Karnataka 581325
              </address>
            </div>
          </div>

          {/* ── Column 2: Quick Navigation ────────────────────────────── */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-sand-100 mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sand-300/80 hover:text-gold-400 transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact & Direct Inquiries ──────────────────── */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-sand-100 mb-4">
              Contact & Booking
            </h3>
            <ul className="space-y-3 text-sm">
              {/* Phone Tel Link */}
              <li>
                <a
                  href="tel:+917259109986"
                  className="flex items-center gap-2.5 text-sand-200 hover:text-gold-400 transition-colors"
                >
                  <PhoneIcon />
                  <span>Call: +91 72591 09986</span>
                </a>
              </li>

              {/* WhatsApp wa.me Link */}
              <li>
                <a
                  href="https://wa.me/917259109986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sand-200 hover:text-emerald-400 transition-colors"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp: +91 72591 09986</span>
                </a>
              </li>

              {/* Instagram Link */}
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2.5 text-sand-200 hover:text-pink-400 transition-colors cursor-pointer"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
              </li>

              {/* Email Link */}
              <li>
                <a
                  href="mailto:stay@dandeliinn.com"
                  className="flex items-center gap-2.5 text-sand-200 hover:text-river-300 transition-colors"
                >
                  <MailIcon />
                  <span>stay@dandeliinn.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Copyright Bar ───────────────────────────────────── */}
        <div className="border-t border-sand-100/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400/80 gap-3">
          <p>&copy; {currentYear} Dandeli Inn. All rights reserved.</p>
          <p className="italic text-sand-400/60">Dandeli, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
