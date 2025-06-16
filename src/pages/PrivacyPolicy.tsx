import Layout from "@/components/Layout";
import "../styles/style.css";
import HeroSection2 from "@/components/sections/HeroSection2";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Privacy Policy"
        description="Protecting your privacy and vehicle information is our top priority. Learn how we collect, use, and safeguard your data."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
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
                  1. Information We Collect
                </h2>
                <p className="text-gray-600 mb-4">
                  We collect information necessary to provide our car wash and detailing services, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Vehicle information (make, model, year, color)</li>
                  <li>Service history and preferences</li>
                  <li>Payment information</li>
                  <li>Membership details</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use your information to provide and improve our car care services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To schedule and manage your car wash appointments</li>
                  <li>To process payments and maintain membership records</li>
                  <li>To send service reminders and maintenance notifications</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>To improve our services and customer experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-600">
                  We do not sell your personal information. We may share your information only with:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Insurance providers when required for claims</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                  <li>Encrypted data transmission</li>
                  <li>Secure payment processing</li>
                  <li>Restricted access to personal information</li>
                  <li>Regular security assessments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access your personal and vehicle information</li>
                  <li>Update or correct your information</li>
                  <li>Request deletion of your account</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your service history</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold textcolor2 mb-4">
                  6. Contact Us
                </h2>
                <p className="text-gray-600">
                  For privacy-related questions or concerns, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Email: privacy@sparklewashpro.com
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

export default PrivacyPolicy;
