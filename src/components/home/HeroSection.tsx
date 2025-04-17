import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToQuiz = () => {
    document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              "To share, or not to share: <span className="text-purple-600">that is the question!</span>"
            </h1>
            <p className="text-lg text-gray-700 mb-4 max-w-xl italic">
              - William Shakespeare (well, kinda)
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Evaluate your social media sharing practices through ethical frameworks designed for today's digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg"
                onClick={scrollToQuiz}
              >
                Take the Quiz
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in animation-delay-300">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-md">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Digital Ethics & Online Vulnerability</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Every post, comment, and share online can expose you to hidden risks. Understanding how your digital actions can be exploited by emerging threats—such as identity theft, OSINT, and deepfake manipulation—is essential.
              </p>
              <ul className="space-y-2 text-gray-600">
                {["Privacy & Consent: Recognize how sharing personal data online can expose you and others to harm", 
                   "Information Accuracy: Learn to discern truth from manipulation in an environment filled with sophisticated misinformation", 
                   "Impact Awareness: Be aware that your digital footprint can be leveraged against you or those around you in unexpected ways"].map((item, i) => (
                  <li key={i} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            className="text-gray-500 hover:text-purple-600 hover:bg-transparent animate-bounce"
            onClick={scrollToQuiz}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
