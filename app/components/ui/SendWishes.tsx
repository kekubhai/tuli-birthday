import React from "react";

const WishesPage: React.FC = () => {
  return (
    <div className="relative bg-white min-h-screen p-8">
      {/* Navbar */}
      <header className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Love Memories</h1>
          <p className="text-sm text-gray-500 italic">my girlfriend</p>
        </div>
        <button className="p-2 text-gray-600">
          <span className="material-icons">menu</span>
        </button>
      </header>

      {/* Spread the Love */}
      <div className="text-center mb-12 relative inline-block">
        <div className="absolute -inset-2 bg-yellow-300 rounded-lg -rotate-2 shadow-lg z-0"></div>
        <h2 className="relative z-10 text-lg font-bold text-gray-900 bg-yellow-300 px-6 py-2 inline-block rounded-md shadow-sm transform -rotate-2">
          Spread the Love
        </h2>
      </div>

      {/* Wishes */}
      <main className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Wishes for Mia
        </h1>
        <p className="text-gray-600 mb-6">
          Leave your heartfelt messages and wishes for Mia below!
        </p>

        {/* Wishes Section */}
        <div className="grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-8">
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Happy Birthday, Mia! You are amazing!</li>
            <li>Cheers to another wonderful year!</li>
          </ul>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Wishing you all the love and joy!</li>
            <li>Keep shining bright, beautiful!</li>
          </ul>
        </div>

        {/* Send Wishes Button */}
        <div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Send Wishes
          </button>
        </div>
      </main>
    </div>
  );
};

export default WishesPage;
