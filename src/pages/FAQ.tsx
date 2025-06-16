import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail } from "lucide-react";
import "../styles/style.css"; // Ensure your styles are imported
import HeroSection2 from "@/components/sections/HeroSection2";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services do you offer?",
          answer:
            "We offer a comprehensive range of car care services including basic car wash, premium detailing, paint correction, ceramic coating, interior cleaning, and engine bay detailing. Our services are designed to keep your vehicle looking its best and protect its value.",
        },
        {
          question: "How do I book a service?",
          answer:
            "Booking is easy! You can book online through our website, call us directly, or visit our location. We recommend booking in advance to secure your preferred time slot, especially for our premium detailing services.",
        },
        {
          question: "Do you service all types of vehicles?",
          answer:
            "Yes, we service all types of vehicles including sedans, SUVs, trucks, and luxury vehicles. Our team is trained to handle vehicles of all sizes and types, ensuring the best care for your specific vehicle.",
        },
      ],
    },
    {
      category: "Pricing & Services",
      questions: [
        {
          question: "How much do your services cost?",
          answer:
            "Our pricing varies based on the service package and vehicle size. Basic wash starts at $19.99, premium detailing at $49.99, and our ultimate detail package at $99.99. Contact us for a detailed quote based on your specific needs.",
        },
        {
          question: "Do you offer any discounts or packages?",
          answer:
            "Yes, we offer various packages and discounts including monthly memberships, loyalty programs, and seasonal promotions. We also provide special rates for fleet vehicles and regular customers.",
        },
        {
          question: "How long do services typically take?",
          answer:
            "Service duration varies by package. A basic wash takes about 30 minutes, premium detailing 2-3 hours, and our ultimate detail package 4-6 hours. We'll provide an estimated completion time when you book.",
        },
      ],
    },
    {
      category: "Service Details",
      questions: [
        {
          question: "What products do you use?",
          answer:
            "We use premium, eco-friendly cleaning products that are safe for your vehicle and the environment. Our products are specifically chosen for their effectiveness and protective qualities.",
        },
        {
          question: "Do you offer mobile services?",
          answer:
            "Yes, we offer mobile detailing services for your convenience. Our team can come to your home or office with all necessary equipment to provide the same quality service as our location.",
        },
        {
          question: "What is your satisfaction guarantee?",
          answer:
            "We offer a 100% satisfaction guarantee on all our services. If you're not completely satisfied with the results, we'll re-clean your vehicle at no additional cost.",
        },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Car Wash FAQ"
        description="Find answers to common questions about our car wash and detailing services. Can't find what you're looking for? Contact us directly."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      {/* FAQ Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="mb-12 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold textcolor2 mb-8 text-center">
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Support Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Still Have Questions?"
            subtitle="Our support team is here to help you with any additional questions or concerns."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Chat with our team in real-time",
                action: "Start Chat",
                link: "/contact",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Call us during business hours",
                action: "Call Now",
                link: "tel:+1-555-123-4567",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us a detailed message",
                action: "Send Email",
                link: "mailto:info@sparklewash.com",
              },
            ].map((contact, index) => (
              <Card
                key={contact.title}
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 textcolor1" />
                  </div>
                  <h3 className="text-xl font-semibold textcolor2 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{contact.description}</p>
                  <Button className="w-full" asChild>
                    {contact.link.startsWith("http") ||
                      contact.link.startsWith("tel:") ||
                      contact.link.startsWith("mailto:") ? (
                      <a href={contact.link}>{contact.action}</a>
                    ) : (
                      <Link to={contact.link}>{contact.action}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQ;
