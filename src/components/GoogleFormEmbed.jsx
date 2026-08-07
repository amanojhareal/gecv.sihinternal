/**
 * src/components/GoogleFormEmbed.jsx
 *
 * Generic wrapper for any Google Form used on the site — the
 * Register form and the Upload PPT form both render through this,
 * each just passing a different formUrl (from config/links.js).
 *
 * DECISION: defaults to `mode="embed"` (an <iframe>), not a redirect.
 * Google Forms officially supports iframe embedding (their own
 * "Send > embed HTML" option gives you this exact pattern), and
 * keeping users on-site avoids losing them to a bare, unbranded
 * Google Forms page mid-flow.
 *
 * Trade-off: a fixed-height iframe can cause double-scrollbars on
 * long forms and doesn't auto-resize. To cover that, this component
 * ALWAYS renders a small "Open form in new tab" fallback link below
 * the iframe (via ExternalLinkButton), regardless of mode. If a
 * specific form embeds badly, pass mode="redirect" on that one
 * instance instead of embedding — no need to touch this component.
 *
 * Usage:
 *   <GoogleFormEmbed formUrl={REGISTER_FORM_URL} title="Registration form" />
 *   <GoogleFormEmbed formUrl={UPLOAD_PPT_FORM_URL} title="Upload PPT form" mode="redirect" />
 */

import { useState } from "react";
import ExternalLinkButton from "./ui/ExternalLinkButton";
import Button from "./ui/Button";
import Loader from "./ui/Loader";

export default function GoogleFormEmbed({
  formUrl,
  title,                 // required for iframe accessibility (aria-label)
  mode = "embed",         // "embed" | "redirect"
  height = 900,           // iframe height in px — Google Forms doesn't auto-resize
  className = "",
}) {
  const [isLoading, setIsLoading] = useState(true);

  if (!formUrl) {
    console.warn(`GoogleFormEmbed: missing formUrl for "${title}"`);
    return (
      <p className="google-form-embed__error">
        This form isn't available right now. Please check back shortly.
      </p>
    );
  }

  if (mode === "redirect") {
    return (
      <div className={`google-form-embed google-form-embed--redirect ${className}`}>
        <p className="google-form-embed__redirect-text">
          {title || "This form"} opens in a new tab via Google Forms.
        </p>
        <Button variant="primary" size="lg" onClick={() => window.open(formUrl, "_blank", "noopener,noreferrer")}>
          Open {title || "Form"}
        </Button>
      </div>
    );
  }

  return (
    <div className={`google-form-embed ${className}`}>
      {isLoading && (
        <div className="google-form-embed__loading">
          <Loader />
        </div>
      )}

      <iframe
        src={formUrl}
        title={title || "Google Form"}
        aria-label={title || "Google Form"}
        width="100%"
        height={height}
        style={{ border: 0, display: isLoading ? "none" : "block" }}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      >
        Loading form…
      </iframe>

      {/* Always-available fallback in case the iframe fails to load,
          is blocked (e.g. strict browser/network settings), or the
          user just prefers a full-page view. */}
      <div className="google-form-embed__fallback">
        <ExternalLinkButton
          href={formUrl}
          label={`Trouble viewing the form? Open it in a new tab`}
          variant="link"
        />
      </div>
    </div>
  );
}
