/**
 * src/components/ui/Button.jsx
 *
 * Base button used across every page (CTAs, form submits, section
 * actions). Two other components build on top of this pattern:
 *  - ExternalLinkButton (Phase 3) — for links that leave the site
 *    (SIH portal, Google Forms) and always open in a new tab
 *  - GoogleFormEmbed (Phase 3) — may use this internally for its
 *    "open form" fallback button
 *
 * This component itself stays link-agnostic: it renders a real
 * <button>, or — if `to` is passed — an internal <Link> from
 * react-router-dom styled identically. External links belong in
 * ExternalLinkButton, not here.
 */

import { Link } from "react-router-dom";

const VARIANT_CLASS = {
  primary: "btn btn--primary",
  secondary: "btn btn--secondary",
  outline: "btn btn--outline",
  ghost: "btn btn--ghost",
};

const SIZE_CLASS = {
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
};

export default function Button({
  children,
  to,                     // internal route path -> renders <Link>
  onClick,
  type = "button",        // "button" | "submit" | "reset" (ignored when `to` is set)
  variant = "primary",    // "primary" | "secondary" | "outline" | "ghost"
  size = "md",            // "sm" | "md" | "lg"
  disabled = false,
  fullWidth = false,
  className = "",
  ...rest
}) {
  const classes = [
    VARIANT_CLASS[variant] || VARIANT_CLASS.primary,
    SIZE_CLASS[size] || SIZE_CLASS.md,
    fullWidth ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} aria-disabled={disabled} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
