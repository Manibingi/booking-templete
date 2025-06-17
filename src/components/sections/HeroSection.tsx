import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/ui/animated-counter";
import { useEffect, useState } from "react";
import "../../styles/style.css";
import heroBgImage from "@/images/5_compressed.webp";
import heroBgImage1 from "@/images/6_compressed.webp";
import heroBgImage2 from "@/images/7_compressed.webp";
import heroBgImage3 from "@/images/8_compressed.webp";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroBgImage, heroBgImage1, heroBgImage2, heroBgImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat h-screen">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 transition-all duration-3000 ease-in-out">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bgcolor3 opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-scale-in bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            SparkleWash <span className="text-yellow-300">Pro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Experience the ultimate car care service with our professional
            detailing, eco-friendly products, and attention to detail that makes
            your vehicle shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-4 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/25 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold"
              asChild
            >
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 text-black border-0 hover:bg-bgcolor1 hover:text-white hover:border-gray-900 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                <AnimatedCounter target={10000} suffix="+" />
              </div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                <AnimatedCounter target={98} suffix="%" />
              </div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                <AnimatedCounter target={15} suffix="+" />
              </div>
              <div className="text-white/80">Services</div>
            </div>
            <div
              className="text-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                <AnimatedCounter target={20} suffix="+" />
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
