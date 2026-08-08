/**
 * src/layout/Navbar/NavLinks.jsx
 * Desktop/mobile nav links with a shared-layout animated
 * underline that glides between active items.
 */
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ROUTE_PATHS } from "../../routes";
import { SIH_PORTAL_URL } from "../../config/links";

const links = [
  { to: ROUTE_PATHS.REGISTER, label: "Register" },
  { to: ROUTE_PATHS.ABOUT, label: "About" },
];

export default function NavLinks({ onNavigate }) {
  const { pathname } = useLocation();

  return (
    <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
      <li>
        <a
          href={SIH_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-md px-1 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Problem Statement
          <ExternalLink
            size={14}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </li>

      {links.map(({ to, label }) => {
        const isActive = pathname === to;
        return (
          <li key={to} className="relative">
            <NavLink
              to={to}
              onClick={onNavigate}
              className="relative inline-block px-1 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md"
            >
              {label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}