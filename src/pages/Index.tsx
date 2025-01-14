import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Empowering Innovation <br />
              <span className="text-gradient">Without Code</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Build, Learn, and Transform Ideas into Reality with No-Code Tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Explore No-Code Foundry
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Join Freelancer Beehive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We democratize innovation by teaching and utilizing no-code tools for product development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">200+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">20+</h3>
              <p className="text-gray-600">Startups Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we're making no-code development accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold mb-4">No-Code Foundry</h3>
              <p className="text-gray-600 mb-6">
                Help startups build MVPs using no-code tools. We've assisted 6 startups in the last year alone.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold mb-4">Freelancer Beehive</h3>
              <p className="text-gray-600 mb-6">
                Introducing a freelancing culture at IITM with guidance and alumni collaboration.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;