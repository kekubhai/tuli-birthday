import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="bg-[#FF5733] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/"
            alt="Love"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">Love</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="hover:text-white/80 transition-colors">
            Our Journey
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            Memories Galore
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            Wish Her Well
          </Link>
        </div>

        <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
          Join Us
        </Button>
      </div>
    </nav>
  )
}

