'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cake3D from './Cake3D'
import ConfettiButton from './ConfettiButton'
import Reactbaloons from './ui/react-balloon'

gsap.registerPlugin(ScrollTrigger)

export default function BirthdayLandingPage() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      })

      ScrollTrigger.batch('.animate-on-scroll', {
        onEnter: (elements) => {
          gsap.from(elements, {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out',
          })
        },
        once: true,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-400 to-yellow-300 text-white">
   
      <header
        ref={headerRef}
        className="py-6 px-4 text-center"
      >
        <h1 className="text-6xl text-black font-bold mb-4">Happy Birthday!</h1>
        <p className="text-2xl">Celebrate this special day with joy and laughter</p>
      </header>

      <main ref={contentRef} className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <Cake3D />
          <ConfettiButton />
          <Reactbaloons/>
        </section>
      </main>
    </div>
  )
}

