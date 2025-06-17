import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
// import ImagePlaceholder from "@/components/ui/image-placeholder";
// import TestimonialCard from "@/components/common/TestimonialCard";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import GalleryCard from "@/components/common/GalleryCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Target, Award, Users, Shield, TrendingUp } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import "../styles/style.css";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import car4 from "../images/4_compressed.webp";
import car5 from "../images/5_compressed.webp";
import car6 from "../images/6_compressed.webp";
import car7 from "../images/7_compressed.webp";
import car8 from "../images/8_compressed.webp";
import car10 from "../images/10_compressed.webp";
import HeroSection2 from "@/components/sections/HeroSection2";
import mate1 from "@/images/reviews/img1.png";
import mate2 from "@/images/reviews/img2.png";
import mate3 from "@/images/reviews/img3.png";
import mate4 from "@/images/reviews/img1.png";

const AboutUs = () => {
  const team = [
    {
      name: "John Smith",
      role: "Owner & Founder",
      bio: "Passionate car enthusiast with 20+ years of experience in automotive detailing and customer service excellence.",
      image: mate1,
      linkedin: "#",
      twitter: "#",
      email: "john@sparklewash.com",
    },
    {
      name: "Mike Wilson",
      role: "Head Detailer",
      bio: "Certified detailing expert specializing in paint correction and ceramic coatings with 15 years of experience.",
      image: mate2,
      linkedin: "#",
      twitter: "#",
      email: "mike@sparklewash.com",
    },
    {
      name: "Lisa Chen",
      role: "Customer Service Manager",
      bio: "Dedicated to ensuring every customer receives exceptional service and leaves with a smile.",
      image: mate3,
      linkedin: "#",
      email: "lisa@sparklewash.com",
    },
    {
      name: "David Park",
      role: "Lead Technician",
      bio: "Expert in advanced detailing techniques and maintaining the highest standards of quality.",
      image: mate4,
      linkedin: "#",
      twitter: "#",
      email: "david@sparklewash.com",
    },
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Expert Detailing",
      description:
        "Professional detailing services using premium products and advanced techniques.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Quality Guarantee",
      description:
        "100% satisfaction guarantee on all our car wash and detailing services.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Eco-Friendly",
      description:
        "Environmentally conscious cleaning products and water conservation practices.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Paint Protection",
      description:
        "Advanced paint correction and protection services for long-lasting shine.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Satisfied Customers",
      description:
        "Over 10,000 happy customers served with a 98% satisfaction rate.",
      stat: "10K+",
    },
    {
      title: "Years Experience",
      description:
        "Decades of combined experience in professional car detailing.",
      stat: "20+",
    },
    {
      title: "Services Offered",
      description: "Comprehensive range of car wash and detailing services.",
      stat: "15+",
    },
    {
      title: "Quality Products",
      description: "Using only premium, eco-friendly cleaning products.",
      stat: "100%",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Regular Customer",
      rating: 5,
      text: "The best car wash service I've ever used. My car looks brand new every time!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150",
    },
    {
      name: "Michael Rodriguez",
      role: "Luxury Car Owner",
      rating: 5,
      text: "Their attention to detail is incredible. They treat my car like it's their own.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
    {
      name: "Emma Thompson",
      role: "Business Fleet Manager",
      rating: 5,
      text: "Reliable, professional, and consistent quality. Perfect for our company vehicles.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    },
  ];

  const galleryImages = [
    {
      title: "Exterior Detailing",
      description: "Professional hand washing and detailing services",
      image: car4,
    },
    {
      title: "Interior Cleaning",
      description: "Deep cleaning and sanitization of vehicle interiors",
      image: car5,
    },
    {
      title: "Paint Correction",
      description: "Expert paint correction and protection services",
      image: car6,
    },
    {
      title: "Ceramic Coating",
      description: "Long-lasting ceramic coating application",
      image: car7,
    },
    {
      title: "Engine Bay Cleaning",
      description: "Professional engine bay detailing services",
      image: car8,
    },
    {
      title: "Final Inspection",
      description: "Quality control and final detailing touches",
      image: car10,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2 />

      {/* Mission & Vision */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="animate-fade-in hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-3xl textcolor2">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional car care services that exceed customer
                expectations while maintaining the highest standards of quality,
                environmental responsibility, and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card
            className="animate-fade-in hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-xl"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-3xl textcolor2">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading car wash and detailing service provider, known
                for our commitment to excellence, innovative techniques, and
                dedication to customer satisfaction in every detail.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="gray">
        <SectionHeader
          title="What We Offer"
          subtitle="Comprehensive solutions designed to address every aspect of your business transformation journey."
        />

        <Carousel
          className="w-full max-w-7xl mx-auto"
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "center", loop: false }}
        >
          <CarouselContent className="-ml-4 my-6">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <Card
                  className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl textcolor2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Section>

      {/* Why Choose Us */}
      <Section background="white">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Experience the difference that expertise, dedication, and proven results can make for your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="text-4xl font-bold text-primary mb-4">
                  {item.stat}
                </div>
                <CardTitle className="text-xl textcolor2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="gray">
        <SectionHeader
          title="Meet Our Team"
          subtitle="Industry veterans and innovative thinkers united by a passion for driving business success."
        />

        <Carousel
          className="w-full max-w-7xl mx-auto"
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "center", loop: false }}
        >
          <CarouselContent className="-ml-4 my-6 mx-4">
            {team.map((member, index) => (
              <CarouselItem
                key={member.name}
                className="pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <TeamMemberCard {...member} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Section>

      {/* Gallery Section */}
      <Section background="white">
        <SectionHeader
          title="Our Journey in Pictures"
          subtitle="A glimpse into our world, our culture, and the moments that define our commitment to excellence."
        />

        <Carousel
          className="w-full max-w-7xl mx-auto my-8"
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "center", loop: false }}
        >
          <CarouselContent className="-ml-4 my-8">
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/3 lg:basis-1/3"
              >
                <GalleryCard {...image} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Section>

      {/* Testimonials Carousel */}
      {/* <Section background="gray">
        <SectionHeader
          title="Client Success Stories"
          subtitle="Hear directly from the leaders who have transformed their businesses with our partnership."
        />

        <Carousel
          className="w-full"
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "start", loop: true, dragFree: true }}
        >
          <CarouselContent className="ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Section> */}
      <TestimonialsCarousel />
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Let's discuss how our expertise and proven methodologies can
            accelerate your business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold"
              asChild
            >
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 text-primary hover:bg-bgcolor1 hover:text-white hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
