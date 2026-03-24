"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function LoginPage() {
   const { resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)
   const [showPassword, setShowPassword] = useState(false)

   // Avoid hydration mismatch
   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   return (
      <div className="bg-background-light-alt dark:bg-background-dark-alt font-display text-slate-900 dark:text-slate-100 min-h-screen">
         <div className="flex min-h-screen">
            {/* Left Side: Hero Image & Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center p-12 overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-background-dark-alt/80 z-10"></div>
                  <img
                     alt="Clean Nigerian street with green trees"
                     className="w-full h-full object-cover"
                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn7JPt3ubEnr_guQx4HMEjim8HM_DSAx-hU2neoJRPPycGqZ0nMbZ-nnAwAHu1xi_QM9KB1MaFBwPjeaDvYOSvy-t9OBQ-_yVHkL_tXLSJr6F29EyF9vTHpUyor0lNEDwRWxn3lxRL_BNYWe8RcKnAgaijjR9nvTxDZA5aDu3ILEeawQ76sEML4SMT_i8v3jmC8dUIqceZjloAjbAVEWix_8QDRkRA6ZQAbSGbkXe6T9TAT5ZJxxHDhZOUcsC9LFR1ouyMAGIS8i8"
                  />
               </div>
               <div className="relative z-20 text-white max-w-xl">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="material-icons-round text-white text-xl">recycling</span>
                     </div>
                     <h1 className="text-3xl font-black tracking-tight">WasteWatch</h1>
                  </div>
                  <h2 className="text-5xl font-extrabold leading-tight mb-6">
                     Keep Nigeria Clean, One Report at a Time
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed">
                     The smart waste reporting and monitoring platform designed specifically for Nigerian communities. Join thousands of citizens making a difference today.
                  </p>
                  <div className="mt-12 flex gap-4">
                     <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <span className="material-icons-round text-primary-alt">verified</span>
                        <span className="text-sm font-medium">Government Partnered</span>
                     </div>
                     <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <span className="material-icons-round text-primary-alt">group</span>
                        <span className="text-sm font-medium">50k+ Active Users</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 bg-background-light-alt dark:bg-background-dark">
               <div className="max-w-md w-full mx-auto">
                  <div className="lg:hidden flex items-center gap-3 mb-10">
                     <div className="bg-primary-alt text-background-dark-alt p-1.5 rounded-lg">
                        <span className="material-icons-round text-2xl">recycling</span>
                     </div>
                     <h1 className="text-xl font-black tracking-tight dark:text-white text-background-dark-alt">WasteWatch</h1>
                  </div>

                  <div className="mb-10">
                     <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Welcome Back</h2>
                     <p className="text-slate-600 dark:text-slate-400">Please enter your details to sign in and start reporting.</p>
                  </div>

                  {/* Login Form */}
                  <form action="#" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email or Phone Number</label>
                        <div className="relative">
                           <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                           <input
                              className="w-full pl-12 pr-4 h-14 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-alt focus:border-transparent transition-all outline-none"
                              placeholder="name@example.com or 080..."
                              type="text"
                           />
                        </div>
                     </div>

                     <div className="space-y-0">
                        <div className="flex justify-between items-center ml-1">
                           <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                           <a className="text-sm font-bold text-primary-alt hover:underline" href="#">Forgot password?</a>
                        </div>
                        <div className="relative">
                           <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                           <input
                              className="w-full pl-12 pr-12 h-14 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-alt focus:border-transparent transition-all outline-none"
                              placeholder="••••••••"
                              type={showPassword ? "text" : "password"}
                           />
                           <button
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                           >
                              <span className="material-icons-round">{showPassword ? "visibility_off" : "visibility"}</span>
                           </button>
                        </div>
                     </div>

                     <div className="flex items-center gap-2 ml-1">
                        <input
                           className="w-4 h-4 rounded border-slate-300 text-primary-alt focus:ring-primary-alt"
                           id="remember"
                           type="checkbox"
                        />
                        <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">Remember me for 30 days</label>
                     </div>

                     <button
                        className="w-full h-14 bg-primary text-background-light font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                        type="submit"
                     >
                        <span>Sign In</span>
                        <span className="material-icons-round">arrow_forward</span>
                     </button>
                  </form>

                  {/* Divider */}
                  <div className="relative my-10">
                     <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                     </div>
                     <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-background-light-alt dark:bg-background-dark-alt text-slate-500">Or continue with</span>
                     </div>
                  </div>

                  {/* Social Logins */}
                  <div className="grid grid-cols-2 gap-4">
                     <button className="flex items-center justify-center gap-3 h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                           <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                           <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                           <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                           <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                        </svg>
                        <span className="text-sm font-semibold">Google</span>
                     </button>
                     <button className="flex items-center justify-center gap-3 h-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                        </svg>
                        <span className="text-sm font-semibold">Facebook</span>
                     </button>
                  </div>

                  {/* Footer Sign Up Link */}
                  <p className="mt-12 text-center text-slate-600 dark:text-slate-400">
                     New to WasteWatch?
                     <Link className="text-primary-alt ml-1 font-bold hover:underline" href="/signup">Create an account</Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
