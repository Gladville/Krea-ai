"use client";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { FC } from "react";

const tools = [
  { name: "Image", desc: "Generate images with Flux and Ideogram", badge: "", btn: "Open", img: "/assets/image.png" },
  { name: "Video", desc: "Generate videos with Haiku, Pika, Runway, Luma, and more", badge: "", btn: "Open", img: "/assets/video.png" },
  { name: "Realtime", desc: "Realtime AI rendering on a canvas", badge: "New", btn: "Open", img: "/assets/realtime.png" },
  { name: "Enhancer", desc: "Upscale and enhance images and videos up to 4K", badge: "", btn: "Open", img: "/assets/enhancer.png" },
  { name: "Edit", desc: "Edit generated images, adjust styles, or add prompt and conversions", badge: "", btn: "Open", img: "/assets/edit.png" },
  { name: "Video Lipsync", desc: "Lip sync any video to any audio", badge: "New", btn: "Open", img: "/assets/video-lip.png" },
  { name: "Motion Transfer", desc: "Transfer motion to images and animated characters", badge: "", btn: "Open", img: "/assets/motion.png" },
  { name: "Train", desc: "Teach Krea to replicate your style, products, or characters", badge: "", btn: "Open", img: "/assets/train.png" },
];

const GenerateSection: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className=" px-6 pt-5 dark:bg-black">
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Generate</h3>
        {/* Show all button */}
        <button className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-700  hover:rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          Show all
          <ChevronUp  className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          /> 
        </button>
      </div>
      <div  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-2000px] opacity-200" : "max-h-0 opacity-0"
        }`}>
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="p-4  rounded-xl flex items-center justify-between dark:hover:bg-gray-800 dark:bg-black hover:shadow-md overflow-hidden relative h-32 dark:hover:shadow-blue-400"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="">
                <img src={tool.img} alt={`${tool.name} icon`} className="rounded-lg h-10 w-15 object-contain" />
              </div>
                <div className=" gap-2">
                  <div className="flex items-center gap-2">
                <h4 className="font-medium text-gray-800 dark:text-gray-200">{tool.name}</h4>
                {tool.badge && ( 
                <span className="text-xs px-2 py-0.5 bg-blue-700 dark:bg-gray-900 text-white dark:text-orange-200 rounded-full">
                  {tool.badge}
                </span>
              )}
               </div>
                 <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{tool.desc}</p>
              </div>
            </div>
           
            <button className="mt-2 px-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              {tool.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenerateSection;