
import { Github, Linkedin, Twitter, Badge } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left side - Welcome text */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                H
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">Welcome! I'm Henry</h2>
              <p className="text-sm text-gray-300">Professional Web Developer</p>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="lg:w-1/2 text-left">
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">Building Scalable</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="text-white">Modern Websites</span><br />
                <span className="text-white">for the Future</span>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Social links section */}
        <div className="mt-10 text-left">
          <p className="text-gray-300 text-sm mb-6 max-w-2xl">
            Welcome! I'm Henry, a professional web developer with a knack for crafting
            visually stunning and highly functional websites. Combining creativity and
            technical expertise, I transform your vision into digital masterpiece.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/harshpsi9194" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Github size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">GitHub</div>
                <div className="text-gray-400 text-xs">View my code</div>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/harsh-pratap-singh-86961a282/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">LinkedIn</div>
                <div className="text-gray-400 text-xs">Connect with me</div>
              </div>
            </a>

            <a 
              href="https://x.com/HaRsh_PS9194" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-black-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">X</div>
                <div className="text-gray-400 text-xs">Follow me on X</div>
              </div>
            </a>

            <a 
              href="https://www.kaggle.com/harsh18189" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-blue-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Badge size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">Kaggle</div>
                <div className="text-gray-400 text-xs">View my Notebooks</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
