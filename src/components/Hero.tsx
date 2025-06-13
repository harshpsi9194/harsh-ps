
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-[#2a2a2a] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Welcome! I'm Henry
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-3 leading-relaxed">
              A professional web developer with a knack for crafting
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              visually stunning and highly functional websites.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  45<span className="text-blue-300">+</span>
                </div>
                <div className="text-gray-400 text-sm">Project done</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">
                  10<span className="text-purple-300">+</span>
                </div>
                <div className="text-gray-400 text-sm">Years of experience</div>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Brand icon bottom right */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg opacity-20">
            H
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
