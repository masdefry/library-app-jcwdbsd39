import { TransactionStatus } from "@/data/transactions";

interface Props {
  status: TransactionStatus;
}

export default function TransactionStatusBadge({ status }: Props) {
  if (status === "overdue") {
    return (
      <span className="rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
        Overdue
      </span>
    );
  }

  if (status === "ongoing") {
    return (
      <span className="rounded-full border border-[#006c49]/20 bg-[#6cf8bb] px-3 py-1 text-xs font-bold text-[#005236]">
        Ongoing
      </span>
    );
  }

  return (
    <span className="rounded-full border border-[#c5c5d7] bg-[#e6e8ea] px-3 py-1 text-xs font-bold text-[#454654]">
      Returned
    </span>
  );
}