"use client"

import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
              <span className="material-icons-round">payments</span>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">+12%</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">WastePoints</p>
          <p className="text-3xl font-bold mt-1">2,450 <span className="text-sm font-normal text-slate-400">WP</span></p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
              <span className="material-icons-round">assignment_turned_in</span>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Reports</p>
          <p className="text-3xl font-bold mt-1">24</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
              <span className="material-icons-round">pending_actions</span>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Reports</p>
          <p className="text-3xl font-bold mt-1">3</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
              <span className="material-icons-round">emoji_events</span>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Community Rank</p>
          <p className="text-3xl font-bold mt-1">#12 <span className="text-sm font-normal text-slate-400">in Lagos</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
        {/* Recent Reports */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Reports</h2>
            <a className="text-primary-alt text-sm font-semibold hover:underline" href="/reports">View All</a>
          </div>

          {/* Report 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="w-full md:w-32 h-40 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  alt="Waste at Broad Street"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnsmtPokFcy0d-iRYrVin8d_T1czXG98IN0RDB3AbJV2IVKKMhX-cKhXP9pAHPRW-htjKfBWLOGHGgd6fzmrkZ-8xU5sazck8vzpALxOd02JXVAT5UEPvnwLdMZ3sUsXq8ZV_cr9kUECWbGm9Y4o1ypk4d5GpiRw4DZGl7IUEkI-GJ0NCv8jdNVHVd7mNWj37NfGI1fGe-3M9qTP81c_gOiMTbTjCM9P1v97fr64SlxnSOpWPv1ZadWsW6cRhBfpGzF53NMCCunk"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="font-bold text-lg">Illegal Dumping on Broad Street</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <span className="material-icons-round text-sm">location_on</span> Marina, Lagos Island
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider self-start">In Progress</span>
                </div>
                <div className="relative pt-6 pb-2 hidden sm:block">
                  <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800"></div>
                  <div className="absolute top-8 left-0 w-1/2 h-0.5 bg-blue-500"></div>
                  <div className="flex justify-between relative z-10 text-[10px] uppercase font-bold tracking-tighter sm:tracking-normal">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
                      <span className="text-blue-600">Reported</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900"></div>
                      <span className="text-blue-600">Verified</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                      <span className="text-slate-400">Assigned</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                      <span className="text-slate-400">Resolved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Report 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="w-full md:w-32 h-40 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  alt="Clogged Drainage"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw59qnyie_wSPp9N_oUB8giHnXIQH3og220y-XfW-OoFKIEXjlD4I2p4OkuHGFzkW_Z2E_pshS34TCerH0cFhJe3T0nZ-HV89HZ-aMOIFFHfy8TbiXXNH1WqBh5vFlbpYu15r78FHbcPPNn3pSPKIH1NZ9HAfA5GGAFHqiER3daralPqUFbAo1TTfBMh9Iz4-pFmA_0qs1rv9WDzHcU4vVVcm39kJsbvjcT-0wLplzdefaPC7_UJW_VD-Ulok0HuP0mhU4lYSJis8"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="font-bold text-lg">Clogged Drainage System</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <span className="material-icons-round text-sm">location_on</span> Ojuelegba Road, Surulere
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider self-start">Resolved</span>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-3 sm:p-4 rounded-xl flex items-center justify-between border border-emerald-100 dark:border-emerald-900/20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="material-icons-round text-emerald-500">check_circle</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-bold text-emerald-800 dark:text-emerald-400 truncate">Issue Resolved</p>
                      <p className="text-[9px] sm:text-[11px] text-emerald-600 dark:text-emerald-500 truncate">Fixed by LAWMA Team A2 on Oct 12</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400">Reward</p>
                    <p className="text-xs sm:text-sm font-bold text-emerald-600">+150 WP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Stats/Heroes */}
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">Local Heroes</h2>
              <span className="text-xs text-slate-500">Weekly</span>
            </div>
            <div className="space-y-4">
              {[
                { rank: 1, name: "Chidi O.", reports: 42, points: "4,120", color: "yellow-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_byH1NPCkP7eAtcnrttnjL9L2wds7vTNUW3mgxrbXGiFdDx5NI4dFp2L1MAr9rn8YIhtEpZ2HgjHg2LP639tbiws0T84iauuCQBacbPBp7rgmjPI1YOWmpLFpsemB7hF6MTtCbKpcELjCi7td3e_ojsvw9Xr9AmFPS_oD3ZJ-n49GbPK1f9r97FzJnETw7RSAWMuQJo-BOH6bW30TWpun0SrEYAbdqorAWmthrMiED-hLrMhHbehyyvGFbxpGIgkHJ8qQGOw0ALE" },
                { rank: 2, name: "Amina K.", reports: 38, points: "3,890", color: "slate-300", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzXlEnlzYNybrmu0lWIEgh_yrRKdwoUBniSXQvxbDVOuHNDv_ymtPdZjYAGjv2cRITeRG4_9A93NS227kwsVjtbczR8ljKqzVbIeitONvn9kpX7Ar_m6dtpIs1y-S-iVUzrf_YqPwNLQHVz8DjrPNjHPQ-UCWo8DB0ObuAQi4I2bbVLuVs2z6buq7FxUkysGgDfX5hVQ7QTKIBklb7j6aA7OCwjG8I-9zdInpw0H_vqzLktRVNHEoVz12U8MtYS-vS67GhDwq2UTA" },
                { rank: 3, name: "Yusuf M.", reports: 35, points: "3,200", color: "orange-400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaOYNXdn8RDOmI2Wrk7LG63_0akCmlXF-r2U-T7dCVScwRxhx8kYr7_TG6rrkqwpAZ4otzvIhoLFyHk3rusREafC9RpnxnyKn2sEjkV24aJT1EiPE1mIlmaf-p0IKTbekbJD9K53Apr7EgJ5dXHRdRr2CdTOYDRq8Shk6bUPf5ZtucGtnHhazs5fVbQVM_wws6_m0lLxcpc3QFK7K5Drk7h38oXs8D8sit77bT42slr0KsODIs4ZORPb3_XMcpURofEktTXAin4Vk" },
              ].map((hero) => (
                <div key={hero.rank} className="flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-400 w-4">{hero.rank}</span>
                  <img alt={hero.name} className={`w-10 h-10 rounded-full border-2 border-${hero.color}`} src={hero.img} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{hero.name}</p>
                    <p className="text-[10px] text-slate-400">{hero.reports} Reports</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-emerald-500">{hero.points} WP</p>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4 bg-primary-alt/5 p-2 rounded-lg">
                  <span className="text-sm font-bold text-primary-alt w-4">12</span>
                  <img
                    alt="You"
                    className="w-10 h-10 rounded-full border-2 border-primary-alt"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE7ikGd70-gpacEWj0fIWB9rzWQZJSML65tGmwTxgKu2v7vHLW3Z8vdcFFTN0-MWy2-rBG69sy4KgFL9VsIfyngzq-NOMRTVsVw67iH9ekKbrfUWuch4Q8i7AYx2WZUmlCsSGw29Q4OpI4aMfNLoGtI_NS49JrwCuZoolwaKQozI-KP3tXfjBPOKbpfk2tZZHffNqGltXxW1hsGqHhPXHzIw6wm2LXcEkiSD-HKFJf_VdV_XH2EJOK-W_nBK_-u1N9q2q7y2FQpU"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">You (Tunde)</p>
                    <p className="text-[10px] text-primary-alt">24 Reports</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-primary-alt">2,450 WP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 text-white shadow-lg shadow-primary-alt/20">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <span className="material-icons-round">psychology</span>
            </div>
            <h3 className="font-bold text-lg mb-2">How to earn more?</h3>
            <p className="text-emerald-50/80 mb-4 leading-relaxed">Verified reports with clear photos and GPS data earn double WastePoints this weekend!</p>
            <Link href="/guide" className="w-full bg-white text-emerald-500 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center justify-center">
              View Guide
            </Link>
          </div>

          <Link href="/rewards" className="border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 text-center group cursor-pointer hover:border-primary-alt transition-colors block">
            <span className="material-icons-round text-slate-400 group-hover:text-primary-alt mb-2 text-3xl">redeem</span>
            <p className="text-sm font-semibold">Redeem your points</p>
            <p className="text-xs text-slate-500">Swap points for data, electricity tokens, or airtime.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
