import { useState,useEffect } from "react";


const placeholders = [
  "Search Quiz...",
  "Search Tutorials...",
  "Search Books...",
  "Search Notes..."
];
const AfterLoginNavBar = ({ user }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [focus, setFocus] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
 useEffect(() => {
     const interval = setInterval(() => {
       setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
     }, 3500);
     return () => clearInterval(interval);
   }, []);
  return (
    <nav className="w-full px-6 py-4 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          StudyVault
        </div>

        {/* Center Menu */}
        <div className="flex items-center gap-8 text-white text-sm font-medium">

          {/* These will be ROUTES later */}
          <button className="hover:text-gray-300 transition">
            Quiz
          </button>

          <button className="hover:text-gray-300 transition">
            PDFs
          </button>

          <button className="hover:text-gray-300 transition">
            Notes
          </button>

          <button className="hover:text-gray-300 transition">
            Books
          </button>

          <button className="hover:text-gray-300 transition">
            Tutorials
          </button>

          {/* Search */}
          <input
            type="text"
             placeholder={focus ? "" : placeholders[placeholderIndex]}
            className="ml-4 w-64 px-4 py-2 rounded-full
                       bg-black border border-white/20
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-white/40"
                       
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-gray-200 dark:bg-black border border-gray-400
                       hover:scale-110 transition-transform"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Profile */}
          <div
            className="w-10 h-10 rounded-full bg-white text-black
                       flex items-center justify-center cursor-pointer
                       hover:scale-105 transition-transform"
            title="Profile"
          >
            {user?.name?.[0] || "U"}
          </div>

        </div>

      </div>
    </nav>
  );
};

export default AfterLoginNavBar;
