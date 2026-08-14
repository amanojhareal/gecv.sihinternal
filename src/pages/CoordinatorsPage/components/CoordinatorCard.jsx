import { useState } from "react";
import { User, Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaBehance } from "react-icons/fa6";
import { motion } from "framer-motion";

const ROLE_BADGE_STYLES = {
  blue: "bg-blue-50 text-blue-800 border-blue-200/70",
  purple: "bg-purple-50 text-purple-800 border-purple-200/70",
  amber: "bg-amber-50 text-amber-900 border-amber-200/70",
};

export default function CoordinatorCard({ member }) {
  const [imageError, setImageError] = useState(false);
  const badgeStyle = ROLE_BADGE_STYLES[member.variant] || ROLE_BADGE_STYLES.blue;

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
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-6 transition-colors duration-200 hover:border-slate-300 hover:shadow-md"
    >
      <div>
        {/* Top Meta Bar: Role & Year */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${badgeStyle}`}
          >
            {member.role}
          </span>
          {member.year && (
            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60 shrink-0">
              {member.year}
            </span>
          )}
        </div>

        {/* Avatar Photo */}
        <div className="relative my-3.5 sm:my-4 flex justify-center">
          <div className="relative">
            {member.image && !imageError ? (
              <img
                src={member.image}
                alt={member.name}
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-26 md:w-26 rounded-full border-2 border-white object-cover shadow-xs ring-1 ring-slate-200/80 transition-transform duration-200 group-hover:scale-102"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 md:h-26 md:w-26 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-slate-600 shadow-xs ring-1 ring-slate-200/80">
                {member.name.includes("Name") ? (
                  <User size={32} className="text-slate-400" />
                ) : (
                  <span className="text-lg sm:text-xl font-bold text-slate-600">
                    {initials}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Member Name & Department */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            {member.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium leading-snug">
            {member.department}
          </p>
        </div>
      </div>

      {/* Social / Contact Links Footer (Touch-friendly 36px on mobile) */}
      <div className="mt-4 sm:mt-5 flex items-center justify-center gap-1.5 sm:gap-2 pt-3 border-t border-slate-100">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            title={`Email ${member.name}`}
            aria-label={`Email ${member.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 border border-slate-200/60 transition-colors hover:bg-blue-50 hover:text-brand hover:border-blue-200 active:scale-95"
          >
            <Mail size={15} strokeWidth={2} />
          </a>
        )}
        {member.phone && (
          <a
            href={`tel:${member.phone}`}
            title={`Call ${member.name}`}
            aria-label={`Call ${member.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 border border-slate-200/60 transition-colors hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 active:scale-95"
          >
            <Phone size={15} strokeWidth={2} />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title={`${member.name}'s LinkedIn`}
            aria-label={`${member.name}'s LinkedIn`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 border border-slate-200/60 transition-colors hover:bg-blue-50 hover:text-[#0a66c2] hover:border-blue-200 active:scale-95"
          >
            <FaLinkedin size={14} />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            title={`${member.name}'s GitHub`}
            aria-label={`${member.name}'s GitHub`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 border border-slate-200/60 transition-colors hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 active:scale-95"
          >
            <FaGithub size={14} />
          </a>
        )}
        {member.behance && (
          <a
            href={member.behance}
            target="_blank"
            rel="noopener noreferrer"
            title={`${member.name}'s Behance`}
            aria-label={`${member.name}'s Behance`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 border border-slate-200/60 transition-colors hover:bg-blue-50 hover:text-[#053ff6] hover:border-blue-200 active:scale-95"
          >
            <FaBehance size={14} />
          </a>
        )}
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title={`${member.name}'s Instagram`}
            aria-label={`${member.name}'s Instagram`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 border border-slate-200/60 transition-colors hover:bg-pink-50 hover:text-[#e4405f] hover:border-pink-200 active:scale-95"
          >
            <FaInstagram size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

