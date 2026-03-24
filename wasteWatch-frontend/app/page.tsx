"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Page() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<"overview" | "roadmap" | "docs">("overview")

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons-round text-white text-xl">recycling</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-primary-alt">WasteWatch</span>
            </div>
            <div className="hidden md:flex items-center space-gap-8 gap-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`text-sm font-medium transition-colors py-5 ${activeTab === "overview" ? "text-primary border-b-2 border-primary" : "text-slate-500 hover:text-primary"}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("roadmap")}
                className={`text-sm font-medium transition-colors py-5 ${activeTab === "roadmap" ? "text-primary border-b-2 border-primary" : "text-slate-500 hover:text-primary"}`}
              >
                Roadmap
              </button>
              <button
                onClick={() => setActiveTab("docs")}
                className={`text-sm font-medium transition-colors py-5 ${activeTab === "docs" ? "text-primary border-b-2 border-primary" : "text-slate-500 hover:text-primary"}`}
              >
                Documentation
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="p-2 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={toggleTheme}
              >
                {resolvedTheme === "dark" ? (
                  <span className="material-icons-round text-yellow-400">light_mode</span>
                ) : (
                  <span className="material-icons-round">dark_mode</span>
                )}
              </button>
              <Link
                href="/dashboard"
                className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-sm flex items-center justify-center"
              >
                App Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Content area based on tab */}
      {activeTab === "overview" && (
        <div className="animate-in slide-in-from-bottom-8 fade-in duration-500 font-display">
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Active in 12 States
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100">
                    Keep Nigeria Clean, <span className="text-primary">One Report</span> at a Time
                  </h1>
                  <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                    Empowering Nigerian communities with smart waste management. Report issues, track resolutions, and earn rewards for a cleaner environment.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/report-waste" className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-primary/30">
                      <span className="material-icons-round">add_a_photo</span>
                      Start Reporting
                    </Link>
                    <Link href="/community" className="flex items-center gap-2 bg-background-light dark:bg-slate-800 border border-primary/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors">
                      View Map
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className=" rounded-3xl overflow-hidden bg-primary/5 border border-primary/10 shadow-2xl relative z-10">
                    <img
                      alt="App interface on mobile phone"
                      className="w-full h-full object-cover"
                      src="/assets/images/waste_herobg.png" />
                  </div>
                  {/* Decorative Blobs */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0"></div>
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works Section */}
          <section className="py-24 bg-primary/5 border-y border-primary/10" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-black mb-4">How it Works</h2>
                <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-icons-round text-primary group-hover:text-background-dark text-3xl">photo_camera</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Report Waste</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Snap a photo and tag the location of waste build-up in your neighborhood using our simple mobile interface.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-icons-round text-primary group-hover:text-background-dark text-3xl">local_shipping</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Authorities Act</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Verified reports are instantly sent to local waste management authorities for immediate clearing and resolution.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <span className="material-icons-round text-primary group-hover:text-background-dark text-3xl">account_balance_wallet</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Earn Rewards</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Get WastePoints for every successful cleanup that you can redeem for local services, data, or electricity units.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Highlight */}
          <section className="py-24" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Advanced Features for a <span className="text-primary">Smarter Community</span></h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">Our platform bridges the gap between citizens and authorities through cutting-edge monitoring technology.</p>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Geo-tagged Reporting</h4>
                        <p className="text-slate-600 dark:text-slate-400">Precise GPS coordinates ensure waste collection teams know exactly where to go, eliminating guesswork.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Real-time Tracking</h4>
                        <p className="text-slate-600 dark:text-slate-400">Get push notifications at every stage—from when your report is assigned to when the site is cleared.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Community Upvoting</h4>
                        <p className="text-slate-600 dark:text-slate-400">Collaborate with neighbors. Reports with more upvotes get prioritized by local authorities.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                    <img
                      alt="Clean street in a modern city"
                      className="w-full h-auto"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXEs_OVibqV3PRwzlR4AVWBew5_wFu-yM1ja4cOLK-4tAWPYwpNo9Ve2672bIhni6Vf2q4jPQNeJHzTQg-sjuYa35a26_Q63S_6Pxnyhiq99I7BuDSapmYa6ekZgYIR2TRR4jgRhfoJSVQ-ZHkBrEMlM9p-TI_zRKyz_KdX8BJEX9p1zz_js4zLUYX1G6lJPkpEzmKmU2ypq28-kS9BGAKSfOiQNBDs1bsKYSNMC72z685KUear4kl6p55YfZR3Ks8dbhCJ6NrmHw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-background-dark text-slate-100 p-6 rounded-xl border border-primary/50 shadow-xl max-w-xs">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <span className="material-icons-round text-lg">trending_up</span>
                      <span className="text-sm font-bold uppercase">Impact Status</span>
                    </div>
                    <p className="text-sm font-medium">94% resolution rate in Lagos Island LGA this month.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WastePoints Rewards */}
          <section className="py-24 bg-[#102216] text-slate-100 overflow-hidden relative" id="rewards">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    WastePoints System
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">Your Environmental Impact, <span className="text-primary-alt">Rewarded</span></h2>
                  <p className="text-xl text-slate-400 mb-8 leading-relaxed">Every report that leads to a cleanup earns you WastePoints. It's our way of saying thank you for keeping Nigeria clean.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-primary/10">
                      <span className="material-icons-round text-primary text-3xl mb-2">bolt</span>
                      <h4 className="font-bold mb-1">Electricity Units</h4>
                      <p className="text-sm text-slate-400">Convert points directly to prepaid tokens.</p>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-primary/10">
                      <span className="material-icons-round text-primary text-3xl mb-2">signal_cellular_alt</span>
                      <h4 className="font-bold mb-1">Mobile Data</h4>
                      <p className="text-sm text-slate-400">Instant top-ups for all major networks.</p>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-primary/10">
                      <span className="material-icons-round text-primary text-3xl mb-2">shopping_bag</span>
                      <h4 className="font-bold mb-1">Grocery Coupons</h4>
                      <p className="text-sm text-slate-400">Discounts at partner supermarkets.</p>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-primary/10">
                      <span className="material-icons-round text-primary text-3xl mb-2">commute</span>
                      <h4 className="font-bold mb-1">Transport Credit</h4>
                      <p className="text-sm text-slate-400">Ride credits for partner mobility apps.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-3xl border border-primary/30 text-center">
                  <div className="mb-8">
                    <div className="inline-block p-4 rounded-full bg-primary mb-4">
                      <span className="material-icons-round text-background-dark text-4xl">savings</span>
                    </div>
                    <h3 className="text-3xl font-black">12.5k WastePoints</h3>
                    <p className="text-slate-400">Total earned by users this week</p>
                  </div>
                  <div className="space-y-4 text-left">
                    <div className="p-4 bg-background-dark/80 rounded-lg flex items-center justify-between border border-primary/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center p-1 border border-slate-600"><img src="https://ui-avatars.com/api/?name=Tunde+Adebayo&background=random" className="rounded-full" /></div>
                        <div>
                          <p className="text-sm font-bold">Tunde Adebayo</p>
                          <p className="text-xs text-slate-500">Ikeja, Lagos</p>
                        </div>
                      </div>
                      <span className="text-primary font-bold">+250 pts</span>
                    </div>
                    <div className="p-4 bg-background-dark/80 rounded-lg flex items-center justify-between border border-primary/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center p-1 border border-slate-600"><img src="https://ui-avatars.com/api/?name=Chiamaka+Obi&background=random" className="rounded-full" /></div>
                        <div>
                          <p className="text-sm font-bold">Chiamaka Obi</p>
                          <p className="text-xs text-slate-500">Wuse II, Abuja</p>
                        </div>
                      </div>
                      <span className="text-primary font-bold">+150 pts</span>
                    </div>
                  </div>
                  <Link href="/dashboard" className="w-full mt-8 block bg-primary-alt text-background-dark py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20">
                    Create Your Rewards Account
                  </Link>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-0"></div>
          </section>

          {/* LGA Transparency Section */}
          <section className="py-24" id="lga">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-background-light dark:bg-slate-900/50 rounded-3xl p-10 lg:p-16 border border-primary/10 shadow-xl overflow-hidden relative">
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">Authority Transparency</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      We hold local authorities accountable through our public LGA Scoring system. Every report processed contributes to the performance metric of the local government.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="material-icons-round text-primary border border-primary/20 rounded-full p-0.5">check</span>
                        <span className="font-medium">Average Response Time Monitoring</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="material-icons-round text-primary border border-primary/20 rounded-full p-0.5">check</span>
                        <span className="font-medium">Public Resolution Dashboards</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="material-icons-round text-primary border border-primary/20 rounded-full p-0.5">check</span>
                        <span className="font-medium">Citizen Satisfaction Ratings</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-inner border border-primary/5">
                    <h4 className="font-black text-xl mb-6 flex justify-between items-center">
                      LGA Leaderboard
                      <span className="text-sm font-normal text-slate-400">Current Month</span>
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-bold">Lagos Island, Lagos</span>
                          <span className="text-primary font-black">9.8/10</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "98%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-bold">AMAC, Abuja</span>
                          <span className="text-primary font-black">8.5/10</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-bold">Port Harcourt City, Rivers</span>
                          <span className="text-primary font-black">7.2/10</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "72%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Ready to make a difference?</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">Join thousands of Nigerians using WasteWatch to transform their communities.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/dashboard" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-primary/30 transition-all text-center">Open Web App</Link>
                <button className="bg-background-dark text-slate-100 dark:bg-slate-800 px-10 py-5 rounded-2xl font-black text-xl border border-primary/20 hover:bg-slate-900 transition-all">Download Play Store</button>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === "roadmap" && (
        <div className="animate-in slide-in-from-bottom-8 fade-in duration-500">
          <header className="relative pt-20 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wide uppercase mb-6">
                The Future of Nigerian Communities
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                Upcoming Features <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Roadmap 2024</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                We're building more than just a reporting tool. Explore the next generation of smart waste management and community health monitoring.
              </p>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 dark:opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="group relative p-8 rounded-3xl border border-slate-200 dark:border-slate-800 glass-card transition-all hover:shadow-2xl hover:-translate-y-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600">
                    <span className="material-icons-round text-3xl">shopping_basket</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">Q3 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">WasteWatch Store</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  A marketplace for recycled products, waste management kits, and eco-friendly home supplies. Redeem your WasteWatch points here for real discounts.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-icons-round text-lg">notifications</span>
                    Notify Me
                  </button>
                  <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-icons-round">share</span>
                  </button>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative p-8 rounded-3xl border border-slate-200 dark:border-slate-800 glass-card transition-all hover:shadow-2xl hover:-translate-y-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600">
                    <span className="material-icons-round text-3xl">psychology</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">Q3 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">AI Waste Classification</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Snap a photo and let our AI identify the waste type (organic, plastic, metal) and provide instant disposal or recycling instructions tailored to your location.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-icons-round text-lg">notifications</span>
                    Notify Me
                  </button>
                  <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-icons-round">share</span>
                  </button>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative p-8 rounded-3xl border border-slate-200 dark:border-slate-800 glass-card transition-all hover:shadow-2xl hover:-translate-y-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600">
                    <span className="material-icons-round text-3xl">emergency</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">Q4 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Disease Outbreak Alerts</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Predictive modeling using historical waste data to alert communities about potential cholera or malaria outbreaks due to improper waste buildup.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-icons-round text-lg">notifications</span>
                    Notify Me
                  </button>
                  <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-icons-round">share</span>
                  </button>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group relative p-8 rounded-3xl border border-slate-200 dark:border-slate-800 glass-card transition-all hover:shadow-2xl hover:-translate-y-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-600">
                    <span className="material-icons-round text-3xl">translate</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">Q4 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Multi-language & USSD Support</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Bridging the digital divide. Report waste via USSD (*999#) and access the platform in Hausa, Igbo, Yoruba, and Pidgin English.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-icons-round text-lg">notifications</span>
                    Notify Me
                  </button>
                  <button className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-icons-round">share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="mt-20 rounded-[2rem] bg-primary p-8 md:p-16 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Don't miss out on updates</h2>
                <p className="text-green-100/80 mb-8 max-w-xl mx-auto">
                  Be the first to know when these features launch. Join 10,000+ community members making Nigeria cleaner.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="flex-1 px-6 py-4 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-secondary/50 border-none"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button className="bg-secondary px-8 py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg">
                    Subscribe Now
                  </button>
                </form>
              </div>
              <div className="absolute inset-0 opacity-10">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                    </pattern>
                  </defs>
                  <rect fill="url(#grid)" height="100%" width="100%"></rect>
                </svg>
              </div>
            </div>
          </main>
        </div>
      )}

      {activeTab === "docs" && (
        <div className="animate-in slide-in-from-bottom-8 fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center min-h-[60vh] flex flex-col justify-center items-center">
          <span className="material-icons-round text-7xl text-slate-300 dark:text-slate-700 mb-6">description</span>
          <h2 className="text-3xl font-bold mb-4">Documentation Coming Soon</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">We are currently compiling comprehensive guides and API references for developers and community leaders.</p>
        </div>
      )}

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-900 transition-colors mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="material-icons-round text-white text-[14px]">recycling</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-primary">WasteWatch</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-primary transition-colors" href="/authority">Authority Portal</Link>
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
            </div>
            <div className="text-sm text-slate-400">
              © 2024 WasteWatch Platform. Every Dump. Reported. Resolved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
