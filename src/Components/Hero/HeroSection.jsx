import blop from '../../assets/Research.svg'

const HeroSection = () => {
  return (
   <section className="relative bg-black text-white pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">


      {/* blob */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2
                      w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everything you need to
            <br />
            <span className="text-gray-400">study smarter.</span>
          </h1>

          <p className="text-gray-400 mb-8">
            Find quizzes, notes, books and tutorials in seconds.
          </p>

          <input
            placeholder="Search anything..."
            className="w-full md:w-96 px-6 py-3 rounded-full
                       bg-black border border-white/20"
          />
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img src={blop} className="w-80" />
        </div>

      </div>
    </section>
  );
};


export default HeroSection;
