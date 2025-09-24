// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type Slide = {
//   id: string;
//   badge?: string;       // small top-left label
//   title: string;
//   description?: string; // bottom-left description
//   img: string;          // public/ path (e.g. /slide-1.jpg)
//   cta?: { text: string; href?: string };
// };

// const slidesData: Slide[] = [
//   {
//     id: "wan",
//     badge: "NEW IMAGE MODEL",
//     title: "WAN 2.2",
//     description: "WAN 2.2 Image generation — Generate complex images with the brand new and powerful WAN 2.2 model.",
//     img: "/slide-1.jpg",
//     cta: { text: "Try WAN 2.2" },
//   },
//   {
//     id: "flux",
//     badge: "OPEN SOURCE MODEL",
//     title: "FLUX.1 Krea",
//     description: "We're making the weights to our FLUX.1 Krea model open-source. Download & run our model weights.",
//     img: "/slide-2.jpg",
//     cta: { text: "Explore FLUX.1" },
//   },
//   {
//     id: "bottle",
//     badge: "FEATURED",
//     title: "Open Source",
//     description: "Download and run our model weights, read the technical report, or generate with it in Krea Image.",
//     img: "/slide-3.jpg",
//     cta: { text: "Open Source" },
//   },
//   {
//     id: "anime",
//     badge: "STYLE MODEL",
//     title: "Anime Style",
//     description: "Create anime-inspired realistic characters and scenes with controlled prompt guidance.",
//     img: "/slide-4.jpg",
//     cta: { text: "Try Anime" },
//   },
//   {
//     id: "landscape",
//     badge: "LANDSCAPE",
//     title: "Scenic",
//     description: "Generate beautiful landscapes with atmospheric lighting and realistic details.",
//     img: "/slide-5.jpg",
//     cta: { text: "Generate" },
//   },
// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState(0);
//   const [slidePercent, setSlidePercent] = useState(100); // percent width per slide (100 mobile, 75 desktop)
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const slides = slidesData;

//   // compute slidePercent based on window width
//   useEffect(() => {
//     function update() {
//       if (typeof window === "undefined") return;
//       // breakpoint: tailwind md ~ 768px
//       const isMobile = window.innerWidth < 768;
//       setSlidePercent(isMobile ? 100 : 50); // 75% width => show full and partial next
//     }
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   // clamp index
//   useEffect(() => {
//     if (index < 0) setIndex(slides.length - 1);
//     if (index >= slides.length) setIndex(0);
//   }, [index, slides.length]);

//   const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
//   const goNext = () => setIndex((i) => (i + 1) % slides.length);
//   const goTo = (i: number) => setIndex(i);

//   // computed translation percent for transform
//   // Each slide is slidePercent% width. We translate by index * slidePercent.
//   const translatePercent = -index * slidePercent;

//   return (
//     <section className="min-h-screen py-6 px-4 dark:bg-black">
//       <div className="relative min-h-screen ">
//         {/* viewport */}
//         <div className="overflow-hidden">
//           {/* slides row */}
//           <div
//             ref={containerRef}
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               width: `${(slides.length * slidePercent) / (100 / 100)}%`, // not relied on, kept for clarity
//               transform: `translateX(${translatePercent}%)`,
//             }}
//           >
//             {slides.map((s, i) => (
//               <div
//                 key={s.id}
//                 className={`flex-shrink-0 relative rounded-2xl overflow-hidden mr-4`}
//                 style={{
//                   width: `${slidePercent}%`,
//                 }}
//                 aria-hidden={i !== index}
//               >
//                 {/* Image */}
//                 <img
//                   src={s.img}
//                   alt={s.title}
//                   className="w-2/4 h-[420px] object-cover block"
//                 />

//                 {/* Top-left badge */}
//                 {s.badge && (
//                   <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
//                     {s.badge}
//                   </div>
//                 )}

//                 {/* Bottom overlay: gradient */}
//                 <div className="absolute inset-0 flex items-end">
//                   <div className="w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
//                     <h3 className="text-4xl font-extrabold leading-tight">{s.title}</h3>
//                     {s.description && (
//                       <p className="mt-2 text-sm max-w-xl">{s.description}</p>
//                     )}
//                   </div>
//                 </div>

//                 {/* CTA bottom-right */}
//                 {s.cta && (
//                   <div className="absolute bottom-6 right-6">
//                     <button
//                       type="button"
//                       className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium shadow-md hover:opacity-95"
//                     >
//                       {s.cta.text}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* right side arrows (on the right edge, vertically centered) */}
//         <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
//           <button
//             aria-label="Previous"
//             onClick={goPrev}
//             className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700"
//           >
//             <ChevronLeft className="w-5 h-5 text-black dark:text-white" />
//           </button>

