import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";
import faqData from "../../../data/faq.data";

const PREVIEW_COUNT = 4;

/**
 * FaqPreview
 * Quick-scan FAQ teaser card with a direct button to the full FAQ page.
 */
const FaqPreview = () => {
  const previewItems = faqData.slice(0, PREVIEW_COUNT);

  return (
    <section
      className="rounded-[24px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-lg shadow-blue-950/[0.03]"
      aria-labelledby="faq-preview-heading"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#2563eb]">
          <HelpCircle size={20} strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <h2
            id="faq-preview-heading"
            className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-8 h-1 bg-[#2563eb] rounded-full mt-1" aria-hidden="true" />
        </div>
      </div>

      <div className="space-y-3.5">
        {previewItems.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 sm:p-5 transition-colors hover:border-blue-200 hover:bg-[#eff6ff]/30"
          >
            <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a]">
              {item.question}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/faq"
          className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-[#1d4ed8] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          See All FAQs
          <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default FaqPreview;
