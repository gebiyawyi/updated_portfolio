import { useState } from "react";
import {
  TbMail,
  TbMapPin,
  TbBrandGithub,
  TbBrandLinkedin,
  TbSend,
  TbClockHour4,
  TbCircleCheck,
  TbAlertCircle,
  TbLoader2,
} from "react-icons/tb";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaenrpea";
const GITHUB_URL = "https://github.com/your-username";
const LINKEDIN_URL = "https://linkedin.com/in/your-username";
const WHATSAPP_URL = "https://wa.me/251918939724";
const TELEGRAM_URL = "https://t.me/gebyig";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMsg("Please fill in name, email, and message.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(
          data?.errors?.[0]?.message || "Something went wrong. Try again.",
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="section-title leading-tight">
              Have an idea worth building?
              <br />
              <span className="text-accent">Intelligent</span>
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-8 max-w-md">
              I'm open to collaborations, opportunities, and projects involving
              AI, Machine Learning, Data Science, and Full-Stack Development.
              Whether you are building an ML pipeline or need a full-stack
              architect, let's talk.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:gebiyaw.cs@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg border border-border-subtle bg-bg-secondary hover:border-accent transition-colors group"
              >
                <span className="icon-box">
                  <TbMail size={16} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                    Direct Email
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-accent transition-colors">
                    gebiyaw2004@gmail.com
                  </span>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border-subtle bg-bg-secondary">
                <span className="icon-box">
                  <TbMapPin size={16} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                    Primary Location &amp; Timezone
                  </span>
                  <span className="text-sm text-text-primary">
                    Injibara, Ethiopia · Remote Available (UTC+3)
                  </span>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border-subtle bg-bg-secondary hover:border-[#25D366] transition-colors group"
              >
                <span className="icon-box icon-box-whatsapp">
                  <FaWhatsapp size={18} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                    WhatsApp · Quick Chat
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-[#25D366] transition-colors">
                    +251 918 939 724
                  </span>
                </div>
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border-subtle bg-bg-secondary hover:border-[#26A5E4] transition-colors group"
              >
                <span className="icon-box icon-box-telegram">
                  <FaTelegramPlane size={18} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                    Telegram · Message Me
                  </span>
                  <span className="text-sm text-text-primary group-hover:text-[#26A5E4] transition-colors">
                    @gebyig
                  </span>
                </div>
              </a>
            </div>
            <div className="flex gap-2 mt-6">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs flex-1 justify-center"
              >
                <TbBrandGithub size={14} />
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs flex-1 justify-center"
              >
                <TbBrandLinkedin size={14} />
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 mt-6 text-[10px] font-mono text-text-muted uppercase tracking-widest">
              <TbClockHour4 size={12} className="text-status-green" />
              Reach me by email or WhatsApp · Addis Ababa (UTC+3)
            </div>
          </div>
          <div className="lg:col-span-7">
            <form
              className="card p-6 space-y-5"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />
              <input type="hidden" name="_replyto" value={formData.email} />
              <input
                type="hidden"
                name="_subject"
                value={`Portfolio contact from ${formData.name || "someone"}`}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="contact-label">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact-input"
                    placeholder="e.g.Nati"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="contact-label">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact-input"
                    placeholder="nati@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="contact-label">
                  Discussion Topic / Field
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="contact-input"
                  placeholder="Machine Learning /Data science"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "sending"}
                />
              </div>
              <div>
                <label htmlFor="message" className="contact-label">
                  Message / Technical Scope
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="contact-input resize-none"
                  placeholder="Describe your project, timeline, or technical requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  required
                />
              </div>
              {status === "error" && (
                <div className="flex items-start gap-2 p-3 rounded-lg border border-red-500/30 bg-red-500/5">
                  <TbAlertCircle
                    size={14}
                    className="text-red-400 mt-0.5 shrink-0"
                  />
                  <p className="text-xs text-red-300 leading-relaxed">
                    {errorMsg}
                  </p>
                </div>
              )}
              {status === "success" && (
                <div className="flex items-start gap-2 p-3 rounded-lg border border-status-green/30 bg-status-green/5">
                  <TbCircleCheck
                    size={14}
                    className="text-status-green mt-0.5 shrink-0"
                  />
                  <p className="text-xs text-status-green leading-relaxed">
                    Message sent. I'll reply within 24 hours.
                  </p>
                </div>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <TbLoader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <TbSend size={14} />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-[10px] font-mono text-text-muted text-center uppercase tracking-widest pt-1">
                Encrypted Transmission · No Spam · Direct Inbox
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
