import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor, AnimatedBackground } from "@/components/client-components"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nadipalli Jaswanth",
  "url": "https://nadipalli-jaswanth.vercel.app",
  "image": "https://nadipalli-jaswanth.vercel.app/professional-developer-headshot.png",
  "sameAs": [
    "https://github.com/RoronoaZoro-0-7",
    "https://linkedin.com/in/nadipalli-jaswanth",
    "https://leetcode.com/u/Roronoa_Zoro_0703/",
    "https://www.geeksforgeeks.org/profile/user_3xfahfoirv6"
  ],
  "jobTitle": [
    "Full Stack Developer",
    "AI Engineer", 
    "Software Engineer"
  ],
  "description": "Full Stack Developer and AI Engineer specializing in React, Next.js, Python, machine learning, and modern web technologies",
  "knowsAbout": [
    "JavaScript",
    "TypeScript", 
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Full Stack Development",
    "Web Development",
    "Software Engineering",
    "Artificial Intelligence"
  ],
  "alumniOf": "Educational Institution",
  "workLocation": {
    "@type": "Place",
    "name": "Remote/India"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Developer",
    "occupationLocation": {
      "@type": "Country", 
      "name": "India"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nadipalli-jaswanth.vercel.app"
  }
}

export const metadata: Metadata = {
  title: {
    default: "Nadipalli Jaswanth | Full Stack Developer & AI Engineer",
    template: "%s | Nadipalli Jaswanth"
  },
  description: "Nadipalli Jaswanth - Full Stack Developer and AI Engineer specializing in React, Next.js, Python, and machine learning. View my portfolio, projects, and professional experience.",
  keywords: [
    "Nadipalli Jaswanth",
    "Jaswanth Nadipalli",
    "Jaswanth",
    "N Jaswanth",
    "Nadipalli Jaswanth Portfolio",
    "Jaswanth Portfolio", 
    "Jaswanth Developer",
    "NJ",
    "N J",
    "Nadipalli",
    "AI Developer",
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Website",
    "Pepsico Intern",
    "Engineering Intern at Pepsico",
    "Pepsico Internship",
    "Engineering Intern",
    "NIT Andhra Pradesh",
    "NIT AP",
    "NIT Andhra Pradesh Student",
    "NIT AP Student",
    "NIT Andhra Pradesh Jaswanth",
    "NIT AP Jaswanth",
    "NIT Andhra Pradesh Jaswanth Portfolio",
    "NIT AP Jaswanth Portfolio",
    "Horeka Intern",
    "Horeka Internship",
    "Horeka Backend Intern",
    "Horeka Backend Internship",
    "Horeka Backend Developer Intern",
    "Horeka Backend Developer Internship",
    "Horeka Supply India Pvt Ltd",
    "Horeka Supply India Pvt Ltd Intern",
    "Nadipalli Jaswanth LeetCode",
    "LeetCode RoronoaZoro-0-7",
    "Github RoronoaZoro-0-7",
    "Developer Portfolio",
    "Nadipalli Jaswanth GitHub",
    "Nadipalli Jaswanth LinkedIn",
    "Jaswanth N",
    "N. Jaswanth",
    "Jaswanth NIT AP",
    "NIT AP Developer",
    "Indian Developer",
    "India Software Engineer",
    "Spring Boot Developer",
    "NestJS Developer",
    "PyTorch Developer",
    "TensorFlow Developer",
    "Transformer Models",
    "NLP Engineer",
    "RAG Developer",
    "LangChain Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "AWS Developer",
    "Docker Developer",
    "Microservices Developer",
    "REST API Developer",
    "Tailwind CSS Developer",
    "Prisma Developer",
    "Hire Full Stack Developer",
    "Hire AI Engineer",
    "Freelance Developer India"
  ],
  authors: [{ name: "Nadipalli Jaswanth", url: "https://nadipalli-jaswanth.vercel.app" }],
  creator: "Nadipalli Jaswanth",
  publisher: "Nadipalli Jaswanth",
  applicationName: "Nadipalli Jaswanth Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL('https://nadipalli-jaswanth.vercel.app'),
  alternates: {
    canonical: "https://nadipalli-jaswanth.vercel.app",
  },
  openGraph: {
    title: "Nadipalli Jaswanth | Full Stack Developer & AI Engineer",
    description: "Professional portfolio of Nadipalli Jaswanth - Full Stack Developer and AI Engineer. Explore my projects in React, Next.js, Python, and machine learning.",
    url: "https://nadipalli-jaswanth.vercel.app",
    siteName: "Nadipalli Jaswanth Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/professional-developer-headshot.png",
        width: 1200,
        height: 630,
        alt: "Nadipalli Jaswanth - Full Stack Developer & AI Engineer"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadipalli Jaswanth | Full Stack Developer & AI Engineer",
    description: "Professional portfolio of Nadipalli Jaswanth - Full Stack Developer and AI Engineer specializing in React, Next.js, Python, and machine learning.",
    images: ["/professional-developer-headshot.png"],
    creator: "@jaswanth_nadipalli",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "NltQ-h0FprfGK6OkEzR_t5TTQNPrU570hvUNWSIJfBE",
  },
  category: "portfolio",
  classification: "Portfolio Website",
  other: {
    "author": "Nadipalli Jaswanth",
    "owner": "Nadipalli Jaswanth",
    "subject": "Nadipalli Jaswanth - Full Stack Developer & AI Engineer Portfolio",
    "reply-to": "nadipallijaswanth2005@gmail.com",
    "coverage": "Worldwide",
    "distribution": "Global",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://nadipalli-jaswanth.vercel.app" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} dark bg-background text-foreground`} suppressHydrationWarning>
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
