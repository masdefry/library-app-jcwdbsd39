import { attentionItems } from "@/data/dashboard";

function getLevelClasses(level: "critical" | "warning" | "info") {
  if (level === "critical") {
    return {
      dot: "bg-red-500",
      badge: "bg-red-100 text-red-600",
    };
  }

  if (level === "warning") {
    return {
      dot: "bg-amber-500",
      badge: "bg-amber-100 text-amber-700",
    };
  }

  return {
    dot: "bg-[#2036bd]",
    badge: "bg-[#dfe0ff] text-[#2036bd]",
  };
}

export default function AttentionNeededCard() {
  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      <div className="border-b border-[#c5c5d7] px-6 py-5">
        <h3 className="text-2xl font-semibold text-[#191c1e]">
          Attention Needed
        </h3>
        <p className="mt-1 text-sm text-[#454654]">
          Operational issues that need review today.
        </p>
      </div>

      <div className="space-y-4 p-6">
        {attentionItems.map((item) => {
          const styles = getLevelClasses(item.level);

          return (
            <div
              key={item.id}
              className="rounded-xl border border-[#e0e3e5] bg-[#f7f9fb] p-4"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-2 h-2.5 w-2.5 rounded-full ${styles.dot}`}
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-[#191c1e]">
                      {item.title}
                    </h4>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${styles.badge}`}
                    >
                      {item.level}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#454654]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}