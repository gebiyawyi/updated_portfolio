import { useState, useEffect } from "react";
import ProfileCard from "./ui/ProfileCard";
const ROLES = [
  "Machine Learning & Data Science Engineer",
  "Full-Stack Developer (React, Node.js, MySQL)",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typewriter effect */
  useEffect(() => {
    const fullText = ROLES[roleIndex];
    const speed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < fullText.length) {
          setDisplayed(fullText.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(fullText.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative">
      {/* Grid backdrop */}
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-20 grid lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-status-green/30 bg-status-green/5 mb-8">
            <span className="status-dot" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-status-green">
              Available for ML &amp; Data Science Roles
            </span>
          </div>

          {/* Name block — "Hi, I'm" is now the same size/color as Gebiyaw */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-4">
            <span className="block text-text-secondary">
              Hi, <span className="text-text-primary">I'm</span>
            </span>
            <span className="block text-text-primary">Gebiyaw</span>
            <span className="block gradient-text">Yigermal</span>
          </h1>
          <div className="flex items-baseline gap-3 mt-6 mb-6 min-h-[40px]">
            <span className="text-accent text-xl font-mono leading-none">
              |
            </span>
            <p className="text-lg md:text-xl font-medium gradient-role">
              {displayed}
              <span className="type-cursor">|</span>
            </p>
          </div>

          {/* Bio */}
          <p className="text-text-secondary max-w-xl mb-10 leading-relaxed">
            BSc Computer Science student at Injibara University building
            end-to-end Machine Learning pipelines, scikit-learn models, and
            scalable full-stack applications with React, Node.js, and MySQL.
            Driven by practical impact: 70% hands-on building, 30% theory.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="#projects" className="btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              View My Projects
            </a>
            <a
              href="/Gebiyaw-Yigermal-CV.pdf"
              download="Gebiyaw-Yigermal-CV.pdf"
              className="btn-outline"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
            <a href="#contact" className="btn-outline">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Contact Me
            </a>
          </div>

          {/* Connect row */}
          <div className="flex items-center gap-6 pt-8 border-t border-border-subtle">
            <div className="flex items-center gap-3">
              <span className="meta-label">Connect:</span>
              <div className="flex gap-2">
                {[
                  {
                    name: "GitHub",
                    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                  },
                  {
                    name: "LinkedIn",
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                  },
                  {
                    name: "Email",
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-md border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <span className="flex items-center gap-2 text-xs font-mono text-text-muted ml-auto">
              <span className="status-dot" />
              AVAILABLE FOR 2026 AI/ML ROLES
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 lg:pl-8">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
