import Layout from "@/components/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Refund Policy</h2>
                <p className="text-gray-600 mb-4">
                  At SparkleWash Pro, we strive to provide exceptional car wash and detailing services. If you are not completely
                  satisfied with our service, we offer a satisfaction guarantee. You may request a refund or re-service within 24
                  hours of your service completion.
                </p>
                <p className="text-gray-600">
                  Our team will inspect your vehicle and address any concerns to ensure your complete satisfaction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligible Refund Requests</h2>
                <p className="text-gray-600 mb-4">To be eligible for a refund or re-service, the following conditions must be met:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Request must be made within 24 hours of service completion</li>
                  <li>Vehicle must not have been driven in inclement weather after service</li>
                  <li>Original service receipt must be provided</li>
                  <li>Service must have been performed at our location</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cancellation Policy</h2>
                <p className="text-gray-600 mb-4">
                  We understand that plans can change. You may cancel or reschedule your car wash appointment up to 24 hours before
                  the scheduled time without any penalty. Cancellations made less than 24 hours in advance may be subject to a
                  cancellation fee.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Cancellation Timeframes:</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• 24+ hours: No charge</li>
                    <li>• 12-24 hours: 25% of service cost</li>
                    <li>• Less than 12 hours: 50% of service cost</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Request a Refund</h2>
                <p className="text-gray-600 mb-4">To request a refund or re-service, please follow these steps:</p>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Contact our customer service team</li>
                  <li>Provide your service receipt and reason for refund</li>
                  <li>Allow 1-2 business days for review</li>
                  <li>Refund will be processed to original payment method</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Processing Time</h2>
                <p className="text-gray-600">
                  Once your refund request is approved, please allow 3-5 business days for the refund to appear in your account.
                  Processing times may vary depending on your payment method and financial institution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Exceptions</h2>
                <p className="text-gray-600 mb-4">The following items are not eligible for refunds:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Services completed more than 24 hours ago</li>
                  <li>Vehicles driven in rain or snow after service</li>
                  <li>Membership fees (non-refundable)</li>
                  <li>Gift cards or promotional items</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  For refund requests or questions about this policy, please contact us:
                </p>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Email: refunds@sparklewashpro.com<br />
                    Phone: (555) 123-4567<br />
                    Hours: Monday-Friday, 9:00 AM - 5:00 PM EST
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

export default RefundPolicy;
