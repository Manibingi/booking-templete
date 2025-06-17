import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import "../styles/style.css"; // Ensure this path is correct based on your project structure
import HeroSection2 from "@/components/sections/HeroSection2";

const ContactUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Get In Touch"
        description="We'd love to hear from you. Send us a message and we'll respond as
            soon as possible."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      {/* <section className="bgcolor3 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            Book Your Car Wash
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Schedule your car wash or detailing service today. Our team is ready to give your vehicle the care it deserves.
          </p>
        </div>
      </section> */}

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3 textcolor2">
                  <Send className="w-6 h-6 text-primary" />
                  Schedule Your Service
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
                    placeholder="What service are you interested in?"
                    className="mt-2 h-12"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-base font-medium textcolor1"
                  >
                    Additional Details *
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your vehicle and any specific requirements..."
                    className="mt-2 resize-none"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
                >
                  Book Now
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
                    <p className="text-gray-600">book@sparklewashpro.com</p>
                    <p className="text-gray-600">support@sparklewashpro.com</p>
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
                  Need Immediate Service?
                </h3>
                <p className="mb-4 opacity-90">
                  Call us now to check availability
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full hover:bg-bgcolor1 hover:text-white"
                  onClick={() => (window.location.href = "tel:+15551234567")}
                >
                  Call Now: (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray">
        <SectionHeader
          title="Visit Our Location"
          subtitle="Drop by our state-of-the-art car wash facility. We offer comfortable waiting areas and complimentary refreshments while we detail your vehicle!"
        />
        <Card className="shadow-lg border-0 overflow-hidden">
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center relative">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456789012!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af12345678%3A0x1234567890abcdef!2sSparkleWash%20Pro%20Car%20Wash!5e0!3m2!1sen!2sus!4v1612345678901"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </Card>
      </Section>
    </Layout>
  );
};

export default ContactUs;
