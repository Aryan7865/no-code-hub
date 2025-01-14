import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Welcome to No-Code Club</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering students to transform ideas into reality through no-code solutions. 
            We're revolutionizing product development by making it accessible to everyone, 
            regardless of their coding background.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="glass-card p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-gradient mb-2">200+</h3>
            <p className="text-gray-400">Active Members</p>
          </div>
          <div className="glass-card p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-gradient mb-2">50+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="glass-card p-8 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-gradient mb-2">20+</h3>
            <p className="text-gray-400">Startups Supported</p>
          </div>
        </motion.section>

        {/* Initiatives Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gradient">No-Code Foundry</h3>
              <p className="text-gray-400">
                Collaborating with industry partners to build MVPs and innovative solutions using no-code tools. 
                Offering internship opportunities and real-world project experience.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Freelancer Beehive</h3>
              <p className="text-gray-400">
                Fostering a freelancing culture at IITM by connecting students with industry projects 
                and providing guidance on freelancing opportunities.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gradient">No-Code Camps</h3>
              <p className="text-gray-400">
                Comprehensive training programs covering product development, analytics, and business skills 
                using no-code tools.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <div className="glass-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gradient">What We Do</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>✦ Build MVPs for startups and businesses</li>
                  <li>✦ Train students in no-code development</li>
                  <li>✦ Connect students with industry projects</li>
                  <li>✦ Foster innovation and entrepreneurship</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Future Goals</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>→ Expand industry partnerships</li>
                  <li>→ Launch advanced training programs</li>
                  <li>→ Create a global no-code community</li>
                  <li>→ Establish freelancing networks</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Join Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or an experienced builder, there's a place for you here. 
            Join us in revolutionizing product development through no-code solutions.
          </p>
          <Button size="lg" className="text-lg px-8">
            Become a Member
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default About;