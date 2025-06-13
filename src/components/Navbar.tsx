
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: "Contact Me", href: "#contact" },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`transition-all duration-300 rounded-2xl px-6 py-3 ${
          scrolled
            ? "bg-[#1f1f1f]/90 backdrop-blur-md shadow-lg"
            : "bg-[#2a2a2a]/80 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              H
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="px-4 py-3 space-y-2 bg-[#1f1f1f]/95 backdrop-blur-md rounded-2xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200 hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
