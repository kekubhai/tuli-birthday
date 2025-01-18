'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cake3D from './Cake3D'
import ConfettiButton from './ConfettiButton'
import { MagicCard } from '@/components/ui/magic-card'

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
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 text-white">
   
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
        </section>

        <MagicCard  className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
       >
          <h2 className="text-4xl font-bold mb-8 text-center">Birthday Wishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">May your day be filled with happiness</h3>
              <p className="text-lg">Wishing you a day as special as you are. May all your dreams and wishes come true!</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">A year older, a year wiser</h3>
              <p className="text-lg">Cheers to another year of amazing experiences and beautiful memories. Happy Birthday!</p>
            </div>
          </div>
        </MagicCard>

        <section className="text-center animate-on-scroll">
          <h2 className="text-4xl font-bold mb-8">Celebrate in Style</h2>
          <p className="text-xl mb-8">Join us for an unforgettable birthday bash!</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
            RSVP Now
          </button>
        </section>
      </main>

      <footer className="py-6 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} | Birthday Celebration Extraordinaire</p>
      </footer>
    </div>
  )
}

