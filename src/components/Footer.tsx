
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-purple-600 mb-4">Think Before You Click</h3>
            <p className="text-gray-600 text-sm">
              Helping young adults navigate social media sharing with ethical awareness.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#quiz" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
                  Take the Assessment
                </Link>
              </li>
              <li>
                <Link to="/frameworks" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
                  Ethical Frameworks
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
                  About the Tool
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">About</h3>
            <p className="text-gray-600 text-sm mb-4">
              This tool was designed to help young adults critically evaluate their social media sharing
              practices through various ethical lenses.
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} Think Before You Click. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
