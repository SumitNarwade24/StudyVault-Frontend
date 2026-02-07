import quiz from '../../assets/quiz.svg'
import document from '../../assets/document.svg'
import tutorial from '../../assets/tutorial.svg'
const data = [
  {
    title: "Take Interactive Quizzes",
    desc: "Test your knowledge with instant feedback and progress tracking.",
    cta: "Start Quiz",
    image: quiz
  },
  {
    title: "Access Notes & Study Material",
    desc: "PDFs, notes and material for quick revision anytime.",
    cta: "View Notes",
    image: document
  },
  {
    title: "Watch Curated Tutorials",
    desc: "Handpicked tutorials curated for students.",
    cta: "Watch Tutorials",
    image: tutorial
  }
];

const FeatureSlide = ({ featureIndex, animate }) => {
  const f = data[featureIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

      {/* TEXT */}
      <div className={`transition-all duration-700
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {f.title}
        </h2>

        <p className="text-gray-400 mb-6 max-w-md">
          {f.desc}
        </p>

        <button className="px-6 py-3 rounded-full bg-white text-black font-semibold">
          {f.cta}
        </button>

      </div>

      {/* VISUAL */}
      <div className="flex justify-center">
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl
                        bg-linear-to-br from-gray-800 to-gray-700
                        flex items-center justify-center text-gray-400">
          <img src={f.image} alt="Study illustration" className="hero-svg" />
        </div>
      </div>

    </div>
  );
};

export default FeatureSlide;
