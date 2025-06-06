
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-purple-600">
            Think Before You Click
          </Link>
        </div>

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

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
            About
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-purple-600 transition-colors">
              Quizzes
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/#quiz" className="w-full">
                  Social Media Ethics Quiz
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/general-ethics" className="w-full">
                  General Ethics Quiz
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/risks" className="text-gray-700 hover:text-purple-600 transition-colors inline-flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            Social Media Privacy Risks
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md z-10 transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden py-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-6">
          <Link
            to="/about"
            className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          
          <div className="border-t pt-2">
            <div className="font-medium text-gray-900 mb-2">Quizzes</div>
            <div className="pl-5 flex flex-col space-y-2">
              <Link
                to="/#quiz"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Social Media Ethics Quiz
              </Link>
              <Link
                to="/general-ethics"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                General Ethics Quiz
              </Link>
            </div>
          </div>
          
          <div className="border-t pt-2">
            <div className="font-medium text-gray-900 mb-2 flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              Social Media Privacy Risks
            </div>
            <div className="pl-5 flex flex-col space-y-2">
              <Link
                to="/risks"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Risks
              </Link>
              <Link
                to="/risks/osint"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                OSINT Vulnerabilities
              </Link>
              <Link
                to="/risks/deepfakes"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Deepfake Exploitation
              </Link>
              <Link
                to="/risks/identity-theft"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Identity Theft
              </Link>
              <Link
                to="/risks/data-theft"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Data Theft
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
