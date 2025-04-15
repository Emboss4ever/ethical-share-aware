
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import QuizSection from "@/components/home/QuizSection";
import FrameworksSection from "@/components/home/FrameworksSection";
import AboutSection from "@/components/home/AboutSection";

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
      <FrameworksSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
