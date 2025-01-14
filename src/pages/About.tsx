import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At No-Code Club, we're revolutionizing the way students approach product development. 
            Our mission is to democratize innovation by making product development accessible to everyone, 
            regardless of their coding background.
          </p>
        </motion.section>

        {/* Core Values */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Innovation First</h3>
              <p className="text-gray-400">
                We believe in pushing boundaries and finding creative solutions using no-code tools.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Community Driven</h3>
              <p className="text-gray-400">
                Our strength lies in our diverse community of builders, creators, and innovators.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Continuous Learning</h3>
              <p className="text-gray-400">
                We foster an environment of constant growth and skill development.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="glass-card p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Empowering Students</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>✓ 200+ Active Members Trained</li>
                  <li>✓ 50+ Projects Successfully Completed</li>
                  <li>✓ 20+ Startups Supported</li>
                  <li>✓ Multiple Industry Collaborations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Future Goals</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>→ Expand No-Code Foundry Reach</li>
                  <li>→ Launch Advanced Training Programs</li>
                  <li>→ Establish Industry Partnerships</li>
                  <li>→ Create Global No-Code Community</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Be part of a community that's reshaping the future of product development. 
            Whether you're a beginner or an experienced builder, there's a place for you here.
          </p>
          <Button size="lg" className="text-lg">
            Join No-Code Club
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default About;