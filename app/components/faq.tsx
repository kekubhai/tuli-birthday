import {
    
  } from "@/components/ui/accordion"
  import { FaqItem } from "./ui/faq-items"
  
  export default function FaqPage() {
    const faqs = [
      {
        question: "What is this website about?",
        answer: "This website is a digital love letter, created to celebrate and share our beautiful journey together. It's a collection of memories, photos, and special moments that tell our unique story."
      },
      {
        question: "How can I contribute?",
        answer: "You can create pray for the well-being of this couple and wish my queen on this date."
      },
     
      {
       question:"Was this necessary?",
       answer:" Been grinding too much on dev and not yet skillful to build other cute stuffs"
      },
      {
        question:"Can you build one for me and my friend?",
        answer:"ofc yes man, just mail the dev    anirbanghosh060@gmail.com"
      }
    ]
  
    return (
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* FAQ Label */}
          <div className="relative w-fit">
            <div className="bg-[#FFD700] px-8 py-4 text-xl font-semibold rounded-lg transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
              Frequently Asked Questions
            </div>
          </div>
  
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  