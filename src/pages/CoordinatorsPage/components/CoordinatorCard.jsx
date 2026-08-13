import { useState } from "react";
import { User, Mail, Phone, Palette } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaBehance } from "react-icons/fa6";
import { motion } from "framer-motion";

const BADGE_STYLES = {
  blue: "bg-blue-50 text-blue-700 border-blue-200/80 ring-blue-100",
  purple: "bg-purple-50 text-purple-700 border-purple-200/80 ring-purple-100",
  amber: "bg-amber-50 text-amber-700 border-amber-200/80 ring-amber-100",
};

const ACCENT_GLOW = {
  blue: "group-hover:border-blue-300 hover:shadow-blue-500/10",
  purple: "group-hover:border-purple-300 hover:shadow-purple-500/10",
  amber: "group-hover:border-amber-300 hover:shadow-amber-500/10",
};

export default function CoordinatorCard({ member }) {
  const [imageError, setImageError] = useState(false);
  const badgeStyle = BADGE_STYLES[member.variant] || BADGE_STYLES.blue;
  const glowStyle = ACCENT_GLOW[member.variant] || ACCENT_GLOW.blue;

  // Extract initials for fallback avatar
  const initials = member.name
    ? member.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "SC";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex flex-col items-center justify-between text-center rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${glowStyle}`}
    >
      <div className="flex flex-col items-center w-full">
        {/* Role Tag */}
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${badgeStyle}`}
        >
          {member.role}
        </span>

        {/* Avatar Container */}
        <div className="relative mt-5 mb-4">
          {member.image && !imageError ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md ring-2 ring-slate-100 transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 shadow-md ring-2 ring-slate-100 transition-transform duration-300 group-hover:scale-105">
              {member.name.includes("Name") ? (
                <User size={40} className="text-slate-400" />
              ) : (
                <span className="text-xl font-black text-slate-500">{initials}</span>
              )}
            </div>
          )}
        </div>

        {/* Member Name */}
        <h3 className="text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-brand transition-colors">
          {member.name}
        </h3>

        {/* Department & Year */}
        <p className="mt-1 text-xs font-semibold text-slate-500">
          {member.department}
        </p>
        {member.year && (
          <span className="mt-1 text-[11px] font-medium text-slate-400">
            {member.year}
          </span>
        )}
      </div>

      {/* Social / Contact Links */}
      <div className="mt-6 flex items-center justify-center gap-2 pt-4 border-t border-slate-100 w-full">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            title={`Email ${member.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-brand hover:text-white"
          >
            <Mail size={15} strokeWidth={2} />
          </a>
        )}
        {member.phone && (
          <a
            href={`tel:${member.phone}`}
            title={`Call ${member.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-600 hover:text-white"
          >
            <Phone size={15} strokeWidth={2} />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[#0a66c2] hover:text-white"
          >
            <FaLinkedin size={14} />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-900 hover:text-white"
          >
            <FaGithub size={14} />
          </a>
        )}
        {member.behance && (
          <a
            href={member.behance}
            target="_blank"
            rel="noopener noreferrer"
            title="Behance Portfolio"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[#053ff6] hover:text-white"
          >
            <FaBehance size={14} />
          </a>
        )}
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[#e4405f] hover:text-white"
          >
            <FaInstagram size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
