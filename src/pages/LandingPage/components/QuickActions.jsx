import { Link } from "react-router-dom";
import { Globe, FileCode2, SquarePen, Download, FileUp } from "lucide-react";
import { SIH_PORTAL_URL } from "../../../config/links";
import { ROUTE_PATHS } from "../../../routes";

const TEMPLATE_URL = "/assets/templates/SIH_PPT_Template.pptx";
const TEMPLATE_FILENAME = "SIH_PPT_Template.pptx";

/**
 * QuickActions Component
 * 5 action cards matching the reference image layout:
 * 1. Official SIH Portal (External link)
 * 2. Problem Statements (External link)
 * 3. Internal Reg. Form (Internal link with REQUIRED badge)
 * 4. PPT Template (Download trigger)
 * 5. Submit Your PPT (Internal link with REQUIRED badge)
 */
const QuickActions = () => {
  return (
    <div className="mt-8 sm:mt-12 max-w-6xl mx-auto px-3 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4">
        
        {/* Card 1: Official SIH Portal */}
        <a
          href={SIH_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center justify-center text-center rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-3 group-hover:scale-110 transition-transform">
            <Globe size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-extrabold text-[#0f172a] group-hover:text-indigo-600 transition-colors">
            Official SIH Portal
          </h3>
          <p className="mt-1 text-[11px] font-semibold text-slate-400">
            sih.gov.in
          </p>
        </a>

        {/* Card 2: Problem Statements */}
        <a
          href="https://sih.gov.in/sih2025PS"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center justify-center text-center rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-3 group-hover:scale-110 transition-transform">
            <FileCode2 size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-extrabold text-[#0f172a] group-hover:text-amber-600 transition-colors">
            Problem Statements
          </h3>
          <p className="mt-1 text-[11px] font-semibold text-slate-400">
            Explore Official PS List
          </p>
        </a>

        {/* Card 3: Internal Reg. Form (REQUIRED Badge on Hover & Default) */}
        <Link
          to={ROUTE_PATHS.REGISTER}
          className="group relative flex flex-col items-center justify-center text-center rounded-2xl border border-emerald-200/90 bg-emerald-50/10 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/30 hover:shadow-md hover:-translate-y-1 cursor-pointer"
        >
          {/* Required Badge Tag (Shows on Hover & Default Glow) */}
          <span className="absolute -top-2.5 -right-2 sm:-top-3 sm:-right-2 bg-gradient-to-r from-rose-500 to-red-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md shadow-rose-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-rose-500/40">
            REQUIRED
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-3 group-hover:scale-110 transition-transform">
            <SquarePen size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-extrabold text-[#0f172a] group-hover:text-emerald-600 transition-colors">
            Internal Reg. Form
          </h3>
          <p className="mt-1 text-[11px] font-semibold text-slate-400">
            GEC Vaishali Team Reg.
          </p>
        </Link>

        {/* Card 4: PPT Template */}
        <a
          href={TEMPLATE_URL}
          download={TEMPLATE_FILENAME}
          className="group relative flex flex-col items-center justify-center text-center rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-purple-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-3 group-hover:scale-110 transition-transform">
            <Download size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-extrabold text-[#0f172a] group-hover:text-purple-600 transition-colors">
            PPT Template
          </h3>
          <p className="mt-1 text-[11px] font-semibold text-slate-400">
            Official Idea Format
          </p>
        </a>

        {/* Card 5: Submit Your PPT (REQUIRED Badge on Hover & Default) */}
        <Link
          to={ROUTE_PATHS.REGISTER}
          className="group relative flex flex-col items-center justify-center text-center rounded-2xl border border-rose-200/90 bg-rose-50/20 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-rose-400 hover:bg-rose-50/40 hover:shadow-md hover:-translate-y-1 cursor-pointer"
        >
          {/* Required Badge Tag (Shows on Hover & Default Glow) */}
          <span className="absolute -top-2.5 -right-2 sm:-top-3 sm:-right-2 bg-gradient-to-r from-rose-500 to-red-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md shadow-rose-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-rose-500/40">
            REQUIRED
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 mb-3 group-hover:scale-110 transition-transform">
            <FileUp size={22} strokeWidth={2} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-extrabold text-[#0f172a] group-hover:text-rose-600 transition-colors">
            Submit Your PPT
          </h3>
          <p className="mt-1 text-[11px] font-semibold text-slate-400">
            Upload Presentation File
          </p>
        </Link>

      </div>
    </div>
  );
};

export default QuickActions;
