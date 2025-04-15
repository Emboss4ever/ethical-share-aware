
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import QuizSection from "@/components/home/QuizSection";
import AboutSection from "@/components/home/AboutSection";
import FrameworksCallToAction from "@/components/home/FrameworksCallToAction";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <QuizSection />
      <AboutSection />
      <FrameworksCallToAction />
      <Footer />
    </div>
  );
};

export default Index;
