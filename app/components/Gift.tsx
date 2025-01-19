/* eslint-disable react/no-children-prop */
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "./ui/background-gradient";
import RightImageHolder from "./ui/Imageholder";

export default function Gift() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center items-center lg:items-start px-8 lg:px-16 bg-gradient-to-tr from-[#FF5733] via-[#FF6F4F] to-[#FF8E53] text-white">
        <div className="space-y-8 max-w-lg">
          <BackgroundGradient className="space-y-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              A Gift of Love
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Relive our cherished journey of love, laughter, and memories. Celebrate the moments that truly matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button 
                className="bg-white text-[#FF5733] px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/90"
              >
                Explore Our Story
              </Button>
              <Button 
                className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Join The Celebration
              </Button>
            </div>
          </BackgroundGradient>
        </div>
      </div>

      {/* Right Image Section - Covers Entire Right Side */}
      <div className="relative h-screen">
        <RightImageHolder imageUrl="/she3.jpg" alt="Our Story" />
      </div>
    </main>
  );
}
