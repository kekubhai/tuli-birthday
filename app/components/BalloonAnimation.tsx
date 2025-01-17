'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#FF69B4']

export default function BalloonAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const createBalloon = () => {
      const balloon = document.createElement('div')
      balloon.className = 'absolute w-16 h-20 rounded-full'
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      balloon.style.bottom = '-80px'
      balloon.style.left = `${Math.random() * 100}%`
      containerRef.current?.appendChild(balloon)

      gsap.to(balloon, {
        y: -window.innerHeight - 100,
        duration: 10 + Math.random() * 5,
        ease: 'power1.inOut',
        onComplete: () => {
          if (containerRef.current?.contains(balloon)) {
            containerRef.current.removeChild(balloon)
          }
        }
      })
    }

    const interval = setInterval(createBalloon, 2000)

    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />
}

