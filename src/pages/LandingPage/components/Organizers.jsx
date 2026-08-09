import { Users, User } from "lucide-react";
import organizersData from "../../../data/organizers.data";

/**
 * Variant styles mapping for organizer role badges
 */
const ROLE_VARIANTS = {
  blue: "bg-blue-50 text-[#1e40af] border-blue-200/80 ring-blue-100",
  amber: "bg-amber-50 text-[#d97706] border-amber-200/80 ring-amber-100",
  emerald: "bg-emerald-50 text-[#059669] border-emerald-200/80 ring-emerald-100",
};

/**
 * Organizers Component
 * Renders Patron, SPOC, and Faculty Coordinator cards with photos and profile links.
 */
const Organizers = () => {
  return (
    <section
      className="rounded-[24px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-lg shadow-blue-950/[0.03]"
      aria-labelledby="organizers-heading"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#2563eb]">
          <Users size={20} strokeWidth={2.2} aria-hidden="true" />
        </div>
        <div>
          <h2
            id="organizers-heading"
            className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight"
          >
            Organizing Committee
          </h2>
          <div className="w-8 h-1 bg-[#2563eb] rounded-full mt-1" aria-hidden="true" />
        </div>
      </div>

      {/* Organizers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {organizersData.map((item) => {
          const badgeStyle = ROLE_VARIANTS[item.variant] || ROLE_VARIANTS.blue;

          return (
            <div
              key={item.name}
              className="group relative flex flex-col items-center justify-between text-center rounded-2xl border border-slate-100 bg-[#f8fafc] p-6 transition-all duration-300 hover:border-blue-200 hover:bg-[#eff6ff]/30 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex flex-col items-center w-full">
                {/* Role Pill Badge */}
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-2xs ${badgeStyle}`}
                >
                  {item.role}
                </span>

                {/* Avatar Photo Container */}
                <div className="relative mt-4 mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-full border-4 border-white object-cover object-top shadow-md ring-2 ring-blue-100/90 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image load fails
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Icon */}
                  <div className="hidden h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-slate-100 text-slate-400 shadow-md ring-2 ring-blue-100/90">
                    <User size={36} />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-black text-[#0f172a] tracking-tight">
                  {item.name}
                </h3>

                {/* Designation */}
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500">
                  {item.designation}
                </p>
              </div>

              {/* View Profile Link */}
              <a
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block no-underline rounded-lg
             transition-all duration-300 ease-out
             hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:no-underline inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] transition-colors hover:text-[#1d4ed8] hover:underline"
              >
                View Profile
                

              </a>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Organizers;
