"use client"

import { useState, useEffect } from "react"

export default function RewardsPage() {
  const [mounted, setMounted] = useState(false)
  const [showRankings, setShowRankings] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const activityHistory = [
    {
      action: "Verified Waste Report",
      location: "Lekki Phase 1, Area C",
      status: "Completed",
      date: "Oct 24, 2023",
      points: "+150",
      icon: "report_problem",
      iconBg: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      action: "Community Upvote Received",
      location: "Helpful contribution",
      status: "Completed",
      date: "Oct 23, 2023",
      points: "+10",
      icon: "thumb_up",
      iconBg: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    {
      action: "Grocery Voucher Redemption",
      location: "Shoprite Lagos Mall",
      status: "Redeemed",
      date: "Oct 20, 2023",
      points: "-500",
      icon: "shopping_cart",
      iconBg: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
    }
  ]

  const rewards = [
    {
      name: "SPAR Nigeria",
      reward: "₦2,000 Shopping Voucher",
      cost: "1,000 WP",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD6lhk5rMw3T5Eh415EzEjooyEB-9jlvJV7jZ3nzpmILTC3kIkk4Vmqtak3odbAgwTK_as0B3EqAiKCf6O-HhR1Pyx-uKtNclCzbVK29uKKalZITW9_wTfUjbJX4NBQYqq0Q5APeLXuk6YtVXF9RkfbIivK-GgX-Pnfvl6SIjVHYbHkppvYhNgqsiKpuVITkNWyUiCuwhmxkDoy1qM89LBUMv5_30r8hFyVt2PIR9W5a8xkpTgQ2No_-n9WZdpspVIfJ3_p90xCco"
    },
    {
      name: "Ikeja Electric",
      reward: "₦500 Energy Token",
      cost: "450 WP",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnbJpRVrWP6zgCROt3bthVptV0g9KPGOibtTozWnuic-l6RhGd70joBamP3X7NZ8wW84B1mpSMbNGNjVceaBTlpst35oNUHK0K87oqzgB_w2w3LJuw_tfw_HA9F2cmWDPud6C9A8ficJSzKkJRs_KmM7LKKoneVefQ1AkER-N3jeog4Wx1bp8wJ3K-SNyPbSlGyKONYZjf1uOn1G6zA94W4BkLHe9-3MtuUKPgKg6t28JXsuwNEGiihiBo2xKBSjuhWrG78j-Snj4"
    },
    {
      name: "Shoprite",
      reward: "₦5,000 Shopping Voucher",
      cost: "2,500 WP",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOqX8Kr3gmY5SkW1WZESmyL_Te4BPpvlC4G8deithiMJPRgmeqB2wFF5x_oRP5xbmqLLxZU_AfrH0KBgTK1n16kRgTYK7COTUgwQxDHxvkpXeiLNG4trmgMd_5xofh3xSsnMQ_NhOMeEv5RRwiDp39ZEpzviIFwHA_XjB6aByyo_KVQSM9pgFtduUb0N6kC6u0ra4_rwdLaJxbC-lnNK9KzWO5EVtQ13FhSebGxmb63YRaAmvqxL2vGhOsnH2RTDgMofquli_cK6Y"
    },
    {
      name: "MTN Airtime",
      reward: "1GB Data Plan",
      cost: "300 WP",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEObnN5gWTJ3R3UdsdK5rLGD5xhnqD_TdBg7MXxaS7LD5-UHX2P_-7YtcQxHdoTBQh-HztA3AVqPbqAOG1_zZYmhGC4Yp2xbMJohyZhfXeJTbeBbjzPBEFGylATn5Tt7R-Qq1b00w8eH15itSnTmbkwmHmbubRSsuS-Y8o71KIUP0Sy6_WGmxLrHAVim__W4x61TjItlAz2l5OIRxX0lJk54E3g7yK1CX-yG4aWK1l4YBmPMlP4JNv9vsf_0RozyyXJG3aIAFplCk"
    }
  ]

  const leaderboard = [
    {
      name: "Chidi Okafor",
      location: "Lagos Mainland",
      points: "24,500",
      rank: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN4sIJn4banx_uZi8iU4BMqaS6t7en-P4vQ1rivt8Kqgtk8J17Hwb_LznafWd6aT02yPXE1lsiHjvLfBPXvNQ7BWuaR0hSy60eFo8P4qsLvHeSfo1we6ZYrYNkq5k7lAAG2SZBqqrLDVeG6nOATOFfP5fSE5p904JW9PqDg9bUSL2Xyr-USduEbhpEspyMcsUdm5kMNE6fZ8MByWFVCnxp7lMeyLbNOcZHwDShRf92RRLjtXKhvyqBVqntc4lWGoplj2O6R8eJwI0"
    },
    {
      name: "Amina Bello",
      location: "Abuja Central",
      points: "18,200",
      rank: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlb9EMWncK_dha4yKVWPheOZXaD3ctq4YD4rSdAoTRYg3jbOUdpTAe7exJszRMG71ftiuCXC5aDhp-Z5ZlrdSJppVKymcLe7CWG3POy7WID8HN6f4jjzS_rPhCxRRpu3aTVF4btXEs81JQw7ft3I5gpvMB-p3AA77Re024GhfVSbaeyaq2cTSdiaLZKgG8ZTdBPSes4Vbl6KR2GOxlYkFLifLnTFx3pRj4abx39MsOsaYldRrz8NHNinUwTslyGIto1Yd--3w0nRc"
    },
    {
      name: "Tunde Williams",
      location: "Port Harcourt",
      points: "15,900",
      rank: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy4P9OAX6noL2oJFsnl1c1uJvh1THs6U5n2UULr-scepfR1u1qBSVL0iRkbQVRuE-Q7JMsSFA0AY5dZIbGje9Gp_TURK77p--8Q6HXK7YV9q9OH8V07Q_yusbCh-W1dhEIV94rvHUweVl-tDKtIrXy2j_Y2qQnHE1hpBn2R1VHy3T7HEJD3-IZ3rEIhu-LY96EPdFfmoaUp7RrhQyWvnQa-anMxKatQF2kUJivyPUITya-nVbfO1-uWahoc1yxs8NBevCfIaZmWFg"
    }
  ]

  return (
    <div className="p-8 max-w-[1240px] w-full mx-auto space-y-8 pb-16">
      {/* Hero Section */}
      <header className="mb-10">
        <div className="bg-gradient-to-r from-primary to-emerald-700 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">WastePoints & Rewards Hub</h1>
            <p className="text-emerald-50/90 text-lg font-medium leading-relaxed">
              Every report counts. Turn your environmental impact into real-world rewards for your community and home.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
                <span className="material-icons-round text-secondary text-2xl">database</span>
                <div className="flex flex-col">
                  <span className="text-2xl font-black">2,450</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Available Points</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 opacity-10 rotate-12">
            <span className="material-icons-round !text-[280px]">loyalty</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Total Earned</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black">12,840</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-lg border border-green-100">+15%</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Redeemed</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black">10,390</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pts</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Impact Rank</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black">#42</span>
                <span className="text-sm font-bold text-primary dark:text-primary-alt uppercase tracking-widest">Top 5%</span>
              </div>
            </div>
          </div>

          {/* Activity History */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black tracking-tight">Activity History</h2>
              <button className="text-sm text-primary font-bold hover:underline underline-offset-4">View All History</button>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto overflow-y-hidden custom-scrollbar">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-[10px] uppercase font-black text-slate-500 tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Action</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {activityHistory.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-xl ${item.iconBg}`}>
                              <span className="material-icons-round text-xl">{item.icon}</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold">{item.action}</p>
                              <p className="text-xs text-slate-500 mt-0.5">{item.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${item.status === "Redeemed"
                            ? "bg-slate-100 dark:bg-slate-800 text-slate-600"
                            : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-500">{item.date}</td>
                        <td className={`px-6 py-5 text-right font-black text-base ${item.points.startsWith("+") ? "text-primary" : "text-slate-400"
                          }`}>
                          {item.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Rewards Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tight">Redeem WastePoints</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20">All</button>
                <button className="px-4 py-2 bg-white dark:bg-slate-900 text-xs font-bold border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary transition-all">Groceries</button>
                <button className="px-4 py-2 bg-white dark:bg-slate-900 text-xs font-bold border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary transition-all">Utilities</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rewards.map((reward, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex gap-5 items-start group hover:border-primary transition-all cursor-pointer shadow-sm hover:shadow-lg">
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-700 shadow-inner">
                    <img alt={reward.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500" src={reward.image} />
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="font-black text-xl mb-1 group-hover:text-primary transition-colors">{reward.name}</h3>
                    <p className="text-sm text-slate-500 font-medium mb-4">{reward.reward}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary dark:text-primary-alt font-black text-lg">{reward.cost}</span>
                      <button className="px-5 py-2.5 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-all shadow-md active:scale-95">Redeem</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Leaderboard */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl sticky top-28">
            <div className="p-8 bg-gradient-to-br from-primary to-emerald-900 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-icons-round text-secondary text-2xl">workspace_premium</span>
                <h2 className="text-xl font-black font-outfit uppercase tracking-tight">Global Leaderboard</h2>
              </div>
              <p className="text-emerald-100/70 text-[10px] uppercase font-black tracking-widest leading-none">Top Contributors this month</p>
            </div>

            <div className="p-4 space-y-3">
              {leaderboard.map((user) => (
                <div key={user.rank} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${user.rank === 1
                  ? "bg-primary/5 dark:bg-primary/10 border border-primary/10"
                  : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}>
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 ${user.rank === 1 ? "border-secondary" : "border-slate-100 dark:border-slate-800"
                      }`}>
                      <img alt={user.name} className="w-full h-full object-cover" src={user.image} />
                    </div>
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white dark:border-slate-900 shadow-lg ${user.rank === 1 ? "bg-secondary text-white" :
                      user.rank === 2 ? "bg-slate-300 text-slate-700" : "bg-orange-300 text-orange-900"
                      }`}>
                      {user.rank}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-black text-sm">{user.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-0.5">{user.location}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-black text-sm ${user.rank === 1 ? "text-primary dark:text-primary-alt" : "text-slate-900 dark:text-white"}`}>{user.points}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-black">Points</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-xs text-slate-500 font-medium mb-6 italic">You are currently ranked <span className="font-black text-primary dark:text-primary-alt">#42</span> in Nigeria.</p>
              <button
                onClick={() => setShowRankings(true)}
                className="w-full py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300"
              >
                View All Rankings
              </button>
            </div>
          </section>

          {/* Tips Section */}
          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 p-8 rounded-3xl space-y-6">
            <h3 className="font-black text-primary dark:text-primary-alt text-lg flex items-center gap-3">
              <span className="material-icons-round text-xl">tips_and_updates</span>
              How to earn more
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-[10px] font-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">50</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-0.5">Report a new waste dump in your area. Extra points if you upload clear photos.</p>
              </li>
              <li className="flex gap-4 group">
                <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-[10px] font-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">20</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-0.5">Confirm a report made by another user to help speed up verification.</p>
              </li>
              <li className="flex gap-4 group">
                <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-[10px] font-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">100</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium pt-0.5">Participate in a community cleanup event organized via the platform.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rankings Modal */}
      {showRankings && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
          <div
            className="fixed inset-0"
            onClick={() => setShowRankings(false)}
          />
          <section className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden relative z-10 border border-slate-200 dark:border-slate-800">
            {/* Close Button */}
            <button
              onClick={() => setShowRankings(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20"
            >
              <span className="material-icons-round text-slate-500">close</span>
            </button>

            {/* Header Section */}
            <header className="px-8 pt-10 pb-6 space-y-6 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-primary dark:text-primary-alt">
                  <span className="material-icons-round text-3xl">leaderboard</span>
                </div>
                <h2 className="font-extrabold text-2xl tracking-tighter italic font-display">WasteWatch Global Rankings</h2>
              </div>

              {/* Controls Row */}
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <nav className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-full w-fit">
                  {['National', 'Local (LGA)', 'Friends'].map((tab, idx) => (
                    <button
                      key={tab}
                      className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${idx === 0 ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
                <div className="relative inline-block w-full sm:w-40">
                  <select className="w-full appearance-none bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-4 pr-10 text-xs font-bold focus:ring-2 focus:ring-primary/20">
                    <option>Weekly</option>
                    <option selected>Monthly</option>
                    <option>All-time</option>
                  </select>
                  <span className="material-icons-round absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                </div>
              </div>
            </header>

            {/* Leaderboard Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-8 pb-32 custom-scrollbar">
              <div className="space-y-3">
                {/* Ranking Items */}
                {[
                  { id: 1, name: "Adekunle Gold", loc: "Lagos Island, Nigeria", pts: "12,450", color: "amber", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO9raA2D9cQMP0S23d5thjTqm0IY15kyBCnJ6VhaolH6ENEHHKo3dA2gua6kBST6KKYC4nfbGqISTFtJyE_9JDgzE6drez_UnKrWAKG_yZudAmzBckDwqEDORRFrlh0ur6duzSXWH_5egTrG85FiYprQqKQjiKZ9MUJPwUw50NLQiOlpAI1OqUfJUBnjvlVKbmE7PU-2yiV-dOUl9mDOyWoO34Z-vkDdP3U0MYOQ7C0sNhA5nfQGfpAVnBG0RLnpkvbKhtBE_xyw8" },
                  { id: 2, name: "Chinelo Okereke", loc: "Enugu North, Nigeria", pts: "11,200", color: "slate", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnC8lRgUbm6B_tc20qKYX04b3yU2ZpfhIGkADUa1WJ0AD1t4HT2bbh8FZd1FzoRhNGw-00temYwsj_6w8O_7_4-KRoMXLODSGSq-wwRib-5XKFbUOirEg46yeST4yJVm0oVSv5E-pJjmh90RZ137Bz6SrP0aZb99HdbgVFHo-cX0xeIyFyQw-Maik-cEowiw-GS7ccLKoboEAOiGRVpSurDsWLqPL4hjOUbMej6w6nmXb90-WHJHlsdK9rQWrZrYB_B43dbKEwlNg" },
                  { id: 3, name: "Ibrahim Musa", loc: "Kano Municipal, Nigeria", pts: "10,890", color: "orange", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkGGRkSKTivp1UlYzDAod5M5Mhbx7PxZp_FN0g9LbwhMFTeJMe_WVu5KhCEJfvZyUzeU1OB28pKGQnMQGj808g4RJ_-Q7edMxhOowOJSMbYr3SyZbThFqUR8JbUXuy-2OxftgfpRzA9dD1_-1sNVvOAFh5GRuq3g9agnBkoitOTuD0k_VsDM378ulIA5yq0v0K-ZD0mEqHp10_o7c93dmcCNRQisWd6_ippkZFkG1D8qI2Mngky9RVpeVmM8y7HAnRaNJMwsAhTrY" },
                ].map((item) => (
                  <article key={item.id} className={`flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-${item.color}-50/50 dark:from-${item.color}-900/20 to-transparent border-l-4 border-${item.color}-400`}>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-full border-2 border-${item.color}-400 p-0.5`}>
                          <img alt={item.name} className="w-full h-full rounded-full object-cover" src={item.img} />
                        </div>
                        <div className={`absolute -top-2 -left-2 bg-${item.color}-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-black`}>{item.id}</div>
                      </div>
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">{item.loc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-primary dark:text-primary-alt font-black text-lg">
                        <span>{item.pts}</span>
                        <span className="text-[10px] font-bold text-slate-400">WP</span>
                      </div>
                      <span className={`material-icons-round text-${item.color}-500 text-sm`}>workspace_premium</span>
                    </div>
                  </article>
                ))}

                {/* Regular Rows */}
                <div className="pt-4 space-y-2">
                  {[
                    { rank: 4, name: "Sarah J.", loc: "Ikeja, Lagos", pts: "9,450", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIwtg2p0hNhPNBxQBWqgBrmBjB7IAVVB9qHw0MFES1i490dDEtt5ZYKWw7v7G3_mTHDM8nGVyLCvJvzENnb7i0ZXb4AHcfm8lvQLLhqUgRnaJv0PnDTaxsGm_1oebnvRHp5CCTxVabSIh9pcWblrfv5o0YYuhSGTIfASEFb3RZDVmJ4lyKdqM5G3PDkfJhsi0Yn1YhCDGd-HvF20vjUsKmYoRHGIh0vIzK2h8P3DuKg_jcb8edy5IFxapdm1zfArvIJ71fcbDKOXw" },
                    { rank: 5, name: "David O.", loc: "Lekki, Lagos", pts: "8,900", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFHztkkwH4R9cdzb-UTgyhU8oWZeiyJcNofiM4HnjY1Ju0-nb2fzJtdyTscN-vh8OdkOiH4Xd-iFNawS5BoSmWIqyfCD7FgKJFotCT4QwcvIaGf2lmWmWE4cZiKqmedpWhMZ0gsvrZXsFJNq0ofyKhHbRdJ0vwAMAN3LuKQan03NAPNb5CmO-o0W7YuUVi7pdpZ__qOp9VfesufThnqmvn6DUUlsSh8BNJqNW1jMOwVLbFusMGLR8PYOsUS2c1PC37YqhUnFElFo8" },
                    { rank: 6, name: "Favour T.", loc: "Surulere, Lagos", pts: "8,230", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuBqFL7utQ7PYTYl4h3-Y-ORjIH8cIIw_PH7dU7KzUoeFdqKESRS8kke2OwU8ctzPkTtdYLOcueleAr8-d45w_qbSPiVNMeveIuweHefwbemKqymxIAARs_oJxWoVB5gxa_EsTJk99uDMniQMfzh62f1_vSiWYXLcnkYvj3_GflvbBmdteGu2O2ZJZpPggdU8ZD2eMCcc6ICiXDA71FVF2jhdtDW0iMTHVnNzfpz2Br9KVKtZS6AhhmIiGFXMSsj0iODLpZcp-Fsw" }
                  ].map((row) => (
                    <article key={row.rank} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-8 text-sm font-black text-slate-400 group-hover:text-primary transition-colors text-center">{row.rank}</div>
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                          <img alt={row.name} className="w-full h-full object-cover" src={row.img} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm">{row.name}</h3>
                          <p className="text-[10px] text-slate-500 font-bold uppercase">{row.loc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 font-black text-sm">
                          <span>{row.pts}</span>
                          <span className="text-[8px] font-bold text-slate-400">WP</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky User Footer */}
            <footer className="absolute bottom-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 border-t border-slate-100 dark:border-slate-800 rounded-b-[2rem] z-20">
              <div className="max-w-xl mx-auto flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-2 p-0.5 bg-white dark:bg-slate-900">
                    <img
                      alt="Current User"
                      className="w-full h-full rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd2YU0rYP5SHe3ME617eQFe5t8sQjeRPmIxZgqcw-Dy9QpV9RlyQnr6Ems68uWpTFGv0LjvRd0QkvebJbMPWPH1gbAFsZGMgEaPk8SFqACKzJC9ewYfBg7SXcM2Dnnl4gzm8uSJfGTcQRPGR_lP4qPZfxcEbSXhOyxXvZEbWOi_2Edla0l9Ac1sVo8UqssKB8j0UmKUaURxOol4bA6pYbTV3Th_KC8XmMGzFhXaI9IZtF5y_ITsamknM2AMuq7zureDb74Oo1Ac8"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-lg">Rank #42</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">You</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold">+50 WP to reach rank #41</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block text-right">
                    <div className="text-primary dark:text-primary-alt font-black text-xl">4,200 <span className="text-[10px] text-slate-500">WP</span></div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Your Total</p>
                  </div>
                  <button className="bg-gradient-to-br from-primary to-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                    <span className="material-icons-round text-lg">share</span>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </footer>
          </section>
        </div>
      )}
    </div>
  )
}

