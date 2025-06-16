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

const BlogCarousel = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Strategies to Scale Your Business in 2024",
      excerpt:
        "Discover proven methods to accelerate growth and expand your market reach...",
      date: "2024-01-15",
      category: "Business Growth",
      readTime: "5 min read",
      image: car4,
    },
    {
      id: 2,
      title: "The Future of Digital Transformation",
      excerpt:
        "How emerging technologies are reshaping industries and creating new opportunities...",
      date: "2024-01-10",
      category: "Technology",
      readTime: "7 min read",
      image: car5,
    },
    {
      id: 3,
      title: "Building a Customer-Centric Brand",
      excerpt:
        "Learn how to create authentic connections with your audience and build loyalty...",
      date: "2024-01-05",
      category: "Branding",
      readTime: "6 min read",
      image: car6,
    },
    {
      id: 4,
      title: "Data-Driven Marketing Success",
      excerpt:
        "Leverage analytics and insights to optimize your marketing performance...",
      date: "2024-01-01",
      category: "Marketing",
      readTime: "8 min read",
      image: car7,
    },
    {
      id: 5,
      title: "Innovation in Business Strategy",
      excerpt:
        "Explore cutting-edge approaches to business strategy and market positioning...",
      date: "2023-12-28",
      category: "Strategy",
      readTime: "6 min read",
      image: car8,
    },
    {
      id: 6,
      title: "Sustainable Business Practices",
      excerpt:
        "Learn how to implement eco-friendly practices while maintaining profitability...",
      date: "2023-12-25",
      category: "Sustainability",
      readTime: "7 min read",
      image: car10,
    },
    {
      id: 7,
      title: "Digital Marketing Trends 2024",
      excerpt:
        "Stay ahead of the curve with the latest digital marketing trends and strategies...",
      date: "2023-12-20",
      category: "Marketing",
      readTime: "5 min read",
      image: car11,
    },
    {
      id: 8,
      title: "Leadership in the Digital Age",
      excerpt:
        "Master the art of leading teams in an increasingly digital and remote world...",
      date: "2023-12-15",
      category: "Leadership",
      readTime: "8 min read",
      image: car12,
    },
  ];

  return (
    <Section id="blog" background="gray">
      <SectionHeader
        title="Latest Insights"
        subtitle="Stay ahead with expert insights, industry trends, and actionable strategies."
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
              <BlogCard {...post} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default BlogCarousel;
