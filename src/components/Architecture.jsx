import {
  TbDeviceDesktop,
  TbServer,
  TbDatabase,
  TbArrowRight,
} from "react-icons/tb";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative py-24 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="section-title">Full-Stack Architecture Overview</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm">
            Decoupled, modular multi-tier architectural stack powering the
            production-minded web applications.
          </p>
        </div>

        {/* Diagram row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-2 mb-10">
          {/* Layer 1 */}
          <div className="arch-node flex-1">
            <div className="flex items-center justify-between">
              <span className="arch-node-label">Presentation</span>
              <TbDeviceDesktop size={16} className="text-accent/70" />
            </div>
            <p className="arch-node-title">React Client</p>
            <p className="arch-node-detail">
              Tailwind CSS · State Hooks
              <br />
              Modular UI
            </p>
          </div>

          <Connector label="JSON / HTTPS" />
          <div className="arch-node flex-1">
            <div className="flex items-center justify-between">
              <span className="arch-node-label">API Layer</span>
              <TbServer size={16} className="text-accent/70" />
            </div>
            <p className="arch-node-title">REST Controllers</p>
            <p className="arch-node-detail">
              Node / Django Servers
              <br />
              JWT Authentication
            </p>
          </div>

          <Connector label="ORM Queries" />
          <div className="arch-node flex-1">
            <div className="flex items-center justify-between">
              <span className="arch-node-label">Data</span>
              <TbDatabase size={16} className="text-accent/70" />
            </div>
            <p className="arch-node-title">MySQL / SQLite</p>
            <p className="arch-node-detail">
              3NF Schema · Indexed
              <br />
              Migration Ready
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-mono text-text-muted uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Strict Separation of Business Logic &amp; Presentation
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            High Query Performance with Indexed Relational Keys
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Containerizable &amp; Microservice-Ready Design
          </span>
        </div>
      </div>
    </section>
  );
}

function Connector({ label }) {
  return (
    <div className="arch-connector lg:flex-col flex-row">
      <svg
        width="24"
        height="12"
        viewBox="0 0 24 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="hidden lg:block"
      >
        <path d="M0 6h20M14 1l6 5-6 5" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
