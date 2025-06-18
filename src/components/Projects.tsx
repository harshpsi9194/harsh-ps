import { ChevronRight , Github, FileText } from "lucide-react";
import { useState, useRef } from "react";
import { X } from "lucide-react";

const Projects = () => {
  const [previewProject, setPreviewProject] = useState<any>(null);
  const projectsRef = useRef<{ [key: number]: HTMLElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Multivariate time series forecasting",
      description: "Advanced forecasting model for complex time series data analysis",
      image: "./images/tsf.webp",
      github: "https://github.com/harshpsi9194/Time-Series-Forecasting",
      fullDescription: "Implemented time series forecasting using ARIMA variants, PCA, ADF test, and data preprocessing with interpolation and outlier removal."
    },
    {
      id: 2,
      title: "Block Bloom: DeFi App using Solidity",
      description: "Blockchain-based application with innovative bloom filter implementation",
      image: "./images/blockchian.jpeg",
      github: "https://github.com/harshpsi9194/BlockBloom",
      fullDescription: "The project implements a simple DeFI application using smart contracts written in Solidity."
    },
    {
      id: 3,
      title: "Game Theory: Indian Economy",
      description: "Economic modeling using game theory principles for Indian market analysis",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=300&q=80",
      github: "https://github.com/harshpsi9194/PPOC-SUMMER-PROJECT-GAME-THEORY-INDIAN-ECONOMY",
      fullDescription: "A comprehensive analysis of the Indian economy through the lens of game theory."
    },
    {
      id: 4,
      title: "DRAW: Implementing Google DeepMind's Paper",
      description: "Implementation of Google DeepMind's DRAW neural network architecture",
      image: "./images/DRAW.png",
      github: "https://github.com",
      arxivLink: "https://arxiv.org/abs/1502.04623",
      fullDescription: "An implementation of Google DeepMind's DRAW (Deep Recurrent Attentive Writer) paper. This project recreates the attention-based neural network architecture for image generation and demonstrates the power of sequential attention mechanisms in deep learning."
    },
    {
      id: 5,
      title: "Code generator for Manim library",
      description: "Automated code generation tool for mathematical animations using Manim",
      image: "./images/Pasted image.png",
      github: "https://github.com",
      fullDescription: "An intelligent code generator that automatically creates Manim animations from mathematical descriptions."
    },
    {
      id: 6,
      title: "RNNs from scratch",
      description: "Complete implementation of Recurrent Neural Networks from fundamental principles",
      image: "./images/rnn.jpeg",
      github: "https://github.com",
      fullDescription: "A comprehensive implementation of Recurrent Neural Networks built from scratch without using high-level frameworks. This project demonstrates a deep understanding of RNN architecture, backpropagation through time, and gradient flow in sequential models."
    },
    {
      id: 7,
      title: "Wordle Solver",
      description: "Python based wordle solver. It is my ambitious attempt to beat my friends in the game of Wordle",
      image: "./images/wordle.jpeg",
      github: "https://github.com",
      fullDescription: "Its a simple python based wordle solver, which uses probability as its fundamental approach to solve the game."
    }
  ];

  const handlePreview = (project: any) => {
    setPreviewProject(project);
  };

  const closePreview = () => {
    setPreviewProject(null);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePreview();
    }
  };

  return (
    <section id="projects" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">Some Projects I have worked on</h2>
          <p className="text-gray-400 text-[16px] max-w-3xl mx-auto">
            These are some of the projects I have worked upon, there are
            a few others as well, on which I am currently working on. Will be updating them 
            soon as well. 
          </p>
        </div>

        {/* Projects */}
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="flex flex-wrap justify-right gap-2"
            style={{ maxWidth: 'fit-content' }}
          >
            {projects.map((project) => {
              return (
                <article
                  key={project.id}
                  ref={el => projectsRef.current[project.id] = el}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 relative group w-56"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-center">
                      <button
                        onClick={() => handlePreview(project)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs font-medium border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
                      >
                        View
                        <ChevronRight  size={12} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Thin Line */}
        <div className="mt-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Preview Modal */}
        {previewProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
          >
            <div className="bg-[#2a2a2a] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-500 text-white rounded-full p-2 transition-all duration-200 z-10"
              >
                <X size={20} />
              </button>
              
              <div className="relative h-64 overflow-hidden">
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{previewProject.title}</h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {previewProject.fullDescription}
                </p>
                
                <div className="flex justify-center gap-4">
                  <a
                    href={previewProject.github}
                    className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {previewProject.id === 4 && (
                    <a
                      href={previewProject.arxivLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <FileText size={16} />
                      ArXiv
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;