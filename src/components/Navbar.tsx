import { useState, useEffect, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

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
    { name: "About Me", href: "#home" },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3">
      <div className="flex items-center justify-center px-3 max-w-5xl mx-auto">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:block">
          <div className="bg-white/80 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-200/10 dark:border-gray-700/10 rounded-lg px-4 py-2 shadow-md">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-1 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden bg-white/80 dark:bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-200/10 dark:border-gray-700/10 rounded-lg p-2 shadow-md">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated to only show theme toggle */}
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
            <div className="flex items-center justify-end pt-3 border-t border-gray-300 dark:border-gray-600">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-white/10 rounded-lg"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;