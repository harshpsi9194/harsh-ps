
import { ChevronDown, ChevronRight, Github } from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const courses = [
    {
      id: "mth111",
      title: "MTH111: Single Variable Calculus",
      description: "Course resources for Single Variable Calculus.",
    },
    {
      id: "mth112",
      title: "MTH112: Applications of SVC and Multivariable Calculus",
      description: "Course resources for Multivariable Calculus.",
    },
    {
      id: "mth113",
      title: "MTH113: Linear Algebra",
      description: "Course resources for Linear Algebra.",
    },
    {
      id: "mth114",
      title: "MTH114: ODE",
      description: "Course resources for Ordinary Differential Equations.",
    },
    {
      id: "mso203",
      title: "MSO203: PDE",
      description: "Course resources for Partial Differential Equations.",
    },
    {
      id: "hso201",
      title: "HSO201: Probability and Statistics",
      description: "Course resources for Probability and Statistics.",
    },
    {
      id: "ee656",
      title: "EE656: Deep learning and its applications",
      description: "Course resources for Deep Learning.",
    },
    {
      id: "esc111-112",
      title: "ESC111/112: Fundamentals of computing I & II",
      description: "Course resources for Computing Fundamentals.",
    },
    {
      id: "esc201",
      title: "ESC201: Introduction to electronics",
      description: "Course resources for Electronics.",
    },
    {
      id: "phy112",
      title: "PHY112: Classical Dynamics",
      description: "Course resources for Classical Dynamics.",
    }
  ];

  const mlDlResources = [
    { id: "nice-papers", title: "Nice papers", description: "A collection of interesting papers in ML/DL." },
    { id: "csci-378", title: "CSCI-378", description: "Course resources for CSCI-378." },
    { id: "d2l", title: "Dive into deep learning", description: "Course resources for Dive into deep learning." },
    { id: "cs7015", title: "CS7015", description: "Course resources for CS7015." }
  ];

  const miscellaneous = [
    { id: "docling", title: "Docling doc: IBMs document processing library", description: "Course resources for Docling." },
    { id: "parallel", title: "Parallel computing", description: "Course resources for Parallel computing." }
  ];

  const isExpanded = (sectionId: string) => expandedSections.includes(sectionId);

  return (
    <section id="resources" className="py-16 px-4 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg md:text-xl font-bold mb-5 text-gray-200 text-center">Resources</h2>
       <p className="text-gray-400 text-center text-[16px] max-w-3xl mx-auto">
            These are some resources which I found useful. Hope they help you as well!!
          </p>
<br></br>
        {/* Course Resources Section */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-4 text-gray-300 text-center">Course Resources</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-2">
              {courses.slice(0, Math.ceil(courses.length / 2)).map((course) => (
                <div key={course.id} className="bg-[#2a2a2a] rounded-lg border border-gray-700/50 overflow-hidden">
                  <button
                    onClick={() => toggleSection(course.id)}
                    className="flex items-center justify-between w-full text-left text-gray-400 hover:text-gray-300 hover:bg-[#333333] transition-all duration-200 p-3"
                  >
                    <span className="text-sm">{course.title}</span>
                    <div className="p-1 rounded bg-blue-600/80 hover:bg-blue-500 transition-colors">
                      {isExpanded(course.id) ? (
                        <ChevronDown size={14} className="flex-shrink-0 text-white" />
                      ) : (
                        <ChevronRight size={14} className="flex-shrink-0 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded(course.id) && (
                    <div className="p-2 text-xs bg-[#333333] border-t border-gray-700/50">
                      <div className="flex justify-between items-start">
                        <p className="text-gray-400">{course.description}</p>
                        <a
                          href="https://harshps.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 text-xs rounded bg-blue-600/80 hover:bg-blue-500 text-white transition-all ml-4"
                        >
                          <Github size={12} />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              {courses.slice(Math.ceil(courses.length / 2)).map((course) => (
                <div key={course.id} className="bg-[#2a2a2a] rounded-lg border border-gray-700/50 overflow-hidden">
                  <button
                    onClick={() => toggleSection(course.id)}
                    className="flex items-center justify-between w-full text-left text-gray-400 hover:text-gray-300 hover:bg-[#333333] transition-all duration-200 p-3"
                  >
                    <span className="text-sm">{course.title}</span>
                    <div className="p-1 rounded bg-blue-600/80 hover:bg-blue-500 transition-colors">
                      {isExpanded(course.id) ? (
                        <ChevronDown size={14} className="flex-shrink-0 text-white" />
                      ) : (
                        <ChevronRight size={14} className="flex-shrink-0 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded(course.id) && (
                    <div className="p-2 text-xs bg-[#333333] border-t border-gray-700/50">
                      <div className="flex justify-between items-start">
                        <p className="text-gray-400">{course.description}</p>
                        <a
                          href="https://harshps.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 text-xs rounded bg-blue-600/80 hover:bg-blue-500 text-white transition-all ml-4"
                        >
                          <Github size={12} />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="max-w-2xl mx-auto px-4 mb-8">
          <hr className="border-t border-gray-700/50" />
        </div>

        {/* Other Resources Section */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-4 text-gray-300 text-center">Other Resources</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - ML/DL Resources */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium mb-3 text-gray-400 text-center">ML/DL</h4>
              {mlDlResources.map((item) => (
                <div key={item.id} className="bg-[#2a2a2a] rounded-lg border border-gray-700/50 overflow-hidden">
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="flex items-center justify-between w-full text-left text-gray-400 hover:text-gray-300 hover:bg-[#333333] transition-all duration-200 p-3"
                  >
                    <span className="text-sm">{item.title}</span>
                    <div className="p-1 rounded bg-blue-600/80 hover:bg-blue-500 transition-colors">
                      {isExpanded(item.id) ? (
                        <ChevronDown size={14} className="flex-shrink-0 text-white" />
                      ) : (
                        <ChevronRight size={14} className="flex-shrink-0 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded(item.id) && (
                    <div className="p-2 text-xs bg-[#333333] border-t border-gray-700/50">
                      <div className="flex justify-between items-start">
                        <p className="text-gray-400">{item.description}</p>
                        <a
                          href="https://harshps.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 text-xs rounded bg-blue-600/80 hover:bg-blue-500 text-white transition-all ml-4"
                        >
                          <Github size={12} />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Additional Resources */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium mb-3 text-gray-400 text-center">Additional Resources</h4>
              {miscellaneous.map((item) => (
                <div key={item.id} className="bg-[#2a2a2a] rounded-lg border border-gray-700/50 overflow-hidden">
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="flex items-center justify-between w-full text-left text-gray-400 hover:text-gray-300 hover:bg-[#333333] transition-all duration-200 p-3"
                  >
                    <span className="text-sm">{item.title}</span>
                    <div className="p-1 rounded bg-blue-600/80 hover:bg-blue-500 transition-colors">
                      {isExpanded(item.id) ? (
                        <ChevronDown size={14} className="flex-shrink-0 text-white" />
                      ) : (
                        <ChevronRight size={14} className="flex-shrink-0 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded(item.id) && (
                    <div className="p-2 text-xs bg-[#333333] border-t border-gray-700/50">
                      <div className="flex justify-between items-start">
                        <p className="text-gray-400">{item.description}</p>
                        <a
                          href="https://harshps.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2 py-1 text-xs rounded bg-blue-600/80 hover:bg-blue-500 text-white transition-all ml-4"
                        >
                          <Github size={12} />
                          <span>View</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="max-w-2xl mx-auto px-4">
          <hr className="border-t border-gray-700/50" />
        </div>
      </div>
    </section>
  );
};

export default Resources;
