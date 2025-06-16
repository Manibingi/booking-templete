// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import AnimatedCounter from "@/components/ui/animated-counter";
import "../../styles/style.css";
import PropTypes from "prop-types";
import car6 from "../../images/6_compressed.webp";

const HeroSection2 = ({
  title = "About Our Story",
  description = "Empowering businesses worldwide with innovative solutions, strategic insights, and unwavering commitment to excellence since 2010.",
  backgroundImage = car6,
  className = "",
  titleClassName = "text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent",
  descriptionClassName = "text-xl max-w-3xl mx-auto opacity-90 leading-relaxed",
  overlayColor = "rgba(0, 0, 0, 0.5)",
}) => {
  const sectionStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <section
      className={`bgcolor3 text-white py-24 relative ${className}`}
      style={sectionStyle}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className={titleClassName}>{title}</h1>
          <p className={descriptionClassName}>{description}</p>
        </div>
      </div>
    </section>
  );
};

HeroSection2.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  overlayColor: PropTypes.string,
};

export default HeroSection2;
