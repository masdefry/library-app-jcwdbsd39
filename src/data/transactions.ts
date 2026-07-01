export type TransactionStatus = "overdue" | "ongoing" | "returned";

export interface Transaction {
  id: string;
  memberName: string;
  memberAvatar?: string;
  memberInitials: string;
  memberInitialsClassName?: string;
  bookTitle: string;
  borrowDate: string;
  dueDate: string;
  status: TransactionStatus;
}

export const transactions: Transaction[] = [
  {
    id: "#LD-2024-8842",
    memberName: "Arthur Morgan",
    memberInitials: "AM",
    memberInitialsClassName: "bg-primary/10 text-primary",
    bookTitle: "The Great Gatsby - F. Scott Fitzgerald",
    borrowDate: "Oct 12, 2023",
    dueDate: "Oct 26, 2023",
    status: "overdue",
  },
  {
    id: "#LD-2024-8843",
    memberName: "Sarah Connor",
    memberAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUs9ATVa5Xid9pe8Qbkbo4sF5lS8vriNdqrVOoo1DpmOksC8Os9uoJtz9lG4B5Vr5WkPZRKhkaCwHDf0r8oMbbFkCB2TceEs1pxFoGg6xZDyFvOH93KXZZnylOwzK4Dy82Lsnjm-2611DgL-VTO6pVavtaobStCuyXvbY-YtGVZV7-yytnZ4zWErWQN0tHr_k5T2OV5l1_hLJ1M9w_Afnn9MWzr35CgVxmn0JI_cbPP4x4tC6-_LRF_JLABJasreqg4urEGU7Golg",
    memberInitials: "SC",
    bookTitle: "To Kill a Mockingbird - Harper Lee",
    borrowDate: "Nov 01, 2023",
    dueDate: "Nov 15, 2023",
    status: "ongoing",
  },
  {
    id: "#LD-2024-8844",
    memberName: "John Wick",
    memberInitials: "JW",
    memberInitialsClassName:
      "bg-[#e1e0ff] text-[#2f2ebe]",
    bookTitle: "Meditations - Marcus Aurelius",
    borrowDate: "Nov 03, 2023",
    dueDate: "Nov 17, 2023",
    status: "ongoing",
  },
  {
    id: "#LD-2024-8845",
    memberName: "Ellen Smith",
    memberInitials: "ES",
    memberInitialsClassName:
      "bg-[#e0e3e5] text-[#454654]",
    bookTitle: "Brave New World - Aldous Huxley",
    borrowDate: "Oct 25, 2023",
    dueDate: "Nov 08, 2023",
    status: "returned",
  },
];