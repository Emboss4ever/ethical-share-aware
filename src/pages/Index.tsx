
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import QuizCard from "@/components/QuizCard";
import EthicalFrameworks from "@/components/EthicalFrameworks";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Index = () => {
  // Smooth scroll to element when URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const scrollToQuiz = () => {
    document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Share Wisely, <span className="text-purple-600">Share Ethically</span>
              </h1>
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
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-lg"
                  onClick={() => document.querySelector("#frameworks")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Frameworks
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in animation-delay-300">
              <div className="bg-white rounded-xl shadow-xl p-6 max-w-md">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Digital Ethics Matter</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Your online actions have real impact. What you share reflects your values and affects others in ways you might not expect.
                </p>
                <ul className="space-y-2 text-gray-600">
                  {["Privacy & consent", "Information accuracy", "Impact awareness", "Digital citizenship"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
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

      {/* Quiz Section */}
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

      {/* Frameworks Section */}
      <section id="frameworks" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <EthicalFrameworks />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Tool</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about why ethical social media sharing matters and how this tool can help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-3">Purpose</h3>
              <p className="text-gray-600">
                This tool was designed to help young adults (16-25) develop a more intentional and ethical approach to what they share online.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500">
              <h3 className="text-xl font-semibold mb-3">Why It Matters</h3>
              <p className="text-gray-600">
                Social media impacts real lives. Understanding ethical frameworks helps you make more conscious decisions about your digital presence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-3">How to Use</h3>
              <p className="text-gray-600">
                Take the quiz, explore different frameworks, and use these insights to develop your own ethical approach to social media sharing.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-center">Tips for Ethical Sharing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-medium">1</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Seek Consent</h4>
                  <p className="text-gray-600 text-sm">
                    Always ask for permission before sharing content that involves others.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-medium">2</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Verify Information</h4>
                  <p className="text-gray-600 text-sm">
                    Check facts before sharing news or information to prevent spreading misinformation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-medium">3</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Consider Impact</h4>
                  <p className="text-gray-600 text-sm">
                    Think about how your content might affect different audiences before posting.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-medium">4</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Respect Privacy</h4>
                  <p className="text-gray-600 text-sm">
                    Use privacy settings intentionally and respect others' privacy boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
