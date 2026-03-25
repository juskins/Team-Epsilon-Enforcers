"use client"

import { useEffect, useState } from "react"

export default function AlertsPage() {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   const alerts = [
      {
         id: "AL-7829",
         type: "Critical Biohazard",
         title: "Illegal Medical Waste Disposal",
         location: "Herbert Macaulay Way, Yaba",
         time: "42 mins ago",
         status: "High Risk",
         description: "Automated analysis detected discarded syringes and medical vials. Local authorities have been notified.",
         icon: "emergency",
         color: "text-red-600 bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800"
      },
      {
         id: "AL-7825",
         type: "Environmental Warning",
         title: "Drainage Blockage Detected",
         location: "Lekki Phase 1, Area C",
         time: "2 hours ago",
         status: "Active",
         description: "Severe plastic accumulation in primary drainage. High flood risk for upcoming rain cycle.",
         icon: "warning",
         color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800"
      },
      {
         id: "AL-7812",
         type: "Community Update",
         title: "Collection Delay in Ikeja",
         location: "Allen Avenue Junction",
         time: "5 hours ago",
         status: "Notice",
         description: "Waste collection trucks are experiencing delays due to maintenance. Expect pickup within 12 hours.",
         icon: "info",
         color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800"
      }
   ]

   return (
      <div className="p-8 max-w-[1000px] w-full mx-auto space-y-8 pb-16">
         <header className="mb-10">
            <div className="flex items-center justify-between mb-2">
               <h1 className="text-4xl font-black tracking-tight">Community Alerts</h1>
               <span className="px-4 py-1 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse">Live Updates</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
               Stay informed about critical waste issues and environmental hazards in your vicinity.
            </p>
         </header>

         <div className="space-y-6">
            {alerts.map((alert) => (
               <div
                  key={alert.id}
                  className={`p-6 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-slate-900 shadow-sm flex flex-col md:flex-row gap-6 ${alert.status === "High Risk" ? "border-red-200 dark:border-red-800" : "border-slate-200 dark:border-slate-800"}`}
               >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${alert.color.split(' ').slice(0, 2).join(' ')}`}>
                     <span className="material-icons-round text-3xl">{alert.icon}</span>
                  </div>

                  <div className="flex-grow">
                     <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                           <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${alert.color.split(' ').slice(0, 4).join(' ')}`}>
                              {alert.type}
                           </span>
                           <span className="text-xs text-slate-400 font-bold">{alert.id}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                           <span className="material-icons-round text-xs">schedule</span>
                           {alert.time}
                        </span>
                     </div>

                     <h3 className="text-xl font-bold mb-1 tracking-tight">{alert.title}</h3>
                     <p className="text-sm text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1 mb-4">
                        <span className="material-icons-round text-sm">location_on</span>
                        {alert.location}
                     </p>

                     <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
                        {alert.description}
                     </p>

                     <div className="mt-6 flex flex-wrap gap-4">
                        <button className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${alert.status === "High Risk"
                              ? "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/20"
                              : "bg-primary text-white hover:bg-emerald-700 shadow-lg shadow-primary/20"
                           }`}>
                           Take Action
                        </button>
                        <button className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                           Share Alert
                        </button>
                        {alert.status === "High Risk" && (
                           <div className="flex -space-x-2 items-center ml-auto">
                              {[1, 2, 3].map(i => (
                                 <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 shadow-sm" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                              ))}
                              <span className="text-[10px] font-bold text-slate-500 ml-4">+24 neighbors notified</span>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Subscription Card */}
         <div className="bg-gradient-to-br from-primary to-emerald-900 rounded-[2rem] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-xl">
               <h2 className="text-3xl font-black mb-4 tracking-tight">Personalized Alerts</h2>
               <p className="text-emerald-50/80 mb-8 font-medium">
                  Get instant SMS and Push notifications for critical waste issues within 5km of your home or workplace.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <input
                     type="text"
                     placeholder="Enter your location (e.g. Ikeja)"
                     className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-4 focus:ring-white/20 flex-grow"
                  />
                  <button className="px-8 py-4 bg-white text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-slate-100 transition-all shadow-xl active:scale-95">
                     Enable Alerts
                  </button>
               </div>
            </div>
            <div className="absolute top-1/2 -right-10 -translate-y-1/2 opacity-10">
               <span className="material-icons-round !text-[240px]">notifications_active</span>
            </div>
         </div>
      </div>
   )
}
