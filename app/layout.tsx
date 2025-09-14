import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import CustomCursor from "@/components/cursor"
import AnimatedBackground from "@/components/animated-background"

export const metadata: Metadata = {
  title: "Portfolio - Developer & Designer",
  description: "Professional portfolio showcasing my skills, experience, and projects",
  generator: "v0.app",
  icons: {
    icon: "/nj-logo.svg",
    shortcut: "/nj-logo.svg",
    apple: "/nj-logo.svg"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} dark bg-background text-foreground`}>
        <CustomCursor />
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
