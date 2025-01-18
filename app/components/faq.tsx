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
        answer: "You can contribute by sharing your favorite memories, photos, or messages. Simply use the 'Share Memory' button in the gallery section or leave your wishes in our guestbook."
      },
      {
        question: "Can I add photos?",
        answer: "Yes! You can upload photos through the gallery section. We welcome pictures from shared moments, celebrations, or any special occasions we've had together."
      },
      {
        question: "When will the content be updated?",
        answer: "We regularly update the website with new photos and memories. Special occasions and milestones are added as they happen, keeping our digital story fresh and current."
      },
      {
        question: "Is this content private?",
        answer: "While the website is accessible to our friends and family, certain sections are password-protected to keep our intimate moments private. You can adjust privacy settings for any content you share."
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
  
  