import Layout from "@/components/Layout";
import BookingSection from "@/components/sections/BookingSection";


const BookingPage = () => {


  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Book Your Car Wash
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Schedule your car wash or detailing service at your preferred time. Choose from our range of professional services to keep your vehicle looking its best.
            </p>
          </div>
        </div>
      </section>
      <BookingSection />

    </Layout>
  );
};

export default BookingPage;
