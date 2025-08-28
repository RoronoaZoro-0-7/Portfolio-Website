"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Printer as Print, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print"

export default function ResumePage() {
  const resumeRef = useRef(null)
  const handleDownload = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Nadipalli_Jaswanth_Resume",
  })

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Action Buttons - Hidden in print */}
          <div className="flex justify-center gap-4 mb-8 print:hidden">
            <Button asChild size="lg">
              <a href="/resume/Nadipalli_Jaswanth_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button onClick={handleDownload} size="lg">
              <a href="/resume/Nadipalli_Jaswanth_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Print className="mr-2 h-4 w-4" />
                Print Resume
              </a>
            </Button>
          </div>

          {/* Resume Content */}
          <div ref={resumeRef}>
            <Card className="print:shadow-none print:border-none">
              <CardContent className="p-8 print:p-6">
              {/* Header */}
              <header className="text-center mb-8 pb-6 border-b print:border-gray-300">
                <h1 className="text-4xl font-bold mb-2 print:text-3xl">Nadipalli Jaswanth</h1>
                <div className="flex flex-wrap justify-center gap-2 text-sm print:text-xs mt-2">
                  <a href="mailto:nadipallijaswanth2005@gmail.com" className="text-blue-600 hover:underline">nadipallijaswanth2005@gmail.com</a>
                  <span>|</span>
                  <span>+91-9492186976</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 text-sm print:text-xs mt-2">
                  <a href="https://www.linkedin.com/in/jaswanth-nadipalli-0a51982a4/" className="text-blue-600 hover:underline">LinkedIn</a>
                  <span>|</span>
                  <a href="https://github.com/RoronoaZoro-0-7" className="text-blue-600 hover:underline">GitHub</a>
                  <span>|</span>
                  <a href="https://nadipalli-jaswanth-portfolio.vercel.app/" className="text-blue-600 hover:underline">Portfolio</a>
                  <span>|</span>
                  <a href="https://leetcode.com/u/Roronoa_Zoro_0703/" className="text-blue-600 hover:underline">LeetCode</a>
                  <span>|</span>
                  <a href="https://www.geeksforgeeks.org/user/user_3xfahfoirv6/" className="text-blue-600 hover:underline">GeeksforGeeks</a>
                </div>
              </header>

              {/* Education */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-4 print:text-xl border-b-2 border-primary pb-2 print:border-gray-400">Education</h3>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold print:text-base">National Institute of Technology (NIT), Andhra Pradesh</h4>
                      <p className="text-primary font-medium print:text-gray-800">Bachelor of Technology - Computer Science and Engineering</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground print:text-gray-600 print:text-xs">
                      <p>Nov 2022 - June 2026</p>
                      <p>GPA: 8.23</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Professional Experience */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-4 print:text-xl border-b-2 border-primary pb-2 print:border-gray-400">Professional Experience</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold print:text-base">National Institute of Technology, Andhra Pradesh</h4>
                        <p className="text-primary font-medium print:text-gray-800">Full Stack Developer</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground print:text-gray-600 print:text-xs">
                        <p>Remote</p>
                        <p>May 2025 - Sep 2025</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground print:text-gray-700 print:text-xs ml-4">
                      <li>Designed and developed full-stack applications for institutional use, including a centralized Student Portal and a Training & Placement (TNP) Cell platform serving 2,000+ students.</li>
                      <li>Built scalable APIs and microservices architecture with authentication, caching, and query optimization, improving system performance by 20%.</li>
                      <li>Implemented role-based access (Admin/Student) for the TNP Cell, enabling job postings, one-click applications, and resume management.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold print:text-base">Horeka Supply India Private Limited</h4>
                        <p className="text-primary font-medium print:text-gray-800">Backend Developer Intern</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground print:text-gray-600 print:text-xs">
                        <p>Remote</p>
                        <p>Jan 2025 - Mar 2025</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground print:text-gray-700 print:text-xs ml-4">
                      <li>Built enterprise-grade Spring Boot modules, reducing DB latency by 30% through query optimization.</li>
                      <li>Developed scalable API architecture following industry best practices for internal tools.</li>
                      <li>Contributed to debugging, unit testing, documentation, and code reviews for backend services.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-4 print:text-xl border-b-2 border-primary pb-2 print:border-gray-400">Projects</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold print:text-base">Skill Share Micro Economy</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs mb-2">
                      A credit-based learning platform featuring Clerk + JWT authentication, Razorpay payments, and real-time messaging. Credits economy promotes high-quality content: posting costs credits, while upvotes earn rewards and enable media-rich posts/comments.
                    </p>
                    <p className="text-xs text-muted-foreground print:text-gray-600 mb-2">Tech Stack: TypeScript, Node.js, Express, Prisma, Next.js, Razorpay, Clerk</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold print:text-base">Custom GPT Implementation</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs mb-2">
                      Miniature GPT model with custom tokenization, self-attention, and transformer blocks. Designed neural architecture with positional embeddings for coherent autoregressive text generation.
                    </p>
                    <p className="text-xs text-muted-foreground print:text-gray-600 mb-2">Tech Stack: PyTorch, Python, NumPy, Transformers</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold print:text-base">Advanced Sentiment Analysis Tool</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs mb-2">
                      Emotion classifier for 27 emotions using GoEmotions dataset with transformer and LSTM models. Fine-tuned DistilBERT model (88% accuracy) and implemented LSTM baseline for comparative analysis.
                    </p>
                    <p className="text-xs text-muted-foreground print:text-gray-600 mb-2">Tech Stack: DistilBERT, TensorFlow, PyTorch, NLTK, Python</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold print:text-base">Real-Time Social Media App</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs mb-2">
                      Real-time social platform with secure authentication and live messaging using Socket.IO. Responsive frontend, efficient database queries, and modular service design for scalability.
                    </p>
                    <p className="text-xs text-muted-foreground print:text-gray-600 mb-2">Tech Stack: MERN Stack, Socket.IO, JWT, Tailwind CSS</p>
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-4 print:text-xl border-b-2 border-primary pb-2 print:border-gray-400">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-4 print:gap-2">
                  <div>
                    <h4 className="font-semibold mb-2 print:text-sm">Programming Languages</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs">Java, Python, JavaScript, TypeScript, SQL, Prolog</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 print:text-sm">AI/ML Frameworks</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs">PyTorch, TensorFlow, Scikit-learn, Pandas, Numpy, Langchain, NLTK</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 print:text-sm">Deep Learning</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs">Neural Networks, LSTM, Transformers, CNNs, Self-Attention, RAG</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 print:text-sm">Web Technologies</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs">React.js, Next.js, Node.js, Express.js, NestJS, Spring Boot, Tailwind CSS, EJS</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 print:text-sm">Databases</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs">MySQL, PostgreSQL, MongoDB, Redis, Database Schema Design</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 print:text-sm">Cloud & DevOps</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs">AWS, Docker, Git, GitHub, Google Colab</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 print:text-sm">Development Practices</h4>
                    <p className="text-sm text-muted-foreground print:text-gray-700 print:text-xs">System Design, Microservices, Agile, RESTful APIs, JWT Authentication, Vercel</p>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-4 print:text-xl border-b-2 border-primary pb-2 print:border-gray-400">Certifications</h3>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-blue-700">Microsoft Certifications:</span>
                    <a href="https://learn.microsoft.com/en-us/users/nadipallijaswanth-9743/achievements?tab=tab-created" className="text-blue-600 hover:underline ml-2">Introduction to Machine Learning Concepts</a>,
                    <a href="https://drive.google.com/file/d/1wT2ax93pswqa3Xet4xlAU0NOKu_RRmlI/view?usp=sharing" className="text-blue-600 hover:underline ml-2">Azure AI Fundamentals</a>
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">HackerRank Certifications:</span>
                    <a href="https://www.hackerrank.com/profile/h422224" className="text-blue-600 hover:underline ml-2">REST API (Intermediate)</a>,
                    <a href="https://www.hackerrank.com/certificates/iframe/c650912c6b51" className="text-blue-600 hover:underline ml-2">Python (Basic)</a>,
                    <a href="https://www.hackerrank.com/certificates/iframe/233eec90d630" className="text-blue-600 hover:underline ml-2">SQL (Basic)</a>
                  </div>
                  <div>
                    <span className="font-medium text-blue-700">NPTEL:</span>
                    <a href="https://drive.google.com/file/d/11E2NgQVL7P1od5SBfuAG0WmIJvniwUjW/view?usp=drive_link" className="text-blue-600 hover:underline ml-2">Python for Data Science</a>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    {/* Print Styles */}
    <style jsx global>{`
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
        .print\:hidden {
          display: none !important;
        }
        .print\:text-3xl {
          font-size: 1.875rem !important;
        }
        .print\:text-xl {
          font-size: 1.25rem !important;
        }
        .print\:text-base {
          font-size: 1rem !important;
        }
        .print\:text-sm {
          font-size: 0.875rem !important;
        }
        .print\:text-xs {
          font-size: 0.75rem !important;
        }
        .print\:border-gray-300 {
          border-color: #d1d5db !important;
        }
        .print\:border-gray-400 {
          border-color: #9ca3af !important;
        }
        .print\:text-gray-600 {
          color: #4b5563 !important;
        }
        .print\:text-gray-700 {
          color: #374151 !important;
        }
        .print\:text-gray-800 {
          color: #1f2937 !important;
        }
        .print\:shadow-none {
          box-shadow: none !important;
        }
        .print\:border-none {
          border: none !important;
        }
        .print\:p-6 {
          padding: 1.5rem !important;
        }
        .print\:gap-2 {
          gap: 0.5rem !important;
        }
        .print\:gap-1 {
          gap: 0.25rem !important;
        }
        .print\:h-3 {
          height: 0.75rem !important;
        }
        .print\:w-3 {
          width: 0.75rem !important;
        }
      }
    `}</style>
  </div>
  )
}
