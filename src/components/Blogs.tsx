import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My_self",
      image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format", // Professional silhouette
      link: "/blogs/myself",
      readTime: "5 min read",
      date: "Mar 15, 2024"
    },
    {
      id: 2,
      title: "CTFs",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format", // Binary/Matrix style image
      link: "/blogs/ctfs",
      readTime: "8 min read",
      date: "Mar 10, 2024"
    },
    {
      id: 3,
      title: "life@iitk",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Iit_kanpur_swimming_pool.jpg/640px-Iit_kanpur_swimming_pool.jpg", // IITK campus image
      link: "/blogs/life-at-iitk",
      readTime: "6 min read",
      date: "Mar 05, 2024"
    },
    {
      id: 4,
      title: "Tech Journey",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format", // Coding/Tech image
      link: "/blogs/tech-journey",
      readTime: "7 min read",
      date: "Mar 01, 2024"
    },
    {
      id: 5,
      title: "Open Source Adventures",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&auto=format", // GitHub/Code collaboration image
      link: "/blogs/open-source",
      readTime: "10 min read",
      date: "Feb 25, 2024"
    }
  ];

  return (
    <section id="blogs" className="py-10 px-4">
      <div className="max-w-6xl mx-auto"> {/* Reduced from max-w-7xl */}
        <div className="text-center mb-6"> {/* Reduced margin */}
          <h2 className="text-lg md:text-xl font-bold mb-2">Blogs✍🏻</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            I really like writing, and sharing experiences. These blogs are therefore my thoughts
            and experiences. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"> {/* Reduced gap */}
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group w-56" /* Reduced from w-64 to w-56 */
            >
              <div className="relative h-32 overflow-hidden"> {/* Reduced from h-40 to h-32 */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-2"> {/* Reduced padding */}
                <h3 className="text-sm font-semibold text-white mb-1"> {/* Reduced text and margin */}
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
    </section>
  );
};

export default Blogs;
