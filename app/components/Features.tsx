import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative bg-white py-12 px-6 lg:px-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-100 -z-10"></div>

      {/* Container */}
      <div className="container mx-auto">
        <div className="text-center mb-12">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Moments</h2>

          {/* Subtitle */}
          <h3 className="text-lg text-gray-600 bg-yellow-300 inline-block py-2 px-4 rounded-lg shadow-lg transform -rotate-2">
            Celebrate
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="https://mobiri.se"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Join Us
          </a>
          <a
            href="https://mobiri.se"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            View Gallery
          </a>
        </div>

        {/* Card Items */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="flex items-center space-x-4 bg-orange-500 text-white rounded-lg p-6 shadow-lg">
            <div className="flex-shrink-0">
            
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Laughter</h4>
              <p className="text-sm">From silly jokes to spontaneous dance-offs, our love is filled with laughter that echoes through time.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center space-x-4 bg-blue-800 text-white rounded-lg p-6 shadow-lg">
            <div className="flex-shrink-0">
             
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Adventure</h4>
              <p className="text-sm">
                Exploring new places together has been our favorite pastime, creating memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
