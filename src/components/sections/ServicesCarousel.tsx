import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import ServiceCard from "@/components/common/ServiceCard";
import Autoplay from "embla-carousel-autoplay";
import { Droplet, Sparkles, Shield, Car } from "lucide-react";
import "../../styles/style.css";

const ServicesCarousel = () => {
  const services = [
    {
      title: "Premium Wash",
      description:
        "Complete exterior wash with premium wax and interior detailing",
      price: "$49.99",
      image: "Service Image 1",
      icon: Droplet,
    },
    {
      title: "Express Wash",
      description: "Quick exterior wash with basic interior cleaning",
      price: "$29.99",
      image: "Service Image 2",
      icon: Car,
    },
    {
      title: "Detailing Package",
      description: "Comprehensive detailing with paint correction and protection",
      price: "$149.99",
      image: "Service Image 3",
      icon: Sparkles,
    },
    {
      title: "Ceramic Coating",
      description: "Long-lasting paint protection with ceramic coating",
      price: "$599.99",
      image: "Service Image 4",
      icon: Shield,
    },
  ];

  return (
    <Section id="services" background="white" >
      <SectionHeader
        title="Our Premium Car Care Services"
        subtitle="Professional car wash and detailing services to keep your vehicle looking its best."
      />

      <Carousel
        className="w-full max-w-7xl mx-auto"
        plugins={[Autoplay({ delay: 4000 })]}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/3 lg:basis-1/4 flex justify-center w-full my-8"
            >
              <ServiceCard {...service} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default ServicesCarousel;
