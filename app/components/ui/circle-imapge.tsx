"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CircleImageProps {
  imageUrl: string
  name: string
  title: string
  subtitle: string
  badge: string
}

export function CircleImage({
  imageUrl,
  name,
  title,
  subtitle,
  badge
}: CircleImageProps) {
  return (
    <div className="relative">
      {/* Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute -top-4 left-4 z-10"
      >
        <div className="bg-[#FF5733] text-white px-4 py-1 rounded-full text-sm font-medium">
          {badge}
        </div>
      </motion.div>

      {/* Circle Container */}
      <div className="relative">
        {/* Main Circle */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-[400px] h-[400px] rounded-full overflow-hidden"
        >
          <Image
            src={imageUrl || "/part1.png"}
            alt={name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] bg-[#FF5733] text-white p-6 rounded-2xl text-center"
        >
          <div className="space-y-2">
            <p className="text-lg opacity-90">{subtitle}</p>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-lg opacity-90">{title}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

