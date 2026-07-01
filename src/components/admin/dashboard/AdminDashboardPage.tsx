import Link from "next/link";
import {
  borrowingTrendData,
  collectionStatus,
  dashboardKpis,
  dashboardMiniStats,
} from "@/data/dashboard";
import DashboardKpiCard from "./DashboardKpiCard";
import DashboardMiniStatCard from "./DashboardMiniStatCard";
import AttentionNeededCard from "./AttentionNeededCard";
import RecentBorrowingTable from "./RecentBorrowingTable";
import StaffOnDutyCard from "./StaffOnDutyCard";
import RecentBooksCard from "./RecentBooksCard";

function BorrowingTrendCard() {
  const maxValue = Math.max(
    ...borrowingTrendData.flatMap((item) => [item.borrowings, item.returns])
  );

  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#c5c5d7] px-6 py-5">
        <div>
          <h3 className="text-2xl font-semibold text-[#191c1e]">
            Borrowing Activity Trend
          </h3>
          <p className="mt-1 text-sm text-[#454654]">
            Last 7 days of borrowings and returns.
          </p>
        </div>

        <Link
          href="/admin/transactions"
          className="text-sm font-bold text-[#2036bd] hover:underline"
        >
          Open transactions
        </Link>
      </div>

      <div className="p-6">
        <div className="grid h-[280px] grid-cols-7 items-end gap-4">
          {borrowingTrendData.map((item) => {
            const borrowingHeight = (item.borrowings / maxValue) * 180;
            const returnHeight = (item.returns / maxValue) * 180;

            return (
              <div
                key={item.day}
                className="flex h-full flex-col items-center justify-end gap-3"
              >
                <div className="flex h-[220px] items-end gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-5 rounded-t-md bg-[#2036bd]"
                      style={{ height: `${borrowingHeight}px` }}
                    />
                    <span className="text-[11px] font-medium text-[#454654]">
                      {item.borrowings}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="w-5 rounded-t-md bg-[#6cf8bb]"
                      style={{ height: `${returnHeight}px` }}
                    />
                    <span className="text-[11px] font-medium text-[#454654]">
                      {item.returns}
                    </span>
                  </div>
                </div>

                <span className="text-sm font-medium text-[#454654]">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-[#e0e3e5] pt-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#2036bd]" />
            <span className="text-sm text-[#454654]">Borrowings</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#6cf8bb]" />
            <span className="text-sm text-[#454654]">Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionStatusCard() {
  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      <div className="border-b border-[#c5c5d7] px-6 py-5">
        <h3 className="text-2xl font-semibold text-[#191c1e]">
          Collection Status Breakdown
        </h3>
        <p className="mt-1 text-sm text-[#454654]">
          Operational overview of the library collection.
        </p>
      </div>

      <div className="p-6">
        <div className="mb-6 h-4 overflow-hidden rounded-full bg-[#eceef0]">
          {collectionStatus.map((item) => (
            <div
              key={item.label}
              className={`h-full ${item.colorClassName} inline-block`}
              style={{ width: `${item.value}%` }}
            />
          ))}
        </div>

        <div className="space-y-4">
          {collectionStatus.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-3 w-3 rounded-full ${item.colorClassName}`}
                />
                <span className="text-sm font-medium text-[#191c1e]">
                  {item.label}
                </span>
              </div>

              <span className="text-sm font-semibold text-[#454654]">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickActionsCard() {
  const actions = [
    {
      label: "Add New Book",
      icon: "menu_book",
      href: "/admin/books",
    },
    {
      label: "Create Borrowing",
      icon: "swap_horiz",
      href: "/admin/transactions",
    },
    {
      label: "Register Employee",
      icon: "person_add",
      href: "/admin/employees",
    },
  ];

  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      <div className="border-b border-[#c5c5d7] px-6 py-5">
        <h3 className="text-2xl font-semibold text-[#191c1e]">
          Quick Actions
        </h3>
        <p className="mt-1 text-sm text-[#454654]">
          Jump into the most common admin tasks.
        </p>
      </div>

      <div className="grid gap-4 p-6">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex items-center gap-4 rounded-xl border border-[#e0e3e5] bg-[#f7f9fb] p-4 transition-all hover:border-[#2036bd] hover:bg-[#2036bd]/[0.03]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dfe0ff] text-[#2036bd]">
              <span className="material-symbols-outlined">{action.icon}</span>
            </div>

            <div>
              <p className="font-semibold text-[#191c1e]">{action.label}</p>
              <p className="text-sm text-[#454654]">
                Open module and continue workflow
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h2 className="text-[32px] font-bold tracking-tight text-[#2036bd]">
            Library Operations Dashboard
          </h2>
          <p className="mt-2 max-w-3xl text-[18px] text-[#454654]">
            Monitor collection health, borrowing activity, and staff operations
            in one unified control center.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-end">
          <Link
            href="/admin/books"
            className="flex items-center gap-2 rounded-xl border border-[#c5c5d7] bg-white px-5 py-3 font-semibold text-[#191c1e] transition-colors hover:bg-[#f2f4f6]"
          >
            <span className="material-symbols-outlined">menu_book</span>
            Add Book
          </Link>

          <Link
            href="/admin/transactions"
            className="flex items-center gap-2 rounded-xl bg-[#2036bd] px-5 py-3 font-semibold text-white shadow-sm transition-all hover:brightness-110"
          >
            <span className="material-symbols-outlined">swap_horiz</span>
            Create Borrowing
          </Link>

          <Link
            href="/admin/employees"
            className="flex items-center gap-2 rounded-xl border border-[#c5c5d7] bg-white px-5 py-3 font-semibold text-[#191c1e] transition-colors hover:bg-[#f2f4f6]"
          >
            <span className="material-symbols-outlined">person_add</span>
            Register Employee
          </Link>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dashboardKpis.map((item) => (
          <DashboardKpiCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            icon={item.icon}
            iconWrapperClassName={item.iconWrapperClassName}
            valueClassName={item.valueClassName}
          />
        ))}
      </div>

      {/* Today operations */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {dashboardMiniStats.map((item) => (
          <DashboardMiniStatCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            icon={item.icon}
            iconWrapperClassName={item.iconWrapperClassName}
            valueClassName={item.valueClassName}
          />
        ))}
      </div>

      {/* Trend + attention */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
        <BorrowingTrendCard />
        <AttentionNeededCard />
      </div>

      {/* Collection + staff */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
        <CollectionStatusCard />
        <StaffOnDutyCard />
      </div>

      {/* Recent borrowing + recent books */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_1fr]">
        <RecentBorrowingTable />
        <div className="space-y-6">
          <RecentBooksCard />
          <QuickActionsCard />
        </div>
      </div>
    </section>
  );
}