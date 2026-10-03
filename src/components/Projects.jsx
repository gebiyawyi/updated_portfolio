import { useState } from "react";
import tourism from "../assets/images/tuerism.png";
import {
  TbArrowUpRight,
  TbChevronRight,
  TbPlayerPlay,
  TbBrandGithub,
  TbFileDescription,
  TbPhoto,
} from "react-icons/tb";

/* ——— Data ——— */
const projects = [
  {
    id: 1,
    image: "/projects/agri-market.jpg",
    categories: ["AI/ML", "DATA SCIENCE"],
    category: "ML + Data Analysis",
    categoryTag: "PLANNING SYSTEM",
    title: "Smart Agricultural Market Price & Demand Analysis System",
    description:
      "A comprehensive data-driven agricultural market analysis platform analyzing regional crop price dynamics, supply patterns, and farmer demand metrics to empower local agricultural decision-making across Ethiopian regional markets.",
    metrics: [
      { label: "Model Variance", value: "89.4%" },
      { label: "Dataset", value: "12K rows" },
      { label: "Regions", value: "8" },
    ],
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "React",
      "Node.js",
      "SQLite",
    ],
    actions: [
      {
        label: "View Case Study",
        icon: <TbFileDescription size={13} />,
        primary: true,
        href: "#",
      },
      {
        label: "Live Ready",
        icon: <TbArrowUpRight size={13} />,
        primary: false,
        href: "#",
      },
    ],
  },
  {
    id: 2,
    image: "/projects/defect-vision.jpg",
    categories: ["AI/ML", "REST"],
    category: "Computer Vision",
    categoryTag: "PYTORCH INFERENCE",
    title: "Deep Neural Vision Defect Detector",
    description:
      "Convolutional neural network pipeline for classifying industrial surface defects with high-recall validation curves, automated bounding box localization, and batch preprocessing routines.",
    metrics: [
      { label: "mAP Score", value: "0.942", accent: true },
      { label: "Inference", value: "18ms/frame" },
      { label: "Classes", value: "6" },
    ],
    tags: ["PyTorch", "Scikit-learn", "Python", "OpenCV", "React Backbone"],
    actions: [
      {
        label: "Inspect Weights & Code",
        icon: <TbBrandGithub size={13} />,
        primary: true,
        href: "#",
      },
      {
        label: "Accuracy 74.2%",
        icon: <TbPlayerPlay size={13} />,
        primary: false,
        disabled: true,
      },
    ],
  },
  {
    id: 3,
    image: tourism,
    categories: ["FULL-STACK", "REST", "BACKEND & SQL"],
    category: "Full-Stack + GIS",
    categoryTag: "TOURISM PLATFORM",
    title: "Ethiopian Tourism & Travel Management",
    description:
      "A geospatial and content-rich tourism platform showcasing Ethiopian heritage sites — Lalibela, Simien Mountains, Axum, and the Danakil Depression — with interactive maps, itinerary planning, multilingual support, and secure booking workflows.",
    metrics: [
      { label: "Heritage Sites", value: "48", accent: true },
      { label: "Regions Covered", value: "11" },
      { label: "API Latency", value: "< 65ms" },
    ],
    tags: ["React", "Node.js", "Express", "MySQL", "Leaflet Maps", "CSS3"],
    actions: [
      {
        label: "Explore Platform",
        icon: <TbArrowUpRight size={13} />,
        primary: true,
        href: "https://ethiopia-tourism-system.vercel.app/",
        external: true,
      },
      {
        label: "GitHub Repository",
        icon: <TbBrandGithub size={13} />,
        primary: false,
        href: "#",
      },
    ],
  },
  {
    id: 4,
    image: "/projects/task-suite.jpg",
    categories: ["FULL-STACK", "BACKEND & SQL", "REST"],
    category: "Full-Stack System",
    categoryTag: "RELATIONAL DB",
    title: "Enterprise Task & Resource Management Suite",
    description:
      "Modern collaborative project workspace with real-time state management, role-based access control (RBAC), normalized SQL schemas, and optimized pagination endpoints.",
    metrics: [
      { label: "API Latency", value: "< 42ms", accent: true },
      { label: "DB Schema", value: "3NF Normalized" },
      { label: "Endpoints", value: "28 Routes" },
    ],
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    actions: [
      {
        label: "GitHub Repository",
        icon: <TbBrandGithub size={13} />,
        primary: true,
        href: "#",
      },
    ],
  },
];

const filters = [
  "ALL PROJECTS",
  "AI/ML",
  "DATA SCIENCE",
  "FULL-STACK",
  "REST",
  "BACKEND & SQL",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");

  const filteredProjects =
    activeFilter === "ALL PROJECTS"
      ? projects
      : projects.filter((p) => p.categories?.includes(activeFilter));

  return (
    <section
      id="projects"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label">// 04. SELECTED WORKS</p>
          <h2 className="section-title">Featured Projects & Repositories</h2>
          <p className="text-text-secondary max-w-2xl text-sm">
            Live implementations highlighting data manipulation, algorithmic
            inference, and structured full-stack delivery.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border-subtle">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-tab ${activeFilter === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted font-mono text-sm">
              // NO PROJECTS MATCH THIS FILTER
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a href="#" className="btn-outline text-xs">
            <TbChevronRight size={14} />
            View All Projects (20+ Repositories)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ——— Project Card with Image Header ——— */
function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="project-card">
      {/* ——— Image header ——— */}
      <div className="project-image-wrap">
        {imgError || !project.image ? (
          <div className="project-image-fallback">
            <TbPhoto size={20} />
            <span className="ml-2">// {project.categoryTag}</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>

      {/* ——— Body ——— */}
      <div className="project-body">
        {/* Top row: category + categoryTag */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            {project.category}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
            {project.categoryTag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Metric strip */}
        <div className="metric-strip">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-cell">
              <span className="metric-label">{m.label}</span>
              <span className={`metric-value ${m.accent ? "accent" : ""}`}>
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
          {project.actions.map((a) =>
            a.disabled ? (
              <button
                key={a.label}
                disabled
                className="text-[11px] font-mono text-text-muted flex items-center gap-1.5 px-2.5 py-1.5 cursor-not-allowed"
              >
                {a.icon}
                {a.label}
              </button>
            ) : (
              <a
                key={a.label}
                href={a.href || "#"}
                target={a.external ? "_blank" : undefined}
                rel={a.external ? "noopener noreferrer" : undefined}
                className={
                  a.primary
                    ? "btn-primary text-[11px] py-1.5 px-3"
                    : "btn-outline text-[11px] py-1.5 px-3"
                }
              >
                {a.icon}
                {a.label}
              </a>
            ),
          )}
        </div>
      </div>
    </article>
  );
}
