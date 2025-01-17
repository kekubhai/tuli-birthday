import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { CardHoverEffect } from "./ui/card-hover-effect"
import Image from "next/image"

export default function MemoryLane() {
  return (
    <main className="min-h-screen bg-[#FF5733] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Memory Lane Label */}
        <div className="relative w-fit mb-12">
          <div className="bg-[#FFD700] px-6 py-3 rounded-lg text-xl font-semibold transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
            Memory Lane
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
              Timeline of
              <br />
              Us
            </h1>
            <TextGenerateEffect
              words="Take a stroll down memory lane with us! Each moment captured tells a story of laughter, love, and a few embarrassing selfies. Relive the highlights of our journey together!"
              className="text-white/90 text-lg md:text-xl max-w-xl"
            />
          </div>

          {/* Right Column */}
          <div className="relative">
            <CardHoverEffect className="bg-[#FFD700] p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg transform rotate-3">
                  <Image
                    src="/file.svg"
                    alt="Memory photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold">Best memories ever!</h2>
                <Button className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 text-lg rounded-lg">
                  See More
                </Button>
              </div>
            </CardHoverEffect>
          </div>
        </div>
      </div>
    </main>
  )
}

