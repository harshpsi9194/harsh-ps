
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const sitemapLinks = [
    { name: "Home", href: "#home"  },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Resources", href: "#resources" },
    { name: "Contact Me", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Sitemap</h3>
            <div className="grid grid-cols-2 gap-2">
              {sitemapLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Socials</h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <IconComponent size={16} />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Henry. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
