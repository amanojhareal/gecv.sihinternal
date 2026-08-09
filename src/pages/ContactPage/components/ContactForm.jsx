import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "../../../config/constants";

/**
 * ContactForm
 * Form component with sleek inputs and a styled Send Message CTA button.
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
    <form className="space-y-4 max-w-lg" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="block text-xs sm:text-sm font-bold text-slate-900">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-all focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="block text-xs sm:text-sm font-bold text-slate-900">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-all focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-subject" className="block text-xs sm:text-sm font-bold text-slate-900">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Inquiry regarding SIH registration..."
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-all focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs sm:text-sm font-bold text-slate-900">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 transition-all focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 resize-y"
        />
      </div>

      {/* Styled Send Message Button */}
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#1e40af] to-[#2563eb] px-6 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-blue-700/25 transition-all duration-200 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.99]"
      >
        <Send size={18} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        Send Message
      </button>

      <p className="flex items-center gap-1.5 pt-1 text-xs text-slate-500 font-normal">
        <Mail size={14} className="text-slate-400 flex-shrink-0" />
        Prefer direct email?{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-[#2563eb] hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </form>
  );
};

export default ContactForm;
