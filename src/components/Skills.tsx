
const Skills = () => {
  const tools = [
    { name: "Figma", description: "Design tool", icon: "🎨" },
    { name: "CSS", description: "User Interface", icon: "🎯" },
    { name: "JavaScript", description: "Interaction", icon: "⚡" },
    { name: "NodeJS", description: "Web Server", icon: "🔋" },
    { name: "ExpressJS", description: "Node Framework", icon: "🚀" },
    { name: "MongoDB", description: "Database", icon: "🗄️" },
    { name: "React", description: "Framework", icon: "⚛️" },
    { name: "TailwindCSS", description: "User Interface", icon: "🌊" },
  ];

  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Essential Tools I Use</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="bg-[#2a2a2a] p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#3a2a3a] group"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
              <p className="text-gray-400 text-xs">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
