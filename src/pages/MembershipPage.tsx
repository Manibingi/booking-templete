import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MembershipPage = () => {
  const plans = [
    {
      name: "Basic Wash",
      price: "$29",
      period: "month",
      description: "Perfect for regular car maintenance",
      features: [
        "4 Basic Car Washes per month",
        "Exterior hand wash",
        "Tire cleaning",
        "Window cleaning",
        "Vacuum interior",
        "Basic dashboard wipe"
      ],
      popular: false
    },
    {
      name: "Premium Care",
      price: "$79",
      period: "month", 
      description: "For car enthusiasts who want the best",
      features: [
        "6 Premium Washes per month",
        "Everything in Basic Wash",
        "Clay bar treatment",
        "Wax application",
        "Leather conditioning",
        "Carpet shampooing",
        "Air freshener"
      ],
      popular: true
    },
    {
      name: "Elite Detail",
      price: "$199",
      period: "month",
      description: "Ultimate car care experience",
      features: [
        "8 Elite Washes per month",
        "Everything in Premium Care",
        "Ceramic coating maintenance",
        "Paint correction",
        "Engine bay cleaning",
        "Headlight restoration",
        "Priority booking",
        "Free seasonal detailing"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Car Wash Memberships
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Choose the perfect membership plan for your vehicle. Enjoy regular car care services at discounted rates with our flexible monthly plans.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <Section background="white">
        <SectionHeader 
          title="Select Your Membership"
          subtitle="Choose from our range of car care packages designed to keep your vehicle looking its best."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help Choosing a Plan?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our car care experts can help you select the perfect membership based on your vehicle type and maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default MembershipPage;
