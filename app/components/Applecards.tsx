"use client";
import Image from "next/image";
import React from "react";
import { Carousel,Card } from "@/components/ui/apple-cards-carousel";
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full bg-red-600 py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Here she is
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
           
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/store/lukiye-jaowa.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/store/pujo1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/store/sundori.jpg",
    content: <DummyContent />,
  },

  {
    category: "",
    title: ".",
    src: "/store/trial1.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/store/trial2.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: " ",
    src:"/store/mela-cutie.jpg",
    content: <DummyContent />,
  },
];
