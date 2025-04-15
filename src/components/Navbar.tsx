
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-purple-600">EthicalShare</h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#quiz" className="text-gray-700 hover:text-purple-600 transition-colors">
            Quiz
          </a>
          <a href="#frameworks" className="text-gray-700 hover:text-purple-600 transition-colors">
            Frameworks
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
            About
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md z-10 transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden py-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-6">
          <a
            href="#quiz"
            className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Quiz
          </a>
          <a
            href="#frameworks"
            className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Frameworks
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
