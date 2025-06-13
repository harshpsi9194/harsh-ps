
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
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Resources", href: "#resources" },
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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`transition-all duration-300 rounded-xl px-4 py-2 ${
          scrolled
            ? "bg-[#3a3a3a]/90 backdrop-blur-md shadow-lg"
            : "bg-[#3a3a3a]/80 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              H
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white px-2 py-1 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            {/* Contact Me Button */}
            <button
              onClick={() => handleScroll("#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="px-3 py-2 space-y-1 bg-[#3a3a3a]/95 backdrop-blur-md rounded-xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white block px-2 py-1.5 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200 hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-gray-600">
              <button
                onClick={toggleTheme}
                className="p-1.5 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300"
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
