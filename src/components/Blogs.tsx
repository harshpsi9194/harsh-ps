
import { Calendar, Clock, ArrowRight, Notebook } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("aLL");
  const [isAnimating, setIsAnimating] = useState(false);
  const [previewPost, setPreviewPost] = useState<any>(null);
  const blogsRef = useRef<{ [key: number]: HTMLElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "My_self",
      image: "/images/main1.jpeg",
      link: "/blogs/myself",
      readTime: ".....",
      date: "Comming Soon",
      category: "jeevan",
      excerpt: "....."
    },
    {
      id: 2,
      title: "CTFs",
      image: "/images/skull.jpg",
      link: "/blogs/ctfs",
      readTime: ".....",
      date: "Comming Soon",
      category: "padhai",
      excerpt: "....."
    },
    {
      id: 3,
      title: "life@iitk",
      image: "/images/life_at_iitk.jpeg",
      link: "/blogs/life-at-iitk",
      readTime: ".....",
      date: "Comming Soon",
      category: "jeevan",
      excerpt: "....."
    },
    {
      id: 4,
      title: "Open Source Adventures",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BTcmSxeiqyWeDeBMdyOpEvX4r6-nNOrYZQ&s",
      link: "/blogs/open-source",
      readTime: ".....",
      date: "Comming Soon",
      category: "padhai",
      excerpt: "........"
    },
    // {
    //   id: 5,
    //   title: "Intern prep journey",
    //   image: "/images/tech_journey.jpeg",
    //   link: "/blogs/tech-journey",
    //   readTime: "7 min read",
    //   date: "Mar 01, 2024",
    //   category: "padhai",
    //   excerpt: "The complete roadmap of preparing for tech internships, from coding practice to interview experiences and final success."
    // },
    // {
    //   id: 6,
    //   title: "DSA Journey",
    //   image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format",
    //   link: "/blogs/dsa-journey",
    //   readTime: "8 min read",
    //   date: "February 20, 2024",
    //   category: "padhai",
    //   excerpt: "A comprehensive guide through Data Structures and Algorithms - the struggles, breakthroughs, and systematic approach to mastery."
    // }
  ];

  const filteredPosts = activeFilter === "aLL" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    if (filter !== activeFilter && !isAnimating) {
      setIsAnimating(true);
      
      // Get current filtered posts
      const currentFilteredPosts = activeFilter === "aLL" 
        ? blogPosts 
        : blogPosts.filter(post => post.category === activeFilter);
      
      // Get new filtered posts
      const newFilteredPosts = filter === "aLL" 
        ? blogPosts 
        : blogPosts.filter(post => post.category === filter);

      // Capture current positions of all visible blogs
      const oldPositions: { [key: number]: { x: number, y: number } } = {};
      
      currentFilteredPosts.forEach(post => {
        const element = blogsRef.current[post.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = containerRef.current?.getBoundingClientRect();
          if (containerRect) {
            oldPositions[post.id] = {
              x: rect.left - containerRect.left,
              y: rect.top - containerRect.top
            };
          }
        }
      });

      // Update filter state
      setActiveFilter(filter);

      // Use a single RAF to ensure DOM has updated
      requestAnimationFrame(() => {
        newFilteredPosts.forEach((post) => {
          const element = blogsRef.current[post.id];
          const wasInPreviousFilter = currentFilteredPosts.some(p => p.id === post.id);
          
          if (element && oldPositions[post.id] && wasInPreviousFilter) {
            // Common blog - animate from old position to new position
            const rect = element.getBoundingClientRect();
            const containerRect = containerRef.current?.getBoundingClientRect();
            
            if (containerRect) {
              const newX = rect.left - containerRect.left;
              const newY = rect.top - containerRect.top;
              const deltaX = oldPositions[post.id].x - newX;
              const deltaY = oldPositions[post.id].y - newY;

              // Apply initial transform immediately without transition
              element.style.transition = 'none';
              element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
              
              // Force reflow and then animate
              element.offsetHeight;
              
              element.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
              element.style.transform = 'translate(0px, 0px)';
            }
          } else if (element && !wasInPreviousFilter) {
            // New blog - fade and scale in quickly
            element.style.transition = 'none';
            element.style.opacity = '0';
            element.style.transform = 'scale(0.9) translateY(10px)';
            
            // Force reflow
            element.offsetHeight;
            
            // Animate in with faster timing
            element.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'scale(1) translateY(0px)';
          }
        });

        // Clean up after animation completes
        setTimeout(() => {
          setIsAnimating(false);
          // Reset all inline styles
          Object.values(blogsRef.current).forEach(element => {
            if (element) {
              element.style.transform = '';
              element.style.transition = '';
              element.style.opacity = '';
            }
          });
        }, 450); // Slightly longer than the longest animation
      });
    }
  };

  const handlePreview = (post: any) => {
    setPreviewPost(post);
  };

  const closePreview = () => {
    setPreviewPost(null);
  };

  return (
    <section id="blogs" className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">Blogs✍🏻</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            I really like writing, and sharing experiences. These blogs are therefore my thoughts
            which I feel are worth sharing. Actually, amidst the hustle of the current intern season
            it would take a while before I start adding some content in these.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-700 rounded-lg p-1 flex gap-1 shadow-lg">
            {["aLL", "padhai", "jeevan"].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                disabled={isAnimating}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform ${
                  activeFilter === filter
                    ? "bg-gray-200 text-gray-800 scale-105 shadow-lg"
                    : "text-gray-200 hover:bg-gray-600 hover:scale-105"
                } ${isAnimating ? 'cursor-not-allowed opacity-75' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="flex flex-wrap justify-center gap-1"
            style={{ maxWidth: 'fit-content' }}
          >
            {filteredPosts.map((post) => {
              return (
                <article
                  key={post.id}
                  ref={el => blogsRef.current[post.id] = el}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 relative group w-56"
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
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex justify-center">
                      <button
                        onClick={() => handlePreview(post)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs font-medium border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
                      >
                        Preview
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Preview Modal */}
        {previewPost && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-[#2a2a2a] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-500 text-white rounded-full p-2 transition-all duration-200 z-10"
              >
                <X size={20} />
              </button>
              
              <div className="relative h-64 overflow-hidden">
                <img
                  src={previewPost.image}
                  alt={previewPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">{previewPost.title}</h2>
                
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{previewPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{previewPost.readTime}</span>
                  </div>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                    {previewPost.category}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {previewPost.excerpt}
                </p>
                
                <div className="flex justify-center gap-4">
                  <a
                    href={previewPost.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <Notebook size={16} />
                    Read Full Article
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
