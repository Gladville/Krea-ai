"use client";

import { ElementType, useState } from "react";
import {
  ChevronDown,
  ImagePlusIcon,
  Headset,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./Themetoggle";
import { HomeIcon, VideoCameraIcon, PhotoIcon } from "@heroicons/react/16/solid";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaPenFancy, FaBell, FaFolder } from "react-icons/fa";
import { CiPen } from "react-icons/ci";

interface CenterItem {
  type: "icon" | "image";
  component?: ElementType;
  src?: string;
  label?: string;
}

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const centerItems: CenterItem[] = [
    { type: "icon", component: HomeIcon, label: "Home" },
    { type: "icon", component: PhotoIcon, label: "Photos" },
    { type: "icon", component: VideoCameraIcon, label: "Videos" },
    { type: "icon", component: FaWandMagicSparkles, label: "Magic" },
    { type: "icon", component: FaPenFancy, label: "Articles" },
    { type: "icon", component: CiPen, label: "Edit" },
    { type: "icon", component: FaFolder, label: "Files" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Left - Logo + Username */}
          <div className="flex items-center gap-3 relative">
            <img
              src="/assets/krea-logo.svg"
              alt="Krea Logo"
              className="w-6 h-6 dark:bg-white"
            />

            <div
              className="hidden sm:flex items-center gap-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src="/assets/pink.svg"
                alt="profile"
                className="w-8 h-8 rounded-full dark:bg-white"
              />

              <span className="font-medium text-gray-800 dark:text-gray-200">
                benevolentminibeast
              </span>
              <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </div>

            {dropdownOpen && (
              <div className="absolute top-12 left-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md w-40 z-30">
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

          {/* Center - Scrollable Icons */}
          <div className="flex-1 mx-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1 w-max">
              {centerItems.map((item, i) => {
                const Icon = item.component as ElementType | undefined;
                return (
                  <div
                    key={i}
                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 cursor-pointer flex-shrink-0"
                  >
                    {item.type === "icon" && Icon ? (
                      <Icon className="w-5 h-5 text-black dark:text-white" />
                    ) : (
                      <img
                        src={item.src!}
                        alt={item.label || `item-${i}`}
                        className="w-5 h-5"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right (desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <ImagePlusIcon className="w-5 h-5" />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Gallery
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <Headset className="w-5 h-5" />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Support
              </span>
            </div>

            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <FaBell className="w-5 h-5 text-black dark:text-white" />
            </div>

            <ThemeToggle />

            <img
              src="/assets/pink.svg"
              alt="profile"
              className="w-8 h-8 rounded-full dark:bg-white"
            />
          </div>

          {/* Hamburger (mobile only) */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-sm z-40">
          <div className="px-4 py-4 flex flex-col gap-3">
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <ImagePlusIcon className="w-5 h-5" />
              <span className="text-sm text-gray-800 dark:text-gray-200">
                Gallery
              </span>
            </button>

            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <Headset className="w-5 h-5" />
              <span className="text-sm text-gray-800 dark:text-gray-200">
                Support
              </span>
            </button>

            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-3">
                <FaBell className="w-5 h-5 text-black dark:text-white" />
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  Notifications
                </span>
              </div>
              <ThemeToggle />
            </div>

            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <img
                src="/assets/pink.svg"
                className="w-8 h-8 rounded-full"
                alt="profile"
              />
              <span className="text-sm text-gray-800 dark:text-gray-200">
                View profile
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
