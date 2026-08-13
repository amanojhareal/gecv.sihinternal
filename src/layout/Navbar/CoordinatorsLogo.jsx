/**
 * src/layout/Navbar/CoordinatorsLogo.jsx
 * Icon-only nav button for Student Coordinators page.
 * Uses Users icon from lucide-react (people logo).
 */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { ROUTE_PATHS } from "../../routes";

export default function CoordinatorsLogo({ onNavigate }) {
  return (
    <NavLink
      to={ROUTE_PATHS.COORDINATORS}
      aria-label="Student Coordinators"
      title="Student Coordinators"
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          "flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
          isActive
            ? "bg-brand text-white"
            : "bg-slate-100 text-ink-muted hover:bg-brand hover:text-white",
        ].join(" ")
      }
    >
      <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex">
        <Users size={17} strokeWidth={2} aria-hidden="true" />
      </motion.span>
    </NavLink>
  );
}
