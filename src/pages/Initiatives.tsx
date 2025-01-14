import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Initiatives = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* No-Code Foundry Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">No-Code Foundry</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-gray-600">
              We help startups build MVPs using no-code tools. Last year, we successfully assisted 6 startups, including 3 from Nirmaan and 3 from the general institute.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Success Metrics</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>6 startups helped in the previous year</li>
                <li>1-month average MVP development time</li>
                <li>Collaboration with reputable companies</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Future Plans</h3>
            <p className="text-gray-600">
              This year, we're focusing on collaborating with larger companies that offer better incentives. We're starting early and working with the Alumni Affairs Secretary to bring in higher-quality projects.
            </p>
            <Button className="w-full sm:w-auto">
              Submit Your Project
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Freelancer Beehive Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Freelancer Beehive</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="text-gray-600">
              Introducing and promoting a freelancing culture at IITM. We guide students on securing opportunities, managing projects, and working efficiently with companies.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Target Audience</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>First-year students</li>
                <li>Second-year students</li>
                <li>Alumni network connections</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Benefits</h3>
            <p className="text-gray-600">
              Learn how to find projects, apply for opportunities, and develop efficient work practices. Connect with alumni for potential collaborations.
            </p>
            <Button variant="outline" className="w-full sm:w-auto">
              Join Beehive Network
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* No-Code Camps Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">No-Code Camps</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Training Programs</h3>
            <p className="text-gray-600">
              Comprehensive workshops and training sessions for product, business, and tech enthusiasts. Get certified and learn practical skills.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Focus Areas</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Product Development</li>
                <li>Business Analytics</li>
                <li>Technical Implementation</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Outcomes</h3>
            <p className="text-gray-600">
              Receive certification upon completion and gain hands-on experience with no-code tools and product development.
            </p>
            <Button variant="outline" className="w-full sm:w-auto">
              Register for Next Camp
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;