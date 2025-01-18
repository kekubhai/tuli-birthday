"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TextGenerateEffect } from "./ui/text-generate-effect"
interface MemoryCardProps {
  title: string
  description: string
  image: string
}

export function MemoryCard({ title, description, image }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[#E8D5D0] rounded-3xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-bold"
          >
            {title}
          </motion.h2>
          <TextGenerateEffect
            words={description}
            className="text-xl"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[400px] w-full"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover rounded-2xl transform rotate-2 shadow-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

