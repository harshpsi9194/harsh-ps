
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-[#2a2a2a] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Welcome! I'm Henry
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-2 leading-relaxed">
              A professional web developer with a knack for crafting
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              visually stunning and highly functional websites.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                  45<span className="text-blue-300">+</span>
                </div>
                <div className="text-gray-400 text-sm">Projects done</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                  10<span className="text-purple-300">+</span>
                </div>
                <div className="text-gray-400 text-sm">Years of experience</div>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
              <ArrowRight size={16} />
            </button>
          </div>
          
          {/* Brand icon bottom right */}
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm opacity-20">
            H
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
