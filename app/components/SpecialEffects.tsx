import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

export default function SpecialMoments() {
  return (
    <main className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Special Moments
          </h1>
          
          {/* Celebrate Label */}
          <div className="relative w-fit">
            <div className="bg-[#FFD700] px-8 py-4 text-3xl font-semibold rounded-lg transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              Celebrate
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 text-lg rounded-lg"
            >
              Join Us
            </Button>
            <Button 
              variant="outline"
              className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 text-lg rounded-lg"
            >
              View Gallery
            </Button>
          </div>
        </div>

        {/* Laughter Section */}
        <BackgroundGradient className="rounded-[22px] max-w-full overflow-hidden bg-[#FF5733]">
        <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="object-cover relative h-[400px] w-full">
              <Image
                src="/store/lift-e-sathe.jpg"
                alt="Sunset moment"
                fill
                className="object-top rounded-lg transform rotate-2 shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6 text-white">
             
              <h2 className="text-6xl font-bold">Laughter</h2>
              <TextGenerateEffect
                words="From silly jokes to spontaneous dance-offs, our love is filled with laughter that echoes through time."
                className="text-xl"
              />
            </div>
          </div>
</BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-full overflow-hidden bg-blue-400">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="object-cover relative h-[400px] w-full">
              <Image
                src="/store/nauka1.jpg"
                alt="Sunset moment"
                fill
                className="object-cover rounded-lg transform rotate-2 shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6 text-white">
             
              <h2 className="text-6xl font-bold">Laughter</h2>
              <TextGenerateEffect
                words="From silly jokes to spontaneous dance-offs, our love is filled with laughter that echoes through time."
                className="text-xl"
              />
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </main>
  )
}

