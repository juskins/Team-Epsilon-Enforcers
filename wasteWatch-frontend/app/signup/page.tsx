"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SignupPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation */}
          <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                <span className="material-icons-round text-background-light font-bold text-lg">recycling</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">WasteWatch</h2>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary-alt transition-colors" href="/">Home</Link>
                <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary-alt transition-colors" href="#">About</a>
                <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary-alt transition-colors" href="#">Contact</a>
              </nav>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
              <p className="text-sm text-slate-500 hidden sm:block">Already have an account?</p>
              <Link
                href="/login"
                className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-light font-bold transition-transform active:scale-95"
              >
                Login
              </Link>
            </div>
          </header>

          <main className="flex-1 flex flex-col md:flex-row">
            {/* Left Side: Form Section */}
            <div className="w-full md:w-1/2 flex flex-col px-6 py-10 md:px-20 lg:px-32">
              {/* Progress Bar Component */}
              <div className="flex flex-col gap-3 mb-10">
                <div className="flex gap-6 justify-between items-end">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Step 1 of 4</p>
                    <p className="text-primary text-lg font-bold">Personal Details</p>
                  </div>
                  <p className="text-slate-900 dark:text-white text-sm font-bold">25%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div className="mb-8">
                <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight mb-2">Create your account</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base">Join WasteWatch to help build a cleaner community in Nigeria.</p>
              </div>

              {/* Form Fields */}
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Full Name</label>
                  <div className="relative">
                    <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                    <input
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-alt/20 focus:border-primary-alt outline-none transition-all"
                      placeholder="Enter your full name"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Email Address</label>
                  <div className="relative">
                    <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                    <input
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-alt/20 focus:border-primary-alt outline-none transition-all"
                      placeholder="name@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Phone Number</label>
                  <div className="relative flex">
                    <span className="flex items-center px-3 bg-slate-100 dark:bg-slate-800 border border-r-0 border-slate-200 dark:border-slate-800 rounded-l-xl text-slate-500 text-sm font-medium">+234</span>
                    <input
                      className="w-full px-4 py-3.5 rounded-r-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-alt/20 focus:border-primary-alt outline-none transition-all"
                      placeholder="801 234 5678"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">State</label>
                    <Select>
                      <SelectTrigger className="w-full px-4 text-base py-6.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-alt/20 focus:border-primary-alt outline-none transition-all">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl text-base border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <SelectItem className="text-sm" value="lagos">Lagos</SelectItem>
                        <SelectItem className="text-sm" value="abuja">Abuja (FCT)</SelectItem>
                        <SelectItem className="text-sm" value="rivers">Rivers</SelectItem>
                        <SelectItem className="text-sm" value="kano">Kano</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">LGA</label>
                    <Select>
                      <SelectTrigger className="w-full text-base px-4 py-6.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-alt/20 focus:border-primary-alt outline-none transition-all">
                        <SelectValue placeholder="Select LGA" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <SelectItem className="text-sm" value="ikeja">Ikeja</SelectItem>
                        <SelectItem className="text-sm" value="alimosho">Alimosho</SelectItem>
                        <SelectItem className="text-sm" value="lekki">Lekki</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <input className="w-5 h-5 rounded border-slate-300 dark:border-slate-700 text-primary-alt focus:ring-primary-alt bg-white dark:bg-slate-900" id="terms" type="checkbox" />
                  <label className="text-sm text-slate-600 dark:text-slate-400 leading-tight" htmlFor="terms">
                    I agree to the <a className="text-primary-alt font-semibold underline underline-offset-2" href="#">Terms of Service</a> and <a className="text-primary-alt font-semibold underline underline-offset-2" href="#">Privacy Policy</a>.
                  </label>
                </div>

                <button className="mt-4 w-full py-4 bg-primary text-background-light font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary-alt/30 transition-all active:scale-[0.98]" type="submit">
                  Create Account
                </button>
              </form>

              <div className="mt-8 text-center md:hidden">
                <p className="text-slate-500 text-sm">Already have an account? <Link className="text-primary font-bold" href="/login">Log in</Link></p>
              </div>
            </div>

            {/* Right Side: Decorative/Information Section */}
            <div className="hidden md:flex w-1/2 bg-slate-100 dark:bg-slate-950 items-center justify-center p-12">
              <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {/* Abstract Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-alt/40 to-primary-alt/5 dark:from-primary-alt/20 dark:to-transparent z-10"></div>
                <img
                  alt="Environmental protection concept"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyzH-h-oOAv54cl-wgktf-qi9QQH9hS9x59D7tT3d2MfUyoBP5jfdGSh0bvAIW91ItwwjHSSzEm-f2e2Y0Lzq2UJdTkAlS6kZFgWVPZcnE0VW4DUf3W4A8zhTvf55NIsoFBYCqVPGVN3Y5cU0C0HbSjJN3MS-HgR-MGDRGo-SdUsjGZE0A-cJmwS9lGPhZXS0afOWkfjX2q_dGtj6N9AtmhhnuArAAEjBazIuCMeyOAQhtBEOF2enMRB1ehm75tazRK6Zk7gsmJXM"
                />
                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-icons-round text-primary-alt">eco</span>
                    <span className="text-primary-alt font-bold uppercase tracking-widest text-xs">Sustainability First</span>
                  </div>
                  <h3 className="text-white text-3xl font-bold leading-tight mb-4">Empowering Nigerian Communities for a Greener Tomorrow.</h3>
                  <div className="flex -space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-300 overflow-hidden">
                      <img alt="Community member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYnRnPnZYqWxCnj-OgtyhjRPTqXg7LRMH55luHQvXRVMNJ24kOMiLN8DMK9vVbb8oC50cz9y57FYvbBOL5Iv9jRiJxC1IAKkJTvrS_j9RKp8zDuAwnNhu7ZPyaFCHQiZo4zs-4m8Pm01wnkcHCwk6IFXtRa7tVkUfsiv09pFimqUhiEsM8qSxqcjZpxOikTHjlVZHgLvjCdAApl6W11P-W9gG-Xdw8gWk91kBfhFvLhbq1_GnnhOmfKMENDs-RrxcZoDTCVWzkVtk" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-300 overflow-hidden">
                      <img alt="Community member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuqF0xzydNJhzbF-aJrU6GpYVDXWtYMrcogLOOsu79U8vRPjcGbqc0QYGkiNIVeRzSWrwCz5W-_26pkOIvOHg0WVAVWNJdSSrzhs1iaiFt0jroj_jQgtp2cQ5WqrMFlm2K1EBFkBAHPdWM2IJyTt0ljEVUA1TqxyMHV88d4ogmmMVE45LdpHq_DooQajgQGtutWJEqSPf6N0d_jWV3-IC_hjTkoAHWAExZjIW9N0Ik2ScgdSeR5eVIQGbmzyLqn80jfgBypH_fC8E" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-300 overflow-hidden">
                      <img alt="Community member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ9K1q3uIC_Jl_s3aoZDbjrDUjiGyD55tMQdHnqVvuPkeI3LwBLIn_bBtvkUcG9-rKfrQ-AJqlc5LZCIpc0IeTwGMYce_2XFLYr34DN70HdQnNYj7x_lx4ZWAaprnCgD6-a_choNp3zsnoDem7V6Or3kd81bG21LmG8JnVPU2kCF2vadBWN4uz5WF90kyaHd4R9dr9MRJ4OHQVFsXipGy5gUaj_ekuupviVzkmAM4NthpTmBwBoz3Aug7_Lpbxdb7fiiXJ67JmyE8" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-primary-alt flex items-center justify-center text-[10px] font-bold text-background-dark-alt">
                      +2k
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm italic">"WasteWatch changed how my neighborhood handles refuse. Reporting is now instant and effective."</p>
                </div>
              </div>
            </div>
          </main>

          {/* Simple Footer */}
          <footer className="px-6 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 text-xs">© 2024 WasteWatch Platform. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-primary-alt transition-colors" href="#"><span className="material-icons-round text-lg">language</span></a>
              <a className="text-slate-400 hover:text-primary-alt transition-colors" href="#"><span className="material-icons-round text-lg">help</span></a>
              <a className="text-slate-400 hover:text-primary-alt transition-colors" href="#"><span className="material-icons-round text-lg">shield_lock</span></a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
