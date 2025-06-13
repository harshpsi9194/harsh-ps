
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Tools I Use</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="bg-[#2a2a2a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-[#3a2a3a] group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
