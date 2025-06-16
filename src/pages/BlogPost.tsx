import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import car4 from "../images/4_compressed.webp";
import car5 from "../images/5_compressed.webp";
import car6 from "../images/6_compressed.webp";
import car7 from "../images/7_compressed.webp";
import car8 from "../images/8_compressed.webp";
import car10 from "../images/10_compressed.webp";
import car11 from "../images/11_compressed.webp";
import car12 from "../images/12_compressed.webp";
import img1 from "../images/reviews/img1.png";
import img2 from "../images/reviews/img2.png";
import img3 from "../images/reviews/img3.png";
import img4 from "../images/reviews/img4.png";

const BlogPost = () => {
  const { id } = useParams();

  // Real blog data matching the carousel items
  const blogPosts = {
    "1": {
      title: "10 Essential Car Care Tips for 2024",
      author: "Mike Wilson",
      date: "2024-01-15",
      img: img1,
      category: "Car Care",
      readTime: "5 min read",
      image: car4,
      excerpt:
        "Learn the best practices to maintain your vehicle's appearance and value...",
      content: `
        <p>Maintaining your car's appearance and value requires consistent care and attention. In this comprehensive guide, we'll share 10 essential tips that will help keep your vehicle looking its best in 2024 and beyond.</p>
        
        <h2>1. Regular Washing Schedule</h2>
        <p>Establish a consistent washing schedule based on your driving conditions. For most vehicles, a bi-weekly wash is recommended, but adjust based on weather conditions and usage patterns.</p>
        
        <h2>2. Proper Washing Technique</h2>
        <p>Always use the two-bucket method: one for soapy water and one for rinsing your wash mitt. This prevents dirt from being reintroduced to your paint surface, reducing the risk of scratches.</p>
        
        <h2>3. Interior Maintenance</h2>
        <p>Regular vacuuming and dusting of your interior prevents dirt buildup and maintains a fresh cabin environment. Pay special attention to high-touch areas like the steering wheel and gear shift.</p>
        
        <h2>4. Tire Care</h2>
        <p>Clean and dress your tires regularly to prevent premature aging and maintain their appearance. Use a dedicated tire cleaner and protectant for best results.</p>
        
        <h2>5. Paint Protection</h2>
        <p>Consider applying a ceramic coating or paint protection film for long-term protection. These solutions provide superior protection against UV rays, bird droppings, and environmental contaminants.</p>
        
        <h2>6. Glass Maintenance</h2>
        <p>Keep your windows clean using a dedicated glass cleaner. Clean glass improves visibility and safety while driving.</p>
        
        <h2>7. Wheel Care</h2>
        <p>Regular cleaning of wheels prevents brake dust buildup and corrosion. Use a pH-balanced wheel cleaner and soft brushes to avoid damaging the finish.</p>
        
        <h2>8. Proper Drying</h2>
        <p>Always dry your vehicle after washing using a microfiber towel or blower. This prevents water spots and maintains a streak-free finish.</p>
        
        <h2>9. Seasonal Care</h2>
        <p>Adjust your car care routine based on the season. Winter requires more frequent washing to remove road salt, while summer demands protection against UV damage.</p>
        
        <h2>10. Professional Detailing</h2>
        <p>Schedule regular professional detailing sessions for deep cleaning and paint correction. This helps maintain your vehicle's value and appearance over time.</p>
        
        <h2>Conclusion</h2>
        <p>By following these essential car care tips, you'll not only maintain your vehicle's appearance but also protect its value and ensure a more enjoyable driving experience. Remember, consistent care is key to keeping your car looking its best.</p>
      `,
    },
    "2": {
      title: "Eco-Friendly Car Washing Guide",
      author: "Sarah Johnson",
      date: "2024-01-10",
      img: img2,
      category: "Eco-Friendly",
      readTime: "7 min read",
      image: car5,
      excerpt:
        "Discover how to keep your car clean while protecting the environment...",
      content: `
        <p>In today's environmentally conscious world, it's important to consider the impact of our car washing habits. This guide will show you how to maintain a clean vehicle while minimizing environmental impact.</p>
        
        <h2>Understanding the Environmental Impact</h2>
        <p>Traditional car washing methods can contribute to water pollution and waste. Runoff from car washing often contains harmful chemicals, dirt, and oil that can enter storm drains and affect local waterways.</p>
        
        <h2>Eco-Friendly Washing Methods</h2>
        <p>Learn about waterless and water-efficient washing techniques that can reduce water consumption by up to 90% compared to traditional methods.</p>
        
        <h2>Choosing the Right Products</h2>
        <p>Select biodegradable, phosphate-free cleaning products that are safe for the environment. Look for products with eco-certifications and minimal packaging.</p>
        
        <h2>Water Conservation Techniques</h2>
        <p>Implement water-saving practices such as using a spray nozzle, collecting and reusing water, and washing on permeable surfaces.</p>
        
        <h2>Professional Eco-Friendly Services</h2>
        <p>Many professional car wash services now offer eco-friendly options. Learn how to identify truly green car wash services in your area.</p>
        
        <h2>DIY Eco-Friendly Solutions</h2>
        <p>Create your own eco-friendly cleaning solutions using household ingredients like vinegar and baking soda for various cleaning tasks.</p>
        
        <h2>Conclusion</h2>
        <p>By adopting eco-friendly car washing practices, you can maintain a clean vehicle while protecting the environment. Every small change contributes to a larger positive impact on our planet.</p>
      `,
    },
    "3": {
      title: "Interior Detailing: A Complete Guide",
      author: "David Park",
      date: "2024-01-05",
      img: img3,
      category: "Detailing",
      readTime: "6 min read",
      image: car6,
      excerpt:
        "Master the art of keeping your car's interior spotless and fresh...",
      content: `
        <p>A clean and well-maintained interior not only enhances your driving experience but also helps preserve your vehicle's value. This comprehensive guide covers everything you need to know about interior detailing.</p>
        
        <h2>Essential Tools and Products</h2>
        <p>Learn about the must-have tools and products for effective interior detailing, from microfiber cloths to specialized cleaners for different surfaces.</p>
        
        <h2>Step-by-Step Cleaning Process</h2>
        <p>Follow our detailed process for a thorough interior cleaning, including vacuuming, dusting, and cleaning different surfaces.</p>
        
        <h2>Surface-Specific Care</h2>
        <p>Different materials require different care approaches. Learn how to properly clean and maintain leather, fabric, plastic, and glass surfaces.</p>
        
        <h2>Odor Elimination</h2>
        <p>Discover effective methods for removing and preventing unpleasant odors in your vehicle's interior.</p>
        
        <h2>Protection and Maintenance</h2>
        <p>Learn about products and techniques to protect your interior surfaces and maintain their appearance over time.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        <p>Understand common interior detailing mistakes and how to avoid them for the best results.</p>
        
        <h2>Conclusion</h2>
        <p>With the right knowledge and tools, you can maintain a clean, fresh, and well-preserved interior that enhances your driving experience and protects your investment.</p>
      `,
    },
    "4": {
      title: "Paint Protection Tips",
      author: "Lisa Chen",
      date: "2024-01-01",
      img: img4,
      category: "Maintenance",
      readTime: "8 min read",
      image: car7,
      excerpt:
        "Learn how to protect your car's paint and maintain its shine...",
      content: `
        <p>Your vehicle's paint is its first line of defense against the elements. This guide will help you understand how to protect and maintain your car's paint finish for years to come.</p>
        
        <h2>Understanding Paint Protection</h2>
        <p>Learn about the different types of paint protection available, from traditional wax to modern ceramic coatings.</p>
        
        <h2>Regular Maintenance Routine</h2>
        <p>Establish a regular maintenance routine that includes washing, decontamination, and protection application.</p>
        
        <h2>Protection Products</h2>
        <p>Compare different protection products and learn which ones are best suited for your needs and budget.</p>
        
        <h2>Application Techniques</h2>
        <p>Master the proper techniques for applying different types of paint protection for optimal results.</p>
        
        <h2>Environmental Protection</h2>
        <p>Learn how to protect your paint from various environmental factors, including UV rays, bird droppings, and road salt.</p>
        
        <h2>Professional vs. DIY</h2>
        <p>Understand when to seek professional help and when you can handle paint protection yourself.</p>
        
        <h2>Conclusion</h2>
        <p>Proper paint protection is essential for maintaining your vehicle's appearance and value. With the right knowledge and products, you can keep your car looking its best for years to come.</p>
      `,
    },
    "5": {
      title: "Seasonal Car Care Guide",
      author: "Mike Wilson",
      date: "2023-12-28",
      img: img1,
      category: "Seasonal Care",
      readTime: "6 min read",
      image: car8,
      excerpt:
        "Essential tips for maintaining your car in different weather conditions...",
      content: `
        <p>Different seasons present unique challenges for car maintenance. This comprehensive guide will help you adapt your car care routine to each season's specific needs.</p>
        
        <h2>Spring Care</h2>
        <p>Learn how to address winter damage and prepare your vehicle for warmer weather, including thorough cleaning and paint correction.</p>
        
        <h2>Summer Maintenance</h2>
        <p>Discover how to protect your car from sun damage and heat-related issues during the summer months.</p>
        
        <h2>Fall Preparation</h2>
        <p>Prepare your vehicle for winter by addressing any issues and applying protective measures before cold weather arrives.</p>
        
        <h2>Winter Protection</h2>
        <p>Learn essential winter car care tips, including how to protect your paint from salt and maintain visibility in harsh conditions.</p>
        
        <h2>Seasonal Product Selection</h2>
        <p>Choose the right products for each season to ensure optimal protection and maintenance.</p>
        
        <h2>Storage Considerations</h2>
        <p>If you store your vehicle during certain seasons, learn the proper preparation and maintenance techniques.</p>
        
        <h2>Conclusion</h2>
        <p>By adapting your car care routine to each season, you can maintain your vehicle's appearance and performance year-round.</p>
      `,
    },
    "6": {
      title: "DIY vs Professional Car Wash",
      author: "John Smith",
      date: "2023-12-25",
      img: img2,
      category: "Car Wash",
      readTime: "7 min read",
      image: car10,
      excerpt:
        "Compare the pros and cons of washing your car at home vs. professional service...",
      content: `
        <p>Deciding between DIY car washing and professional services can be challenging. This guide will help you understand the pros and cons of each approach.</p>
        
        <h2>DIY Car Washing</h2>
        <p>Explore the benefits and challenges of washing your car at home, including cost savings and time investment.</p>
        
        <h2>Professional Services</h2>
        <p>Learn about the advantages of professional car washing, including expertise, equipment, and convenience.</p>
        
        <h2>Cost Comparison</h2>
        <p>Compare the long-term costs of DIY vs. professional car washing, including equipment, products, and time investment.</p>
        
        <h2>Quality Considerations</h2>
        <p>Understand the quality differences between DIY and professional washing methods and their impact on your vehicle.</p>
        
        <h2>Environmental Impact</h2>
        <p>Compare the environmental impact of different washing methods and how to minimize your footprint.</p>
        
        <h2>Making the Right Choice</h2>
        <p>Learn how to determine which approach is best for your specific needs and circumstances.</p>
        
        <h2>Conclusion</h2>
        <p>Both DIY and professional car washing have their place in vehicle maintenance. The best choice depends on your priorities, resources, and specific needs.</p>
      `,
    },
    "7": {
      title: "Car Detailing Myths Debunked",
      author: "Sarah Johnson",
      date: "2023-12-20",
      img: img3,
      category: "Detailing",
      readTime: "5 min read",
      image: car11,
      excerpt: "Separate fact from fiction in the world of car detailing...",
      content: `
        <p>The world of car detailing is full of myths and misconceptions. This guide will help you separate fact from fiction and make informed decisions about your car care routine.</p>
        
        <h2>Common Myths</h2>
        <p>Explore and debunk common car detailing myths, from product claims to cleaning techniques.</p>
        
        <h2>Product Misconceptions</h2>
        <p>Learn the truth about various detailing products and their actual benefits and limitations.</p>
        
        <h2>Technique Myths</h2>
        <p>Discover which popular detailing techniques are effective and which ones might be doing more harm than good.</p>
        
        <h2>Cost Misconceptions</h2>
        <p>Understand the real costs of proper car detailing and how to budget effectively.</p>
        
        <h2>Professional vs. DIY Myths</h2>
        <p>Separate fact from fiction regarding professional detailing services and DIY approaches.</p>
        
        <h2>Maintenance Myths</h2>
        <p>Learn the truth about car maintenance schedules and practices.</p>
        
        <h2>Conclusion</h2>
        <p>By understanding the facts about car detailing, you can make better decisions about your vehicle's care and maintenance.</p>
      `,
    },
    "8": {
      title: "Choosing the Right Car Care Products",
      author: "David Park",
      date: "2023-12-15",
      img: img4,
      category: "Products",
      readTime: "8 min read",
      image: car12,
      excerpt:
        "A comprehensive guide to selecting the best products for your vehicle...",
      content: `
        <p>With countless car care products on the market, choosing the right ones can be overwhelming. This guide will help you navigate the options and select the best products for your needs.</p>
        
        <h2>Understanding Product Types</h2>
        <p>Learn about different categories of car care products and their specific purposes.</p>
        
        <h2>Reading Labels</h2>
        <p>Master the art of reading product labels to understand ingredients and their effects.</p>
        
        <h2>Product Selection Criteria</h2>
        <p>Develop a systematic approach to selecting products based on your vehicle's needs and your preferences.</p>
        
        <h2>Budget Considerations</h2>
        <p>Learn how to balance quality and cost when building your car care product collection.</p>
        
        <h2>Product Compatibility</h2>
        <p>Understand how different products work together and which combinations to avoid.</p>
        
        <h2>Storage and Shelf Life</h2>
        <p>Learn how to properly store car care products and understand their shelf life.</p>
        
        <h2>Conclusion</h2>
        <p>By making informed decisions about car care products, you can maintain your vehicle effectively while avoiding unnecessary expenses and potential damage.</p>
      `,
    },
  };

  const post = blogPosts[id as keyof typeof blogPosts];
  const relatedPosts = Object.entries(blogPosts)
    .filter(([postId]) => postId !== id)
    .slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Post Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Header */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="mx-2">•</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4">
                <img src={post.img} className="rounded-full" />
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <div className="flex items-center text-sm">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author Bio */}
          <div
            className="bg-gray-50 rounded-lg p-8 mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0">
                <img src={post.img} className="rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.author} is a certified car detailing expert with years
                  of experience in automotive care and maintenance. Specializing
                  in {post.category.toLowerCase()}, they share their expertise
                  to help car owners maintain their vehicles in optimal
                  condition.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:underline">
                    Website
                  </a>
                  <a href="#" className="text-primary hover:underline">
                    Twitter
                  </a>
                  <a href="#" className="text-primary hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(([postId, relatedPost]) => (
                <Card
                  key={postId}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">
                      {relatedPost.title}
                    </CardTitle>
                    <CardDescription>{relatedPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/blog/${postId}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="outline" asChild>
              <Link to="/blog">← Back to All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
