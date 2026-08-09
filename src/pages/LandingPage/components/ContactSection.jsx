import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight } from "lucide-react";

/**
 * ContactSection
 * Short contact banner card encouraging visitors to reach out.
 */
const ContactSection = () => {
  return (
    <section
      className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-blue-100 bg-gradient-to-r from-[#eff6ff] via-[#f8fafc] to-[#eef2ff] p-6 sm:p-10 text-center shadow-md shadow-blue-950/[0.02]"
      aria-labelledby="contact-section-heading"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-md shadow-blue-600/20 mb-4">
        <MessageSquare size={22} strokeWidth={2.2} aria-hidden="true" />
      </div>

      <h2
        id="contact-section-heading"
        className="text-xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight"
      >
        Still Have Questions?
      </h2>

      <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
        Reach out to the organizing team — we're happy to help with anything about registration, squad formation, or problem statement selection.
      </p>

      <div className="mt-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          Contact Us
          <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
