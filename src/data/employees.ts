export type EmployeeRole = "Librarian" | "Admin";
export type EmployeeStatus = "Active" | "On Leave";

export interface Employee {
  id: string;
  name: string;
  employeeId: string;
  initials: string;
  initialsClassName: string;
  role: EmployeeRole;
  shiftLabel: string;
  shiftTime: string;
  email: string;
  phone: string;
  status: EmployeeStatus;
}

export const employees: Employee[] = [
  {
    id: "1",
    name: "Ahmad Ridwan",
    employeeId: "LB-2023-042",
    initials: "AR",
    initialsClassName: "bg-[#bbc3ff] text-[#2036bd]",
    role: "Librarian",
    shiftLabel: "Morning Shift",
    shiftTime: "08:00 - 16:00",
    email: "ahmad.r@libradesk.com",
    phone: "+62 812-3456-7890",
    status: "Active",
  },
  {
    id: "2",
    name: "Dewi Wahyuni",
    employeeId: "LB-2022-015",
    initials: "DW",
    initialsClassName: "bg-[#2036bd] text-white",
    role: "Admin",
    shiftLabel: "Full-time",
    shiftTime: "09:00 - 17:00",
    email: "dewi.w@libradesk.com",
    phone: "+62 813-9876-5432",
    status: "Active",
  },
  {
    id: "3",
    name: "Budi Pratama",
    employeeId: "LB-2023-088",
    initials: "BP",
    initialsClassName: "bg-[#6cf8bb] text-[#005236]",
    role: "Librarian",
    shiftLabel: "Evening Shift",
    shiftTime: "14:00 - 22:00",
    email: "budi.p@libradesk.com",
    phone: "+62 855-2222-1111",
    status: "On Leave",
  },
];