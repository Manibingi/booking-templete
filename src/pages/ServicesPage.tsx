import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
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

const ServicesPage = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const services = [
    {
      title: "Service Package 1",
      description:
        "Comprehensive service description placeholder. Replace with your actual service details.",
      price: "Starting at $299",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Service Package 2",
      description:
        "Premium service description placeholder. Replace with your actual service details.",
      price: "Starting at $599",
      features: [
        "All features from Package 1",
        "Additional Feature 1",
        "Additional Feature 2",
        "Priority Support",
      ],
    },
    {
      title: "Service Package 3",
      description:
        "Enterprise service description placeholder. Replace with your actual service details.",
      price: "Custom Pricing",
      features: [
        "All features from Package 2",
        "Enterprise Feature 1",
        "Enterprise Feature 2",
        "Dedicated Account Manager",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Comprehensive solutions designed to accelerate your growth and
              maximize your potential.
            </p>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-6 textcolor3">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to meet your
              specific needs. Placeholder text for services overview.
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
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
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
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Expert Team", "Quality Guarantee", "24/7 Support"].map(
                (benefit, index) => (
                  <div key={benefit} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 textcolor2">
                      {benefit}
                    </h3>
                    <p className="text-gray-600">
                      Placeholder description for {benefit.toLowerCase()}.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
