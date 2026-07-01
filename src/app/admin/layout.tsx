import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e]">
      <Sidebar />
      <Topbar />
      <main className="ml-65 min-h-screen px-16 pb-6 pt-24">
        {children}
      </main>
    </div>
  );
}