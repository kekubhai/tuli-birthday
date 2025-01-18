import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { MemoryCard } from "./memory-card"

export default function MemoriesPage() {
  const memories = [
    {
      id: "first-date",
      title: "First Date",
      description: "Our first date was a whirlwind of laughter and awkward moments. Who knew love could be so hilarious?",
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "adventurous-trips",
      title: "Adventurous Trips",
      description: "From spontaneous road trips to planned getaways, every journey becomes an adventure with you.",
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "sweet-surprises",
      title: "Sweet Surprises",
      description: "Little notes, unexpected gifts, and surprise visits - you make every day special in your own way.",
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "everyday-joys",
      title: "Everyday Joys",
      description: "Coffee mornings, evening walks, and quiet moments together - finding magic in the ordinary.",
      image: "/placeholder.svg?height=600&width=800"
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
                className="rounded-full px-6 py-2 data-[state=active]:bg-[#FF5733] data-[state=active]:text-white transition-all"
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

