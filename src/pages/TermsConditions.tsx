import Layout from "@/components/Layout";
import "../styles/style.css";
import HeroSection2 from "@/components/sections/HeroSection2";

const TermsConditions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Terms and Conditions"
        description="Providing professional car care services with excellence, reliability, and customer satisfaction since 2004."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1> */}
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div
            className="prose prose-lg max-w-none animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  1. Service Agreement
                </h2>
                <p className="text-gray-600">
                  By booking our car wash and detailing services, you agree to these terms and conditions. We reserve the right to refuse service to anyone for any reason, including but not limited to vehicle condition, safety concerns, or inappropriate behavior.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  2. Service Policies
                </h2>
                <p className="text-gray-600 mb-4">
                  Our car wash and detailing services are subject to the following conditions:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Customers must remove all personal belongings from their vehicle before service</li>
                  <li>We are not responsible for any items left in the vehicle</li>
                  <li>Customers must disclose any known issues with their vehicle</li>
                  <li>We reserve the right to refuse service if a vehicle poses safety risks</li>
                  <li>Service times are estimates and may vary based on vehicle condition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  3. Cancellation and Rescheduling
                </h2>
                <p className="text-gray-600">
                  Appointments may be cancelled or rescheduled up to 24 hours before the scheduled time without penalty. Late cancellations or no-shows may result in a fee. Memberships and prepaid services are non-refundable but may be transferred to another vehicle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  4. Liability
                </h2>
                <p className="text-gray-600">
                  While we take utmost care with every vehicle, we are not liable for any pre-existing damage, wear and tear, or mechanical issues. We maintain comprehensive insurance coverage for any damage that may occur during our services. Customers are responsible for ensuring their vehicle is in a safe and legal condition for service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  5. Privacy Policy
                </h2>
                <p className="text-gray-600">
                  We collect and process your personal information in accordance with our Privacy Policy. This includes vehicle information, contact details, and payment information. We never share your information with third parties except as required by law or with your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  6. Governing Law
                </h2>
                <p className="text-gray-600">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of New York. Any disputes shall be subject to the exclusive jurisdiction of the courts in New York County.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  7. Contact Information
                </h2>
                <p className="text-gray-600">
                  For any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Email: legal@sparklewashpro.com
                    <br />
                    Phone: (555) 123-4567
                    <br />
                    Address: 123 Auto Care Lane, Car Wash Plaza, New York, NY 10001
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
