import { useState } from "react";
import profile from "../assets/images/portfolio.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Architecture", href: "#architecture" },
    { label: "Contact", href: "#contact" },
  ];
  const roles = ["MACHINE LEARNING", "AI", "DATA SCIENCE", "FULL-STACK DEV"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg-primary/80 border-b border-border-subtle">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between">
        {/* ——— Logo Block ——— */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Circular avatar */}
          <span className="logo-avatar">
            <img src={profile} alt="Gebiyaw logo" className="logo-avatar-img" />
          </span>

          {/* Text column: name + roles */}
          <div className="flex flex-col leading-tight">
            <span className="text-text-primary font-bold text-base tracking-tight">
              Gebiyaw Yigermal
            </span>

            {/* Roles — no dots, just gaps */}
            <span className="hidden lg:flex items-center gap-3 mt-1 whitespace-nowrap">
              {roles.map((role) => (
                <span
                  key={role}
                  className="text-accent font-mono text-[10px] tracking-wider uppercase"
                >
                  {role}
                </span>
              ))}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Gebiyaw-Yigermal-CV.pdf"
            download="Gebiyaw-Yigermal-CV.pdf"
            className="btn-outline text-xs py-2 px-3"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-primary p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-subtle px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#" className="btn-outline mt-2 justify-center">
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
