import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import BlogPostContent from "@/components/common/BlogPostContent";
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
import "../styles/style.css";

const BlogPost = () => {
  const { id } = useParams();

  // Blog data with plain text content
  const blogPosts = {
    "1": {
      id: "1",
      title: "10 Essential Car Care Tips for 2024",
      author: "Mike Wilson",
      date: "2024-01-15",
      img: img1,
      category: "Car Care",
      readTime: "5 min read",
      image: car4,
      content: [
        {
          type: "paragraph",
          text: "Maintaining your car's appearance and value requires consistent care and attention. In this comprehensive guide, we'll share 10 essential tips that will help keep your vehicle looking its best in 2024 and beyond.",
        },
        {
          type: "heading",
          text: "1. Regular Washing Schedule",
        },
        {
          type: "paragraph",
          text: "Establish a consistent washing schedule based on your driving conditions. For most vehicles, a bi-weekly wash is recommended, but adjust based on weather conditions and usage patterns.",
        },
        {
          type: "heading",
          text: "2. Proper Washing Technique",
        },
        {
          type: "paragraph",
          text: "Always use the two-bucket method: one for soapy water and one for rinsing your wash mitt. This prevents dirt from being reintroduced to your paint surface, reducing the risk of scratches.",
        },
        {
          type: "heading",
          text: "3. Interior Maintenance",
        },
        {
          type: "paragraph",
          text: "Regular vacuuming and dusting of your interior prevents dirt buildup and maintains a fresh cabin environment. Pay special attention to high-touch areas like the steering wheel and gear shift.",
        },
        {
          type: "heading",
          text: "4. Tire Care",
        },
        {
          type: "paragraph",
          text: "Clean and dress your tires regularly to prevent premature aging and maintain their appearance. Use a dedicated tire cleaner and protectant for best results.",
        },
        {
          type: "heading",
          text: "5. Paint Protection",
        },
        {
          type: "paragraph",
          text: "Consider applying a ceramic coating or paint protection film for long-term protection. These solutions provide superior protection against UV rays, bird droppings, and environmental contaminants.",
        },
        {
          type: "heading",
          text: "6. Glass Maintenance",
        },
        {
          type: "paragraph",
          text: "Keep your windows clean using a dedicated glass cleaner. Clean glass improves visibility and safety while driving.",
        },
        {
          type: "heading",
          text: "7. Wheel Care",
        },
        {
          type: "paragraph",
          text: "Regular cleaning of wheels prevents brake dust buildup and corrosion. Use a pH-balanced wheel cleaner and soft brushes to avoid damaging the finish.",
        },
        {
          type: "heading",
          text: "8. Proper Drying",
        },
        {
          type: "paragraph",
          text: "Always dry your vehicle after washing using a microfiber towel or blower. This prevents water spots and maintains a streak-free finish.",
        },
        {
          type: "heading",
          text: "9. Seasonal Care",
        },
        {
          type: "paragraph",
          text: "Adjust your car care routine based on the season. Winter requires more frequent washing to remove road salt, while summer demands protection against UV damage.",
        },
        {
          type: "heading",
          text: "10. Professional Detailing",
        },
        {
          type: "paragraph",
          text: "Schedule regular professional detailing sessions for deep cleaning and paint correction. This helps maintain your vehicle's value and appearance over time.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "By following these essential car care tips, you'll not only maintain your vehicle's appearance but also protect its value and ensure a more enjoyable driving experience. Remember, consistent care is key to keeping your car looking its best.",
        },
      ],
    },
    "2": {
      id: "2",
      title: "Eco-Friendly Car Washing Guide",
      author: "Sarah Johnson",
      date: "2024-01-10",
      img: img2,
      category: "Eco-Friendly",
      readTime: "7 min read",
      image: car5,
      content: [
        {
          type: "paragraph",
          text: "In today's environmentally conscious world, it's important to consider the impact of our car washing habits. This guide will show you how to maintain a clean vehicle while minimizing environmental impact.",
        },
        {
          type: "heading",
          text: "Understanding the Environmental Impact",
        },
        {
          type: "paragraph",
          text: "Traditional car washing methods can contribute to water pollution and waste. Runoff from car washing often contains harmful chemicals, dirt, and oil that can enter storm drains and affect local waterways.",
        },
        {
          type: "heading",
          text: "Eco-Friendly Washing Methods",
        },
        {
          type: "paragraph",
          text: "Learn about waterless and water-efficient washing techniques that can reduce water consumption by up to 90% compared to traditional methods.",
        },
        {
          type: "heading",
          text: "Choosing the Right Products",
        },
        {
          type: "paragraph",
          text: "Select biodegradable, phosphate-free cleaning products that are safe for the environment. Look for products with eco-certifications and minimal packaging.",
        },
        {
          type: "heading",
          text: "Water Conservation Techniques",
        },
        {
          type: "paragraph",
          text: "Implement water-saving practices such as using a spray nozzle, collecting and reusing water, and washing on permeable surfaces.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "By adopting eco-friendly car washing practices, you can maintain a clean vehicle while protecting the environment. Every small change contributes to a larger positive impact on our planet.",
        },
      ],
    },
    "3": {
      id: "3",
      title: "Interior Detailing: A Complete Guide",
      author: "David Park",
      date: "2024-01-05",
      img: img3,
      category: "Detailing",
      readTime: "6 min read",
      image: car6,
      content: [
        {
          type: "paragraph",
          text: "A clean and well-maintained interior not only enhances your driving experience but also helps preserve your vehicle's value. This comprehensive guide covers everything you need to know about interior detailing.",
        },
        {
          type: "heading",
          text: "Essential Tools and Products",
        },
        {
          type: "paragraph",
          text: "Learn about the must-have tools and products for effective interior detailing, from microfiber cloths to specialized cleaners for different surfaces.",
        },
        {
          type: "heading",
          text: "Step-by-Step Cleaning Process",
        },
        {
          type: "paragraph",
          text: "Follow our detailed process for a thorough interior cleaning, including vacuuming, dusting, and cleaning different surfaces.",
        },
        {
          type: "heading",
          text: "Surface-Specific Care",
        },
        {
          type: "paragraph",
          text: "Different materials require different care approaches. Learn how to properly clean and maintain leather, fabric, plastic, and glass surfaces.",
        },
        {
          type: "heading",
          text: "Odor Elimination",
        },
        {
          type: "paragraph",
          text: "Discover effective methods for removing and preventing unpleasant odors in your vehicle's interior.",
        },
        {
          type: "heading",
          text: "Protection and Maintenance",
        },
        {
          type: "paragraph",
          text: "Learn about products and techniques to protect your interior surfaces and maintain their appearance over time.",
        },
        {
          type: "heading",
          text: "Common Mistakes to Avoid",
        },
        {
          type: "paragraph",
          text: "Understand common interior detailing mistakes and how to avoid them for the best results.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "With the right knowledge and tools, you can maintain a clean, fresh, and well-preserved interior that enhances your driving experience and protects your investment.",
        },
      ],
    },
    "4": {
      id: "4",
      title: "Paint Protection Tips",
      author: "Lisa Chen",
      date: "2024-01-01",
      img: img4,
      category: "Maintenance",
      readTime: "8 min read",
      image: car7,
      content: [
        {
          type: "paragraph",
          text: "Your vehicle's paint is its first line of defense against the elements. This guide will help you understand how to protect and maintain your car's paint finish for years to come.",
        },
        {
          type: "heading",
          text: "Understanding Paint Protection",
        },
        {
          type: "paragraph",
          text: "Learn about the different types of paint protection available, from traditional wax to modern ceramic coatings.",
        },
        {
          type: "heading",
          text: "Regular Maintenance Routine",
        },
        {
          type: "paragraph",
          text: "Establish a regular maintenance routine that includes washing, decontamination, and protection application.",
        },
        {
          type: "heading",
          text: "Protection Products",
        },
        {
          type: "paragraph",
          text: "Compare different protection products and learn which ones are best suited for your needs and budget.",
        },
        {
          type: "heading",
          text: "Application Techniques",
        },
        {
          type: "paragraph",
          text: "Master the proper techniques for applying different types of paint protection for optimal results.",
        },
        {
          type: "heading",
          text: "Environmental Protection",
        },
        {
          type: "paragraph",
          text: "Learn how to protect your paint from various environmental factors, including UV rays, bird droppings, and road salt.",
        },
        {
          type: "heading",
          text: "Professional vs. DIY",
        },
        {
          type: "paragraph",
          text: "Understand when to seek professional help and when you can handle paint protection yourself.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "Proper paint protection is essential for maintaining your vehicle's appearance and value. By following these guidelines, you can keep your car looking its best for years to come.",
        },
      ],
    },
    "5": {
      id: "5",
      title: "Seasonal Car Care Guide",
      author: "Mike Wilson",
      date: "2023-12-28",
      img: img1,
      category: "Seasonal Care",
      readTime: "6 min read",
      image: car8,
      content: [
        {
          type: "paragraph",
          text: "Different seasons present unique challenges for car maintenance. This comprehensive guide will help you adapt your car care routine to each season's specific needs.",
        },
        {
          type: "heading",
          text: "Spring Care",
        },
        {
          type: "paragraph",
          text: "Learn how to address winter damage and prepare your vehicle for warmer weather, including thorough cleaning and paint correction.",
        },
        {
          type: "heading",
          text: "Summer Maintenance",
        },
        {
          type: "paragraph",
          text: "Discover how to protect your car from sun damage and heat-related issues during the summer months.",
        },
        {
          type: "heading",
          text: "Fall Preparation",
        },
        {
          type: "paragraph",
          text: "Prepare your vehicle for winter by addressing any issues and applying protective measures before cold weather arrives.",
        },
        {
          type: "heading",
          text: "Winter Protection",
        },
        {
          type: "paragraph",
          text: "Learn essential winter car care tips, including how to protect your paint from salt and maintain visibility in harsh conditions.",
        },
        {
          type: "heading",
          text: "Seasonal Product Selection",
        },
        {
          type: "paragraph",
          text: "Choose the right products for each season to ensure optimal protection and maintenance.",
        },
        {
          type: "heading",
          text: "Storage Considerations",
        },
        {
          type: "paragraph",
          text: "If you store your vehicle during certain seasons, learn the proper preparation and maintenance techniques.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "By adapting your car care routine to each season, you can maintain your vehicle's appearance and performance year-round.",
        },
      ],
    },
    "6": {
      id: "6",
      title: "DIY vs Professional Car Wash",
      author: "John Smith",
      date: "2023-12-25",
      img: img2,
      category: "Car Wash",
      readTime: "7 min read",
      image: car10,
      content: [
        {
          type: "paragraph",
          text: "Deciding between DIY car washing and professional services can be challenging. This guide will help you understand the pros and cons of each approach.",
        },
        {
          type: "heading",
          text: "DIY Car Washing",
        },
        {
          type: "paragraph",
          text: "Explore the benefits and challenges of washing your car at home, including cost savings and time investment.",
        },
        {
          type: "heading",
          text: "Professional Services",
        },
        {
          type: "paragraph",
          text: "Learn about the advantages of professional car washing, including expertise, equipment, and convenience.",
        },
        {
          type: "heading",
          text: "Cost Comparison",
        },
        {
          type: "paragraph",
          text: "Compare the long-term costs of DIY vs. professional car washing, including equipment, products, and time investment.",
        },
        {
          type: "heading",
          text: "Quality Considerations",
        },
        {
          type: "paragraph",
          text: "Understand the quality differences between DIY and professional washing methods and their impact on your vehicle.",
        },
        {
          type: "heading",
          text: "Environmental Impact",
        },
        {
          type: "paragraph",
          text: "Compare the environmental impact of different washing methods and how to minimize your footprint.",
        },
        {
          type: "heading",
          text: "Making the Right Choice",
        },
        {
          type: "paragraph",
          text: "Learn how to determine which approach is best for your specific needs and circumstances.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "Both DIY and professional car washing have their place in vehicle maintenance. The best choice depends on your priorities, resources, and specific needs.",
        },
      ],
    },
    "7": {
      id: "7",
      title: "Car Detailing Myths Debunked",
      author: "Sarah Johnson",
      date: "2023-12-20",
      img: img3,
      category: "Detailing",
      readTime: "5 min read",
      image: car11,
      content: [
        {
          type: "paragraph",
          text: "The world of car detailing is full of myths and misconceptions. This guide will help you separate fact from fiction and make informed decisions about your car care routine.",
        },
        {
          type: "heading",
          text: "Common Myths",
        },
        {
          type: "paragraph",
          text: "Explore and debunk common car detailing myths, from product claims to cleaning techniques.",
        },
        {
          type: "heading",
          text: "Product Misconceptions",
        },
        {
          type: "paragraph",
          text: "Learn the truth about various detailing products and their actual benefits and limitations.",
        },
        {
          type: "heading",
          text: "Technique Myths",
        },
        {
          type: "paragraph",
          text: "Discover which popular detailing techniques are effective and which ones might be doing more harm than good.",
        },
        {
          type: "heading",
          text: "Cost Misconceptions",
        },
        {
          type: "paragraph",
          text: "Understand the real costs of proper car detailing and how to budget effectively.",
        },
        {
          type: "heading",
          text: "Professional vs. DIY Myths",
        },
        {
          type: "paragraph",
          text: "Separate fact from fiction regarding professional detailing services and DIY approaches.",
        },
        {
          type: "heading",
          text: "Maintenance Myths",
        },
        {
          type: "paragraph",
          text: "Learn the truth about car maintenance schedules and practices.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "By understanding the facts about car detailing, you can make better decisions about your vehicle's care and maintenance.",
        },
      ],
    },
    "8": {
      id: "8",
      title: "Choosing the Right Car Care Products",
      author: "David Park",
      date: "2023-12-15",
      img: img4,
      category: "Products",
      readTime: "8 min read",
      image: car12,
      content: [
        {
          type: "paragraph",
          text: "With countless car care products on the market, choosing the right ones can be overwhelming. This guide will help you navigate the options and select the best products for your needs.",
        },
        {
          type: "heading",
          text: "Understanding Product Types",
        },
        {
          type: "paragraph",
          text: "Learn about different categories of car care products and their specific purposes.",
        },
        {
          type: "heading",
          text: "Reading Labels",
        },
        {
          type: "paragraph",
          text: "Master the art of reading product labels to understand ingredients and their effects.",
        },
        {
          type: "heading",
          text: "Quality vs. Price",
        },
        {
          type: "paragraph",
          text: "Learn how to balance quality and price when selecting car care products.",
        },
        {
          type: "heading",
          text: "Product Compatibility",
        },
        {
          type: "paragraph",
          text: "Understand which products work well together and which combinations to avoid.",
        },
        {
          type: "heading",
          text: "Environmental Considerations",
        },
        {
          type: "paragraph",
          text: "Choose eco-friendly products that are effective and safe for the environment.",
        },
        {
          type: "heading",
          text: "Storage and Shelf Life",
        },
        {
          type: "paragraph",
          text: "Learn how to properly store your car care products and understand their shelf life.",
        },
        {
          type: "heading",
          text: "Conclusion",
        },
        {
          type: "paragraph",
          text: "By making informed choices about car care products, you can maintain your vehicle effectively while getting the best value for your investment.",
        },
      ],
    },
  };

  const post = blogPosts[id as keyof typeof blogPosts];
  const relatedPosts = Object.entries(blogPosts)
    .filter(([postId]) => postId !== id)
    .slice(0, 3)
    .map(([postId, post]) => ({
      id: postId,
      title: post.title,
      excerpt: post.content[0].text, // Use the first paragraph as excerpt
      date: post.date,
      category: post.category,
      image: post.image,
    }));

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
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </Layout>
  );
};

export default BlogPost;
