import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
  TbBrandWhatsapp,
  TbBrandTelegram,
} from "react-icons/tb";
import profile from "../assets/images/portfolio.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      icon: <TbBrandGithub size={14} />,
      color: "hover:text-text-primary hover:border-text-primary",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-username",
      icon: <TbBrandLinkedin size={14} />,
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]",
    },
    {
      label: "Email",
      href: "mailto:gebiyaw.cs@gmail.com",
      icon: <TbMail size={14} />,
      color: "hover:text-accent hover:border-accent",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/251918939724",
      icon: <TbBrandWhatsapp size={14} />,
      color: "hover:text-[#25D366] hover:border-[#25D366]",
    },
    {
      label: "Telegram",
      href: "https://t.me/gebyig",
      icon: <TbBrandTelegram size={14} />,
      color: "hover:text-[#26A5E4] hover:border-[#26A5E4]",
    },
  ];

  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: avatar + name */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="logo-avatar">
              <img src={profile} alt="Gebiyaw" className="logo-avatar-img" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-text-primary">
                Gebiyaw Yigermal
              </span>
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                ML &amp; Data Science Engineer
              </span>
            </div>
          </a>

          {/* Center: copyright */}
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest text-center order-3 md:order-2">
            © {year} Gebiyaw Yigermal · All rights reserved
          </p>

          {/* Right: social links */}
          <div className="flex items-center gap-2 order-2 md:order-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  l.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={l.label}
                title={l.label}
                className={`w-9 h-9 rounded-md border border-border-subtle flex items-center justify-center text-text-secondary transition-colors ${l.color}`}
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
