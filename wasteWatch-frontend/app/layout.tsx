import { Geist, Geist_Mono, Inter, Public_Sans, Outfit } from "next/font/google"
import { type Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "WasteWatch",
  description: "WasteWatch Platform - Every Dump. Reported. Resolved.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, publicSans.variable, outfit.variable)}
    >
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
