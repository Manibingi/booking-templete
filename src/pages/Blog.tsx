import Layout from "@/components/Layout";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import "../styles/style.css"; // Ensure your styles are imported
import BlogCarousel from "@/components/sections/BlogCarousel";
import HeroSection2 from "@/components/sections/HeroSection2";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Car Detailing: Tips from the Pros",
      excerpt:
        "Learn professional car detailing techniques and best practices to keep your vehicle looking showroom-ready all year round.",
      date: "2024-01-15",
      author: "Mike Wilson",
      category: "Detailing",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Ceramic Coating: Is It Worth the Investment?",
      excerpt:
        "Discover the benefits of ceramic coating and how it can protect your vehicle's paint while maintaining its shine for years.",
      date: "2024-01-10",
      author: "John Smith",
      category: "Paint Protection",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Eco-Friendly Car Wash: Protecting Your Car and the Environment",
      excerpt:
        "Explore how eco-friendly car wash products and techniques can keep your car clean while minimizing environmental impact.",
      date: "2024-01-05",
      author: "Lisa Chen",
      category: "Eco-Friendly",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Interior Detailing: A Complete Guide to Car Interior Care",
      excerpt:
        "Master the art of interior detailing with our comprehensive guide to keeping your car's cabin clean and fresh.",
      date: "2024-01-01",
      author: "David Park",
      category: "Interior Care",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Paint Correction: Restoring Your Car's Shine",
      excerpt:
        "Learn about paint correction techniques and how they can transform your vehicle's appearance by removing scratches and swirl marks.",
      date: "2023-12-28",
      author: "Sarah Johnson",
      category: "Paint Care",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Winter Car Care: Protecting Your Vehicle in Cold Weather",
      excerpt:
        "Essential tips and techniques for maintaining your car's appearance and protecting it from winter's harsh conditions.",
      date: "2023-12-25",
      author: "Mike Wilson",
      category: "Seasonal Care",
      readTime: "9 min read",
    },
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Car Care Blog"
        description="Stay updated with the latest car care tips, detailing techniques, and maintenance advice from our expert detailers. Keep your vehicle looking its best all year round."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold textcolor2 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and news from our
              industry experts. Discover actionable strategies to grow your
              business.
            </p>
          </div> */}

      <BlogCarousel />

      {/* Featured Post */}
      {/* <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Featured Image Placeholder
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded text-xs mr-3">
                  FEATURED
                </span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                  {featuredPost.category}
                </span>
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold textcolor2 mb-4 hover:text-primary transition-colors duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  By {featuredPost.author}
                </span>
                <Button
                  asChild
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Link to={`/blog/${featuredPost.id}`}>Read Full Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div> */}

      {/* Regular Posts Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {regularPosts.map((post, index) => (
          <Card
            key={post.id}
            className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${(index + 2) * 0.1}s` }}
          >
            <CardHeader>
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">
                  Featured Image Placeholder
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle className="text-xl hover:text-primary textcolor2 transition-colors duration-300">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By {post.author}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="bg-white border-2 border-primary text-primary hover:bg-bgcolor1 hover:text-white"
                  >
                    Read More
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}

      {/* Categories Filter */}
      {/* <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Browse by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Business", "Technology", "Marketing", "Design"].map(
            (category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="hover:scale-105 transition-transform duration-300"
              >
                {category}
              </Button>
            )
          )}
        </div>
      </div> */}

      {/* Load More */}
      {/* <div
        className="text-center mb-16 animate-fade-in"
        style={{ animationDelay: "0.9s" }}
      >
        <Button
          size="lg"
          variant="outline"
          className="hover:scale-105 transition-transform duration-300 hover:bg-bgcolor1 hover:text-white"
        >
          Load More Posts
        </Button>
      </div> */}

      {/* Newsletter Signup */}
      <div
        className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12 text-center animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <h2 className="text-3xl font-bold mb-4 textcolor1">
          Stay Updated with Car Care Tips
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Subscribe to our newsletter to receive the latest car care tips, detailing advice, and exclusive offers directly in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <Button
            variant="secondary"
            className="px-8 hover:scale-105 transition-transform duration-300 hover:bg-bgcolor1 hover:text-white"
          >
            Subscribe Now
          </Button>
        </div>
        <p className="text-sm mt-4 opacity-70">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
      {/* </div>
      </div> */}
    </Layout>
  );
};

export default Blog;
