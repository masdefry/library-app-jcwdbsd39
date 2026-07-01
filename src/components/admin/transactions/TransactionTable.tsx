import { transactions } from "@/data/transactions";
import TransactionStatusBadge from "./TransactionStatusBadge";

export default function TransactionsTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      {/* Table Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-[#c5c5d7] bg-white/50 p-6 sm:flex-row sm:items-center">
        <h3 className="text-2xl font-bold tracking-tight text-[#191c1e]">
          Current Loan Registry
        </h3>

        <div className="flex w-full gap-4 sm:w-auto">
          <button className="flex w-full items-center gap-2 rounded-lg border border-[#c5c5d7] bg-white px-4 py-2 text-sm font-medium text-[#454654] transition-colors hover:bg-[#f2f4f6] sm:w-auto">
            <span className="material-symbols-outlined">filter_list</span>
            Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#eceef0]">
            <tr className="border-b border-[#c5c5d7] bg-[#f2f4f6]">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#454654]">
                Transaction ID
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#454654]">
                Member Name
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#454654]">
                Book Title
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#454654]">
                Borrow Date
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#454654]">
                Due Date
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#454654]">
                Status
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#454654]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#c5c5d7] bg-white">
            {transactions.map((transaction) => {
              const isReturned = transaction.status === "returned";
              const isOverdue = transaction.status === "overdue";

              return (
                <tr
                  key={transaction.id}
                  className={`group transition-colors hover:bg-[#2036bd]/[0.02] ${
                    isReturned ? "opacity-60" : ""
                  }`}
                >
                  <td className="px-6 py-5 text-sm font-medium text-[#191c1e]">
                    {transaction.id}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {transaction.memberAvatar ? (
                        <img
                          src={transaction.memberAvatar}
                          alt={transaction.memberName}
                          className="h-9 w-9 rounded-full object-cover ring-1 ring-[#c5c5d7]"
                        />
                      ) : (
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                            transaction.memberInitialsClassName ??
                            "bg-primary/10 text-primary"
                          }`}
                        >
                          {transaction.memberInitials}
                        </div>
                      )}

                      <span className="text-sm font-semibold text-[#191c1e]">
                        {transaction.memberName}
                      </span>
                    </div>
                  </td>

                  <td className="max-w-xs truncate px-6 py-5 text-sm text-[#454654]">
                    {transaction.bookTitle}
                  </td>

                  <td className="px-6 py-5 text-sm text-[#454654]">
                    {transaction.borrowDate}
                  </td>

                  <td
                    className={`px-6 py-5 text-sm ${
                      isOverdue
                        ? "font-bold text-red-600"
                        : "text-[#454654]"
                    }`}
                  >
                    {transaction.dueDate}
                  </td>

                  <td className="px-6 py-5">
                    <TransactionStatusBadge status={transaction.status} />
                  </td>

                  <td className="px-6 py-5 text-right">
                    {isReturned ? (
                      <span className="text-sm italic text-[#454654]">
                        Action Logged
                      </span>
                    ) : (
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg px-3 py-1.5 text-sm font-bold text-[#2036bd] transition-colors hover:bg-[#2036bd]/5">
                          Extend
                        </button>
                        <button className="rounded-lg bg-[#2036bd] px-4 py-1.5 text-sm font-bold text-white transition-all hover:brightness-110">
                          Return
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-[#f2f4f6] px-6 py-4">
        <span className="text-sm font-medium text-[#454654]">
          Showing 1 to 4 of 1,284 results
        </span>

        <div className="flex gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c5c5d7] text-[#454654] transition-all hover:bg-white">
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>

          <button className="h-9 w-9 rounded-lg bg-[#2036bd] text-sm font-bold text-white shadow-sm">
            1
          </button>

          <button className="h-9 w-9 rounded-lg border border-[#c5c5d7] text-sm font-semibold text-[#454654] transition-all hover:bg-white">
            2
          </button>

          <button className="h-9 w-9 rounded-lg border border-[#c5c5d7] text-sm font-semibold text-[#454654] transition-all hover:bg-white">
            3
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c5c5d7] text-[#454654] transition-all hover:bg-white">
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}