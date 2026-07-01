import Link from "next/link";
import { recentBorrowings } from "@/data/dashboard";

function StatusBadge({
  status,
}: {
  status: "Overdue" | "Ongoing" | "Returned";
}) {
  if (status === "Overdue") {
    return (
      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
        Overdue
      </span>
    );
  }

  if (status === "Ongoing") {
    return (
      <span className="rounded-full bg-[#6cf8bb] px-3 py-1 text-xs font-bold text-[#005236]">
        Ongoing
      </span>
    );
  }

  return (
    <span className="rounded-full bg-[#eceef0] px-3 py-1 text-xs font-bold text-[#454654]">
        Returned
    </span>
  );
}

export default function RecentBorrowingTable() {
  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#c5c5d7] px-6 py-5">
        <div>
          <h3 className="text-2xl font-semibold text-[#191c1e]">
            Recent Borrowing Activity
          </h3>
          <p className="mt-1 text-sm text-[#454654]">
            Latest circulation records across the library.
          </p>
        </div>

        <Link
          href="/admin/transactions"
          className="text-sm font-bold text-[#2036bd] hover:underline"
        >
          View all transactions
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#f2f4f6]">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#454654]">
                Transaction
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#454654]">
                Member
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#454654]">
                Book
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#454654]">
                Due Date
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#454654]">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#c5c5d7]">
            {recentBorrowings.map((item) => (
              <tr key={item.id} className="hover:bg-[#f7f9fb]">
                <td className="px-6 py-4 font-medium text-[#191c1e]">
                  {item.id}
                </td>
                <td className="px-6 py-4 text-[#191c1e]">{item.memberName}</td>
                <td className="max-w-[280px] truncate px-6 py-4 text-[#454654]">
                  {item.bookTitle}
                </td>
                <td className="px-6 py-4 text-[#454654]">{item.dueDate}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}