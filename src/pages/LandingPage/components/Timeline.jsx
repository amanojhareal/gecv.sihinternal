import { Flag, Calendar, FileText, Award, CheckCircle2 } from "lucide-react";
import timelineData from "../../../data/timeline.data";
import { formatDate } from "../../../utils/formatDate";

/**
 * Variant styles mapping for timeline icon boxes & date text colors
 */
const VARIANT_MAP = {
  blue: {
    bg: "bg-[#eff6ff]",
    border: "border-blue-100/80",
    text: "text-[#2563eb]",
  },
  orange: {
    bg: "bg-[#fff7ed]",
    border: "border-amber-100/80",
    text: "text-[#ea580c]",
  },
  green: {
    bg: "bg-[#f0fdf4]",
    border: "border-emerald-100/80",
    text: "text-[#16a34a]",
  },
  purple: {
    bg: "bg-[#faf5ff]",
    border: "border-purple-100/80",
    text: "text-[#9333ea]",
  },
  teal: {
    bg: "bg-[#f0fdfa]",
    border: "border-teal-100/80",
    text: "text-[#0d9488]",
  },
  indigo: {
    bg: "bg-[#eef2ff]",
    border: "border-indigo-100/80",
    text: "text-[#4f46e5]",
  },
};

const getIcon = (iconType) => {
  switch (iconType) {
    case "file":
      return FileText;
    case "award":
      return Award;
    case "check":
      return CheckCircle2;
    case "calendar":
    default:
      return Calendar;
  }
};

const Timeline = () => {
  return (
    <section className="relative mx-auto max-w-3xl px-4 sm:px-6 my-10 sm:my-16" aria-labelledby="journey-heading">
      {/* Journey Elevated Card Box */}
      <div className="rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xl shadow-blue-950/[0.04]">
        
        {/* Card Header: Icon + Title + Accent line */}
        <div className="flex items-center gap-3.5 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eff6ff] text-[#2563eb] border border-blue-100 shadow-sm">
            <Flag size={20} strokeWidth={2.2} aria-hidden="true" />
          </div>
          <div>
            <h2 id="journey-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Journey
            </h2>
            <div className="w-10 h-1 bg-[#2563eb] rounded-full mt-1" aria-hidden="true" />
          </div>
        </div>

        {/* Timeline list */}
        <ol className="relative pl-1 sm:pl-2">
          {timelineData.map((item, index) => {
            const isLast = index === timelineData.length - 1;
            const IconComponent = getIcon(item.iconType);
            const variantStyle = VARIANT_MAP[item.variant] || VARIANT_MAP.blue;
            const isActive = item.status === "active";

            return (
              <li key={`${item.title}-${item.date}`} className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                {/* Connecting Line */}
                {!isLast && (
                  <span
                    className="absolute left-[19px] sm:left-[21px] top-8 bottom-0 w-[2px] bg-slate-200/80"
                    aria-hidden="true"
                  />
                )}

                {/* Left Node Indicator */}
                <div className="relative z-10 flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-full bg-white">
                  {isActive ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563eb] ring-4 ring-blue-100 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  ) : (
                    <span className="h-4 w-4 rounded-full border-2 border-[#2563eb] bg-white" />
                  )}
                </div>

                {/* Content Block */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    
                    {/* Soft Tinted Square Icon Box */}
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border ${variantStyle.bg} ${variantStyle.border} ${variantStyle.text} shadow-sm transition-transform hover:scale-105`}
                    >
                      <IconComponent size={22} strokeWidth={2} aria-hidden="true" />
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <time
                        dateTime={item.date}
                        className={`block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider ${variantStyle.text}`}
                      >
                        {formatDate(item.date)}
                      </time>
                      <h3 className="mt-0.5 text-base sm:text-lg font-extrabold text-[#0f172a] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
};

export default Timeline;
