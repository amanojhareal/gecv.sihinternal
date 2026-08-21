/**
 * src/layout/Navbar/NavLinks.jsx
 *
 * Nav items styled after the reference screenshot: icon + label,
 * soft filled rounded background on the active item (a shared
 * framer-motion layoutId so the highlight glides between items
 * instead of just popping), rather than the earlier underline style.
 *
 * Home is now an explicit nav item (screenshot has it front and
 * center) instead of relying solely on the banner/logo click.
 */
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { House, FileText, UserPlus, Info } from "lucide-react";
import { ROUTE_PATHS } from "../../routes";
import { SIH_PORTAL_URL } from "../../config/links";

const links = [
  { to: ROUTE_PATHS.HOME, label: "Home", icon: House },
  { to: ROUTE_PATHS.REGISTER, label: "Register", icon: UserPlus },
  { to: ROUTE_PATHS.ABOUT, label: "About", icon: Info },
];

export default function NavLinks({ onNavigate }) {
  const { pathname } = useLocation();

  return (
    <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1.5">
      {links.map(({ to, label, icon: Icon }) => {
        const isActive = pathname === to;
        return (
          <li key={to} className="relative">
            <NavLink
              to={to}
              onClick={onNavigate}
              className="relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold text-ink-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-xl bg-brand/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                size={17}
                strokeWidth={2}
                className={`relative z-10 ${isActive ? "text-brand" : ""}`}
                aria-hidden="true"
              />
              <span className={`relative z-10 ${isActive ? "text-brand" : ""}`}>
                {label}
              </span>
            </NavLink>
          </li>
        );
      })}

      <li>
        <a
          href={SIH_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          download="gec_sih_26.pdf"
          className="group flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold text-ink-muted transition-colors hover:bg-slate-50 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <FileText size={17} strokeWidth={2} aria-hidden="true" />
          Problem Statements
          
        </a>
      </li>
    </ul>
  );
}
