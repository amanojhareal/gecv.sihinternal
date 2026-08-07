/**
 * src/components/ui/Card.jsx
 *
 * Generic container used all over the site — Themes, Organizers,
 * Sponsors, Timeline entries, FAQ preview items, etc. all wrap
 * their content in this rather than styling their own <div>.
 *
 * Deliberately flexible: an optional image slot, optional title,
 * and a `children` slot for anything else (description text, a
 * Button, a logo, whatever the calling component needs). Sections
 * like Themes.jsx or Organizers.jsx map their data array into one
 * <Card> per item.
 */

const PADDING_CLASS = {
  none: "card--padding-none",
  sm: "card--padding-sm",
  md: "card--padding-md",
  lg: "card--padding-lg",
};

export default function Card({
  image,          // optional: { src, alt }
  title,          // optional heading text
  children,       // body content (description, buttons, lists, etc.)
  footer,         // optional footer slot (e.g. a Button or metadata)
  padding = "md", // "none" | "sm" | "md" | "lg"
  bordered = true,
  hoverable = false,
  as: Component = "div", // allows rendering as <li> inside a <ul> grid, etc.
  className = "",
  ...rest
}) {
  const classes = [
    "card",
    PADDING_CLASS[padding] || PADDING_CLASS.md,
    bordered ? "card--bordered" : "",
    hoverable ? "card--hoverable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...rest}>
      {image && (
        <div className="card__image">
          <img src={image.src} alt={image.alt || ""} />
        </div>
      )}

      {title && <h3 className="card__title">{title}</h3>}

      {children && <div className="card__body">{children}</div>}

      {footer && <div className="card__footer">{footer}</div>}
    </Component>
  );
}
