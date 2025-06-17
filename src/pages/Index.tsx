
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Blogs />
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
