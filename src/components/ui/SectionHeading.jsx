/**
 * src/components/ui/SectionHeading.jsx
 *
 * Consistent title (+ optional subtitle/eyebrow) used at the top of
 * every page section — Themes, Timeline, Organizers, Sponsors, FAQ
 * preview, About page blocks, etc. Keeps heading markup and styling
 * uniform instead of each section hand-rolling its own <h2>.
 *
 * `level` controls the actual HTML heading tag rendered (h2–h4) so
 * pages can keep a correct, accessible heading hierarchy — e.g. the
 * page's own <h1> stays in the page component, sections below it use
 * level={2}, a nested sub-section could use level={3}, etc.
 */

const HEADING_TAG = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

const ALIGN_CLASS = {
  left: "section-heading--left",
  center: "section-heading--center",
};

export default function SectionHeading({
  eyebrow,          // optional small label above the title (e.g. "Timeline")
  title,
  subtitle,         // optional supporting line below the title
  level = 2,        // 1-4, maps to h1-h4
  align = "left",   // "left" | "center"
  className = "",
}) {
  const Tag = HEADING_TAG[level] || "h2";

  const classes = [
    "section-heading",
    ALIGN_CLASS[align] || ALIGN_CLASS.left,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <Tag className="section-heading__title">{title}</Tag>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
