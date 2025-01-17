"use client"

import { useEffect, useState } from "react"

export const TextGenerateEffect = ({ 
  words,
  className = ""
}: {
  words: string
  className?: string
}) => {
  const [displayedText, setDisplayedText] = useState("")
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= words.length) {
        setDisplayedText(words.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [words])

  return <p className={className}>{displayedText}</p>
}

