import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Section from "@/components/ui/section";
import { Label } from "@/components/ui/label";
// import SectionHeader from "@/components/ui/section-header";
import "../styles/style.css";
import HeroSection2 from "@/components/sections/HeroSection2";

const HelpSupport = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description:
        "Get instant help with your car wash booking or service questions",
      available: "24/7",
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our car care experts",
      available: "Mon-Fri 7AM-8PM, Sat-Sun 9AM-5PM",
      action: "Call Now",
    },
    {
      title: "Email Support",
      description: "Send us detailed questions about our services",
      available: "Response within 24 hours",
      action: "Send Email",
    },
  ];

  const faqItems = [
    {
      question: "How long does a typical car wash take?",
      answer:
        "Our basic wash takes about 30 minutes, while premium detailing services can take 2-3 hours depending on the package selected. We'll provide an estimated completion time when you book.",
    },
    {
      question: "Do I need to make an appointment?",
      answer:
        "While walk-ins are welcome, we recommend booking in advance to ensure availability and minimize wait times. You can book online through our website or mobile app.",
    },
    {
      question: "What's included in the membership plans?",
      answer:
        "Each membership plan includes a specific number of washes per month, along with various detailing services. Visit our Membership page for detailed information about each plan's features and benefits.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Car Care Support"
        description="Need help with your car wash booking or have questions about our services? Our support team is here to assist you."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3 textcolor2">
                  <Send className="w-6 h-6 text-primary" />
                  Contact Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-base font-medium textcolor1"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-base font-medium textcolor1"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="mt-2 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-base font-medium textcolor1"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-base font-medium textcolor1"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="(555) 123-4567"
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="subject"
                    className="text-base font-medium textcolor1"
                  >
                    Service Type *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What service do you need help with?"
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-base font-medium textcolor1"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your car care needs or questions..."
                    className="mt-2 resize-none"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl textcolor2">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 textcolor1" />
                  </div>
                  <div>
                    <h3 className="font-semibold textcolor1 mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Auto Care Lane
                      <br />
                      Car Wash Plaza
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 textcolor1" />
                  </div>
                  <div>
                    <h3 className="font-semibold textcolor1 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">(555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 textcolor1" />
                  </div>
                  <div>
                    <h3 className="font-semibold textcolor1 mb-1">Email</h3>
                    <p className="text-gray-600">support@sparklewashpro.com</p>
                    <p className="text-gray-600">bookings@sparklewashpro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 textcolor1" />
                  </div>
                  <div>
                    <h3 className="font-semibold textcolor1 mb-1">
                      Service Hours
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Monday - Friday: 7:00 AM - 8:00 PM
                      <br />
                      Saturday: 8:00 AM - 6:00 PM
                      <br />
                      Sunday: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary to-primary/90 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 ">
                  Need Immediate Assistance?
                </h3>
                <p className="mb-4 opacity-90">
                  Call us directly for urgent inquiries
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full hover:bg-bgcolor1 hover:text-white"
                  onClick={() => (window.location.href = "tel: +15551234567")}
                >
                  Call Now: (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help! Choose the support option that works best for
              you.
            </p>
          </div> */}

          {/* Support Options */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <Card
                key={option.title}
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    {option.available}
                  </p>
                  <Button className="w-full hover:scale-105 transition-transform duration-300">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div> */}

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* <Card
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                </select>
                <Textarea
                  placeholder="Describe your issue or question in detail..."
                  rows={6}
                />
                <Button className="w-full hover:scale-105 transition-transform duration-300">
                  Send Message
                </Button>
              </CardContent>
            </Card> */}

            {/* FAQ Section */}
            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle>Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Browse our comprehensive knowledge base for detailed guides
                    and tutorials.
                  </p>
                  <Button variant="outline" className="w-full">
                    Browse Knowledge Base
                  </Button>
                </CardContent>
              </Card> */}

              {/* <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">
                      All Systems Operational
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Check our status page for real-time updates on system
                    performance.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Status Page
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpSupport;
