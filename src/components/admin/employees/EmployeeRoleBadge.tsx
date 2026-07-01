import { EmployeeRole } from "@/data/employees";

interface EmployeeRoleBadgeProps {
  role: EmployeeRole;
}

export default function EmployeeRoleBadge({
  role,
}: EmployeeRoleBadgeProps) {
  if (role === "Admin") {
    return (
      <span className="rounded-full bg-[#e1e0ff] px-3 py-1 text-xs font-bold text-[#2f2ebe]">
        Admin
      </span>
    );
  }

  return (
    <span className="rounded-full bg-[#6cf8bb] px-3 py-1 text-xs font-bold text-[#005236]">
      Librarian
    </span>
  );
}