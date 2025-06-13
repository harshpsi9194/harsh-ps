
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=300&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      tech: ["React", "Firebase", "Tailwind"]
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with animations and dark mode",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      tech: ["React", "Framer Motion", "CSS"]
    }
  ];

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    className="flex-1 bg-gray-600 hover:bg-gray-500 text-white text-center py-1.5 rounded-lg text-sm transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center py-1.5 rounded-lg text-sm transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
