/**
 * src/layout/Navbar/ContactLogo.jsx
 *
 * Icon-only nav item linking to the Contact page.
 * Inline SVG for now (no icon-library dependency) — swap the <svg>
 * for a react-icons import later if you install one.
 */

import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes";

export default function ContactLogo({ onNavigate }) {
  return (
    <NavLink
      to={ROUTE_PATHS.CONTACT}
      className="navbar__icon-link"
      aria-label="Contact us"
      title="Contact us"
      onClick={onNavigate}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16v16H4z" opacity="0" />
        <path d="M22 6 12 13 2 6" />
        <path d="M2 6h20v12H2z" />
      </svg>
    </NavLink>
  );
}
