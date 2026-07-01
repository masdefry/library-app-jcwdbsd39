interface DashboardKpiCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconWrapperClassName: string;
  valueClassName?: string;
}

export default function DashboardKpiCard({
  title,
  value,
  subtitle,
  icon,
  iconWrapperClassName,
  valueClassName = "text-[#191c1e]",
}: DashboardKpiCardProps) {
  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-[#454654]">
            {title}
          </p>
          <h3 className={`mt-2 text-4xl font-bold ${valueClassName}`}>
            {value}
          </h3>
          <p className="mt-2 text-sm text-[#454654]">{subtitle}</p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconWrapperClassName}`}
        >
          <span className="material-symbols-outlined text-[28px]">{icon}</span>
        </div>
      </div>
    </div>
  );
}