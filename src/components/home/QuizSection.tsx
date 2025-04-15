
import QuizCard from "@/components/QuizCard";

const QuizSection = () => {
  return (
    <section id="quiz" className="py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Assess Your Sharing Ethics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Answer a few questions about how you approach social media sharing to discover which ethical frameworks align with your current practices.
          </p>
        </div>
        <QuizCard />
      </div>
    </section>
  );
};

export default QuizSection;
