import {
  TbFolderCode,
  TbBrain,
  TbChartDots3,
  TbStack2,
  TbMapPin,
  TbCalendarEvent,
  TbDownload,
  TbCircleCheck,
  TbRosette,
  TbShieldCheck,
  TbUsers,
  TbChecklist,
} from "react-icons/tb";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-14">
          <h2 className="section-title">About Me</h2>
          <p className="text-text-secondary max-w-2xl text-sm">
            Bridging Algorithmic Intelligence &amp; Resilient Full-Stack Systems
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT — Bio */}
          <div className="lg:col-span-7">
            <div className="card bio-text">
              <p>
                I'm a <strong>4th-year Computer Science student</strong> at
                Injibara University, Ethiopia. Most of what I've learned comes
                from <em>building things</em> — ML models, data pipelines,
                full-stack apps — rather than from lectures alone.
              </p>

              <p>
                I work primarily with{" "}
                <strong>Python, scikit-learn, and Pandas</strong> on the ML
                side, and <strong>React, Node.js, and MySQL</strong> on the web
                side. I like taking a messy dataset, cleaning it, and getting it
                to do something useful — whether that's predicting crop prices
                or classifying customer churn.
              </p>

              <p>
                I care about code that <em>actually works in the real world</em>
                . Every project I ship, I try to make it survive real data — not
                just the tutorial's sample CSV.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border-subtle">
                <span className="stat-pill">
                  <TbMapPin size={12} />
                  Injibara,Ethiopia
                </span>
                <span className="stat-pill">
                  <TbCalendarEvent size={12} />
                  Graduation Anticipated: 2027
                </span>
                <span className="stat-pill">
                  <TbFolderCode size={12} />
                  20+ Documented Repositories
                </span>
              </div>
              {/* Download CV button */}
              <a
                href="/Gebiyaw-Yigermal-CV.pdf"
                download="Gebiyaw-Yigermal-CV.pdf"
                className="btn-outline mt-6 text-xs"
              >
                <TbDownload size={14} />
                Download Gebiyaw.CV.pdf
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <HighlightCard
              icon={<TbFolderCode size={20} />}
              stat="20+"
              title="Projects Built"
              desc="End-to-end repositories across AI, ML, Data Science & Full-Stack."
            />
            <HighlightCard
              icon={<TbBrain size={20} />}
              title="AI & ML"
              titleAccent="Primary Specialization"
              desc="Scikit-learn, PyTorch, OCR, custom training & quantitative model testing."
            />
            <HighlightCard
              icon={<TbChartDots3 size={20} />}
              title="Data Science"
              titleAccent="Analytics Pipelines"
              desc="Pandas, NumPy, Matplotlib, Seaborn, exploratory feature extraction."
            />
            <HighlightCard
              icon={<TbStack2 size={20} />}
              title="Full-Stack"
              titleAccent="Resilient Systems"
              desc="React frontends, Node/Django backends, SQL databases & API orchestration."
            />
          </div>
        </div>
        <TechStack />
      </div>
    </section>
  );
}
function HighlightCard({ icon, badge, stat, title, titleAccent, desc }) {
  const badgeVariants = {
    green: "bg-status-green/10 text-status-green border border-status-green/30",
    purple:
      "bg-status-purple/10 text-status-purple border border-status-purple/30",
    blue: "bg-accent/10 text-accent border border-accent/30",
    default: "bg-bg-tertiary text-text-secondary border border-border-subtle",
  };

  return (
    <div className="highlight-card">
      {/* Icon + badge row */}
      <div className="flex items-start justify-between mb-4">
        <div className="icon-box">{icon}</div>
        {badge && (
          <span
            className={`badge flex items-center gap-1 ${badgeVariants[badge.variant || "default"]}`}
          >
            {badge.icon}
            {badge.label}
          </span>
        )}
      </div>

      {/* Content */}
      {stat && (
        <div className="text-2xl font-bold text-text-primary mb-1">{stat}</div>
      )}
      <h4 className="text-sm font-semibold text-text-primary leading-tight">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-accent text-xs font-mono font-medium">
              {titleAccent}
            </span>
          </>
        )}
      </h4>
      <p className="text-xs text-text-muted mt-3 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ——— Tech Stack Strip ——— */
function TechStack() {
  const stack = [
    "Python",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "React",
    "Node.js",
    "Django",
    "MySQL",
    "Tailwind",
    "JavaScript",
    "Git",
    "REST APIs",
    "OpenCV",
  ];

  return (
    <div className="mt-16">
      <div className="section-divider mb-6">
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Core Discipline · Supporting Stack
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
