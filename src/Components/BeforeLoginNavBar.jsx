import { useEffect, useState } from "react";

const placeholders = [
  "Search Quiz...",
  "Search Tutorials...",
  "Search Study Material...",
  "Search Question Bank..."
];

const BeforeLoginNavBar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "Features",
    "Study Material"
  ];

  return (
    <nav className="fixed w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-white">
          StudyVault
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-white">
          {links.map(l => <button key={l}>{l}</button>)}

          <button>Try as Guest</button>
          <button>Login</button>
          <button>Register</button>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black px-4 pb-4 text-white flex flex-col gap-3">
          {links.map(l => <button key={l}>{l}</button>)}
          <button>Try as Guest</button>
          <button>Login</button>
          <button>Register</button>
        </div>
      )}
    </nav>
  );
};


export default BeforeLoginNavBar;
