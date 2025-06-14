import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check system preference on initial load
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f0f0f';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [isDark]);

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
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="flex items-center justify-between px-4">
        {/* Logo Block - Left edge of page */}
        <div className="bg-white/80 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-xl px-4 py-3 shadow-lg">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            H
          </div>
        </div>

        {/* Desktop Navigation - Shifted right */}
        <div className="hidden md:block ml-16">
          <div className="bg-white/80 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-xl px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-8 ml-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Block - Right edge of page */}
        <div className="hidden md:flex bg-white/80 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-xl px-4 py-3 shadow-lg">
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-white/10 rounded-lg"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button
              onClick={() => handleScroll("#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Mobile menu button - Right edge of page */}
        <div className="md:hidden bg-white/80 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-3 shadow-lg">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-4">
          <div className="bg-white/80 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-xl px-6 py-4 space-y-3 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-gray-300 dark:border-gray-600">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-white/10 rounded-lg"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
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