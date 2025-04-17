import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Heart, User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-10 animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About Think Before You Click</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn more about why ethical social media sharing matters and how this tool can help.
              </p>
            </div>
            
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-3">Purpose</h3>
                <p className="text-gray-600">
                  The goal is to help social media users pause, reflect, and make more intentional choices about what they share and how they engage online. Because in the digital age, what you share says more than you think — and the consequences can reach further than you realize.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500">
                <h3 className="text-xl font-semibold mb-3">Why It Matters</h3>
                <p className="text-gray-600">
                  In today's hyperconnected world, social media is more than just a way to stay in touch — it's a window into our lives. But as we share, like, and comment, we often overlook how our digital footprints can be pieced together and exploited.

                  Emergent technologies like Open-Source Intelligence (OSINT), deepfake generation, and AI-driven identity theft have empowered bad actors to manipulate and deceive with alarming precision. These tools can be used to impersonate individuals, spread misinformation, or even engineer trust-based scams that feel incredibly personal.

                  This intersection — where social media habits meet emerging tech and ethical decision-making — is where digital vulnerabilities are most exposed. Navigating this space requires awareness, critical thinking, and a solid ethical foundation. Our goal is to help you pause, reflect, and make more intentional choices about what you share and how you engage online.

                  Because in the digital age, what you share says more than you think — and the consequences can reach further than you realize.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-3">How to Use</h3>
                <p className="text-gray-600">
                  Take the quiz, explore different frameworks, and use these insights to develop your own ethical approach to social media sharing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                <div className="flex items-center mb-3">
                  <User className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold">About the Developer</h3>
                </div>
                <p className="text-gray-600">
                  Hi! I'm Emma-Rose Blacher, a second year Computational Social Science student at The University of Amsterdam and this tool is part of my Change Making Expertise assignment.
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
