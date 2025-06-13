
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Responsive Web Applications with React and Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive interfaces using the power of React components and Tailwind's utility-first approach.",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Modern JavaScript: ES6+ Features Every Developer Should Know",
      excerpt: "Explore the latest JavaScript features that can improve your code quality and development productivity.",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Optimizing Web Performance: Tips and Best Practices",
      excerpt: "Discover proven techniques to make your websites faster and more efficient for better user experience.",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="blogs" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Latest Blog Posts</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Insights, tutorials, and thoughts on web development, design trends,
            and the latest technologies in the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
                  Read More
                  <ArrowRight size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
            View All Posts
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
