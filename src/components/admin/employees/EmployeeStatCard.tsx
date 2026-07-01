interface EmployeeStatCardProps {
  title: string;
  value: string;
  icon: string;
  iconWrapperClassName: string;
  valueClassName?: string;
}

export default function EmployeeStatCard({
  title,
  value,
  icon,
  iconWrapperClassName,
  valueClassName = "text-[#2036bd]",
}: EmployeeStatCardProps) {
  return (
    <div className="col-span-12 flex items-center gap-6 rounded-xl border border-[#c5c5d7] bg-white p-6 shadow-sm lg:col-span-4">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl ${iconWrapperClassName}`}
      >
        <span className="material-symbols-outlined text-[32px]">{icon}</span>
      </div>

      <div>
        <p className="text-xs uppercase text-[#454654]">{title}</p>
        <h3 className={`text-4xl font-bold ${valueClassName}`}>{value}</h3>
      </div>
    </div>
  );
}