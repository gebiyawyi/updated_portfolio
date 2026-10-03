import {
  TbDatabaseImport,
  TbWashMachine,
  TbChartHistogram,
  TbChartDots,
  TbAdjustmentsAlt,
  TbBrain,
  TbTargetArrow,
  TbRocket,
  TbGitBranch,
  TbRefresh,
} from "react-icons/tb";

const steps = [
  {
    n: "01",
    title: "Data Collection",
    icon: <TbDatabaseImport size={16} />,
    tags: ["API / CSV", "Web Scrape", "SQL Query"],
  },
  {
    n: "02",
    title: "Data Cleaning",
    icon: <TbWashMachine size={16} />,
    tags: ["Null Handling", "Pandas"],
  },
  {
    n: "03",
    title: "Exploratory EDA",
    icon: <TbChartHistogram size={16} />,
    tags: ["Correlation", "Stats"],
  },
  {
    n: "04",
    title: "Visualization",
    icon: <TbChartDots size={16} />,
    tags: ["Matplotlib", "Seaborn"],
  },
  {
    n: "05",
    title: "Feature Eng.",
    icon: <TbAdjustmentsAlt size={16} />,
    tags: ["Encoding", "Scaling"],
  },
  {
    n: "06",
    title: "Model Training",
    icon: <TbBrain size={16} />,
    tags: ["Scikit / PyTorch", "Tuning"],
  },
  {
    n: "07",
    title: "Model Eval.",
    icon: <TbTargetArrow size={16} />,
    tags: ["F1 · ROC · MSE", "Cross-Val"],
  },
  {
    n: "08",
    title: "Deployment",
    icon: <TbRocket size={16} />,
    tags: ["REST API", "Docker"],
  },
];

export default function Pipeline() {
  return (
    <section
      id="pipeline"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label">// 03. EXECUTION PIPELINE</p>
          <h2 className="section-title">
            Data Science &amp; Machine Learning Pipeline
          </h2>
          <p className="text-text-secondary max-w-2xl text-sm">
            An eight-stage, end-to-end workflow — from raw ingestion to a
            deployed, monitored inference endpoint.
          </p>
        </div>

        {/* Horizontal scrollable pipeline */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex items-stretch gap-3 min-w-max md:min-w-0 md:grid md:grid-cols-4 lg:grid-cols-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative flex items-stretch">
                <div className="pipeline-step w-[140px] md:w-auto">
                  <div className="flex items-center justify-between">
                    <span className="pipeline-number">{s.n}</span>
                    <span className="text-accent/70">{s.icon}</span>
                  </div>
                  <p className="pipeline-title">{s.title}</p>
                  <div className="pipeline-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="pipeline-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connecting arrow — desktop only, between items */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center px-1 text-text-muted/40">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom meta line */}
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-mono text-text-primary uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <TbGitBranch size={14} className="text-accent" />
            Iterative &amp; Versioned
          </span>
          <span className="flex items-center gap-2">
            <TbRefresh size={14} className="text-status-green" />
            Reproducible
          </span>
          <span className="flex items-center gap-2">
            <TbRocket size={14} className="text-status-purple" />
            Production-Ready
          </span>
        </div>
      </div>
    </section>
  );
}
