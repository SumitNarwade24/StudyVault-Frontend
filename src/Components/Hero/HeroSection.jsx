const HeroSection = () => {
  return (
    <section className="relative bg-black text-white pt-36 pb-20 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125
                        bg-white/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight animate-fade-in">
          All Your Study Material.
          <br />
          <span className="bg-linear-to-r from-gray-100 to-gray-400
                           bg-clip-text text-transparent">
            One Smart Platform.
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          Practice quizzes, read notes, explore PDFs, and watch tutorials —
          everything you need to learn faster and smarter.
        </p>

        <div className="flex justify-center gap-6 animate-fade-in delay-200">
          <button className="px-8 py-4 rounded-full font-semibold text-black
                             bg-linear-to-r from-white to-gray-200
                             hover:scale-105 transition-transform shadow-lg">
            Start Learning
          </button>

          <button className="px-8 py-4 rounded-full font-semibold text-white
                             bg-linear-to-r from-gray-800 to-gray-700
                             border border-white/20
                             hover:scale-105 transition-transform">
            Explore StudyVault
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
