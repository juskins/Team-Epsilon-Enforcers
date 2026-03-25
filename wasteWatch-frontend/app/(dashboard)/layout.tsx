"use client"

import { DashboardHeader } from "@/components/DashboardHeader"
import { Sidebar } from "@/components/Sidebar"
import { useEffect, useState } from "react"

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode
}) {
   const [mounted, setMounted] = useState(false)
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   return (
      <div className="bg-background-light-alt dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex">
         <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
         <main className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar relative">
            <DashboardHeader onToggleSidebar={() => setIsSidebarOpen(true)} />
            {children}
         </main>
      </div>
   )
}
