import { FaGithub } from "react-icons/fa";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: brand */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-sm" />
            <span className="font-mono text-text-primary text-sm font-semibold tracking-tight">
              gebiyaw<span className="text-accent">.dev</span>
            </span>
          </div>

          {/* Center: meta */}
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest text-center">
            © {year} Gebiyaw · Render: dark-native · No theme toggle by design
          </p>

          {/* Right: links */}
          <div className="flex items-center gap-4">
            <a href="#" className="footer-link">
              GitHub
            </a>
            <a href="#" className="footer-link">
              LinkedIn
            </a>
            <a href="#" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
