// app/image/page.tsx
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { FC } from 'react';


const ImageGenerator: FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-8 text-white font-sans">
        <Navbar/>
      {/* Header with icon and title */}
      <div className="flex items-center space-x-2 mb-8">
        <Image
          src="/placeholder-icon.png" // Replace with actual icon path
          alt="Image icon"
          width={32}
          height={32}
          className="rounded-md"
        />
        <h1 className="text-3xl font-bold">Image</h1>
      </div>

      {/* Prompt input area */}
      <div className="bg-gray-800 rounded-xl p-4 w-full max-w-2xl text-gray-300 mb-4 text-sm ">
        <textarea className='leading-relaxed  mb-4 w-full p-4' name="" id="">
            A young woman with short black hair, sitting on top of an eagles wing in the style of Rembrandt lighting, with...
        </textarea>
        {/* Controls row */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-2xl space-y-2 sm:space-y-0 sm:space-x-2 mb-8">
        <div className="flex flex-wrap items-center space-x-2 space-y-2 sm:space-y-0">
          <button className="flex items-center space-x-1 bg-transparent border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition">
            <span>○</span>
            <span>Style</span>
          </button>
          <button className="flex items-center space-x-1 bg-transparent border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition">
            <span>□</span>
            <span>Image prompt</span>
          </button>
          <button className="flex items-center space-x-1 bg-transparent border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition">
            <span>○</span>
            <span>Style transfer</span>
          </button>
          <button className="flex items-center space-x-1 bg-transparent border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition">
            <span>↓</span>
            <span>23</span>
          </button>
          <button className="flex items-center space-x-1 bg-transparent border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition">
            <span>♦</span>
            <span>1K</span>
          </button>
        </div>
        <button className="bg-white text-black rounded-full px-6 py-2 text-sm font-semibold hover:bg-gray-200 transition">
          ✦ Generate
        </button>
      </div>
      <button className="flex items-center space-x-1 bg-transparent border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition">
          <span>○</span>
          <span>Raw</span>
        </button>
      </div>
      

      

      {/* Lower section */}
      <div className="w-full max-w-2xl flex flex-col items-start space-y-4">
        
        <p className="text-blue-500 text-sm">Introducing Seedream 4</p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300">Model Krea 1</span>
            <span className="text-gray-500">▼</span>
          </div>
          <p className="text-sm text-gray-500">&gt; Show examples</p>
        </div>
      </div>

      {/* Dark mode styling (base is dark, but add light mode variants if needed) */}
      {/* For system dark mode support, Tailwind handles via 'dark:' prefix, but since design is dark, we assume dark as base */}
      {/* Example: Add className="dark:bg-black dark:text-white" to root if switching modes, but per request, styling for dark mode */}
    </div>
  );
};

export default ImageGenerator;