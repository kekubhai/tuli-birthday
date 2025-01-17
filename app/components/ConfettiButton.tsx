'use client'

import { useState } from 'react'
import confetti from 'canvas-confetti'

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
    <button
      onClick={handleClick}
      className={`bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-2 px-4 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 ${isAnimating ? 'animate-bounce' : ''}`}
      disabled={isAnimating}
    >
      Celebrate!
    </button>
  )
}

