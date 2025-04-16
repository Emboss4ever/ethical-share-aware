import { Code2, Heart, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Think Before You Click</h2>
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
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
            <div className="flex items-center mb-3">
              <User className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-semibold">About the Developer</h3>
            </div>
            <p className="text-gray-600">
              Hi! I'm Sarah, a computer science student passionate about the intersection of technology and ethics. 
              I created EthicalShare to help young adults navigate the complex world of social media sharing with 
              greater awareness and responsibility.
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
  );
};

export default AboutSection;
