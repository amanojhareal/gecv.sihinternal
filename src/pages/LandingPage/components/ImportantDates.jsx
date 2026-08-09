import { CalendarDays, Clock } from "lucide-react";
import importantDatesData from "../../../data/importantDates.data";
import { formatDate } from "../../../utils/formatDate";

/**
 * ImportantDates
 * Fast-scan schedule summary in a clean card format.
 */
const ImportantDates = () => {
  return (
    <section
      className="rounded-[24px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-lg shadow-blue-950/[0.03]"
      aria-labelledby="important-dates-heading"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#2563eb]">
          <CalendarDays size={20} strokeWidth={2} aria-hidden="true" />
        </div>
        <div>
          <h2
            id="important-dates-heading"
            className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight"
          >
            Important Dates
          </h2>
          <div className="w-8 h-1 bg-[#2563eb] rounded-full mt-1" aria-hidden="true" />
        </div>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {importantDatesData.map((item) => (
          <div
            key={`${item.label}-${item.date}`}
            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 transition-colors hover:border-blue-200 hover:bg-[#eff6ff]/40"
          >
            <dt className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</dt>
            <dd className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#2563eb] whitespace-nowrap">
              <Clock size={14} className="text-[#2563eb]/70" aria-hidden="true" />
              <time dateTime={item.date}>{formatDate(item.date)}</time>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default ImportantDates;