//           <button
//             aria-label="Next"
//             onClick={goNext}
//             className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700"
//           >
//             <ChevronRight className="w-5 h-5 text-black dark:text-white" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex items-center justify-center mt-4 gap-2">
//           {slides.map((_, i) => {
//             const active = i === index;
//             return (
//               <button
//                 key={i}
//                 aria-label={`Go to slide ${i + 1}`}
//                 onClick={() => goTo(i)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   active ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"
//                 }`}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: string;
  badge?: string;       // small top-left label
  title: string;
  description?: string; // bottom-left description
  img: string;          // public/ path (e.g. /slide-1.jpg)
  cta?: { text: string; href?: string };
};

const slidesData: Slide[] = [
  {
    id: "wan",
    badge: "NEW IMAGE MODEL",
    title: "WAN 2.2",
    description: "WAN 2.2 Image generation — Generate complex images with the brand new and powerful WAN 2.2 model.",
    img: "/assets/wan-one.webp",
    cta: { text: "Try WAN 2.2" },
  },
  {
    id: "flux",
    badge: "OPEN SOURCE MODEL",
    title: "FLUX.1 Krea",
    description: "We're making the weights to our FLUX.1 Krea model open-source. Download & run our model weights.",
    img: "/slide-2.jpg",
    cta: { text: "Explore FLUX.1" },
  },
  {
    id: "bottle",
    badge: "FEATURED",
    title: "Open Source",
    description: "Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    img: "/slide-3.jpg",
    cta: { text: "Open Source" },
  },
  {
    id: "anime",
    badge: "STYLE MODEL",
    title: "Anime Style",
    description: "Create anime-inspired realistic characters and scenes with controlled prompt guidance.",
    img: "/slide-4.jpg",
    cta: { text: "Try Anime" },
  },
  {
    id: "landscape",
    badge: "LANDSCAPE",
    title: "Scenic",
    description: "Generate beautiful landscapes with atmospheric lighting and realistic details.",
    img: "/slide-5.jpg",
    cta: { text: "Generate" },
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [slidePercent, setSlidePercent] = useState(100); // percent width per slide (100 mobile, ~55 desktop)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slides = slidesData;

  // compute slidePercent based on window width
  useEffect(() => {
    function update() {
      if (typeof window === "undefined") return;
      const isMobile = window.innerWidth < 768; // breakpoint: md
      setSlidePercent(isMobile ? 100 : 55); // 2 slides visible + peek of next
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // clamp index
  useEffect(() => {
    if (index < 0) setIndex(slides.length );
    if (index >= slides.length) setIndex(0);
  }, [index, slides.length]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goTo = (i: number) => setIndex(i);

  // computed translation percent for transform
  const translatePercent = -index * slidePercent;

  return (
    <section className="py-6 px-4 dark:bg-black">
      <div className="relative">
        {/* viewport */}
        <div className="overflow-hidden">
          {/* slides row */}
          <div
            ref={containerRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
               width: `${slides.length * 70}%`,
  transform: `translateX(${translatePercent}%)`,
            }}
          >
            {slides.map((s, i) => (
              <div
                key={s.id}
                className="flex-shrink-0 relative rounded-2xl overflow-hidden mr-4"
                style={{ width: `${slidePercent}%` }}
                aria-hidden={i !== index}
              >
                {/* Image */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-auto h-[420px] object-cover block"
                />

                {/* Top-left badge */}
                {s.badge && (
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                    {s.badge}
                  </div>
                )}

                {/* Bottom overlay: gradient */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-4xl font-extrabold leading-tight">
                      {s.title}
                    </h3>
                    {s.description && (
                      <p className="mt-2 text-sm max-w-xl">{s.description}</p>
                    )}
                  </div>
                </div>

                {/* CTA bottom-right */}
                {s.cta && (
                  <div className="absolute bottom-6 right-6">
                    <button
                      type="button"
                      className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium shadow-md hover:opacity-95"
                    >
                      {s.cta.text}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls + dots below */}
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          {/* Arrows */}
          <div className="flex gap-4">
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700"
            >
              <ChevronLeft className="w-5 h-5 text-black dark:text-white" />
            </button>
            <button
              aria-label="Next"
              onClick={goNext}
              className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:bg-white dark:hover:bg-gray-700"
            >
              <ChevronRight className="w-5 h-5 text-black dark:text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    active
                      ? "bg-gray-900 dark:bg-white"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

