
import React from 'react';
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

                  This intersection — where social media habits meet emerging tech and ethical decision-making — is where digital vulnerabilities are most exposed. Navigating this space requires awareness, critical thinking, and a solid ethical foundation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-3">How to Use</h3>
                <p className="text-gray-600">
                  Take the social media ethics quiz, analyse your score breakdown, which frameworks you operate within and how this can potentially open you up to certain vulnerabilities in the face of the risks mentioned. You can also take the 'general ethics' quiz to see if your behaviours with regards to social media align with your general ethical alignment. Use these insights to develop your own ethical approach to social media sharing and be more aware of the potential consequences.
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
