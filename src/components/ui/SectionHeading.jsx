export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-12">
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-text-secondary max-w-2xl">{subtitle}</p>}
    </div>
  );
}
