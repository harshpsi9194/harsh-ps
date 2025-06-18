import { 
  FaReact, 
  FaPython, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaDocker, 
  FaNs8
} from 'react-icons/fa';
import { 
  SiPytorch,
  SiKubernetes,
  SiRust,
  SiGo,
  SiVim,
  SiOpencv,
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
      name: "OpenCV",
      icon: SiOpencv,
      description: "Computer Vision"
    },
    {
      name: "Go",
      icon: SiGo,
      description: "Backend Development"
    },
   {
    name: "Rust",
    icon: SiRust,
    description: "Systems Programming"
  },
  {
      name: "Docker",
      icon: FaDocker,
      description: "Dockeriztion"
    },
    {
    name: "Kubernetes",
    icon: SiKubernetes,
    description: "Container Orchestration"
  },
  ];

  return (
    <section id="about" className="py-0 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">Tools and Tech I know (and am learning:)</h2>
        </div>
        
        <div className="flex justify-center"> {/* Added wrapper div */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-[#121212] border border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors duration-300 flex items-center" // Changed to items-center
                style={{
                  width: '170px',
                  height: '70px'
                }}
              >
                <div className="flex-shrink-0 ml-2"> {/* Added ml-2 for spacing */}
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
        <br></br>
         <p className="text-gray-400 text-[16px] max-w-xxl mx-auto justify-center text-center mb-7">
  I have used 
  <span className="text-red-400"> PyTorch </span> and 
  <span className="text-red-400"> OpenCV </span>, and have found them to be 
  super useful and interesting for implementing and experimenting with different ideas, related to deep learning. I am also learning
  <span style={{ color: '#B7410E' }}> Rust</span>, amongst other things, for building and deploying smart contracts on
  <span className="text-purple-400"> Solana</span>. As for 
  <span className="text-green-400 italic"> Vim</span>......., it's like I heard from a few people that it's a great tool 
  to work with, and so I gave it a try, and I have to say, I really do like it!!. I am also learning <span className="text-blue-400"><i>Go</i></span>, Docker, and Kubernetes.
  <br />
  Also, I am exploring n8n as well, as I have found it to be a great tool for automating workflows and integrating different services.
</p>

        {/* Divider line with spacing */}
        <div className="max-w-2xl mx-auto px-2 mb-0">
          <hr className="border-t border-gray-700/50" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
