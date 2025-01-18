import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CircleImage } from "./ui/circle-imapge";
import { BackgroundGradient } from "./ui/bg-gradient";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFD700] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div className="relative flex justify-center">
            <CircleImage
              imageUrl="/part1.png"
              name="Emily Smith"
              title="Creative Soul"
              subtitle="The love of my life!"
              badge="Queen"
            />
          </div>

          {/* Right Column - About Content */}
          <BackgroundGradient className="space-y-8 p-8 rounded-3xl bg-gradient-to-br from-white via-yellow-100 to-yellow-300 shadow-lg">
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-[#333]">Meet Emily</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#003366]">
                About Her
              </h1>
            </div>

            <TextGenerateEffect
              words="Emily is a vibrant spirit who lights up every room. Her laughter is contagious, and her kindness knows no bounds. Let's shower her with love!"
              className="text-xl md:text-2xl text-[#555]"
            />

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 text-lg rounded-lg shadow-md transition-colors"
              >
                Learn More
              </Button>
              <Button
                variant="secondary"
                className="bg-[#0055AA] hover:bg-[#004488] text-white px-8 py-6 text-lg rounded-lg shadow-md transition-colors"
              >
                Join Celebration
              </Button>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </main>
  );
}
