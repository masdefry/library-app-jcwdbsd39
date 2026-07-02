'use client';
import EmployeeManagementPage from "@/components/admin/employees/EmployeeManagementPage";
import useAuthGuard from "@/hoc/useAuthGuard";
import { Role } from "@/stores/useAuthStore";

function AdminEmployeesPage() {
  return <EmployeeManagementPage />;
};

export default useAuthGuard(AdminEmployeesPage, [Role.ADMIN]);