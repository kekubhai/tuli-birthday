/* eslint-disable react/no-children-prop */
import RightImageHolder from "./ui/Imageholder";

export default function Gift() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center items-center lg:items-start px-8 lg:px-16 bg-gradient-to-tr from-pink-500 via-red-400 to-orange-300 text-white">
        <div className="space-y-8 max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Happy Birthday, Love!
          </h1>
          <p className="text-xl lg:text-2xl font-light">
            Today, the world shines brighter, just as your smile lights up my
            heart every day. Your laughter fills the air with magic, and your
            presence is a gift I cherish the most. ❤️
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Wishing you:</strong>
            </p>
            <ul className="list-disc pl-4 text-lg">
              <li>A day filled with love and happiness 🌸</li>
              <li>Endless surprises and sweet memories 🎁</li>
              <li>Moments as precious as your heart ❤️</li>
            </ul>
            <p className="italic">
              You are my greatest gift, and today, I celebrate everything that
              makes you amazing!
            </p>
          </div>
          <p className="text-lg lg:text-xl">
            Here’s to a beautiful day and an incredible year ahead. You deserve
            all the love in the world — and more. 🥂🎉
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="object-fill">
        <RightImageHolder imageUrl="/she3.jpg" alt="Our Story" />
      </div>
    </main>
  );
}
