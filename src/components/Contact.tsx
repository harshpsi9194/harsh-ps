
import { useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-base md:text-lg font-bold mb-2">
              Contact me for collaboration
            </h2>
            <p className="text-gray-400 mb-3 leading-relaxed text-xs">
              Reach out today to discuss your project needs and start collaborating on
              something amazing!
            </p>
            
            <div className="flex gap-2 mb-3">
              <a
                href="https://github.com"
                className="p-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a2a3a] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a2a3a] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://instagram.com"
                className="p-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a2a3a] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="bg-[#2a2a2a] p-4 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1.5 bg-[#1f1f1f] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1.5 bg-[#1f1f1f] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-2 py-1.5 bg-[#1f1f1f] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-xs"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-1.5 rounded font-medium transition-all duration-300 transform hover:scale-105 text-xs"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
