import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import BlogCard from "@/components/common/BlogCard";
import Autoplay from "embla-carousel-autoplay";
import car4 from "../../images/4_compressed.webp";
import car5 from "../../images/5_compressed.webp";
import car6 from "../../images/6_compressed.webp";
import car7 from "../../images/7_compressed.webp";
import car8 from "../../images/8_compressed.webp";
import car10 from "../../images/10_compressed.webp";
import car11 from "../../images/11_compressed.webp";
import car12 from "../../images/12_compressed.webp";
import { Link } from "react-router-dom";

const BlogCarousel = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Car Care Tips for 2024",
      excerpt:
        "Learn the best practices to maintain your vehicle's appearance and value...",
      date: "2024-01-15",
      category: "Car Care",
      readTime: "5 min read",
      image: car4,
    },
    {
      id: 2,
      title: "Eco-Friendly Car Washing Guide",
      excerpt:
        "Discover how to keep your car clean while protecting the environment...",
      date: "2024-01-10",
      category: "Eco-Friendly",
      readTime: "7 min read",
      image: car5,
    },
    {
      id: 3,
      title: "Interior Detailing: A Complete Guide",
      excerpt:
        "Master the art of keeping your car's interior spotless and fresh...",
      date: "2024-01-05",
      category: "Detailing",
      readTime: "6 min read",
      image: car6,
    },
    {
      id: 4,
      title: "Paint Protection Tips",
      excerpt:
        "Learn how to protect your car's paint and maintain its shine...",
      date: "2024-01-01",
      category: "Maintenance",
      readTime: "8 min read",
      image: car7,
    },
    {
      id: 5,
      title: "Seasonal Car Care Guide",
      excerpt:
        "Essential tips for maintaining your car in different weather conditions...",
      date: "2023-12-28",
      category: "Seasonal Care",
      readTime: "6 min read",
      image: car8,
    },
    {
      id: 6,
      title: "DIY vs Professional Car Wash",
      excerpt:
        "Compare the pros and cons of washing your car at home vs. professional service...",
      date: "2023-12-25",
      category: "Car Wash",
      readTime: "7 min read",
      image: car10,
    },
    {
      id: 7,
      title: "Car Detailing Myths Debunked",
      excerpt:
        "Separate fact from fiction in the world of car detailing...",
      date: "2023-12-20",
      category: "Detailing",
      readTime: "5 min read",
      image: car11,
    },
    {
      id: 8,
      title: "Choosing the Right Car Care Products",
      excerpt:
        "A comprehensive guide to selecting the best products for your vehicle...",
      date: "2023-12-15",
      category: "Products",
      readTime: "8 min read",
      image: car12,
    },
  ];

  return (
    <Section id="blog" background="gray">
      <SectionHeader
        title="Car Care Tips & Insights"
        subtitle="Stay informed with expert advice, maintenance tips, and the latest in car care technology."
      />

      <Carousel
        className="w-full max-w-7xl mx-auto"
        plugins={[Autoplay({ delay: 4000 })]}
        opts={{ align: "center", loop: false }}
      >
        <CarouselContent className="!m">
          {blogPosts.map((post, index) => (
            <CarouselItem
              key={index}
              className="!pl-4 md:basis-1/3 lg:basis-1/3 flex flex-col items-stretch h-full"
            >
              <Link to={`/blog/${post.id}`} className="h-full flex flex-col">
                <BlogCard {...post} index={index} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default BlogCarousel;
