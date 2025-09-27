'use client';
import { useTheme } from "next-themes";
import {Sun, Moon } from "lucide-react";



export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <button className="cursor-pointer" onClick={() =>{setTheme(theme === "light" ? "dark" : "light")} }>
            {theme === "light" ? (
                <Sun   width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon w-5 h-5"
         />
            ) : (
                <Moon  width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon w-5 h-5"
        />
            )}
     </button>
            );
        }
