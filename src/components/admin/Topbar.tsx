'use client';
import { useAuthStore } from "@/stores/useAuthStore";

export default function Topbar() {
  const {user} = useAuthStore()

  return (
    <header className="fixed right-0 top-0 z-40 ml-65 flex h-16 w-[calc(100%-260px)] items-center justify-end border-b border-[#c5c5d7] bg-white px-16">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 transition-colors hover:bg-[#f2f4f6]">
            <span className="material-symbols-outlined text-[#454654]">
              notifications
            </span>
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button className="rounded-full p-2 transition-colors hover:bg-[#f2f4f6]">
            <span className="material-symbols-outlined text-[#454654]">
              help_outline
            </span>
          </button>
        </div>

        <div className="h-8 w-px bg-[#c5c5d7]" />

        <div className="flex cursor-pointer items-center gap-3">
          <div className="hidden text-right lg:block">
            <p className="text-sm font-bold text-[#191c1e]">{user?.fullName}</p>
            <p className="text-[10px] text-[#454654]">{user?.role}</p>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpfXLfRYEeLn3JbBqwDLGPbrVohnMymIkdUHKQTtcfn381PaJTa8sy2VUC8fdoRstGs_OHR4Q7hzUUWdpLpWlpO_k8L8EH6hTLNELxCC5gJQyH2iDRzoxpN2hQMb4sQmCipqrHhmoi9rRFxD1sY_oVPX5kn_g6IiLoHCfLRjN-J9-Z-wKJyE4I7_J8P3W0q6_q7Wvm6GWRsCJxL26Co75rX06tDjPv5BqLDXoERQQja_qLGEe0Jj129J-Wb2BgCCi8xiZkX_k3L_c"
            alt="Admin profile"
            className="h-10 w-10 rounded-full border-2 border-[#c5c5d7] object-cover"
          />
        </div>
      </div>
    </header>
  );
}