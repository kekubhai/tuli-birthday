import Image from "next/image"
import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar"
import { Card,CardHeader,CardContent } from "@/components/ui/card"

export default function MyLetter() {
  return (
    <div className="min-h-screen bg-yellow-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Love Memories</h1>
          <p className="text-gray-600">my girlfriend</p>
        </header>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
              <Image
                src="/store/amra2.jpg"
                alt="Heart pendant on a string"
                fill
                className="object-cover"
                priority
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12 border-2 border-yellow-300">
                <AvatarImage src="/placeholder.svg" alt="Emily Smith" />
                <AvatarFallback>ES</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">Emily Smith</h2>
                <p className="text-gray-600 mb-4">Best Friend</p>
                <p className="text-gray-800 text-lg">
                  You two are the cutest! Wishing you endless love and laughter!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

