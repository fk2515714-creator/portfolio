import { useState } from "react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side logo */}
        <a href="#" className="text-2xl font-bold gradient-text">
          Portfolio
        </a>

        {/* Right side navigation links */}
        <div className="hidden md:flex space-x-8 ml-auto">
          {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden ml-auto">
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
