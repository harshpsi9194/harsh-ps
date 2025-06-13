
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize theme based on current state
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#about" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
        {/* Logo Block - Left */}
        <div className="bg-[#2a2a2a]/95 backdrop-blur-md border border-gray-700/30 rounded-xl px-3 py-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
            H
          </div>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex bg-[#2a2a2a]/95 backdrop-blur-md border border-gray-700/30 rounded-xl px-4 py-2">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white px-2 py-1 rounded-lg text-xs font-medium transition-colors duration-200 hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Block - Theme Toggle + Contact */}
        <div className="hidden md:flex bg-[#2a2a2a]/95 backdrop-blur-md border border-gray-700/30 rounded-xl px-3 py-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            
            <button
              onClick={() => handleScroll("#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden bg-[#2a2a2a]/95 backdrop-blur-md border border-gray-700/30 rounded-xl p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="bg-[#2a2a2a]/95 backdrop-blur-md border border-gray-700/30 rounded-xl px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white block px-2 py-1 rounded-lg text-xs font-medium w-full text-left transition-colors duration-200 hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-gray-600">
              <button
                onClick={toggleTheme}
                className="p-1.5 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
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
