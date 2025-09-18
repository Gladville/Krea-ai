"use client";

import { FC, useState } from "react";
import { ChevronDown, Bell, Sun, Moon } from "lucide-react";

const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle light/dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      {/* Left - Logo + Username */}
      <div className="flex items-center gap-3 relative">
        <img src="/logo.svg" alt="Krea Logo" className="w-6 h-6" />

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <span className="font-medium text-gray-800 dark:text-gray-200">
            benevolentminibeast
          </span>
          <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
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
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1">
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
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        {/* Gallery */}
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
          <img src="/gallery-icon.svg" alt="Gallery" className="w-5 h-5" />
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Gallery
          </span>
        </div>

        {/* Support */}
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
          <img src="/headset-icon.svg" alt="Support" className="w-5 h-5" />
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Support
          </span>
        </div>

        {/* Notifications */}
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
          <Bell className="w-5 h-5 text-black dark:text-white" />
        </div>

        {/* Dark/Light Mode Toggle */}
        <div
          onClick={toggleDarkMode}
          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer"
        >
          {darkMode ? (
            <Moon className="w-5 h-5 text-black dark:text-white" />
          ) : (
            <Sun className="w-5 h-5 text-black dark:text-white" />
          )}
        </div>

        {/* User Profile Picture */}
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </nav>
  );
};

export default Navbar;
