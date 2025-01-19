/* eslint-disable react/no-children-prop */

import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import Image from 'next/image'
import React from 'react'
import Navigation from './components/navigation'
import { TextGenerateEffect } from './components/ui/text-generate-effect'
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
import MyLetter from './components/myLetter'
import Developer from '@/components/devpage'

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
           
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <Image
            className="object-cover bg-center min-h-[400px] lg:min-h-full"
            src='/store/hero.jpg'
            width={1000}
            height={1000}
            alt='hello'
          />
      
          <div className="absolute inset-0 flex items-center justify-center">
            <button  className="text-gray-700  text-4xl lg:text-6xl font-bold bg-yellow-300 rounded-lg p-4">
              Our Adventures
            </button>
          </div>
        </div>
      </div>

      <MemoryLane />
      <SpecialMoments />

      <div className="bg-yellow-300">
        <VelocityScroll>Subho Jonmodin Sundori</VelocityScroll>
      </div>
      
    
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
          <MyLetter/>
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
        <Developer/>
        </div>
      </div>
    </div>
  );
};

export default page;
