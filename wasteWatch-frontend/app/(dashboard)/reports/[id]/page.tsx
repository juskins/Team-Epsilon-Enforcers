"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ReportDetailsPage() {
   const params = useParams()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   // Mock data for the specific report
   const report = {
      id: params.id || "WW-7829",
      title: "Illegal Medical Waste Disposal",
      reportedAt: "14:23, Oct 24, 2023",
      location: "Lagos Mainland, Yaba",
      status: "High Risk",
      riskLevel: "CRITICAL",
      overdue: "14 hrs",
      description: "Biohazard alert: Automated analysis detected discarded syringes and medical vials. Immediate containment required.",
      images: [
         "https://lh3.googleusercontent.com/aida-public/AB6AXuC8BWUQUz3j78HqjyGVlAE026rjcnrA4MjiYK22Yg71uKMqeoHrpxdNF_g4M3_PWIahN_S6HVc3AK4SCR061B4ifUsmsF4BzTCmr54G1PXLs3UzP2DoGoAwlW98wwAsWr_ZcLs2RMmV2t-4t_qSb_ldLsv4YkEjVszOKDIhdmkj4ag6G9x8UfaR84ciDtirTu7JAQ1PNPm136G2f1-PqKoJIoXNPBhFYMNg6FCr6NTtDVebfRBQpNkIXPX5zdO7z62TdHJDnWAs-5E",
         "https://lh3.googleusercontent.com/aida-public/AB6AXuCDJPMvKatAOXePzaExeIqs7XF_59Qt37gpep46tLKMWmFB68rlbPsEnA6KE55hBJDfAZ3dcqZpYNUnbRbpLcYjT3cBMpQxPIIJn0E5qsmGkScs5OxxuN3SgTMwWgLDeUzibyb1T7jKkL1zD3qnGMrIZYcyaMlH9CK1c8cWN3EAk3b3hg8qslO-YddiDGFNaDgjoTyI18tKBEJ7RmX51_lpRSNSPftmCj-MdcS7rpCPGzgbaWaIEFDquUbNOiE3cCOd-oxR-1w6P1c"
      ],
      timeline: [
         { event: "Report Submitted", time: "Oct 24, 2023 • 14:23", note: "Medical waste dumped behind the primary health center.", current: false, completed: true },
         { event: "Risk Auto-Assessed", time: "Oct 24, 2023 • 14:25", note: "System flagged report as CRITICAL based on visual analysis.", current: false, completed: true },
         { event: "Team Dispatch", time: "Pending - Team A-12 assigned", note: "Environmental Unit A-12", current: true, completed: false },
         { event: "Resolved & Sanitized", time: "Pending Site Inspection", note: null, current: false, completed: false }
      ],
      metadata: {
         reporter: "Chinedu O.",
         category: "Hazardous Medical",
         impactScore: "42 pts Impact",
         responseId: "#WW-TRK-990"
      },
      coords: "6.5244° N, 3.3792° E"
   }

   return (
      <div className="p-8 max-w-[1200px] w-full mx-auto space-y-8 pb-16">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest text-[10px]">
               <Link href="/reports" className="hover:text-primary transition-colors">Reports</Link>
               <span className="material-icons-round text-xs">chevron_right</span>
               <span className="text-slate-900 dark:text-white">{report.id}</span>
            </nav>
            <div className="flex items-center gap-3">
               <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 font-black text-xs uppercase tracking-widest transition-all">
                  <span className="material-icons-round text-sm">print</span>
                  Export PDF
               </button>
               <button className="bg-primary hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
                  Update Status
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
               {/* Main Info Card */}
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <div className="p-8">
                     <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                        <div className="space-y-2">
                           <h1 className="text-3xl font-black tracking-tight">{report.title}</h1>
                           <p className="text-slate-500 dark:text-slate-400 font-medium">Reported at {report.reportedAt} • {report.location}</p>
                        </div>
                        <div className="flex flex-col items-end gap-3 text-right">
                           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800">
                              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                              {report.status}
                           </span>
                           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                              <span className="material-icons-round text-xs">schedule</span>
                              Overdue: {report.overdue}
                           </span>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 p-6 rounded-2xl relative overflow-hidden group">
                           <h3 className="text-red-800 dark:text-red-400 font-black text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                              <span className="material-icons-round text-base">emergency</span>
                              Biohazard Alert
                           </h3>
                           <p className="text-red-600 dark:text-red-500/80 text-sm font-medium leading-relaxed">
                              Automated analysis detected discarded syringes and medical vials. Immediate containment required.
                           </p>
                           <span className="material-icons-round absolute -bottom-4 -right-4 text-7xl text-red-600/5 group-hover:scale-110 transition-transform">biotech</span>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 p-6 rounded-2xl relative overflow-hidden group">
                           <h3 className="text-blue-800 dark:text-blue-400 font-black text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                              <span className="material-icons-round text-base">monitoring</span>
                              SLA Status
                           </h3>
                           <p className="text-blue-600 dark:text-blue-500/80 text-sm font-medium leading-relaxed">
                              Response target: 4 hours. Current delay is impacting local health compliance scores.
                           </p>
                           <span className="material-icons-round absolute -bottom-4 -right-4 text-7xl text-blue-600/5 group-hover:scale-110 transition-transform">timer</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Evidence Section */}
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                     <h2 className="font-black uppercase tracking-widest text-[10px] text-slate-400 flex items-center gap-2">
                        <span className="material-icons-round text-slate-400 text-lg">photo_library</span>
                        Submitted Evidence
                     </h2>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{report.images.length} Images</span>
                  </div>
                  <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {report.images.map((img, idx) => (
                        <div key={idx} className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden group relative cursor-zoom-in border border-slate-200 dark:border-slate-800">
                           <img alt={`Evidence ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img} />
                           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="material-icons-round text-white text-3xl">zoom_in</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Timeline Section */}
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800">
                     <h2 className="font-black uppercase tracking-widest text-[10px] text-slate-400 flex items-center gap-2">
                        <span className="material-icons-round text-slate-400 text-lg">reorder</span>
                        Resolution Timeline
                     </h2>
                  </div>
                  <div className="p-10">
                     <div className="relative flex flex-col gap-10">
                        <div className="absolute left-[11px] top-1 bottom-1 w-[2px] bg-slate-100 dark:bg-slate-800"></div>
                        {report.timeline.map((step, idx) => (
                           <div key={idx} className={`relative pl-12 ${!step.completed && !step.current ? "opacity-30" : ""}`}>
                              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900 shadow-md ${step.completed ? "bg-primary text-white" : step.current ? "bg-orange-500 text-white" : "bg-slate-300 dark:bg-slate-700"
                                 }`}>
                                 <span className={`material-icons-round text-[14px] ${step.current ? "animate-spin" : ""}`}>
                                    {step.completed ? "check" : step.current ? "refresh" : "circle"}
                                 </span>
                              </div>
                              <div>
                                 <p className="font-black text-sm text-slate-900 dark:text-white leading-none mb-2">{step.event}</p>
                                 <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">{step.time}</p>
                                 {step.note && (
                                    <div className={`p-4 rounded-2xl border text-sm font-medium ${step.current ? "bg-orange-50 border-orange-100 text-orange-900/70" : "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                                       }`}>
                                       {step.note}
                                    </div>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
               {/* Map Card */}
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm group">
                  <div className="h-56 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                     <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyUpRjoQ3tR7B3N3oYYEIGnDBKbQXSG68iUCJLZf-8493vdj5CoY0HSr7ArJHDQu0zB0IqCrohsxJBh8T_rocygsDgSepyJUnrFQ1lVzxcsBhgCpQc5FnQRjeRPIrAXVBCpdGrzg71DZ6Lls7W1-WEjvGZonuA0CNTRSgTecFPCWBAdLnLLYPsp8mJUdf98vlFrTYdIEIsZPMggF3twp0QNvjsI0p4FSOkpzzzLCmXqwy-pt32UVnDU7NYoXH27s3mk3ko5Aqkeuw')" }}></div>
                     <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-40 group-hover:opacity-20 transition-opacity"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                           <span className="material-icons-round text-red-600 text-6xl drop-shadow-2xl">location_on</span>
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600/20 rounded-full animate-ping"></div>
                        </div>
                     </div>
                     <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-white/90 dark:bg-slate-900/90 p-3 rounded-2xl backdrop-blur shadow-xl border border-white/20">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">{report.coords}</span>
                        <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Open Maps</button>
                     </div>
                  </div>
                  <div className="p-8">
                     <h3 className="font-black text-sm uppercase tracking-widest mb-3">Location Details</h3>
                     <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        Behind Sabo Health Center, Commercial Avenue, Yaba. Near the drainage exit point. Accurate mapping helps dispatch teams reach the site faster.
                     </p>
                  </div>
               </div>

               {/* Metadata Card */}
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <div className="p-8">
                     <h3 className="font-black text-sm uppercase tracking-widest mb-6">Case Metadata</h3>
                     <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Reporter</span>
                           <div className="flex items-center gap-2">
                              <span className="text-sm font-bold">{report.metadata.reporter}</span>
                              <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] rounded-lg font-black uppercase tracking-widest border border-blue-100 dark:border-blue-800">Verified</span>
                           </div>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category</span>
                           <span className="text-sm font-black text-red-500 italic">{report.metadata.category}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Community Score</span>
                           <span className="text-sm font-black flex items-center gap-1 text-primary">
                              <span className="material-icons-round text-primary text-sm">stars</span>
                              {report.metadata.impactScore}
                           </span>
                        </div>
                        <div className="flex items-center justify-between py-3">
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response ID</span>
                           <span className="text-xs font-black font-mono text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">{report.metadata.responseId}</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Warning Banner */}
               <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-8 text-white shadow-2xl shadow-red-500/20 relative overflow-hidden group">
                  <div className="relative z-10 space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                           <span className="material-icons-round text-3xl">warning_amber</span>
                        </div>
                        <div>
                           <h4 className="text-xl font-black tracking-tight leading-none mb-2">Public Health Warning</h4>
                           <p className="text-sm text-white/80 font-medium leading-relaxed">Hazardous waste detected within 50m of a residential water source.</p>
                        </div>
                     </div>
                     <button className="w-full bg-white text-red-700 font-black py-4 rounded-2xl text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                        Notify Nearby Residents
                     </button>
                  </div>
                  <span className="material-icons-round absolute -bottom-6 -right-6 text-9xl text-white/5 opacity-40 group-hover:scale-125 transition-transform duration-700">security_update_warning</span>
               </div>
            </div>
         </div>
      </div>
   )
}
