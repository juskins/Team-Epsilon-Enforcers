"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ReportsPage() {
   const reports = [
      {
         id: "WW-7829",
         photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGot0JNCSPbohGlBv5BbE8QYqxF3IHjv_Ui9WAY_AaOyXS4gxD4Tm9QdFbv09USxpNPvVDaHyIYWsC-4g0JJ4gcfgHK0syPet8JOJcbTrDOnti_fcxXOj-dT1_BtfiSEeVcRJxLJdU9pgUUaRJMWzxymGlB76YqPItP4dYBE9ghAY6MOV9BduyDG5_iRWRtxDSwLEUudzuUMjoLAAz8TJNEhNWyiB8rL8gVfaY_nPbPw5qM6ShMaRtu56jYrqXCJ_ZWfzznjqixXE",
         category: "Plastic / PET",
         icon: "recycling",
         iconColor: "text-blue-500",
         location: "Lagos Island, CMS Bus Stop",
         status: "Pending",
         statusClass: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
         date: "Oct 24, 2023"
      },
      {
         id: "WW-2023-982",
         photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOt7k1yWMEsPsDmWqHalU1ft_imZhxE8RBsv_6yKQcIq5RabXB9XuVgzcrfGrr4Vjy4gqB8olRT_BiI5ado3BHEjzVnaOOuokIO9Pg_iqmk2F2Hi-558rOuHuU6OtubO7YO7wMYVg7ZVvHmku3kVBLHJ-JljnzbCUtJzcM2P-fbZLF026gZh4ZxD2rCrh9Gv0iwTIs3oDbKa5vDtcRSgIb06sRA3saChp8QiipSBGrQmGkHNhqjtoivtdgDBJxJ17eqd1MROAmWMU",
         category: "Organic / Food",
         icon: "compost",
         iconColor: "text-green-500",
         location: "Surulere, Ojuelegba Road",
         status: "In Progress",
         statusClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
         date: "Oct 20, 2023"
      },
      {
         id: "WW-2023-854",
         photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAiyLZbqp1aWgTnljw5zGf9zoeaI6fu6A5op4_NdKbNEU-w2QIO0u9logbXeiYhyx5WVTKCtFEg1CC2Oe6atdXax4s5Pw4EMPqqBlgi5QpRkI_k951FHrrBsm7DMSL9FIu925Q1P1Stie7T3lTklRxSH7Cy8c7C0MBtOD9TLgj4vq_eAqDPHXpObtU260s2lzXMGKEv6Q_Gf4SkiilUGRGRaSmrZf_FVF-J3s0TvWnuoOrm3zoo8gory5GE464LImkkBRMpIcDIJs",
         category: "Hazardous / Medical",
         icon: "warning",
         iconColor: "text-red-500",
         location: "Ikeja, Allen Avenue",
         status: "Resolved",
         statusClass: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
         date: "Sep 15, 2023"
      },
      {
         id: "WW-2023-721",
         photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy4oi5j0Rrf_JH0JxJKWzqZi270XHrJsE7IaZJO_vlB37BJbZhHyEWP76JZntI0ajlpkKWr3BHWrgwaMJVItBV2WSZLp6U1qEnF9aQvlMie6DlJAEskwdX0I4PbGJ83Py3YO6m3FXusTnZs_WyvJZXJQIJRMrqOjB1ImE_o9BJijg-6RFw2Y5mAifvVZ0FyLT0QO5eGH-9nXxweUFWP-Fgl1qF5hTyaQU1ZpFav1pO-pxIuGTDW6uaj3Rl_VwO0Sx4p7RE5FvgY_0",
         category: "Electronic / E-Waste",
         icon: "devices_other",
         iconColor: "text-purple-500",
         location: "Yaba, Herbert Macaulay Way",
         status: "Overdue",
         statusClass: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800",
         date: "Aug 30, 2023"
      }
   ]

   const router = useRouter()

   return (
      <div className="p-8 max-w-[1200px] w-full mx-auto space-y-8">
         {/* Page Header */}
         <div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">My Reports</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Track and monitor the status of waste disposal reports you've submitted within your community. Your contributions help keep Nigeria clean.</p>
         </div>

         {/* Filters & Search */}
         <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative group">
               <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
               <input
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm outline-none"
                  placeholder="Search by report ID or location (e.g., Ikeja, Lagos Island)..."
                  type="text"
               />
            </div>
            <div className="flex flex-wrap gap-3">
               <button className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <span className="material-icons-round text-slate-500">filter_list</span>
                  Status: All
                  <span className="material-icons-round text-slate-400">expand_more</span>
               </button>
               <button className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <span className="material-icons-round text-slate-500">calendar_today</span>
                  Date Range
                  <span className="material-icons-round text-slate-400">expand_more</span>
               </button>
            </div>
         </div>

         {/* Tabs */}
         <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-md shadow-primary/20">All Reports</button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">Pending</button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">In Progress</button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">Resolved</button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors">Overdue</button>
         </div>

         {/* Table Container */}
         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
               <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                     <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Report ID</th>
                     <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Photo</th>
                     <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Waste Category</th>
                     <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</th>
                     <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                     <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Date Submitted</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {reports.map((report) => (
                     <tr key={report.id} onClick={() => router.push(`/reports/${report.id}`)} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                        <td className="px-6 py-5">
                           <span className="font-mono text-sm font-semibold text-primary">{report.id}</span>
                        </td>
                        <td className="px-6 py-5">
                           <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                              <img alt="Waste report thumbnail" className="w-full h-full object-cover" src={report.photo} />
                           </div>
                        </td>
                        <td className="px-6 py-5">
                           <div className="flex items-center gap-2">
                              <span className={`material-icons-round ${report.iconColor} text-lg`}>{report.icon}</span>
                              <span className="text-sm font-medium">{report.category}</span>
                           </div>
                        </td>
                        <td className="px-6 py-5">
                           <span className="text-sm text-slate-600 dark:text-slate-400">{report.location}</span>
                        </td>
                        <td className="px-6 py-5">
                           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${report.statusClass}`}>
                              {report.status}
                           </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                           <span className="text-sm text-slate-500">{report.date}</span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {/* Pagination */}
         <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-white">4</span> of <span className="font-bold text-slate-900 dark:text-white">12</span> reports</p>
            <div className="flex items-center gap-2">
               <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-300 cursor-not-allowed">
                  <span className="material-icons-round">chevron_left</span>
               </button>
               <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white font-bold text-sm shadow-sm">1</button>
               <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary transition-colors text-sm font-medium">2</button>
               <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary transition-colors text-sm font-medium">3</button>
               <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary transition-colors">
                  <span className="material-icons-round">chevron_right</span>
               </button>
            </div>
         </div>

         {/* Call to Action Footer */}
         <div className="mt-12 p-8 bg-primary rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-primary/20">
            <div className="text-center md:text-left">
               <h3 className="text-2xl font-black text-white tracking-tight">Spotted a new waste site?</h3>
               <p className="text-white font-medium opacity-90">Help keep your neighborhood clean by reporting it today.</p>
            </div>
            <Link
               href="/report-waste"
               className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center gap-3 shadow-lg"
            >
               <span className="material-icons-round">add_circle</span>
               Submit New Report
            </Link>
         </div>

         {/* Footer Small */}
         <footer className="mt-auto py-10 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 WasteWatch Nigeria. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
               <a className="text-xs text-slate-400 hover:text-primary uppercase tracking-widest font-bold transition-colors" href="#">Privacy Policy</a>
               <a className="text-xs text-slate-400 hover:text-primary uppercase tracking-widest font-bold transition-colors" href="#">Terms of Service</a>
               <a className="text-xs text-slate-400 hover:text-primary uppercase tracking-widest font-bold transition-colors" href="#">Contact Support</a>
            </div>
         </footer>
      </div>
   )
}
