import Link from "next/link";
import { onDutyStaff } from "@/data/dashboard";

export default function StaffOnDutyCard() {
  return (
    <div className="rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#c5c5d7] px-6 py-5">
        <div>
          <h3 className="text-2xl font-semibold text-[#191c1e]">
            Staff On Duty Today
          </h3>
          <p className="mt-1 text-sm text-[#454654]">
            Current staff coverage and shift visibility.
          </p>
        </div>

        <Link
          href="/admin/employees"
          className="text-sm font-bold text-[#2036bd] hover:underline"
        >
          Manage staff
        </Link>
      </div>

      <div className="space-y-4 p-6">
        {onDutyStaff.map((staff) => (
          <div
            key={staff.id}
            className="flex items-center justify-between gap-4 rounded-xl border border-[#e0e3e5] bg-[#f7f9fb] p-4"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg font-bold ${staff.initialsClassName}`}
              >
                {staff.initials}
              </div>

              <div>
                <p className="font-semibold text-[#191c1e]">{staff.name}</p>
                <p className="text-sm text-[#454654]">
                  {staff.role} • {staff.shift}
                </p>
              </div>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                staff.status === "Active"
                  ? "bg-[#6cf8bb] text-[#005236]"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {staff.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}