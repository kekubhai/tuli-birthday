'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        duration: 2,
        text: {
          value: text,
          delimiter: '',
        },
        ease: 'none',
      })
    })

    return () => ctx.revert()
  }, [text])

  return <div ref={textRef} className={className}></div>
}

