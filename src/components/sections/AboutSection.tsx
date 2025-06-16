import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
// import ImagePlaceholder from "@/components/ui/image-placeholder";
import car2 from "../../images/2_compressed.webp";
import "../../styles/style.css";

const AboutSection = () => {
  return (
    <Section id="about" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-6">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-bold textcolor3 mb-8 leading-tight">
            Professional Car Care with{" "}
            <span className="textcolor1">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            With over 20 years of experience, we've transformed thousands of vehicles through our premium detailing services, eco-friendly products, and unwavering commitment to customer satisfaction.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Our team of certified detailers brings together expertise in paint correction, ceramic coating, and interior detailing to deliver showroom-quality results that exceed expectations and protect your investment.
          </p>
          <Button
            size="lg"
            asChild
            className="text-md hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
        <div
          className="relative animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <img
            src={car2}
            // height="h-[300px]"
            className="hover:scale-105 transition-transform duration-500"
          />
          {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full animate-pulse"></div> */}
          {/* <div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div> */}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
