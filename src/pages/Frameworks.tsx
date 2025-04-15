
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EthicalFrameworks from "@/components/EthicalFrameworks";

const Frameworks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Understanding Ethical Frameworks</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the different ethical frameworks and how they shape our decision-making in both digital and real-world contexts.
            </p>
          </div>
          <EthicalFrameworks />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Frameworks;
