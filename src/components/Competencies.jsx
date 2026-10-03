import {
  TbBrain,
  TbChartDots3,
  TbLayout2,
  TbServer2,
  TbDatabase,
  TbCode,
  TbBrandPython,
  TbBrandReact,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandMysql,
  TbBrandTailwind,
  TbBrandGit,
  TbBrandVscode,
  TbTerminal2,
} from "react-icons/tb";

export default function Competencies() {
  return (
    <section
      id="skills"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label + heading + legend */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-14">
          <div>
            <p className="section-label">// 02 . TECHNICAL COMPETENCIES</p>
            <h2 className="section-title max-w-2xl">
              Rigorous foundations verified by practical implementation.
            </h2>
            <p className="text-text-secondary max-w-2xl text-sm">
              Categorized transparently by architectural domain without
              arbitrary percentage sliders.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs font-mono text-text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Core Discipline
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent" />
              Supporting Stack
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Row 1 */}
          <SkillCard
            icon={<TbBrain size={20} />}
            title="AI & Machine Learning"
            desc="Mathematical model formulation, training routines, and quantitative validation curves."
            tags={[
              "Machine Learning",
              "Artificial Intelligence",
              "Scikit-learn",
              "PyTorch",
              "SciPy",
              "Model Training",
              "Model Evaluation",
              "Deep Learning",
              "Data Visualization",
            ]}
            accent
          />

          <SkillCard
            icon={<TbChartDots3 size={20} />}
            title="Data Science"
            desc="Data transformation, outlier filtration, and exploratory visual analytics."
            tags={[
              "Python",
              "Pandas",
              "NumPy",
              "Matplotlib",
              "Seaborn",
              "Jupyter",
              "Anaconda",
              "Data Cleaning",
              "Exploratory EDA",
              "Data Visualization",
            ]}
            accent
          />

          <SkillCard
            icon={<TbLayout2 size={20} />}
            title="Frontend Development"
            desc="Responsive, accessible client interfaces and real-time state manipulation."
            tags={[
              "React",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Tailwind",
              "Component Architecture",
              "React Hooks",
              "State Management",
            ]}
          />
          <SkillCard
            icon={<TbServer2 size={20} />}
            title="Backend & APIs"
            desc="Server controllers, structured REST communication, and synchronous workers."
            tags={[
              "Django",
              "Node.js",
              "RESTful APIs",
              "Authentication & JWT",
              "Micro-endpoints",
              "Express",
              "Middleware Design",
            ]}
          />
          <SkillCard
            icon={<TbDatabase size={20} />}
            title="Databases"
            desc="Relational schema design, SQL index planning, query execution, and migration."
            tags={[
              "MySQL",
              "SQLite",
              "Relational Schema",
              "Query Optimization",
              "ERD Modeling",
              "Data Migration",
              "Indexing",
            ]}
          />

          <SkillCard
            icon={<TbCode size={20} />}
            title="Languages & Tooling"
            desc="Foundational programming dialects and everyday workflow toolchain."
            tags={[
              "Python",
              "Java",
              "JavaScript",
              "C++",
              "Git",
              "GitHub",
              "VS Code",
              "Jupyter Lab",
              "Anaconda",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ——— Reusable Skill Card ——— */
function SkillCard({ icon, title, badge, desc, tags, accent = false }) {
  const badgeVariants = {
    blue: "bg-accent/10 text-accent border border-accent/30",
    purple:
      "bg-status-purple/10 text-status-purple border border-status-purple/30",
    green: "bg-status-green/10 text-status-green border border-status-green/30",
    default: "bg-bg-tertiary text-text-secondary border border-border-subtle",
  };

  return (
    <div className="card group">
      {/* Header row: icon + title + badge */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="icon-box">{icon}</div>
          <h3 className="text-base font-semibold text-text-primary leading-tight">
            {title}
          </h3>
        </div>
        {badge && (
          <span
            className={`badge ${badgeVariants[badge.variant || "default"]} whitespace-nowrap`}
          >
            {badge.label}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-text-muted leading-relaxed mb-5">{desc}</p>

      {/* Divider */}
      <div className="border-t border-border-subtle mb-4" />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t, i) => (
          <span key={t} className="tag flex items-center gap-1.5">
            {accent && i === 0 && (
              <span className="w-1 h-1 rounded-full bg-accent" />
            )}
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
