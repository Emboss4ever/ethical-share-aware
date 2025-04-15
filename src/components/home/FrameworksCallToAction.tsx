
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FrameworksCallToAction = () => {
  return (
    <section id="frameworks" className="bg-purple-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Understand Ethical Frameworks
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Dive deeper into the ethical principles that guide responsible digital citizenship and learn how different frameworks can help you make more mindful online choices.
        </p>
        <Link to="/frameworks">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg">
            Explore Ethical Frameworks
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FrameworksCallToAction;
