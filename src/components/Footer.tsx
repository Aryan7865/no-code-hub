import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gradient">No-Code Club</h3>
            <p className="text-gray-600 text-sm">
              Empowering innovation without code. Build, learn, and transform ideas into reality.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">About</Link></li>
              <li><Link to="/initiatives" className="text-gray-600 hover:text-primary text-sm">Initiatives</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-primary text-sm">Resources</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary text-sm">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Initiatives</h4>
            <ul className="space-y-2">
              <li><Link to="/initiatives#foundry" className="text-gray-600 hover:text-primary text-sm">No-Code Foundry</Link></li>
              <li><Link to="/initiatives#beehive" className="text-gray-600 hover:text-primary text-sm">Freelancer Beehive</Link></li>
              <li><Link to="/initiatives#camps" className="text-gray-600 hover:text-primary text-sm">No-Code Camps</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} No-Code Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;