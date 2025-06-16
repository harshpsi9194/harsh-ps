import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("Life");

  const blogPosts = [
    {
      id: 1,
      title: "My_self",
      image: "/images/main1.jpeg",
      link: "/blogs/myself",
      readTime: "5 min read",
      date: "Mar 15, 2024",
      category: "Life"
    },
    {
      id: 2,
      title: "CTFs",
      image: "/images/skull.jpg",
      link: "/blogs/ctfs",
      readTime: "8 min read",
      date: "Mar 10, 2024",
      category: "Padhai"
    },
    {
      id: 3,
      title: "life@iitk",
      image: "/images/life_at_iitk.jpeg",
      link: "/blogs/life-at-iitk",
      readTime: "6 min read",
      date: "Mar 05, 2024",
      category: "Life"
    },
    {
      id: 4,
      title: "Open Source Adventures",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BTcmSxeiqyWeDeBMdyOpEvX4r6-nNOrYZQ&s",
      link: "/blogs/open-source",
      readTime: "10 min read",
      date: "Feb 25, 2024",
      category: "Padhai"
    },
    {
      id: 5,
      title: "Intern prep journey",
      image: "/images/tech_journey.jpeg",
      link: "/blogs/tech-journey",
      readTime: "7 min read",
      date: "Mar 01, 2024",
      category: "Padhai"
    },
    {
      id: 6,
      title: "DSA Journey",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format",
      link: "/blogs/dsa-journey",
      readTime: "8 min read",
      date: "February 20, 2024",
      category: "Padhai"
    }
  ];

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section id="blogs" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">Blogs✍🏻</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            I really like writing, and sharing experiences. These blogs are therefore my thoughts
            which I feel are worth sharing. 
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 rounded-lg p-1 flex gap-1">
            {["Life", "Padhai", "All"].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-500 ease-in-out transform ${
                  activeFilter === filter
                    ? "bg-white text-blue-600 scale-105 shadow-lg"
                    : "text-white hover:bg-blue-500 hover:scale-105"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts - Dynamic and Center Aligned */}
        <div className="flex justify-center">
          <div 
            key={activeFilter}
            className="flex flex-wrap justify-center gap-1 animate-smooth-fade-in"
            style={{ maxWidth: 'fit-content' }}
          >
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 group w-56 animate-smooth-scale-in`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes smooth-fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes smooth-scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-smooth-fade-in {
          animation: smooth-fade-in 0.6s ease-out;
        }

        .animate-smooth-scale-in {
          animation: smooth-scale-in 0.7s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Blogs;
