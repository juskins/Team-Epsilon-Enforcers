"use client"

import { useTheme } from "next-themes"
import Link from "next/link"

interface DashboardHeaderProps {
  onToggleSidebar?: () => void
}

export function DashboardHeader({ onToggleSidebar }: DashboardHeaderProps) {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <header className="min-h-20 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 flex items-center justify-between bg-white/50 dark:bg-background-dark backdrop-blur-md sticky top-0 z-10 w-full relative">
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex-shrink-0"
            aria-label="Toggle Sidebar"
          >
            <span className="material-icons-round">menu</span>
          </button>
        )}
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold truncate">Welcome back, Tunde!</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 truncate hidden md:block">Keep Lagos clean, one report at a time.</p>
        </div>
        {/* Mobile Title View */}
        <div className="sm:hidden flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-icons-round text-white text-lg">recycling</span>
          </div>
          <span className="font-extrabold text-primary dark:text-primary-alt">WasteWatch</span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <Link
          href="/report-waste"
          className="bg-primary hover:bg-primary/90 text-background-light px-4 sm:px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
        >
          <span className="material-icons-round text-lg">add_a_photo</span>
          <span className="hidden sm:inline">Report Waste</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative hidden sm:block">
            <span className="material-icons-round">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <div className="h-8 w-px bg-slate-200 dark:border-slate-800 hidden sm:block mx-2"></div>
          <button
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle Theme"
          >
            {resolvedTheme === "dark" ? (
              <span className="material-icons-round">light_mode</span>
            ) : (
              <span className="material-icons-round">dark_mode</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
