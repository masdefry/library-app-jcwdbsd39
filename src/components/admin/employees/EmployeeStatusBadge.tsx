import { EmployeeStatus } from "@/data/employees";

interface EmployeeStatusBadgeProps {
  status: EmployeeStatus;
}

export default function EmployeeStatusBadge({
  status,
}: EmployeeStatusBadgeProps) {
  if (status === "On Leave") {
    return (
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-sm font-medium text-[#191c1e]">On Leave</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#006c49]" />
      <span className="text-sm font-medium text-[#191c1e]">Active</span>
    </div>
  );
}