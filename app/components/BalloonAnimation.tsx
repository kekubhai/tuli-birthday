import React from "react";

const BalloonAnimation: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-300 to-blue-500 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Balloon 1 */}
        <div className="balloon-container animate-float">
          <svg
            className="balloon"
            width="100"
            height="150"
            viewBox="0 0 100 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Balloon */}
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="60"
              fill="#FF6F91"
              className="shadow-lg"
            />
            {/* Balloon highlight */}
            <ellipse cx="35" cy="35" rx="10" ry="15" fill="white" opacity="0.4" />
            {/* String */}
            <line
              x1="50"
              y1="110"
              x2="50"
              y2="150"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Balloon 2 */}
        <div className="balloon-container animate-float-delayed">
          <svg
            className="balloon"
            width="100"
            height="150"
            viewBox="0 0 100 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="60"
              fill="#6FA8FF"
              className="shadow-lg"
            />
            <ellipse cx="35" cy="35" rx="10" ry="15" fill="white" opacity="0.4" />
            <line
              x1="50"
              y1="110"
              x2="50"
              y2="150"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default BalloonAnimation;
