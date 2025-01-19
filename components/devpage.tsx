import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";



const Developer: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-indigo-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full text-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
          <Image
            src="/store/ami2.jpg" // Replace with the developer's image path
            alt="Developer's Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Meet the Creator of This Website
        </h1>
        <p className="mt-4 text-gray-600">
          This website was lovingly crafted by a boyfriend (BF) who poured his
          creativity and coding skills into making something special for his
          girlfriend (GF). 🧡
        </p>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">About the Developer</h2>
          <p className="text-gray-600 mt-2">
            A passionate coder, tech enthusiast, and someone who believes that
            love inspires the best creations. Whether it&apos;s writing lines of
            code or planning surprises, they always bring their heart into it.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Portfolio</h2>
          <p className="text-gray-600 mt-2">Check out my work here:</p>
          <div className="mt-4 flex justify-center space-x-4">
            {/* Portfolio Link Icons */}
            <a
              href="https://github.com/kekubhai" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anirban-ghosh010" // Replace with your LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://onirban.in.net/" // Replace with your portfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition"
            >
              <FaExternalLinkAlt className="text-lg" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-white bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Developer;
