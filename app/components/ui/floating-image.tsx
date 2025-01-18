"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FloatingImageProps {
  imageUrl: string
  alt: string
}

export function FloatingImage({ imageUrl, alt }: FloatingImageProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }}
      className="relative"
    >
      <div className="relative w-full aspect-square max-w-[600px] mx-auto">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-3" />
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover rounded-2xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
        />
      </div>
    </motion.div>
  )
}

