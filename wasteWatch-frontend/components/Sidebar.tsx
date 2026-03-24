"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { name: "My Reports", href: "/reports", icon: "assignment" },
  { name: "Community", href: "/community", icon: "map" },
  { name: "Alerts", href: "/alerts", icon: "notifications" },
  { name: "Rewards", href: "/rewards", icon: "card_giftcard" },
  { name: "Settings", href: "/settings", icon: "settings" },
]

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col h-screen transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:translate-x-0",
        isOpen ? "translate-x-0 shadow-2xl lg:shadow-none" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary dark:text-primary-alt font-bold text-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons-round text-white text-xl">recycling</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-primary-alt">WasteWatch</span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors lg:hidden"
          >
            <span className="material-icons-round">close</span>
          </button>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                  isActive
                    ? "bg-primary-alt/10 dark:text-primary-alt text-primary"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                )}
              >
                <span className="material-icons-round">{item.icon}</span>
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <img
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-alt"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE7ikGd70-gpacEWj0fIWB9rzWQZJSML65tGmwTxgKu2v7vHLW3Z8vdcFFTN0-MWy2-rBG69sy4KgFL9VsIfyngzq-NOMRTVsVw67iH9ekKbrfUWuch4Q8i7AYx2WZUmlCsSGw29Q4OpI4aMfNLoGtI_NS49JrwCuZoolwaKQozI-KP3tXfjBPOKbpfk2tZZHffNqGltXxW1hsGqHhPXHzIw6wm2LXcEkiSD-HKFJf_VdV_XH2EJOK-W_nBK_-u1N9q2q7y2FQpU"
              />
              <div>
                <p className="text-sm font-semibold">Tunde Bakare</p>
                <p className="text-xs text-slate-500">Lagos Island</p>
              </div>
            </div>
            <button onClick={() => router.push("/login")} className="w-full text-xs font-medium text-slate-500 hover:text-red-500 transition-colors flex items-center justify-center gap-2">
              <span className="material-icons-round text-sm">logout</span> Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
