'use client'
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(".hero-title", { opacity: 0, y: 50, duration: 1 })
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 1 }, "-=0.5")
        .from(".scroll-down", { opacity: 0, y: 50, duration: 1 });

      gsap.from(".card", {
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const navigateToSurprise = () => {
    router.push("/birthday");
  };

  return (
    <div ref={containerRef} className="bg-gray-100 min-h-screen">
      <section
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-500 to-purple-500 text-white"
      >
        <h1 className="hero-title text-5xl font-bold">
          Happy Birthday, My Love! 💖
        </h1>
        <p className="hero-subtitle text-xl mt-3">
          Here's a special surprise just for you!
        </p>
        <button
          className="scroll-down mt-8 py-3 px-6 bg-white text-pink-500 rounded-full shadow-md hover:shadow-lg transition"
          onClick={navigateToSurprise}
        >
          Open Your Gift 🎁
        </button>
      </section>

      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">
          A Few Reasons Why You Are Amazing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Your Smile</h3>
            <p>It brightens up my entire world, every single day.</p>
          </div>
          <div className="card p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Your Kindness</h3>
            <p>You always care deeply about everyone around you.</p>
          </div>
          <div className="card p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Your Passion</h3>
            <p>Your energy and enthusiasm inspire me to be better.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>Made with ❤️ by Someone Who Adores You</p>
      </footer>
    </div>
  );
};

export default Home;
