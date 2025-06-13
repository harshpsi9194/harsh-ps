
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Reviews", href: "#blogs" },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#2d2d2d]/95 backdrop-blur-md border-b border-gray-700/30">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo - Left side */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                H
              </div>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right side - Theme Toggle + Contact */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={() => handleScroll("#contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-2 bg-[#2d2d2d]/95 backdrop-blur-md border-b border-gray-700/30">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200 hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-gray-600">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
