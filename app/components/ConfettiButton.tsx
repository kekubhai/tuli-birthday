'use client'

import { useState } from 'react'
import confetti from 'canvas-confetti'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export default function ConfettiButton() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <div className="flex items-center justify-center ">
    <ShimmerButton
      onClick={handleClick}
      className="align-middle justify-center"
      disabled={isAnimating}
    >
      Celebrate!
    </ShimmerButton>
  </div>
  )
}

