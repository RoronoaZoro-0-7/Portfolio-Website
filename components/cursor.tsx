"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return

    // Disable custom cursor on mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) return

    const cursor = document.createElement("div")
    const cursorOutline = document.createElement("div")

    cursor.className = "cursor-dot"
    cursorOutline.className = "cursor-outline"

    document.body.appendChild(cursor)
    document.body.appendChild(cursorOutline)

    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const moveOutline = () => {
      const distX = mouseX - outlineX
      const distY = mouseY - outlineY

      outlineX += distX * 0.1
      outlineY += distY * 0.1

      cursorOutline.style.transform = `translate(${outlineX - 16}px, ${outlineY - 16}px)`

      requestAnimationFrame(moveOutline)
    }

    document.addEventListener("mousemove", moveCursor)
    moveOutline()

    // Hover effects
    const hoverElements = document.querySelectorAll('button, a, [role="button"]')

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform += " scale(1.5)"
        cursorOutline.style.transform += " scale(1.5)"
      })

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = cursor.style.transform.replace(" scale(1.5)", "")
        cursorOutline.style.transform = cursorOutline.style.transform.replace(" scale(1.5)", "")
      })
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      if (cursor && document.body.contains(cursor)) {
        document.body.removeChild(cursor)
      }
      if (cursorOutline && document.body.contains(cursorOutline)) {
        document.body.removeChild(cursorOutline)
      }
    }
  }, [isClient])

  if (!isClient) {
    return null
  }

  return null
}
