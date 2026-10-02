export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-bg-tertiary text-text-secondary",
    green: "bg-status-green/10 text-status-green border border-status-green/30",
    blue: "bg-accent/10 text-accent border border-accent/30",
    purple:
      "bg-status-purple/10 text-status-purple border border-status-purple/30",
  };
  return <span className={`badge ${variants[variant]}`}>{children}</span>;
}
