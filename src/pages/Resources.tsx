import { BookOpen, Download, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* No-Code Handbook Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">No-Code Handbook</h2>
        <div className="bg-primary/10 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Comprehensive Guide</h3>
              <p className="text-gray-600">
                A detailed guide covering no-code tools and processes necessary for product development. Perfect for beginners and experienced builders alike.
              </p>
              <Button className="w-full sm:w-auto">
                <Download className="mr-2" size={16} />
                Download PDF Guide
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What's Inside</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Tool comparisons and recommendations</li>
                <li>Step-by-step tutorials</li>
                <li>Best practices and tips</li>
                <li>Real-world case studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <BookOpen className="mr-2" size={24} />
          Learning Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Getting Started with Flutterflow</li>
              <li>• Airtable Basics</li>
              <li>• Advanced No-Code Techniques</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Articles</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• No-Code vs Traditional Development</li>
              <li>• Choosing the Right Tools</li>
              <li>• Building MVPs Quickly</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Platform Guides</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Flutterflow Documentation</li>
              <li>• Airtable Best Practices</li>
              <li>• Integration Tutorials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <HelpCircle className="mr-2" size={24} />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">What is No-Code development?</h3>
            <p className="text-gray-600">
              No-Code development allows you to build applications without writing traditional code, using visual development platforms and tools.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">How can I join the No-Code Club?</h3>
            <p className="text-gray-600">
              You can apply through our application process during the recruitment period. We look for enthusiastic individuals interested in product development and innovation.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">What projects can I build with no-code tools?</h3>
            <p className="text-gray-600">
              You can build MVPs, mobile apps, websites, automation workflows, and more. The possibilities are vast with modern no-code platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;