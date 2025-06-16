import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import car16 from "../../images/16_compressed.webp";
// import ImagePlaceholder from "@/components/ui/image-placeholder";

const MissionSection = () => {
  return (
    <Section id="mission" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1 animate-fade-in">
          <img
            src={car16}
            height="h-[500px]"
            className="hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -top-8 -left-8 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
        <div
          className="order-1 lg:order-2 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-5xl font-bold textcolor3 mb-8 leading-tight">
            Your Car's <span className="textcolor3">Best Friend</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our mission is to provide exceptional car care services that keep your vehicle looking its best. We combine advanced cleaning technology with eco-friendly products to deliver outstanding results while protecting the environment.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We believe in the power of attention to detail, the importance of customer satisfaction, and the value of maintaining your vehicle's appearance and value through professional care and maintenance.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hover:scale-105 text-md transition-transform duration-300 shadow-lg"
          >
            <Link
              to="/about"
              className="bg-white border-2 border-primary text-primary hover:bg-bgcolor1 hover:text-white"
            >
              Our Story
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default MissionSection;
