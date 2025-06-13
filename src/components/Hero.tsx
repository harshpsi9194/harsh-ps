
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-left">
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">Building Scalable</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-white">Modern Websites</span><br />
                <span className="text-white">for the Future</span>
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Download CV
                <ArrowRight size={16} />
              </button>
              <button className="text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Scroll down
              </button>
            </div>
          </div>
          
          {/* Right side - Profile image placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  H
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">Welcome! I'm Henry</h2>
                <p className="text-sm text-gray-300">Professional Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section moved to bottom */}
        <div className="mt-16 text-left">
          <p className="text-gray-300 text-sm mb-6 max-w-2xl">
            Welcome! I'm Henry, a professional web developer with a knack for crafting
            visually stunning and highly functional websites. Combining creativity and
            technical expertise, I transform your vision into digital masterpiece that excels
            in both appearance and performance.
          </p>
          
          <div className="flex gap-12">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">
                45<span className="text-blue-300">+</span>
              </div>
              <div className="text-gray-400 text-sm">Project done</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">
                10<span className="text-purple-300">+</span>
              </div>
              <div className="text-gray-400 text-sm">Years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
