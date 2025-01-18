import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import Image from "next/image"

export default function CelebrationPage() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Top Section */}
        <div className="bg-[#FF5733] px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
                Celebrate Her
                <br />
                Special Day!
              </h1>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-[#003366] hover:bg-[#002244] text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Send Wishes
              </Button>
            </div>
            <div className="space-y-6">
              <div className="relative w-48 h-48 mx-auto lg:ml-auto">
                <Image
                  src="/part1.png"
                  alt="Celebration moment"
                  fill
                  className="object-cover rounded-2xl shadow-2xl transform rotate-3"
                />
              </div>
              <TextGenerateEffect
                words="Join us in celebrating my girlfriend's special day! Your wishes will make her smile brighter than the sun!"
                className="text-white text-xl md:text-2xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
    </main>
  )
}

