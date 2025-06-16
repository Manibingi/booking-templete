import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import TestimonialCard from "@/components/common/TestimonialCard";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/images/reviews/img1.png"
import img2 from "@/images/reviews/img2.png";
import img3 from "@/images/reviews/img3.png";
import img4 from "@/images/reviews/img4.png";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      rating: 5,
      text: "Absolutely transformed our business operations. The results exceeded all expectations!",
      image: img1,
    },
    {
      name: "Michael Chen",
      role: "Founder",
      rating: 5,
      text: "Professional, reliable, and incredibly effective. Highly recommend to any business owner.",
      image: img2,
    },
    {
      name: "Emily Davis",
      role: "Director",
      rating: 5,
      text: "Outstanding service quality and customer support. They truly care about your success.",
      image: img3,
    },
    {
      name: "David Wilson",
      role: "Manager",
      rating: 5,
      text: "Best investment we made for our company. The ROI was immediate and substantial.",
      image: img4,
    },
  ];

  return (
    <Section id="testimonials" background="gray">
      <SectionHeader
        title="Success Stories"
        subtitle="Hear from the industry leaders who have transformed their businesses with our solutions."
      />

      <Carousel
        className="w-full max-w-7xl mx-auto"
        plugins={[Autoplay({ delay: 4000 })]}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="!ml-1">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/3 lg:basis-1/4 flex flex-col items-stretch h-full px-4"
            >
              <TestimonialCard {...testimonial} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default TestimonialsCarousel;
