/**
 * src/layout/Navbar/FaqLogo.jsx
 *
 * Icon-only nav item linking to the FAQ page.
 * Inline SVG for now (no icon-library dependency) — swap the <svg>
 * for a react-icons import later if you install one.
 */

import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes";

export default function FaqLogo({ onNavigate }) {
  return (
    <NavLink
      to={ROUTE_PATHS.FAQ}
      className="navbar__icon-link"
      aria-label="Frequently asked questions"
      title="FAQ"
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
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    </NavLink>
  );
}
