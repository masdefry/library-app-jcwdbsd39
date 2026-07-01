import { books } from "@/data/books";

function StatusBadge({ status }: { status: "available" | "borrowed" }) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6cf8bb] px-2.5 py-1 text-xs font-bold text-[#005236]">
        <span className="h-2 w-2 rounded-full bg-[#006c49]" />
        Available
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
      <span className="h-2 w-2 rounded-full bg-amber-500" />
      Borrowed
    </span>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon,
  iconWrapperClass,
  valueClass,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconWrapperClass: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center gap-6 rounded-xl border border-[#c5c5d7] bg-white p-6 shadow-sm">
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${iconWrapperClass}`}
      >
        <span className="material-symbols-outlined text-[32px]">{icon}</span>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xs uppercase text-[#454654]">{title}</p>
        <h3 className={`text-4xl font-bold ${valueClass ?? "text-[#2036bd]"}`}>
          {value}
        </h3>
        <p className="mt-1 text-sm font-semibold text-[#454654]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function BookManagementPage() {
  return (
    <section>
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-[32px] font-bold text-[#2036bd]">
            Book Management
          </h2>
          <p className="mt-1 text-[#454654]">
            Oversee and organize the library&apos;s physical and digital
            collection.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-[#2036bd] px-6 py-2 text-white shadow-sm transition-colors hover:bg-[#3e52d5]">
          <span className="material-symbols-outlined">add</span>
          Create New Book
        </button>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          title="Total Books"
          value="24,502"
          subtitle="+120 this month"
          icon="library_books"
          iconWrapperClass="bg-[#dfe0ff] text-[#2036bd]"
          valueClass="text-[#2036bd]"
        />

        <StatCard
          title="Available"
          value="18,944"
          subtitle="77% of total collection"
          icon="check_circle"
          iconWrapperClass="bg-[#6cf8bb] text-[#005236]"
          valueClass="text-[#006c49]"
        />

        <StatCard
          title="Lost / Damaged"
          value="42"
          subtitle="Needs verification"
          icon="warning"
          iconWrapperClass="bg-red-100 text-red-600"
          valueClass="text-red-600"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-[#c5c5d7] bg-white px-6 py-4 md:flex-row md:items-center">
          <h3 className="text-2xl font-semibold text-[#191c1e]">Book List</h3>

          <button className="group flex items-center gap-2 rounded-lg border border-[#c5c5d7] bg-white px-4 py-2 transition-all hover:border-[#2036bd] hover:bg-[#2036bd]/5">
            <span className="material-symbols-outlined text-[#454654] group-hover:text-[#2036bd]">
              filter_list
            </span>
            <span className="text-sm font-bold text-[#191c1e] group-hover:text-[#2036bd]">
              Filter
            </span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-y border-[#c5c5d7] bg-[#f2f4f6]">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#454654]">
                  ISBN
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#454654]">
                  Book Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#454654]">
                  Author
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#454654]">
                  Genre
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#454654]">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[#454654]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#c5c5d7]">
              {books.map((book) => (
                <tr
                  key={book.isbn}
                  className="transition-colors hover:bg-[#f2f4f6]"
                >
                  <td className="px-6 py-4 text-sm text-[#454654]">
                    {book.isbn}
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-bold text-[#2036bd]">{book.title}</p>
                    <p className="text-xs text-[#454654]">{book.subtitle}</p>
                  </td>

                  <td className="px-6 py-4 text-sm text-[#191c1e]">
                    {book.author}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded bg-[#e1e0ff] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2f2ebe]">
                      {book.genre}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={book.status as "available" | "borrowed"} />
                  </td>

                  <td className="px-6 py-4">
                    <button className="rounded-lg p-2 transition-colors hover:bg-[#eceef0]">
                      <span className="material-symbols-outlined text-[#454654]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-[#f2f4f6] px-6 py-4">
          <span className="text-sm font-medium text-[#454654]">
            Showing 1 to 5 of 24,502 results
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
    </section>
  );
}