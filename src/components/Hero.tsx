"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Slide {
  id: number;
  badge: string;
  title: string;
  description: string;
  img: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "NEW IMAGE MODEL",
    title: "WAN 2.2",
    description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    img: "/assets/wan-one.webp",
    cta: "Try WAN 2.2",
  },
  {
    id: 2,
    badge: "OPEN SOURCE MODEL",
    title: "FLUX.1 Krea",
    description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea.",
    img: "/assets/wan-two.webp",
    cta: "Try WAN 2.2",
  },
  { id: 3, badge: "FEATURED", title: "Innovation", description: "Explore the latest innovations.", img: "/assets/wan-three.webp", cta: "Learn More" },
  { id: 4, badge: "TRENDING", title: "Tech 2025", description: "Top tech trends for the year.", img: "/assets/wan-four.webp", cta: "Discover" },
  { id: 5, badge: "NEW", title: "Design", description: "New design tools unveiled.", img: "/assets/wan-o.png", cta: "Explore" },
  { id: 6, badge: "UPDATE", title: "AI Tools", description: "Latest updates in AI technology.", img: "/assets/wan-one.webp", cta: "Check Now" },
  { id: 7, badge: "LATEST", title: "Future", description: "Vision for the future of tech.", img: "/assets/wan-one.webp", cta: "View Future" },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);

  useEffect(() => {
    const updateWidth = () => {
      setSlideWidth(window.innerWidth < 768 ? 100 : 55);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full py-8 dark:bg-gray-900">
      <div className="overflow-hidden rounded-2xl max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out space-x-4"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-0 flex-shrink-0"
              style={{ width: `${slideWidth}%` }}
              aria-hidden={slides[currentIndex].id !== slide.id}
            >
              <div className="relative md:h-96 h-[200px]">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-contain md:object-cover rounded-2xl overflow-hidden"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {slide.badge}
                </div>
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl p-6">
                  <h2 className="text-4xl font-extrabold text-white">{slide.title}</h2>
                  <p className=" hidden md:block text-[13px] text-white/80 max-w-md mt-2">{slide.description}</p>
                </div>
                <button
                  className="absolute bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                  aria-label={`Call to action for ${slide.title}`}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={goToPrev}
          className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow hover:bg-white dark:hover:bg-gray-700"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow hover:bg-white dark:hover:bg-gray-700"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx
                ? "bg-gray-900 dark:bg-white"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}