import quiz from '../../assets/quiz.svg' 

const QuizSection = () => {
  return (
    <section className="bg-black text-white py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* VISUAL */}
        <div className="flex justify-center">
          <img src={quiz} className="w-72" />
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Practice with real quizzes
          </h2>

          <p className="text-gray-400 mb-6">
            Track progress, improve accuracy, and revise faster.
          </p>

          <button className="px-6 py-3 rounded-full bg-white text-black">
            Start Practicing
          </button>
        </div>

      </div>
    </section>
  );
};
export default QuizSection;