export interface DashboardKpi {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconWrapperClassName: string;
  valueClassName?: string;
}

export interface DashboardMiniStat {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconWrapperClassName: string;
  valueClassName?: string;
}

export interface AttentionItem {
  id: string;
  title: string;
  description: string;
  level: "critical" | "warning" | "info";
}

export interface RecentBorrowing {
  id: string;
  memberName: string;
  bookTitle: string;
  dueDate: string;
  status: "Overdue" | "Ongoing" | "Returned";
}

export interface OnDutyStaff {
  id: string;
  name: string;
  role: string;
  shift: string;
  status: "Active" | "On Leave";
  initials: string;
  initialsClassName: string;
}

export interface RecentBook {
  id: string;
  title: string;
  isbn: string;
  status: "Available" | "Borrowed" | "Processing";
  genre: string;
}

export const dashboardKpis: DashboardKpi[] = [
  {
    title: "Total Books",
    value: "24,502",
    subtitle: "+120 this month",
    icon: "library_books",
    iconWrapperClassName: "bg-[#dfe0ff] text-[#2036bd]",
    valueClassName: "text-[#2036bd]",
  },
  {
    title: "Available Copies",
    value: "18,944",
    subtitle: "77% of collection available",
    icon: "check_circle",
    iconWrapperClassName: "bg-[#6cf8bb] text-[#005236]",
    valueClassName: "text-[#006c49]",
  },
  {
    title: "Active Borrowings",
    value: "1,284",
    subtitle: "+34 vs yesterday",
    icon: "swap_horiz",
    iconWrapperClassName: "bg-[#e1e0ff] text-[#2f2ebe]",
    valueClassName: "text-[#2f2ebe]",
  },
  {
    title: "Overdue Items",
    value: "42",
    subtitle: "11 critical > 7 days",
    icon: "error",
    iconWrapperClassName: "bg-red-100 text-red-600",
    valueClassName: "text-red-600",
  },
  {
    title: "Staff On Duty",
    value: "08 / 24",
    subtitle: "Morning shift coverage normal",
    icon: "groups",
    iconWrapperClassName: "bg-[#eceef0] text-[#454654]",
    valueClassName: "text-[#191c1e]",
  },
  {
    title: "Lost / Damaged",
    value: "42",
    subtitle: "Needs verification",
    icon: "warning",
    iconWrapperClassName: "bg-amber-100 text-amber-700",
    valueClassName: "text-amber-700",
  },
];

export const dashboardMiniStats: DashboardMiniStat[] = [
  {
    title: "Due Today",
    value: "156",
    subtitle: "37 members have due items today",
    icon: "event",
    iconWrapperClassName: "bg-[#e1e0ff] text-[#2f2ebe]",
    valueClassName: "text-[#191c1e]",
  },
  {
    title: "Pending Returns",
    value: "89",
    subtitle: "Waiting for check-in confirmation",
    icon: "pending_actions",
    iconWrapperClassName: "bg-[#eceef0] text-[#454654]",
    valueClassName: "text-[#191c1e]",
  },
  {
    title: "New Borrowings Today",
    value: "64",
    subtitle: "Peak category: Fiction",
    icon: "add_task",
    iconWrapperClassName: "bg-[#dfe0ff] text-[#2036bd]",
    valueClassName: "text-[#2036bd]",
  },
];

export const attentionItems: AttentionItem[] = [
  {
    id: "1",
    title: "42 overdue items need follow-up",
    description: "11 of them are already overdue by more than 7 days.",
    level: "critical",
  },
  {
    id: "2",
    title: "7 books marked damaged",
    description: "Pending verification from circulation desk.",
    level: "warning",
  },
  {
    id: "3",
    title: "3 staff accounts inactive",
    description: "Scheduled for this week but missing active access.",
    level: "warning",
  },
  {
    id: "4",
    title: "12 due-today items are high demand books",
    description: "Prioritize return reminders for high circulation titles.",
    level: "info",
  },
];

export const recentBorrowings: RecentBorrowing[] = [
  {
    id: "#LD-2024-8842",
    memberName: "Arthur Morgan",
    bookTitle: "The Great Gatsby - F. Scott Fitzgerald",
    dueDate: "Oct 26, 2023",
    status: "Overdue",
  },
  {
    id: "#LD-2024-8843",
    memberName: "Sarah Connor",
    bookTitle: "To Kill a Mockingbird - Harper Lee",
    dueDate: "Nov 15, 2023",
    status: "Ongoing",
  },
  {
    id: "#LD-2024-8844",
    memberName: "John Wick",
    bookTitle: "Meditations - Marcus Aurelius",
    dueDate: "Nov 17, 2023",
    status: "Ongoing",
  },
  {
    id: "#LD-2024-8845",
    memberName: "Ellen Smith",
    bookTitle: "Brave New World - Aldous Huxley",
    dueDate: "Nov 08, 2023",
    status: "Returned",
  },
];

export const onDutyStaff: OnDutyStaff[] = [
  {
    id: "1",
    name: "Ahmad Ridwan",
    role: "Librarian",
    shift: "08:00 - 16:00",
    status: "Active",
    initials: "AR",
    initialsClassName: "bg-[#bbc3ff] text-[#2036bd]",
  },
  {
    id: "2",
    name: "Dewi Wahyuni",
    role: "Admin",
    shift: "09:00 - 17:00",
    status: "Active",
    initials: "DW",
    initialsClassName: "bg-[#2036bd] text-white",
  },
  {
    id: "3",
    name: "Budi Pratama",
    role: "Librarian",
    shift: "14:00 - 22:00",
    status: "On Leave",
    initials: "BP",
    initialsClassName: "bg-[#6cf8bb] text-[#005236]",
  },
];

export const recentBooks: RecentBook[] = [
  {
    id: "1",
    title: "A Gentleman in Moscow",
    isbn: "978-0143134770",
    status: "Available",
    genre: "Fiction",
  },
  {
    id: "2",
    title: "Project Hail Mary",
    isbn: "978-0593135204",
    status: "Borrowed",
    genre: "Sci-Fi",
  },
  {
    id: "3",
    title: "The Lincoln Highway",
    isbn: "978-0385547345",
    status: "Available",
    genre: "Historical",
  },
  {
    id: "4",
    title: "The Midnight Library",
    isbn: "978-0525559474",
    status: "Processing",
    genre: "Contemporary",
  },
];

export const borrowingTrendData = [
  { day: "Mon", borrowings: 42, returns: 35 },
  { day: "Tue", borrowings: 58, returns: 41 },
  { day: "Wed", borrowings: 64, returns: 49 },
  { day: "Thu", borrowings: 51, returns: 46 },
  { day: "Fri", borrowings: 72, returns: 53 },
  { day: "Sat", borrowings: 39, returns: 28 },
  { day: "Sun", borrowings: 26, returns: 21 },
];

export const collectionStatus = [
  { label: "Available", value: 77, colorClassName: "bg-[#006c49]" },
  { label: "Borrowed", value: 17, colorClassName: "bg-[#2036bd]" },
  { label: "Processing", value: 4, colorClassName: "bg-[#2f2ebe]" },
  { label: "Damaged", value: 2, colorClassName: "bg-red-500" },
];