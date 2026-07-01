import TransactionStatCard from "./TransactionStatCard";
import TransactionsTable from "./TransactionTable";

export default function BorrowingTransactionsPage() {
  return (
    <section>
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-[32px] font-bold tracking-tight text-[#2036bd]">
            Borrowing Transactions
          </h2>
          <p className="mt-1 max-w-2xl text-[18px] text-[#454654]">
            Oversee and regulate the circulation of library materials with
            precision and academic integrity.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg bg-[#2036bd] px-6 py-2.5 font-bold text-white shadow-sm shadow-[#2036bd]/20 transition-all hover:brightness-110 active:scale-95">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create Borrowing Transaction
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-12 grid grid-cols-12 gap-6">
        <TransactionStatCard
          title="Overdue Items"
          value="42"
          icon="error"
          wrapperClassName="bg-red-100 text-red-600"
          valueClassName="text-red-600"
        />

        <TransactionStatCard
          title="Due Today"
          value="156"
          icon="event"
          wrapperClassName="bg-[#e1e0ff] text-[#2f2ebe]"
          valueClassName="text-[#191c1e]"
        />

        <TransactionStatCard
          title="Pending Returns"
          value="89"
          icon="pending_actions"
          wrapperClassName="bg-[#e0e3e5] text-[#454654]"
          valueClassName="text-[#191c1e]"
        />
      </div>

      {/* Table */}
      <TransactionsTable />
    </section>
  );
}