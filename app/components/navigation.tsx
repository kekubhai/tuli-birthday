'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal handler
  const handleLinkClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo1.jpg"
              alt="Love"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <span className="text-2xl font-bold italic">Her Birthday</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Our Journey
            </Link>
            <Link
              href="#"
              className="hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Memories Galore
            </Link>
            <Link
              href="#"
              className="hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              onClick={handleLinkClick}
            >
              Wish Her Well
            </Link>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-md text-center space-y-4 w-11/12 max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Are you dumb to check these?
            </h2>
            <p className="text-gray-600">
              Go through the rest of the page for better insight!
            </p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

