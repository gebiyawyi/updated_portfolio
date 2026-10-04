import {
  TbSchool,
  TbBriefcase,
  TbCertificate,
  TbClock,
  TbBrandLinkedin,
} from "react-icons/tb";

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-14">
          <h2 className="section-title">Background &amp; Certifications</h2>
          <p className="text-text-secondary max-w-2xl text-sm">
            A CS degree in progress, plus certifications and projects I've
            shipped along the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            {/* Milestone 1 */}
            <div className="milestone">
              <span className="milestone-dot" />
              <div className="flex items-center gap-2">
                <TbSchool size={14} className="text-accent" />
                <span className="milestone-year">2022 — 2027 (Expected)</span>
              </div>
              <h3 className="milestone-title">
                BSc in Computer Science (4th Year / Senior)
              </h3>
              <p className="milestone-meta">Injibara University · Ethiopia</p>
              <p className="milestone-desc">
                Core coursework: Data Structures &amp; Algorithms, Database
                Systems, Operating Systems, Artificial Intelligence
                Fundamentals, Distributed Software Engineering, and
                Object-Oriented System Architecture.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "Algorithms",
                  "Database Internals",
                  "AI Paradigms",
                  "Software Verification",
                ].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="milestone">
              <span className="milestone-dot" />
              <div className="flex items-center gap-2">
                <TbBriefcase size={14} className="text-accent" />
                <span className="milestone-year">2026 — Present</span>
              </div>
              <h3 className="milestone-title">
                Data Science &amp; Web Systems Developer
              </h3>
              <p className="milestone-meta">
                Academic Initiatives · Independent Project Delivery
              </p>
              <p className="milestone-desc">
                Built projects spanning market price modeling, data analytics,
                and responsive React/Django web apps. Mentored early-year
                computing peers in Python and SQL fundamentals.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["React", "Node.js", "Django", "Python", "MySQL"].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            <PlaceholderTile
              icon={<TbBriefcase size={16} />}
              label="In Progress"
              title="Internship Roles"
              sub="Exploring Data & Machine Learning Engineering placements"
            />
            <PlaceholderTile
              icon={<TbCertificate size={16} />}
              label="Certified"
              title="AI & Data Science Professional"
              sub="Certificates verifiable on LinkedIn"
            />
            <PlaceholderTile
              icon={<TbBrandLinkedin size={16} />}
              label="Reach Out"
              title="LinkedIn & GitHub"
              sub="Connect for ML discussions, collaboration, or opportunities"
            />
            <PlaceholderTile
              icon={<TbClock size={16} />}
              label="Next Milestone"
              title="Graduation · 2027"
              sub="Seeking full-time AI/ML or full-stack engineering roles"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderTile({ icon, label, title, sub }) {
  return (
    <div className="placeholder-tile">
      <div className="flex items-center gap-2">
        <span className="text-accent/70">{icon}</span>
        <span className="placeholder-label">{label}</span>
      </div>
      <p className="placeholder-title">{title}</p>
      <p className="placeholder-sub">{sub}</p>
    </div>
  );
}
