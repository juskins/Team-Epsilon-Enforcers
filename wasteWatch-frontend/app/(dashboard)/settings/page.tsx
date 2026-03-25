"use client"

import { useEffect, useState } from "react"

export default function SettingsPage() {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   return (
      <div className="p-8 max-w-[900px] w-full mx-auto space-y-10 pb-16">
         <header>
            <h1 className="text-4xl font-black tracking-tight mb-2">Account Settings</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Manage your profile, preferences, and security settings.</p>
         </header>

         <div className="space-y-12">
            {/* Profile Section */}
            <section className="space-y-6">
               <div className="flex items-center gap-4">
                  <span className="material-icons-round text-primary text-2xl">person</span>
                  <h2 className="text-xl font-bold tracking-tight uppercase tracking-widest text-[10px] text-slate-400">Profile Information</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex flex-col items-center gap-4">
                     <div className="relative group cursor-pointer">
                        <img
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiYD2Oxvj9i39f5wry_ATD6UhZQHQp9si1KJaUyx2u6O3ZvGzvp-Sjfz8fJMyQIs--XvbU8oCkeNi0rHibyfGprzYQ39diMPfXM2AmwM-M_SJj2cNFhf8hEx6N0TfIRguUCQWfCchbqeIK23vWlpMtB0OUUpesIfYQvtPlE0GhOymihKPEME2RZAs9MrxjCuUOSsStDypfPjunprndLJsYrEZX0uZK_Ijni7o-EEAJrtt1Zwasv7WgJh7IDYuCjIGG3eBsRVgNvfA"
                           alt="Current Profile"
                           className="w-32 h-32 rounded-3xl object-cover border-4 border-slate-50 dark:border-slate-800 shadow-xl group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <span className="material-icons-round text-white text-3xl">add_a_photo</span>
                        </div>
                     </div>
                     <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Change Profile Picture</button>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                           <input type="text" defaultValue="Tunde Bakare" className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                           <input type="email" defaultValue="tunde.b@example.com" className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                           <input type="tel" defaultValue="+2348021234567" className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</label>
                           <input type="text" defaultValue="Lagos Island, Lagos" className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Bio</label>
                        <textarea rows={3} className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary outline-none resize-none" defaultValue="Environmental enthusiast and community leader in Lagos Island. Committed to a cleaner Nigeria."></textarea>
                     </div>
                     <div className="flex justify-end pt-4">
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:bg-emerald-700 transition-all active:scale-95">Save Profile</button>
                     </div>
                  </div>
               </div>
            </section>

            {/* Preferences Section */}
            <section className="space-y-6">
               <div className="flex items-center gap-4">
                  <span className="material-icons-round text-primary text-2xl">tune</span>
                  <h2 className="text-xl font-bold tracking-tight uppercase tracking-widest text-[10px] text-slate-400">App Preferences</h2>
               </div>
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                     <div>
                        <h3 className="text-sm font-bold">Push Notifications</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Receive real-time alerts about your reports and nearby hazards.</p>
                     </div>
                     <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                     <div>
                        <h3 className="text-sm font-bold">Email Digest</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Weekly summary of community impact and reward points earned.</p>
                     </div>
                     <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative p-1 cursor-pointer">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                     </div>
                  </div>
                  <div className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                     <div>
                        <h3 className="text-sm font-bold">Public Profile</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Show your impact rank and username on the community leaderboard.</p>
                     </div>
                     <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Security Section */}
            <section className="space-y-6">
               <div className="flex items-center gap-4">
                  <span className="material-icons-round text-primary text-2xl">shield</span>
                  <h2 className="text-xl font-bold tracking-tight uppercase tracking-widest text-[10px] text-slate-400">Security & Privacy</h2>
               </div>
               <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
                  <button className="w-full text-left p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between group">
                     <div>
                        <h3 className="text-sm font-bold group-hover:text-primary transition-colors">Change Password</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Last updated 3 months ago</p>
                     </div>
                     <span className="material-icons-round text-slate-400">chevron_right</span>
                  </button>
                  <button className="w-full text-left p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between group">
                     <div>
                        <h3 className="text-sm font-bold group-hover:text-primary transition-colors">Two-Factor Authentication</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Add an extra layer of security to your account.</p>
                     </div>
                     <span className="material-icons-round text-slate-400">chevron_right</span>
                  </button>
                  <button className="w-full text-left p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between group text-red-500">
                     <div>
                        <h3 className="text-sm font-bold">Delete Account</h3>
                        <p className="text-xs text-red-400/70 mt-0.5">Permanently remove all your data and reports.</p>
                     </div>
                     <span className="material-icons-round">delete_forever</span>
                  </button>
               </div>
            </section>
         </div>
      </div>
   )
}
