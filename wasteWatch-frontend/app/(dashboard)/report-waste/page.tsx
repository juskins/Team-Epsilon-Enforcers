"use client"

import { useEffect, useState } from "react"

export default function ReportWastePage() {
  const [mounted, setMounted] = useState(false)
  const [anonymous, setAnonymous] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Organic")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const categories = [
    { name: "Organic", icon: "eco" },
    { name: "Plastic", icon: "local_drink" },
    { name: "Medical", icon: "medication" },
    { name: "E-Waste", icon: "inventory_2" },
  ]

  return (
    <div className="flex-1 overflow-y-auto">
      <main className="max-w-5xl mx-auto px-4 py-8 pb-20">
        <header className="mb-8">
          <h1 className="font-outfit text-3xl font-bold mb-2">Report a Waste Issue</h1>
          <p className="text-slate-600 dark:text-slate-400">Help clean up your community. Reports are directed to local sanitation units.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Visual Evidence */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
              <label className="block text-sm font-semibold mb-4 flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="material-icons-round text-primary text-sm">photo_camera</span>
                Visual Evidence
              </label>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 transition-colors hover:border-primary/50 group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-icons-round text-4xl text-slate-400 dark:text-slate-500">cloud_upload</span>
                  </div>
                  <p className="font-medium">Upload Photos or Videos</p>
                  <p className="text-xs text-slate-500 mt-1">Drag and drop or click to browse (Max 10MB)</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="relative group aspect-square rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                  <img
                    alt="Waste photo 1"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8waCLey2rkTtQsOii73eGWQIVg_21Rc3iVoIFhZiqvayN2-beRcDk7iz9UcYDgpOgU9aM9NlbsPJKBBB6sw-iqJVsyTqOU962CAtD85Yn8KYpcFfQEXn-xuKXC6OXpgmmPqA8R5IdwC4rr2o_HONndggEtXV23ZlrlNOQ4SYsW_jaJE5nYFd8UqF3YbSKQnhgCpm8AkNbwEhJq0TphJ9Yn_UdCdQLtDWQBg1MgiZLxLU9g3I-TBDJmqVa4Il79dt8x6QpuSjLq1M"
                  />
                  <button className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-icons-round text-xs">close</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Waste Category & Description */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Waste Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`flex flex-col items-center gap-2 p-3 border-2 rounded-xl transition-all ${selectedCategory === cat.name
                        ? "border-primary bg-primary/5 dark:bg-primary/10 text-primary font-medium"
                        : "border-slate-100 dark:border-slate-800 hover:border-primary/30 text-slate-600 dark:text-slate-400"
                        }`}
                    >
                      <span className="material-icons-round">{cat.icon}</span>
                      <span className="text-xs">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  className="w-full rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all text-sm outline-none p-4"
                  placeholder="Tell us more about the issue (e.g., blocked drainage, overflowing bin)..."
                  rows={4}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="material-icons-round text-slate-400">person_off</span>
                  <div>
                    <p className="text-sm font-semibold">Report Anonymously</p>
                    <p className="text-xs text-slate-500">Your personal details won't be visible to others.</p>
                  </div>
                </div>
                <button
                  aria-checked={anonymous}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${anonymous ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"}`}
                  onClick={() => setAnonymous(!anonymous)}
                  role="switch"
                  type="button"
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${anonymous ? "translate-x-5" : "translate-x-0"}`}></span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Location Tagging */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-semibold flex items-center gap-2">
                  <span className="material-icons-round text-orange-500 text-sm">location_on</span>
                  Location Tagging
                </label>
                <button className="text-xs font-medium text-primary hover:underline">Edit Manually</button>
              </div>
              <div className="relative w-full aspect-video rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 group map-grid">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="material-icons-round text-primary text-4xl animate-bounce">location_on</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-[2px]"></div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-2 rounded-lg text-[10px] shadow-lg border border-slate-100 dark:border-slate-800">
                  <p className="font-bold truncate">Obafemi Awolowo Way, Ikeja</p>
                  <p className="text-slate-500">Lagos, Nigeria • 6.5982° N, 3.3444° E</p>
                </div>
              </div>
              <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-sm font-semibold transition-colors">
                <span className="material-icons-round text-sm">my_location</span>
                Get Current Location
              </button>
            </div>

            {/* Medical Waste Warning */}
            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/50 p-6 rounded-2xl">
              <div className="flex gap-4">
                <div className="bg-orange-500/10 p-2 h-fit rounded-lg">
                  <span className="material-icons-round text-orange-600">report_problem</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-orange-900 dark:text-orange-400">Urgent Medical Waste?</h4>
                  <p className="text-xs text-orange-800/80 dark:text-orange-500/80 mt-1 leading-relaxed">
                    If this report concerns biohazardous or medical waste, please call our rapid response hotline immediately at <span className="font-bold">0800-WASTE</span>.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full group relative overflow-hidden bg-primary hover:bg-green-700 text-white py-4 px-6 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 outline-none">
              <span className="material-icons-round">send</span>
              Submit Report
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-8 mt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs text-slate-400">© 2024 WasteWatch Nigeria. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
