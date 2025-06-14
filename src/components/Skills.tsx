import { 
  FaReact, 
  FaPython, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaDocker 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss, 
  SiPostgresql,
  SiPytorch,
  SiKubernetes,
  SiRust,
  SiGo,
  SiVim
} from 'react-icons/si';

const Skills = () => {
  const skills = [
  {
      name: "Git",
      icon: FaGitAlt,
      description: "Version Control"
  },
  {
    name: <i>Vim</i>,
    icon: SiVim,
    description: "Text Editor"
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    description: "Deep Learning"
  },
  {
    name: "Rust",
    icon: SiRust,
    description: "Systems Programming"
  },
  {
    name: "Go",
    icon: SiGo,
    description: "Backend Development"
  },
  {
      name: "Docker",
      icon: FaDocker,
      description: "Containerization"
    },
    {
    name: "Kubernetes",
    icon: SiKubernetes,
    description: "Container Orchestration"
  },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description: "NoSQL Database"
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      description: "SQL Database"
    },
  {
      name: "TypeScript",
      icon: SiTypescript,
      description: "Type-Safe JS"
  },
  {
      name: "Node.js",
      icon: FaNodeJs,
      description: "Backend Runtime"
  },
  ];

  return (
    <section id="about" className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">Some Tools I am learning</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
          I am interested in almost all fields related to programming, and have recently
        developed keen interest in the application of Machine Learning in Vision & 
        NLP 🧠 related tasks, and essentially solving problems combining the two. 
        I like participating and solving CTFs 🚩. Have also been learning Data Structures
        and Algorithms.
        </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-[#121212] border border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors duration-300 flex items-start"
              style={{
                width: '170px',
                height: '70px'
              }}
            >
              <div className="flex-shrink-0">
                <skill.icon size={28} className="text-blue-500" />
              </div>
              
              <div className="ml-4 flex flex-col">
                <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
