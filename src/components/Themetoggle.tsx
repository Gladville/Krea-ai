'use client';
import { useTheme } from "next-themes";
import { ChevronDown, Bell, Sun, } from "lucide-react";
import { MoonIcon } from "@heroicons/react/16/solid";


export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <button className="cursor-pointer" onClick={() =>{setTheme(theme === "light" ? "dark" : "light")} }>
            {theme === "light" ? (
                <Sun  width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
         />
            ) : (
                <MoonIcon  width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        />
            )}
     </button>
            );
        }
