/**
 * src/components/ui/ExternalLinkButton.jsx
 *
 * The ONLY component that should render a link pointing off-site
 * (SIH portal, Google Forms, sponsor sites, etc). Always opens in a
 * new tab with rel="noopener noreferrer" for security (prevents the
 * new tab from getting a handle back to window.opener) and to avoid
 * losing the user's place on the site.
 *
 * Powers:
 *  - Problem Statement nav link (SIH_PORTAL_URL) in NavLinks.jsx
 *  - Register/Upload PPT Google Form links (as fallback/alternative
 *    to embedding, via GoogleFormEmbed.jsx)
 *
 * Never build a raw <a target="_blank"> elsewhere in the app —
 * import this instead, so the safety attributes and styling can
 * never be forgotten on a one-off link.
 */

const VARIANT_CLASS = {
  primary: "btn btn--primary",
  secondary: "btn btn--secondary",
  outline: "btn btn--outline",
  link: "external-link", // plain text-style link, e.g. for nav items
};

export default function ExternalLinkButton({
  href,
  label,
  variant = "link",   // "primary" | "secondary" | "outline" | "link"
  showIcon = true,     // small "opens in new tab" indicator icon
  className = "",
  ...rest
}) {
  if (!href) {
    console.warn("ExternalLinkButton: missing `href` for label:", label);
    return null;
  }

  const classes = [VARIANT_CLASS[variant] || VARIANT_CLASS.link, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      {...rest}
    >
      {label}
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="external-link__icon"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
