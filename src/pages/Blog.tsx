import { useState } from "react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Building MVPs with No-Code Tools",
    category: "Tutorials",
    date: "2024-03-15",
    excerpt: "Learn how to rapidly build and test your MVP using popular no-code platforms...",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Success Story: How We Helped 6 Startups Launch Their Products",
    category: "Success Stories",
    date: "2024-03-10",
    excerpt: "Discover how No-Code Club assisted startups in bringing their ideas to life...",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Rise of Freelancing in Tech",
    category: "Industry Insights",
    date: "2024-03-05",
    excerpt: "Exploring the growing trend of freelancing in the technology sector...",
    readTime: "6 min read"
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
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="border rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-100"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-primary font-medium">{post.category}</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Button variant="link" className="text-primary">
                  Read More
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;