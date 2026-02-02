import React from 'react'
import { useEffect, useState } from "react";
const placeholders = [
  "Search jobs...",
  "Search tutorials...",
  "Search projects...",
  "Search interview questions...",
  "Search roadmaps..."
];
const NavBar = () => {
    const [count, setCount] = useState(0)
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Animated placeholder
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  
  return (
    <div>
         <nav className="w-full px-6 py-4 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          MyLogo
        </div>

        {/* Search Bar */}
        <div className="relative w-1/2 hidden md:block">
          <input
            type="text"
            placeholder={placeholders[placeholderIndex]}
            className="w-full px-5 py-2 rounded-full 
                       bg-black border border-white/20
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-white/40
                       transition-all duration-500"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
         <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-gray-200 dark:bg-black border border-gray-400
                       hover:scale-110 transition-transform"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            className="px-5 py-2 rounded-full border border-white text-white
                       hover:bg-white hover:text-black
                       transition-all duration-300"
          >
            Login / Sign Up
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar