'use client'

import { useState } from 'react';

export default function BirthdayWish() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    message: '',
  });
  
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Your birthday wish has been sent successfully!');
        setFormData({ senderName: '', senderEmail: '', message: '' });
        setIsModalOpen(false); // Close modal on successful submission
      } else {
        setResponseMessage('Failed to send your birthday wish. Try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300">
      <h1 className="text-3xl font-bold mb-6 text-white">Send a Birthday Wish</h1>

      {/* Open Modal Button */}
      <button 
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Send Wish
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Send Your Wish</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium" htmlFor="senderName">
                  Your Name
                </label>
                <input
                  className="border border-gray-300 rounded-lg w-full p-2"
                  type="text"
                  id="senderName"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium" htmlFor="senderEmail">
                  Your Email
                </label>
                <input
                  className="border border-gray-300 rounded-lg w-full p-2"
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  value={formData.senderEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="border border-gray-300 rounded-lg w-full p-2"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send Wish
              </button>
            </form>

            <button
              className="mt-4 text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Response Message */}
      {responseMessage && (
        <div className="mt-4 text-lg text-center">
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
}
