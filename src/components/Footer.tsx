import { Github, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";

const Footer = () => (
  <footer className="bg-[#1a1a1a] py-8">
    <div className="relative max-w-screen-xl mx-auto px-4">
      {/* Centered “Built with…” */}
      <p className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm flex justify-center items-center gap-2">
        Built with
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <SiTypescript size={16} />
        </a>,
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#61DAFB] transition-colors"
        >
          <SiReact size={16} />
        </a>,
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#06B6D4] transition-colors"
        >
          <SiTailwindcss size={16} />
        </a>
        and 💙
      </p>

      {/* Pinned all the way to the right now */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
        
        
        
        
      </div>
    </div>
  </footer>
);

export default Footer;
