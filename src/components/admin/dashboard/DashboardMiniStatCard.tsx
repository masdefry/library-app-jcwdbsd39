interface DashboardMiniStatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconWrapperClassName: string;
  valueClassName?: string;
}

export default function DashboardMiniStatCard({
  title,
  value,
  subtitle,
  icon,
  iconWrapperClassName,
  valueClassName = "text-[#191c1e]",
}: DashboardMiniStatCardProps) {
  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white p-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${iconWrapperClassName}`}
        >
          <span className="material-symbols-outlined text-[28px]">{icon}</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-[#454654]">
            {title}
          </p>
          <h3 className={`mt-1 text-3xl font-bold ${valueClassName}`}>
            {value}
          </h3>
          <p className="mt-1 text-sm text-[#454654]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}