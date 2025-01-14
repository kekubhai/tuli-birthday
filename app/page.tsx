'use client'
import  React,{ useState, useEffect } from 'react';
import { Heart, Gift, PartyPopper, Cake, Send, Sparkles } from 'lucide-react';

const BirthdayLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showWishForm, setShowWishForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    setIsVisible(true);
    
    // Birthday countdown
    const birthday = new Date('2025-02-14');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = birthday.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-wish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification('Your wish has been sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
        setShowWishForm(false);
      } else {
        setNotification('Failed to send wish. Please try again.');
      }
    } catch (error) {
      setNotification('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Generate array of floating hearts with random positions
  const floatingHearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${3 + Math.random() * 2}s`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating hearts */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-400 animate-float"
          style={{
            left: heart.left,
            top: '-20px',
            animationDelay: heart.delay,
            animationDuration: heart.duration
          }}
        >
          <Heart 
            size={24}
            className="animate-pulse"
            style={{ opacity: 0.5 }}
          />
        </div>
      ))}

      {/* Main content */}
      <div className={`text-center z-10 p-8 bg-white/80 rounded-lg backdrop-blur-sm shadow-xl max-w-2xl mx-4 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 animate-bounce">
          Happy Birthday!
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            <PartyPopper key="party" className="text-yellow-500 animate-spin" />,
            <Cake key="cake" className="text-pink-500 animate-bounce" />,
            <Gift key="gift" className="text-purple-500 animate-pulse" />
          ].map((icon, index) => (
            <div
              key={index}
              className="transform transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `scale(${isVisible ? 1 : 0}) rotate(${isVisible ? 0 : 180}deg)`,
                transitionDelay: `${index * 200}ms`
              }}
            >
              {React.cloneElement(icon, { size: 32 })}
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          To the most amazing person in my life! ❤️
        </p>

        {/* Countdown timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={unit}
              className="bg-white p-4 rounded-lg shadow hover:scale-105 transition-all duration-300 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : 20}px)`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="text-2xl md:text-3xl font-bold text-pink-500">
                {value}
              </div>
              <div className="text-gray-600 capitalize">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <div 
          className="bg-pink-50 p-6 rounded-lg mb-8 transition-all duration-500 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `translateX(${isVisible ? 0 : -100}px)`
          }}
        >
          <p className="text-gray-700 leading-relaxed">
            Every moment with you is a gift, and today we celebrate the most precious gift of all - you! Thank you for filling my life with love, laughter, and endless joy. Here's to another amazing year together! 🎉
          </p>
        </div>

        {/* Wish Form */}
        {showWishForm ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {['name', 'email', 'message'].map((field, index) => (
              <div
                key={field}
                className="transform transition-all duration-500"
                style={{
                  opacity: showWishForm ? 1 : 0,
                  transform: `translateY(${showWishForm ? 0 : 20}px)`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {field === 'message' ? (
                  <textarea
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    className="w-full p-2 rounded border border-pink-300 focus:ring-2 focus:ring-pink-500 h-32"
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    className="w-full p-2 rounded border border-pink-300 focus:ring-2 focus:ring-pink-500"
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    required
                  />
                )}
              </div>
            ))}
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {isLoading ? 'Sending...' : (
                <>
                  <Send size={20} />
                  Send Wish
                </>
              )}
            </button>
          </form>
        ) : (
          <button 
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            onClick={() => setShowWishForm(true)}
          >
            Send Birthday Wishes
          </button>
        )}

        {notification && (
          <div className="mt-4 p-4 bg-pink-100 text-pink-700 rounded-lg animate-fadeIn">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayLanding;

// Add these to your global CSS or Tailwind config
const styles = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-100px); }
  100% { transform: translateY(100vh); }
}

.animate-float {
  animation: float linear infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in;
}

/* Add to existing Tailwind animations */
.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-spin {
  animation: spin 3s linear infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`;