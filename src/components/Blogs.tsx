
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
    <section id="blogs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design trends,
            and the latest technologies in the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
            View All Posts
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
