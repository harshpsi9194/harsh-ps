
import { Download, FileText, Palette, BookOpen } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Resume (PDF)",
      description: "Download my complete professional resume",
      icon: FileText,
      downloadUrl: "/resume.pdf",
      size: "2.3 MB"
    },
    {
      id: 2,
      title: "Design Assets",
      description: "UI components and design templates",
      icon: Palette,
      downloadUrl: "/design-assets.zip",
      size: "15.7 MB"
    },
    {
      id: 3,
      title: "Code Cheat Sheets",
      description: "Quick reference guides for developers",
      icon: BookOpen,
      downloadUrl: "/cheat-sheets.pdf",
      size: "4.1 MB"
    }
  ];

  return (
    <section id="resources" className="py-8 px-4 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-base md:text-lg font-bold mb-1">Free Resources</h2>
          <p className="text-gray-400 text-xs max-w-xl mx-auto">
            Download useful resources, templates, and guides that can help
            accelerate your development workflow and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={resource.id}
                className="bg-[#2a2a2a] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={18} className="text-white" />
                </div>
                
                <h3 className="text-sm font-semibold mb-1">{resource.title}</h3>
                <p className="text-gray-400 mb-3 text-xs leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{resource.size}</span>
                  <button className="inline-flex items-center gap-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-2 py-1 rounded text-xs font-medium transition-all duration-300">
                    <Download size={12} />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
