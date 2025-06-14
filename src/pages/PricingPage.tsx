import Layout from "@/components/Layout";
import FAQSection from "@/components/common/faqSection";
import PricingCarousel from "@/components/sections/PricingCarousel";
const PricingPage = () => {
  return (
    <Layout>
      <PricingCarousel />

      {/* FAQ Section */}
      <FAQSection />
    </Layout>
  );
};

export default PricingPage;
