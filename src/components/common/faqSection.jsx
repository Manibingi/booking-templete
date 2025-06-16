import React from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a typical car wash take?",
      answer:
        "Our basic wash takes about 15-20 minutes, while our premium detailing services can take 1-2 hours depending on the package you choose.",
    },
    {
      question: "Do I need to make an appointment?",
      answer:
        "While walk-ins are welcome, we recommend booking an appointment to ensure availability and minimize wait times. You can book online or call us.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and cash. We also offer convenient mobile payment options through our app.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule your appointment up to 24 hours before your scheduled time without any penalty. Please check our cancellation policy for more details.",
    },
  ];

  return (
    <>
      {/* FAQ Section */}
      <Section background="gray">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Got questions about our car wash services? We've got answers. If you can't find what you're looking for, feel free to contact us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <h4 className="font-semibold textcolor2 mb-3">{faq.question}</h4>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-white border-2 border-primary text-md text-primary hover:bg-bgcolor1 hover:text-white"
          >
            <Link to="/contact">Book Your Wash Now</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default FAQSection;
