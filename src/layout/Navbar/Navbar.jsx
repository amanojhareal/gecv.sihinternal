/**
 * src/layout/Navbar/Navbar.jsx
 *
 * Navbar shell — container + mobile hamburger toggle only.
 * Actual nav content lives in NavLinks/ContactLogo/FaqLogo (separate
 * files, composed here). The Problem Statement external link lives
 * inside NavLinks and will use ExternalLinkButton once that's built
 * in Phase 3 — for now it's a plain placeholder <a>.
 */
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes";
import NavLinks from "./NavLinks";
import ContactLogo from "./ContactLogo";
import FaqLogo from "./FaqLogo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__bar">
        <Link to={ROUTE_PATHS.HOME} className="navbar__brand" onClick={closeMobileMenu}>
          SIH Website
        </Link>

        {/* Hamburger — mobile only. Show/hide via CSS at your chosen
            breakpoint (e.g. display: none on desktop). */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-menu"
          onClick={toggleMobileMenu}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>

      {/* Collapsible on mobile (use the data-open attribute in CSS,
          e.g. .navbar__menu[data-open="false"] { display: none } below
          your mobile breakpoint), always visible on desktop. */}
      <div id="navbar-menu" className="navbar__menu" data-open={isMobileMenuOpen}>
        <NavLinks onNavigate={closeMobileMenu} />

        <div className="navbar__icons">
          <ContactLogo onNavigate={closeMobileMenu} />
          <FaqLogo onNavigate={closeMobileMenu} />
        </div>
      </div>
    </header>
  );
}
