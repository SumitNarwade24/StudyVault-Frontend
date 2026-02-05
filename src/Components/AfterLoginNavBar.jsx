import { useEffect, useState } from "react";

const placeholders = [
  "Search Quiz...",
  "Search Tutorials...",
  "Search Books...",
  "Search Notes..."
];

const menuItems = ["Quiz", "PDFs", "Notes", "Books", "Tutorials"];

const AfterLoginNavBar = ({ user, darkMode, setDarkMode }) => {
  const [idx, setIdx] = useState(0);
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu

  useEffect(() => {
    const i = setInterval(() => {
      setIdx(p => (p + 1) % placeholders.length);
    }, 3500);
    return () => clearInterval(i);
  }, []);

  return (
    <nav className="w-full bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* ===== TOP BAR ===== */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-white">
            StudyVault
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
            {menuItems.map(item => (
              <button key={item} className="hover:text-gray-300">
                {item}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">

            {/* Desktop search */}
            <input
              type="text"
              placeholder={focus ? "" : placeholders[idx]}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="hidden md:block w-56 px-4 py-2 rounded-full
                         bg-black border border-white/20
                         text-white placeholder-gray-400"
            />

            {/* Dark mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full flex items-center justify-center
                         bg-gray-200 dark:bg-black border border-gray-400"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* Profile */}
            <div className="w-9 h-9 rounded-full bg-white text-black
                            flex items-center justify-center font-semibold">
              {user?.name?.[0] || "U"}
            </div>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>

          </div>
        </div>

        {/* ===== MOBILE SEARCH ===== */}
        <div className="md:hidden mt-3">
          <input
            type="text"
            placeholder={focus ? "" : placeholders[idx]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="w-full px-4 py-2 rounded-full
                       bg-black border border-white/20
                       text-white placeholder-gray-400"
          />
        </div>

        {/* ===== MOBILE MENU ===== */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-3 text-white">
            {menuItems.map(item => (
              <button
                key={item}
                className="text-left px-4 py-2 rounded-lg
                           hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default AfterLoginNavBar;
