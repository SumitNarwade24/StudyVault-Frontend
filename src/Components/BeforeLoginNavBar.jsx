import React from 'react'
import { useEffect, useState } from "react";

const placeholders = [
  "Search Quiz...",
  "Search Tutorials...",
  "Search Study Material...",
  "Search Question Bank..."
];
const BeforeLoginNavBar = () => {
         const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
<>
    <nav className="w-full px-6 py-4 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">StudyVault</div>

        {/* Search */}
        <div className="relative w-1/2 hidden md:block">
          <input
            type="text"
            placeholder={focus ? "" : placeholders[placeholderIndex]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="w-full px-5 py-2 rounded-full bg-black border border-white/20
                       text-white placeholder-gray-400 focus:ring-2 focus:ring-white/40"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full border border-white text-white
                             hover:bg-white hover:text-black transition">
            Start Learning
          </button>

          <button className="px-4 py-2 rounded-full bg-white text-black
                             hover:opacity-80 transition">
            Try as Guest
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-gray-200 dark:bg-black border"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

      </div>
    </nav>
    </>
  )
}

export default BeforeLoginNavBar