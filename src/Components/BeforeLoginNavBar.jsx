import { useEffect, useState } from "react";

const placeholders = [
  "Search Quiz...",
  "Search Tutorials...",
  "Search Study Material...",
  "Search Question Bank..."
];

const BeforeLoginNavBar = ({ darkMode, setDarkMode }) => {
  const [idx, setIdx] = useState(0);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* SINGLE ROW (desktop) / STACKED (mobile) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            StudyVault
          </div>

          {/* Search (desktop only – matches original design) */}
          <div className="relative hidden md:block md:w-1/2">
            <input
              type="text"
              placeholder={focus ? "" : placeholders[idx]}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="w-full px-5 py-2 rounded-full
                         bg-black border border-white/20
                         text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            <button
              className="px-4 py-2 rounded-full border border-white text-white
                         hover:bg-white hover:text-black transition"
            >
              Start Learning
            </button>

            <button
              className="px-4 py-2 rounded-full bg-white text-black
                         hover:opacity-80 transition"
            >
              Try as Guest
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-full
                         bg-gray-200 dark:bg-black border border-gray-400
                         hover:scale-105 transition-transform"
              title="Toggle theme"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

          </div>

          {/* Search (mobile only – better UX) */}
          <div className="relative md:hidden w-full">
            <input
              type="text"
              placeholder={focus ? "" : placeholders[idx]}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="w-full px-5 py-2 rounded-full
                         bg-black border border-white/20
                         text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>

        </div>

      </div>
    </nav>
  );
};

export default BeforeLoginNavBar;
