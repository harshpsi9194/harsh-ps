
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize theme based on localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
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
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-6">
        {/* Logo Block - Left */}
        <div className="bg-[#2a2a2a]/50 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-700/20 rounded-xl px-4 py-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            H
          </div>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex bg-[#2a2a2a]/50 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-700/20 rounded-xl px-6 py-3">
          <div className="flex items-center space-x-8">
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
        </div>

        {/* Right Block - Theme Toggle + Contact */}
        <div className="hidden md:flex bg-[#2a2a2a]/50 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-700/20 rounded-xl px-4 py-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
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

        {/* Mobile menu button */}
        <div className="md:hidden bg-[#2a2a2a]/50 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-700/20 rounded-xl p-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-4">
          <div className="bg-[#2a2a2a]/50 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-700/20 rounded-xl px-6 py-4 space-y-3">
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
