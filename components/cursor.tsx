"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Disable custom cursor on mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) return

    console.log('Creating working cursor...')

    // Hide default cursor on body and all children
    document.body.classList.add('cursor-hidden')

    // Create cursor elements
    const dot = document.createElement("div")
    const circle = document.createElement("div")
    
    // Style the dot
    Object.assign(dot.style, {
      width: '8px',
      height: '8px',
      background: 'linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)',
      borderRadius: '50%',
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '99999',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
      transform: 'translate(-50%, -50%)'
    })
    
    // Style the circle
    Object.assign(circle.style, {
      width: '40px',
      height: '40px',
      border: '2px solid rgba(59, 130, 246, 0.6)',
      borderRadius: '50%',
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '99998',
      background: 'rgba(59, 130, 246, 0.05)',
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.4s ease-out'
    })
    
    document.body.appendChild(dot)
    document.body.appendChild(circle)
    
    console.log('Cursor elements created and added')

    let mouseX = 0
    let mouseY = 0

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Move dot instantly
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
      
      // Move circle with slight delay
      setTimeout(() => {
        circle.style.left = mouseX + 'px'
        circle.style.top = mouseY + 'px'
      }, 100)
    }

    document.addEventListener('mousemove', updateCursor)
    
    // Set initial position
    dot.style.left = '50px'
    dot.style.top = '50px'
    circle.style.left = '50px'
    circle.style.top = '50px'

    return () => {
      document.body.classList.remove('cursor-hidden')
      document.removeEventListener('mousemove', updateCursor)
      if (dot.parentNode) dot.parentNode.removeChild(dot)
      if (circle.parentNode) circle.parentNode.removeChild(circle)
    }
  }, [isClient])

  return null
}