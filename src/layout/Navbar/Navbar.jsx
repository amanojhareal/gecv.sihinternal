/**
 * src/layout/Navbar/Navbar.jsx
 * Glass sticky navbar with scroll-aware shadow and an animated
 * mobile drawer. Semantics/ARIA unchanged from the original.
 */
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes";
import NavLinks from "./NavLinks";
import ContactLogo from "./ContactLogo";
import FaqLogo from "./FaqLogo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={clsxHeader(isScrolled)}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <Link
          to={ROUTE_PATHS.HOME}
          onClick={closeMobileMenu}
          className="text-lg font-extrabold tracking-tight text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md"
        >
          SIH<span className="text-accent">.</span>Website
        </Link>

        {/* Desktop nav — hidden below md */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <NavLinks onNavigate={closeMobileMenu} />
          <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
            <ContactLogo onNavigate={closeMobileMenu} />
            <FaqLogo onNavigate={closeMobileMenu} />
          </div>
        </div>

        {/* Animated hamburger — mobile only */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-menu"
          onClick={toggleMobileMenu}
        >
          <motion.span
            className="absolute h-0.5 w-5 rounded-full bg-ink"
            animate={
              isMobileMenuOpen
                ? { rotate: 45, y: 0 }
                : { rotate: 0, y: -6 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
          <motion.span
            className="absolute h-0.5 w-5 rounded-full bg-ink"
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
          />
          <motion.span
            className="absolute h-0.5 w-5 rounded-full bg-ink"
            animate={
              isMobileMenuOpen
                ? { rotate: -45, y: 0 }
                : { rotate: 0, y: 6 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="navbar-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <NavLinks onNavigate={closeMobileMenu} />
              <div className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-3">
                <ContactLogo onNavigate={closeMobileMenu} />
                <FaqLogo onNavigate={closeMobileMenu} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function clsxHeader(isScrolled) {
  return [
    "sticky top-0 z-50 w-full transition-shadow duration-300",
    "backdrop-blur-md bg-white/75 border-b border-slate-200/60",
    isScrolled ? "shadow-premium" : "shadow-none",
  ].join(" ");
}