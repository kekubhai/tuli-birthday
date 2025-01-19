import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { MemoryCard } from "./memory-card"

export default function MemoriesPage() {
  const memories = [
    {
      id: "first-date",
      title: "First Date",
      description: "Our first date was a whirlwind of laughter and awkward moments. Who knew love could be so hilarious?",
      image: "/store/amra2.jpg"
    },
    {
      id: "Our Pujo Date",
      title: "Our first Saraswati Pujo",
      description: "Hehe this was cute, This was we praying for our better future",
      image: "/store/our-saraswatipujo.jpg"
    },
    {
      id: "The first Durga Pujo Together",
      title: "Durga Pujo together",
      description: "Little notes, unexpected gifts, and surprise visits - you make every day special in your own way.",
      image: "/store/1stpujo.jpg"
    },
    {
      id: "Cinema Dates",
      title: "Cinema Date",
      description: "She is the reason I could be a cinephile again ,Watch FDFS and gawd I can't tell you how pumped I was watching the climax of Kalki ",
      image: "/store/movie-date.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Moments.
        </h1>

        <Tabs defaultValue="first-date" className="w-full">
          <TabsList className="bg-[#E8D5D0] p-1 rounded-full flex flex-wrap justify-start gap-2">
            {memories.map((memory) => (
              <TabsTrigger
                key={memory.id}
                value={memory.id}
                className="rounded-full object-top px-6 py-2 data-[state=active]:bg-[#FF5733] data-[state=active]:text-white transition-all"
              >
                {memory.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {memories.map((memory) => (
            <TabsContent
              key={memory.id}
              value={memory.id}
              className="mt-8 focus-visible:outline-none focus-visible:ring-0"
            >
              <MemoryCard {...memory} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

