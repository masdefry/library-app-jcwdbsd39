import Link from "next/link";
import { recentBooks } from "@/data/dashboard";

function BookStatusBadge({
  status,
}: {
  status: "Available" | "Borrowed" | "Processing";
}) {
  if (status === "Available") {
    return (
      <span className="rounded-full bg-[#6cf8bb] px-3 py-1 text-xs font-bold text-[#005236]">
        Available
      </span>
    );
  }

  if (status === "Borrowed") {
    return (
      <span className="rounded-full bg-[#dfe0ff] px-3 py-1 text-xs font-bold text-[#2036bd]">
        Borrowed
      </span>
    );
  }

  return (
    <span className="rounded-full bg-[#eceef0] px-3 py-1 text-xs font-bold text-[#454654]">
      Processing
    </span>
  );
}

export default function RecentBooksCard() {
  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#c5c5d7] px-6 py-5">
        <div>
          <h3 className="text-2xl font-semibold text-[#191c1e]">
            Recently Added / Updated Books
          </h3>
          <p className="mt-1 text-sm text-[#454654]">
            Latest updates to the library collection.
          </p>
        </div>

        <Link
          href="/admin/books"
          className="text-sm font-bold text-[#2036bd] hover:underline"
        >
          Go to books
        </Link>
      </div>

      <div className="space-y-4 p-6">
        {recentBooks.map((book) => (
          <div
            key={book.id}
            className="flex items-start justify-between gap-4 rounded-xl border border-[#e0e3e5] bg-[#f7f9fb] p-4"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-[#191c1e]">
                {book.title}
              </p>
              <p className="mt-1 text-sm text-[#454654]">
                ISBN: {book.isbn}
              </p>
              <p className="mt-1 text-sm text-[#454654]">{book.genre}</p>
            </div>

            <BookStatusBadge status={book.status} />
          </div>
        ))}
      </div>
    </div>
  );
}