
import GeneralEthicsQuiz from "@/components/quiz/GeneralEthicsQuiz";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GeneralEthics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <GeneralEthicsQuiz onClose={() => window.history.back()} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GeneralEthics;
