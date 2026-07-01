import { employees } from "@/data/employees";
import EmployeeRoleBadge from "./EmployeeRoleBadge";
import EmployeeStatusBadge from "./EmployeeStatusBadge";

export default function EmployeeTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#c5c5d7] bg-white shadow-sm">
      {/* Table header */}
      <div className="flex items-center justify-between border-b border-[#c5c5d7] p-6">
        <h3 className="text-2xl font-semibold text-[#2036bd]">
          Staff Directory
        </h3>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-[#c5c5d7] px-4 py-2 text-sm font-medium text-[#454654] transition-colors hover:bg-[#f2f4f6]">
            <span className="material-symbols-outlined">filter_list</span>
            Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#f2f4f6]">
              <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-wider text-[#454654]">
                Name & ID
              </th>
              <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-wider text-[#454654]">
                Role
              </th>
              <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-wider text-[#454654]">
                Shift
              </th>
              <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-wider text-[#454654]">
                Contact Info
              </th>
              <th className="px-6 py-4 text-[13px] font-semibold uppercase tracking-wider text-[#454654]">
                Status
              </th>
              <th className="px-6 py-4 text-right text-[13px] font-semibold uppercase tracking-wider text-[#454654]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#c5c5d7]">
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="group transition-colors hover:bg-[#f2f4f6]/50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold ${employee.initialsClassName}`}
                    >
                      {employee.initials}
                    </div>

                    <div>
                      <p className="font-bold text-[#191c1e]">{employee.name}</p>
                      <p className="text-sm text-[#454654]">
                        ID: {employee.employeeId}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <EmployeeRoleBadge role={employee.role} />
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-[#191c1e]">
                      {employee.shiftLabel}
                    </span>
                    <span className="text-sm text-[#454654]">
                      {employee.shiftTime}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-base text-[#191c1e]">
                      {employee.email}
                    </span>
                    <span className="text-sm text-[#454654]">
                      {employee.phone}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <EmployeeStatusBadge status={employee.status} />
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-[#454654] opacity-0 transition-opacity hover:text-[#2036bd] group-hover:opacity-100">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-[#c5c5d7] bg-[#f2f4f6] p-6">
        <p className="text-sm text-[#454654]">
          Showing 3 of 24 staff members
        </p>

        <div className="flex gap-2">
          <button
            disabled
            className="rounded-lg border border-[#c5c5d7] p-2 text-[#454654] opacity-50"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <button className="min-w-[40px] rounded-lg border border-[#c5c5d7] bg-[#2036bd] px-4 py-2 font-bold text-white">
            1
          </button>

          <button className="min-w-[40px] rounded-lg border border-[#c5c5d7] px-4 py-2 text-[#191c1e] transition-colors hover:bg-white">
            2
          </button>

          <button className="min-w-[40px] rounded-lg border border-[#c5c5d7] px-4 py-2 text-[#191c1e] transition-colors hover:bg-white">
            3
          </button>

          <button className="rounded-lg border border-[#c5c5d7] p-2 text-[#191c1e] transition-colors hover:bg-white">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}