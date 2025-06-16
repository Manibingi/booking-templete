import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {Award, Leaf, CheckCircle} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
// import "../../../styles/style.css";
import "../styles/style.css"; // Adjust the path as necessary
import HeroSection2 from "@/components/sections/HeroSection2";

const ServicesPage = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const services = [
    {
      title: "Basic Wash Package",
      description:
        "Perfect for regular maintenance. Exterior wash, tire cleaning, and basic interior vacuum.",
      price: "Starting at $19.99",
      features: [
        "Exterior Hand Wash",
        "Tire Cleaning",
        "Basic Interior Vacuum",
        "Window Cleaning",
        "Air Freshener"
      ],
    },
    {
      title: "Premium Detail Package",
      description:
        "Complete interior and exterior cleaning with premium products and attention to detail.",
      price: "Starting at $49.99",
      features: [
        "All Basic Wash Features",
        "Interior Deep Cleaning",
        "Leather Conditioning",
        "Clay Bar Treatment",
        "Wax Application"
      ],
    },
    {
      title: "Ultimate Detail Package",
      description:
        "Our most comprehensive service for the ultimate showroom finish.",
      price: "Starting at $99.99",
      features: [
        "All Premium Features",
        "Paint Correction",
        "Ceramic Coating",
        "Engine Bay Cleaning",
        "Premium Wax Treatment"
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Our Services"
        description="Comprehensive solutions designed to accelerate your growth and maximize your potential."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      {/* Service Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-6 textcolor3">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional car wash and detailing
              services, designed to meet your vehicle's needs.
            </p>
          </div>
          <Carousel
            className="w-full"
            plugins={[autoplayRef.current]}
            opts={{ align: "center", loop: false }}
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem
                  key={service.title}
                  className="pl-4 md:basis-1/3 lg:basis-1/3"
                >
                  <Card
                    className="hover:shadow-lg my-8 mx-4 transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl textcolor2">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold textcolor2 mb-6">
                        {service.price}
                      </div>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full hover:scale-105 transition-transform duration-300"
                        asChild
                      >
                        <Link to="/booking">Book This Service</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Why Choose Us Section */}
          
          <div
            className="bg-gray-50 rounded-lg p-12 animate-fade-in mt-16"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-3xl font-bold text-center textcolor3 mb-12">
              Why Choose SparkleWash?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Detailers",
                  icon: Award,
                  description:
                    "Our team consists of certified professionals with years of experience.",
                },
                {
                  title: "Eco-Friendly Products",
                  icon: Leaf,
                  description:
                    "We use environmentally safe products that protect your car and the planet.",
                },
                {
                  title: "Satisfaction Guaranteed",
                  icon: CheckCircle,
                  description:
                    "We guarantee your satisfaction with every wash and detail service.",
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.title} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 textcolor2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div
            className="bg-gray-50 rounded-lg p-12 animate-fade-in mt-16"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-3xl font-bold text-center textcolor3 mb-12">
              Why Choose SparkleWash?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Expert Detailers",
                "Eco-Friendly Products",
                "Satisfaction Guaranteed"
              ].map(
                (benefit, index) => (
                  <div key={benefit} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 textcolor2">
                      {benefit}
                    </h3>
                    <p className="text-gray-600">
                      {benefit === "Expert Detailers"
                        ? "Our team consists of certified professionals with years of experience."
                        : benefit === "Eco-Friendly Products"
                          ? "We use environmentally safe products that protect your car and the planet."
                          : "We guarantee your satisfaction with every wash and detail service."}
                    </p>
                  </div>
                )
              )}
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
