import { useState } from "react";
import { CONTACT_EMAIL } from "../../../config/constants";
import Button from "../../../components/ui/Button";
import styles from "./ContactForm.module.css";

/**
 * ContactForm
 *
 * Decision: mailto:, not an embedded Google Form. Reasoning:
 *   - No backend, no new env var / Google Form to create and maintain
 *   - Keeps this page's contact flow self-contained instead of adding a
 *     second GoogleFormEmbed usage with a form that doesn't exist yet
 *   - A real <form> with actual fields (name/email/subject/message) is
 *     a nicer UX than a bare "email us" link, while still avoiding any
 *     backend — on submit it builds a mailto: URL from the fields and
 *     opens the visitor's own email client with everything pre-filled.
 *
 * Trade-off worth knowing: mailto: only works if the visitor has a
 * configured email client (desktop mail app, or a mobile OS mail app).
 * It won't work well in some sandboxed/webview browsers. If that turns
 * out to be a real problem for your users, switch this to an embedded
 * Google Form instead — the CONTACT_EMAIL constant and field structure
 * below don't need to change either way; only handleSubmit would.
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = formData.subject || "SIH Website Inquiry";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject" className={styles.label}>
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>

      <Button type="submit">Send Message</Button>

      <p className={styles.fallback}>
        This opens your email app with the message pre-filled. Prefer to
        email directly?{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className={styles.fallbackLink}>
          {CONTACT_EMAIL}
        </a>
      </p>
    </form>
  );
};

export default ContactForm;
