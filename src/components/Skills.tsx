
const Skills = () => {
  const skillItems = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

  return (
    <section id="about" className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">Essential Tools I Use</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillItems.map((skill, index) => (
            <div
              key={skill.label}
              className="bg-[#2a2a2a] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#3a2a3a] group"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <img 
                  src={skill.imgSrc} 
                  alt={skill.label}
                  className="w-6 h-6"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const nextSibling = target.nextElementSibling as HTMLElement | null;
                    if (nextSibling) {
                      nextSibling.style.display = 'block';
                    }
                  }}
                />
                <div className="text-sm hidden">{skill.label.charAt(0)}</div>
              </div>
              <h3 className="text-sm font-semibold mb-1 text-center">{skill.label}</h3>
              <p className="text-gray-400 text-xs text-center">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
