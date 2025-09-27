'use client';

import {
  ChevronDown,
  ChevronUp,
  Gem,
  ImageIcon,
  Image as LucideImage,
  Palette,
  RectangleHorizontal,
  RotateCw,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import React from 'react';
import Navbar from '@/components/Navbar';

// A simple button component for the action pills
const ActionButton = ({ icon: Icon, text }: { icon: React.ElementType; text: string;    }) => (
  <button className="flex items-center gap-2 mt-3 px-3 py-1.5 darK text-black dark:text-white rounded-full text-sm hover:border  bg-white hover:border-gray-400 dark:bg-gray-700 dark:hover:bg-neutral-600 transition-colors">
    <Icon size={16} />
    <span>{text}</span>
  </button>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white p-4">
        <Navbar/>
      {/* Header */}
      <header className="w-full flex justify-center py-6">
        <div className="flex items-center gap-4">
            <img src="/assets/image.png" alt="" className="w-13 h-13 rounded-2xl"/>
          
          <h1 className="text-[50px] font-bold text-black dark:text-white">Image</h1>
        </div>
      </header> 

    {/* Main Content */}
<main className="flex-grow flex items-center justify-center px-4 pb-14">
  <div className="w-full max-w-3xl">
    <div className="flex flex-col md:flex-row dark:bg-gray-800 bg-gray-200/100  rounded-3xl p-4 sm:p-6 shadow-lg gap-4">
      {/* Left section (textarea + controls) */}
      <div className="flex-1">
        <textarea
          className="w-full h-28 sm:h-36 bg-transparent text-lg text-gray-800 dark:text-neutral-200 focus:outline-none resize-none "
          placeholder="Describe an image and click generate"
        />

        {/* Action buttons row */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <ActionButton icon={Palette} text="Style" />
          <ActionButton icon={ImageIcon} text="Image prompt" />
          <ActionButton icon={WandSparkles} text="Style transfer" />
          <ActionButton icon={RectangleHorizontal} text="2:3" />
          <ActionButton icon={Gem} text="1K" />
        </div>

        {/* Raw button */}
        <div className="mt-3">
          <ActionButton icon={RotateCw} text="Raw" />
        </div>
      </div>

      {/* Right section (Generate button) */}
      <div className="flex justify-center md:justify-end">
        <button className="w-full md:w-auto md:mt-40 flex items-center justify-center py-3 px-5 bg-white text-black rounded-xl font-semibold text-lg dark:hover:bg-neutral-200 transition-colors shadow-sm hover:shadow-2xl hover:border-gray-300 hover:border-2">
          <Sparkles size={20} className="mr-2" />
          <span>Generate</span>
        </button>
      </div>
    </div>
  </div>
</main>


      {/* Footer */}
      <footer className="w-full flex justify-between text-sm p-4">
        <div className="flex flex-col gap-2 items-start">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs shadow-lg">
                Introducing Seeddream 4
            </div>
            <button className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <span>Model Krea 1</span>
                <ChevronDown size={16} />
            </button>
        </div>
        <button className="flex items-center gap2  text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium">
            <ChevronUp size={16} />
            <span>Show examples</span>
        </button>
      </footer>
    </div>
  );
}