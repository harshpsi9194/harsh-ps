
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Welcome text */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-3 mx-auto">
                H
              </div>
              <h2 className="text-base font-semibold text-white mb-1">Welcome! I'm Henry</h2>
              <p className="text-xs text-gray-300">Professional Web Developer</p>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="lg:w-1/2 text-left">
            <div className="mb-4">
              <p className="text-gray-400 text-xs mb-1">Building Scalable</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                <span className="text-white">Modern Websites</span><br />
                <span className="text-white">for the Future</span>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-8 text-left">
          <p className="text-gray-300 text-xs mb-4 max-w-xl">
            Welcome! I'm Henry, a professional web developer with a knack for crafting
            visually stunning and highly functional websites. Combining creativity and
            technical expertise, I transform your vision into digital masterpiece.
          </p>
          
          <div className="flex gap-8">
            <div>
              <div className="text-lg font-bold text-blue-400 mb-1">
                45<span className="text-blue-300">+</span>
              </div>
              <div className="text-gray-400 text-xs">Project done</div>
            </div>
            
            <div>
              <div className="text-lg font-bold text-purple-400 mb-1">
                10<span className="text-purple-300">+</span>
              </div>
              <div className="text-gray-400 text-xs">Years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
