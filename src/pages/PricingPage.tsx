import Layout from "@/components/Layout";
import FAQSection from "@/components/common/faqSection";
import PricingCarousel from "@/components/sections/PricingCarousel";
const PricingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Our Pricing Plan
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Select the plan that best fits your needs and scale as you grow.
              All plans include our core features with varying limits and
              support levels.
            </p>
          </div>
        </div>
      </section>

      <PricingCarousel />

      {/* FAQ Section */}
      <FAQSection />
    </Layout>
  );
};

export default PricingPage;
