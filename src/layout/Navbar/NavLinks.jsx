/**
 * src/layout/Navbar/NavLinks.jsx
 *
 * Nav links: Problem Statement (external, SIH portal), Register,
 * About. Contact/FAQ are handled separately as icon-only
 * ContactLogo/FaqLogo, not here.
 *
 * Problem Statement now uses the real ExternalLinkButton (Phase 3) —
 * never a raw <a target="_blank"> — and the URL always comes from
 * config/links.js, never hardcoded here.
 */

import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes";
import { SIH_PORTAL_URL } from "../../config/links";
import ExternalLinkButton from "../../components/ui/ExternalLinkButton";

const navLinkClassName = ({ isActive }) =>
  isActive ? "navbar__link navbar__link--active" : "navbar__link";

export default function NavLinks({ onNavigate }) {
  return (
    <ul className="navbar__links">
      <li>
        <ExternalLinkButton
          href={SIH_PORTAL_URL}
          label="Problem Statement"
          variant="link"
          className="navbar__link navbar__link--external"
        />
      </li>

      <li>
        <NavLink to={ROUTE_PATHS.REGISTER} className={navLinkClassName} onClick={onNavigate}>
          Register
        </NavLink>
      </li>

      <li>
        <NavLink to={ROUTE_PATHS.ABOUT} className={navLinkClassName} onClick={onNavigate}>
          About
        </NavLink>
      </li>
    </ul>
  );
}
