import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import "../../styles/style.css";

const CTASection = () => {
  return (
    <Section background="white">
      <div className="text-center animate-fade-in">
        <h2 className="text-5xl font-bold mb-8 textcolor3">
          Give Your Car the Care It Deserves
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Join thousands of satisfied customers who trust us with their
          vehicles. Experience the difference of professional detailing and
          premium car care services.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 shadow-lg bgcolor1"
            asChild
          >
            <Link to="/contact">Book Your Wash Now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-4 hover:scale-105 hover:bg-bgcolor1 hover:text-white transition-transform duration-300 shadow-lg"
            asChild
          >
            <Link to="/pricing">View Our Packages</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
