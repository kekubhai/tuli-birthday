'use client'

import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import Image from "next/image"
import { useState } from 'react'

export default function CelebrationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // handle the form submission logic (send email) here
    setIsModalOpen(false); // Close modal on form submit
  };

  return (
    <main className="min-h-screen bg-red-600">
      <div className="relative">
        {/* Top Section */}
        <div className="bg-[#FF5733]  h-full px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
                Celebrate Her
                <br />
                Special Day!
              </h1>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-[#003366] hover:bg-[#002244] text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                Send Wishes
              </Button>
            </div>
            <div className="space-y-6">
              <div className="relative w-48 h-48 mx-auto lg:ml-auto">
                <Image
                  src="/store/herbirthday.jpg"
                  alt="Celebration moment"
                  fill
                  className="object-cover rounded-2xl shadow-2xl transform rotate-3"
                />
              </div>
              <TextGenerateEffect
                words="Join us in celebrating my girlfriend's special day! Your wishes will make her smile brighter than the sun!"
                className="text-white text-xl md:text-2xl"
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 animate__animated animate__fadeIn animate__delay-1s">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-[90%] md:w-[60%] max-w-lg scale-110 transform transition-all duration-500 ease-out animate__animated animate__zoomIn">
              <h2 className="text-2xl text-center font-semibold text-[#FF5733] mb-4">
                Send Your Birthday Wish!
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-[#FF5733]">Your Name</label>
                  <input
                    type="text"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-[#FF5733]">Your Email</label>
                  <input
                    type="email"
                    name="senderEmail"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-[#FF5733]">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    type="submit"
                    className="bg-[#FF5733] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#FF2a00] transition-all"
                  >
                    Send Wish
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
