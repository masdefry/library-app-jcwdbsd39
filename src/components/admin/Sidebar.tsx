"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/admin" },
  { label: "Book Management", icon: "menu_book", href: "/admin/books" },
  {
    label: "Borrowing Transactions",
    icon: "swap_horiz",
    href: "/admin/transactions",
  },
  {
    label: "Employee Management",
    icon: "badge",
    href: "/admin/employees",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-full w-65 flex-col bg-[#2036bd] py-6">
      <div className="mb-6 px-6">
        <h1 className="text-2xl font-bold text-white">LibraDesk</h1>
        <p className="text-sm text-white/60">Library Admin</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-6 py-4 transition-colors duration-200 ${
                isActive
                  ? "border-l-4 border-[#6ffbbe] bg-[#3e52d5] font-bold text-white"
                  : "text-white/80 hover:bg-[#3e52d5]/50 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-base">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 pt-3">
        <button className="flex w-full items-center gap-4 px-6 py-4 text-white/80 transition-colors duration-200 hover:bg-[#3e52d5]/50 hover:text-white">
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </button>

        <button className="flex w-full items-center gap-4 px-6 py-4 text-white/80 transition-colors duration-200 hover:bg-[#3e52d5]/50 hover:text-white">
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}