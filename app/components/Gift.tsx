import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { FloatingImage } from "./ui/floating-image"
import { BackgroundGradient } from "./ui/background-gradient"
export default function Gift() {
  return (
    <main className="min-h-screen bg-[#FF5733]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <BackgroundGradient className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                For My Love
              </h1>
              <TextGenerateEffect
                words="A celebration of us and our journey!"
                className="text-white/90 text-xl md:text-2xl"
              />
            </div>
            <Button 
              className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 text-lg rounded-lg"
            >
              Join The Fun
            </Button>
          </BackgroundGradient>

          {/* Right Column - Image */}
          <div className="relative">
            <FloatingImage
              imageUrl="/part1.png"
              alt="Decorative floral image"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

