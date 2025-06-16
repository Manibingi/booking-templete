import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      rating: 5,
      text: "I've been bringing my Mercedes here for years. Their attention to detail is incredible, and my car always looks brand new after their service. The ceramic coating they applied last year still looks perfect!",
      image: "placeholder"
    },
    {
      name: "Michael Chen",
      role: "Fleet Manager",
      rating: 5,
      text: "We use SparkleWash Pro for our entire company fleet of 20 vehicles. Their mobile service saves us time, and their consistent quality keeps our cars looking professional. Highly recommended!",
      image: "placeholder"
    },
    {
      name: "Emily Davis",
      role: "Car Enthusiast",
      rating: 5,
      text: "The paint correction service transformed my classic Mustang. They removed years of swirl marks and scratches, and the final result was beyond my expectations. Worth every penny!",
      image: "placeholder"
    },
    {
      name: "David Wilson",
      role: "Luxury Car Owner",
      rating: 5,
      text: "As a Porsche owner, I'm very particular about who touches my car. The team at SparkleWash Pro understands luxury vehicles and treats them with the care they deserve. Their detailing is impeccable.",
      image: "placeholder"
    },
    {
      name: "Lisa Anderson",
      role: "Business Owner",
      rating: 5,
      text: "Their eco-friendly car wash service is perfect for our environmentally conscious business. The quality is outstanding, and I love that they use sustainable products. Great service and great values!",
      image: "placeholder"
    },
    {
      name: "Robert Taylor",
      role: "Car Dealership Manager",
      rating: 5,
      text: "We've partnered with SparkleWash Pro for our pre-delivery detailing. Their work consistently impresses our customers and helps us maintain our reputation for quality. Professional and reliable service.",
      image: "placeholder"
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Customer Reviews
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              See what our satisfied customers have to say about their experience with our professional car wash and detailing services.
            </p>
          </div>
        </div>
      </section>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">IMG</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="bg-primary text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Experience the SparkleWash Difference</h2>
              <p className="text-xl mb-6 opacity-90">
                Ready to give your vehicle the professional care it deserves?
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Book Your Wash Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
