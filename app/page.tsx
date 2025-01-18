/* eslint-disable react/no-children-prop */

// 'use client'

// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Cake3D from './components/Cake3D'
// import ConfettiButton from './components/ConfettiButton'
// import BalloonAnimation from './components/BalloonAnimation'
// import PathAnimation from './components/PathAnmations'

// gsap.registerPlugin(ScrollTrigger)

// export default function BirthdayLandingPage() {
//   const headerRef = useRef(null)
//   const contentRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(headerRef.current, {
//         opacity: 0,
//         y: -50,
//         duration: 1,
//         ease: 'power3.out',
//       })

//       gsap.from(contentRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: 'power3.out',
//         delay: 0.5,
//       })

//       ScrollTrigger.batch('.animate-on-scroll', {
//         onEnter: (elements) => {
//           gsap.from(elements, {
//             opacity: 0,
//             y: 50,
//             stagger: 0.15,
//             duration: 1,
//             ease: 'power3.out',
//           })
//         },
//         once: true,
//       })
//     })

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 text-white">
//       <BalloonAnimation />
//       <header
//         ref={headerRef}
//         className="py-6 px-4 text-center"
//       >
//         <h1 className="text-6xl font-bold mb-4">Happy Birthday!</h1>
//         <p className="text-2xl">Celebrate this special day with joy and laughter</p>
//       </header>

//       <main ref={contentRef} className="container mx-auto px-4 py-8">
//         <section className="mb-16 text-center">
//           <Cake3D />
//           <ConfettiButton />
//         </section>

//         <section className="mb-16 animate-on-scroll">
//           <h2 className="text-4xl font-bold mb-8 text-center">Birthday Wishes</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6">
//               <h3 className="text-2xl font-semibold mb-4">May your day be filled with happiness</h3>
//               <p className="text-lg">Wishing you a day as special as you are. May all your dreams and wishes come true!</p>
//             </div>
//             <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6">
//               <h3 className="text-2xl font-semibold mb-4">A year older, a year wiser</h3>
//               <p className="text-lg">Cheers to another year of amazing experiences and beautiful memories. Happy Birthday!</p>
//             </div>
//           </div>
//         </section>

//         <section className="text-center animate-on-scroll">
//           <h2 className="text-4xl font-bold mb-8">Celebrate in Style</h2>
//           <p className="text-xl mb-8">Join us for an unforgettable birthday bash!</p>
//           <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
//             RSVP Now
//           </button>
//         </section>
//       </main>
// <PathAnimation/>
//       <footer className="py-6 px-4 text-center">
//         <p>&copy; {new Date().getFullYear()} | Birthday Celebration Extraordinaire</p>
//       </footer>
//     </div>
//   )
// }
import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import Image from 'next/image'
import React from 'react'
import Navigation from './components/navigation'
import { TextGenerateEffect } from './components/ui/text-generate-effect'
import { Button } from '@/components/ui/button'
import { SparklesCore } from './components/ui/Sparkles'
import MemoryLane from './components/TimelineofUs'
import SpecialMoments from './components/SpecialEffects'
import { ImagesSlider } from '@/components/ui/images-slider'
import { AppleCardsCarouselDemo } from './components/Applecards'
import FaqPage from './components/faq'
import MemoriesPage from './components/MemoriesPage'
import CelebrationPage from './components/celebrateTogether'
import AboutPage from './components/AboutHer'
import Gift from './components/Gift'
import BirthdayLandingPage from './components/celebration'

const page = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  return (
    <div>
      <Navigation/>
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Left Section */}
        <div className="bg-[#FFD700] p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FF5733"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">A Love Story</h1>
            <TextGenerateEffect
              words="Celebrating our beautiful moments together. Join us in reliving the magic and sharing your wishes for her special day!"
              className="text-xl mb-8 max-w-xl"
            />
            <Button
              className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 text-lg rounded-lg"
            >
              Explore Now
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <Image
            className="object-cover bg-center min-h-[400px] lg:min-h-full"
            src='/part1.png'
            width={1000}
            height={1000}
            alt='hello'
          />
      
          <div className="absolute inset-0 flex items-center justify-center">
            <button  className="text-gray-700 text-4xl lg:text-6xl font-bold bg-yellow-300 rounded-md p-4">
              Our Adventure
            </button>
          </div>
        </div>
      </div>

      <MemoryLane />
      <SpecialMoments />

      <div className="bg-yellow-300">
        <VelocityScroll>Hello</VelocityScroll>
      </div>
      
      {/* Birthday Landing Page */}
      <div>
        <BirthdayLandingPage /> 
      </div>

      <div className="h-full flex flex-col border border-red-500 space-y-6">
        {/* ImagesSlider Component */}
        <div className="h-full border-10">
          <ImagesSlider images={images} children="h-full" />
        </div>

        {/* AppleCardsCarouselDemo Component */}
        <div className="m-6 h-full">
          <AppleCardsCarouselDemo />
        </div>

        {/* FaqPage Component */}
        <div className="h-full">
          <FaqPage />
        </div>
        
        <div className="h-full">
          <MemoriesPage />
        </div>
        
        <div>
          <CelebrationPage />
        </div>
        
        <div>
          <AboutPage />
        </div>
        
        <div>
          <Gift />
        </div>
        
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default page;
