interface TransactionStatCardProps {
  title: string;
  value: string;
  icon: string;
  wrapperClassName: string;
  valueClassName?: string;
}

export default function TransactionStatCard({
  title,
  value,
  icon,
  wrapperClassName,
  valueClassName = "text-[#191c1e]",
}: TransactionStatCardProps) {
  return (
    <div className="col-span-12 flex items-center gap-6 rounded-xl border border-[#c5c5d7] bg-white p-6 shadow-sm transition-all hover:shadow-md lg:col-span-4">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl ${wrapperClassName}`}
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