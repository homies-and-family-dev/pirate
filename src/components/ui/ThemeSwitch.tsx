"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-2 rounded-full bg-gradient-to-br from-[#001220]/90 to-black/80 backdrop-blur-md border border-gold/20 hover:border-gold/40 transition-all duration-300 shadow-[0_2px_15px_rgba(0,0,0,0.3)]"
      aria-label="Toggle theme"
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {theme === 'day' ? (
          <Sun className="w-6 h-6 text-gold transition-all duration-300 group-hover:scale-110" />
        ) : (
          <Moon className="w-6 h-6 text-gold transition-all duration-300 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </button>
  );
} 