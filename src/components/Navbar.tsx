"use client";

import { ElementType, FC, useState } from "react";
import { ChevronDown, ImagePlusIcon, Headset} from "lucide-react";
import ThemeToggle from "./Themetoggle";
import { HomeIcon, VideoCameraIcon } from "@heroicons/react/16/solid";
import {PhotoIcon} from "@heroicons/react/16/solid";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaPenFancy, FaBell } from "react-icons/fa";
import { CiPen } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";
 
interface CenterItem {
  type: "icon" | "image";
  component?: ElementType; // React component like Lucide/Heroicons
  src?: string;            // for images
}

export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

    // Config for center items
  const centerItems = [
    { type: "icon", component: HomeIcon },
     { type: "icon", component: PhotoIcon },
    { type: "icon", component: VideoCameraIcon},
    { type: "icon", component: FaWandMagicSparkles},
    { type: "icon", component: FaPenFancy},
    { type: "icon", component: CiPen},
    { type: "icon", component: FaFolder},
  ];
  


  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      {/* Left - Logo + Username */}
      <div className="flex items-center gap-3 relative">
        <img src="/assets/krea-logo.svg" alt="Krea Logo" className="w-6 h-6 dark:bg-white " />

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
         
             <img src="/assets/pink.svg" alt="Krea Logo" className="w-8 h-8 rounded-full dark:bg-white " />
          
          <span className="font-medium text-gray-800 dark:text-gray-200">
            benevolentminibeast
          </span>
          <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300 transform rotate-180" />
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-12 left-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md w-40">
            <ul className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Center - Icons with gray background */}
      {/* <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 cursor-pointer"
          >
            <img
              src={`/icon-${i + 1}.svg`}
              alt={`icon-${i + 1}`}
              className="w-5 h-5"
            />
          </div>
        ))}
      </div> */}
       <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1">
        {centerItems.map((item, i) => (
          <div
            key={i}
            className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 cursor-pointer"
          >
            {item.type === "icon" ? (
              <item.component className="w-5 h-5 text-black dark:text-white" />
            ) : (
              <img src={item.src!} alt={`item-${i}`} className="w-5 h-5" />
            )}
          </div>
        ))}
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        {/* Gallery */}
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-50  dark:hover:bg-gray-700">
          <ImagePlusIcon  className="w-5 h-5" />
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Gallery
          </span>
        </div>

        {/* Support */}
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-50">
          <Headset  className="w-5 h-5" />
          <span className="text-sm text-gray-700 dark:text-gray-200 ">
            Support
          </span>
        </div>

        {/* Notifications */}
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-50">
          <FaBell className="w-5 h-5 text-black dark:text-white" />
        </div>

        {/* Dark/Light Mode Toggle */}
        <div>
          <ThemeToggle />
        </div>

        {/* User Profile Picture */}
        <img src="/assets/pink.svg" alt="Krea Logo" className="w-8 h-8 rounded-full dark:bg-white " />
      </div>
    </nav>
  );
};


