import {
  TbSchool,
  TbBriefcase,
  TbCertificate,
  TbUsers,
  TbClock,
} from "react-icons/tb";

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">
            // 06 // ACADEMIC &amp; APPLIED MILESTONES
          </p>
          <h2 className="section-title">Track Record</h2>
          <p className="text-text-secondary max-w-2xl text-sm">
            Academic foundation anchored by practical software and data
            architecture deployments.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            {/* Milestone 1 */}
            <div className="milestone">
              <span className="milestone-dot" />
              <div className="flex items-center gap-2">
                <TbSchool size={14} className="text-accent" />
                <span className="milestone-year">2021 — 2025 (Expected)</span>
              </div>
              <h3 className="milestone-title">
                BSc in Computer Science (4th Year / Senior)
              </h3>
              <p className="milestone-meta">
                Injibara University · Injibara, Amhara, Ethiopia
              </p>
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
                <span className="milestone-year">2023 — Present</span>
              </div>
              <h3 className="milestone-title">
                Applied AI &amp; Web Systems Developer
              </h3>
              <p className="milestone-meta">
                Academic Initiatives · Independent Project Delivery
              </p>
              <p className="milestone-desc">
                Designed 20+ applications spanning local market pricing models,
                computer vision diagnostic pipelines, and responsive
                React/Django relational architectures. Mentored early-year
                computing peers in Python and SQL fundamentals.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {["React", "Node.js", "Django", "PyTorch", "MySQL"].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: placeholder tiles */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            <PlaceholderTile
              icon={<TbBriefcase size={16} />}
              label="In Progress"
              title="Internship Roles"
              sub="Exploring Data & Machine Learning Engineering placements"
            />
            <PlaceholderTile
              icon={<TbCertificate size={16} />}
              label="Continuous"
              title="Certifications"
              sub="Deep Learning Specialization in progress"
            />
            <PlaceholderTile
              icon={<TbUsers size={16} />}
              label="Open Channel"
              title="Freelance & Collabs"
              sub="Available for data consulting and data science contracts"
            />
            <PlaceholderTile
              icon={<TbClock size={16} />}
              label="Next Milestone"
              title="Graduation · 2025"
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
