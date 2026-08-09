import { Link } from "react-router-dom";
import { UserPlus, FileText, ExternalLink } from "lucide-react";
import { ROUTE_PATHS } from "../../../routes";
import { SIH_PORTAL_URL } from "../../../config/links";

/**
 * SihIntroduction
 * Tagline blurb + dual CTA buttons ("Register Now" and "Problem Statements")
 * positioned right below the main hero introduction tagline.
 */
const SihIntroduction = () => {
  return (
    <div className="mt-10 sm:mt-12 text-center max-w-2xl mx-auto px-2 sm:px-4" aria-labelledby="sih-intro-heading">
      {/* Eyebrow flanked by orange lines */}
      <div className="flex items-center justify-center gap-2">
        <span className="h-px w-6 sm:w-10 bg-amber-500/70" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#ea580c]">
          SIH
        </span>
        <span className="h-px w-6 sm:w-10 bg-amber-500/70" aria-hidden="true" />
      </div>

      {/* Headline */}
      <h1
        id="sih-intro-heading"
        className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight sm:leading-snug"
      >
        India's Biggest Open Innovation Model
      </h1>

      {/* Blue accent underline */}
      <div className="w-12 h-1 bg-[#2563eb] rounded-full mx-auto my-3.5" aria-hidden="true" />

      {/* Blurb */}
      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
        Smart India Hackathon brings together students from across the country to solve real, pressing problems faced by government ministries, departments, and industry — turning bold ideas into working solutions over one intense, collaborative sprint.
      </p>

      {/* Dual CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        
                {/* Problem Statement Button */}
        <a
          href={SIH_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-blue-200/90 bg-white px-7 py-3.5 text-sm sm:text-base font-extrabold text-[#1e40af] shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/70 hover:scale-[1.02] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <FileText size={19} strokeWidth={2} aria-hidden="true" />
          Problem Statement
          <ExternalLink size={14} strokeWidth={2} className="opacity-70" aria-hidden="true" />
        </a>

        {/* Register Button */}
        <Link
          to={ROUTE_PATHS.REGISTER}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#1e40af] to-[#2563eb] px-7 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-blue-700/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <UserPlus size={19} strokeWidth={2.2} aria-hidden="true" />
          Register Now
        </Link>


      </div>
    </div>
  );
};

export default SihIntroduction;
