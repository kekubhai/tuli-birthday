
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CircleImage } from "./ui/circle-imapge";
import { BackgroundGradient } from "./ui/bg-gradient";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFD700] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
      
          <div className="relative flex object-cover justify-center">
            <CircleImage
            
              imageUrl="/store/mayapur1.jpg"
              name="Debopriya Debnath"
              title="A brutally Soft Woman"
              subtitle="The love of my life!"
              badge="My Queen"
            />
          </div>

      
          <BackgroundGradient className="space-y-8 p-8 rounded-3xl bg-gradient-to-br from-white via-yellow-100 to-yellow-300 shadow-lg">
            <div className="space-y-4">
              <h2 className="text-3xl font-medium text-[#333]">Meet Debopriya</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#003366]">
                About Her
              </h1>
            </div>

            <TextGenerateEffect
              words="She is a kind soul but can annoy you sometime, has a helpful behaviour,treats my parents the right way. she cooks really good,pushes me to be a better man. Watches reels with me and makes my ppt for hackathons "
              className="text-xl md:text-2xl text-[#555]"
            />

            <div className="flex flex-wrap gap-4">
             
             
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </main>
  );
}
