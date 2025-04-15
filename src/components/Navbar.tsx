import { Menu, X } from "lucide-react";
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
            EthicalShare
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
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-purple-600 transition-colors">
              Quiz
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
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
            About
          </a>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md z-10 transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden py-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-6">
          <Link
            to="/#quiz"
            className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Social Media Ethics Quiz
          </Link>
          <Link
            to="/general-ethics"
            className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            General Ethics Quiz
          </Link>
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
