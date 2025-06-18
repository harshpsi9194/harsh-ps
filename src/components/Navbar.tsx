import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Me", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Resources", href: "#resources" }
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
    <nav className="fixed top-0 left-0 right-0 z-50 py-10">
      <div className="flex items-center justify-end px-3 max-w-screen-xl mx-auto relative">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
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

        {/* Right Block - Social Icons */}
        <div className="hidden md:flex bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-700/10 rounded-lg px-4 py-2 shadow-md absolute right-4">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/harshpsi9194"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-pratap-singh-86961a282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://twitter.com/your_twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://discord.com/users/mahabali_kai_fu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaDiscord size={16} />
            </a>
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-4">
          <div className="bg-[#2a2a2a]/50 backdrop-blur-md border border-gray-700/10 rounded-lg px-6 py-4 space-y-3 shadow-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg text-sm font-medium w-full text-left transition-colors duration-200 hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-center pt-3 border-t border-gray-600 space-x-6">
              <a
                href="https://github.com/harshpsi9194"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-pratap-singh-86961a282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://twitter.com/your_twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://discord.com/users/your_discord_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaDiscord size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;