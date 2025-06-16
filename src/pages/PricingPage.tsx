import Layout from "@/components/Layout";
import FAQSection from "@/components/common/faqSection";
import PricingCarousel from "@/components/sections/PricingCarousel";
import "../styles/style.css";
import HeroSection2 from "@/components/sections/HeroSection2";

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Car Wash Pricing"
        description="Choose from our range of car wash and detailing services. We offer competitive prices for every vehicle type and cleaning need."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      {/* <section className="bgcolor3 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Car Wash Pricing
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Choose from our range of car wash and detailing services. We offer competitive prices for every vehicle type and cleaning need.
            </p>
          </div>
        </div>
      </section> */}

      <PricingCarousel />

      {/* FAQ Section */}
      <FAQSection />
    </Layout>
  );
};

export default PricingPage;
