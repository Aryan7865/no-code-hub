import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Building MVPs with No-Code Tools",
    category: "Tutorials",
    date: "2024-03-15",
    excerpt: "Learn how to rapidly build and test your MVP using popular no-code platforms...",
    readTime: "5 min read",
    image: "/lovable-uploads/3c5f1f7a-f500-4e20-9e3f-a1ffa731fa55.png"
  },
  {
    id: 2,
    title: "Success Story: How We Helped 6 Startups Launch Their Products",
    category: "Success Stories",
    date: "2024-03-10",
    excerpt: "Discover how No-Code Club assisted startups in bringing their ideas to life...",
    readTime: "8 min read",
    image: "/lovable-uploads/3c5f1f7a-f500-4e20-9e3f-a1ffa731fa55.png"
  },
  {
    id: 3,
    title: "The Rise of Freelancing in Tech",
    category: "Industry Insights",
    date: "2024-03-05",
    excerpt: "Exploring the growing trend of freelancing in the technology sector...",
    readTime: "6 min read",
    image: "/lovable-uploads/3c5f1f7a-f500-4e20-9e3f-a1ffa731fa55.png"
  }
];

const categories = ["All", "Tutorials", "Success Stories", "Industry Insights"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-gradient"
      >
        Latest from No-Code Club
      </motion.h1>

      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="glass-card"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-primary font-medium">{post.category}</span>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Button variant="link" className="text-primary hover:text-accent">
                  Read More
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;