"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from 'lucide-react'

interface FaqItemProps {
  question: string
  answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="rounded-2xl overflow-hidden cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "#ff4422" : "#FF5733" }}
        className="p-6 flex justify-between items-center shadow-lg"
      >
        <h3 className="text-white text-xl font-semibold">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white/20 p-1 rounded-full"
        >
          <Plus className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FF5733] text-white"
          >
            <div className="p-6 pt-2">
              <p className="text-white/90">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

