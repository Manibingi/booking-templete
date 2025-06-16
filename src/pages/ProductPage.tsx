import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import "../styles/style.css";
import HeroSection2 from "@/components/sections/HeroSection2";
import img1 from "@/images/2_compressed.webp";
import img2 from "@/images/3_compressed.webp";
import img3 from "@/images/4_compressed.webp";
import img4 from "@/images/5_compressed.webp";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wash",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 210,
      category: "Exterior & Interior",
      image:
        img1,
      features: [
        "Hand wash & dry",
        "Premium wax application",
        "Interior vacuum & wipe down",
        "Tire shine",
      ],
    },
    {
      id: 2,
      name: "Express Wash",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 150,
      category: "Quick Service",
      image:
        img2,
      features: [
        "Exterior wash",
        "Spot-free rinse",
        "Quick interior clean",
        "Tire shine",
      ],
    },
    {
      id: 3,
      name: "Detailing Package",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviews: 98,
      category: "Full Detailing",
      image:
        img3,
      features: [
        "Deep interior cleaning",
        "Carpet shampoo",
        "Leather conditioning",
        "Paint protection",
      ],
    },
    {
      id: 4,
      name: "Ceramic Coating",
      price: 599.99,
      originalPrice: 699.99,
      rating: 4.9,
      reviews: 45,
      category: "Paint Protection",
      image:
        img4,
      features: [
        "Long-lasting shine",
        "Water & dirt repellent",
        "UV protection",
        "2-year warranty",
      ],
    },
  ];

  const productBundles = [
    {
      id: 1,
      name: "Family Bundle",
      description: "Perfect for families with multiple vehicles. Includes 4 Premium Washes per month.",
      price: "$169.99",
      originalPrice: "$199.99",
      products: ["4 Premium Washes", "Priority Scheduling", "Free Air Freshener"],
      savings: "Save $30",
    },
    {
      id: 2,
      name: "Ultimate Shine Bundle",
      description: "Best value for car enthusiasts. Includes 2 Detailing Packages and 2 Ceramic Coatings per year.",
      price: "$1199.99",
      originalPrice: "$1499.99",
      products: ["2 Detailing Packages", "2 Ceramic Coatings", "Free Maintenance Wash"],
      savings: "Save $300",
    },
    {
      id: 3,
      name: "Business Fleet Bundle",
      description: "Ideal for small business fleets. Includes 10 Express Washes and 2 Premium Washes per month.",
      price: "$399.99",
      originalPrice: "$499.99",
      products: ["10 Express Washes", "2 Premium Washes", "Flexible Scheduling"],
      savings: "Save $100",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection2
        title="Our Car Wash Packages"
        description="Discover our range of professional car wash and detailing services designed to keep your vehicle spotless and protected."
        overlayColor="rgba(0, 0, 0, 0.5)"
      />

      {/* Products Grid */}
      <Section background="white">
        <SectionHeader
          title="Featured Car Wash Services"
          subtitle="Explore our most popular car wash and detailing packages, trusted by hundreds of local drivers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group h-full bg-white shadow-lg border-0 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-bgcolor1 text-white">
                    {product.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 border-0 hover:bg-white textcolor1"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-bgcolor1 textcolor1 mr-1" />
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  {product.originalPrice > product.price && (
                    <Badge
                      variant="destructive"
                      className="text-xs bg-bgcolor1"
                    >
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold textcolor2 mb-2 line-clamp-2">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-1 mb-4 text-sm text-gray-600">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bgcolor2 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold textcolor1">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-bgcolor1 transition-all duration-300"
                    asChild
                  >
                    <Link to="/booking">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Book Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Product Bundles */}
      <Section background="gray">
        <SectionHeader
          title="Car Wash Bundles"
          subtitle="Save more with our exclusive car wash and detailing bundles. Perfect for families, enthusiasts, and business fleets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productBundles.map((bundle, index) => (
            <Card
              key={bundle.id}
              className="h-full bg-white shadow-lg border-0 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-100 text-green-800">
                    {bundle.savings}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold textcolor2">
                  {bundle.name}
                </CardTitle>
                <p className="text-gray-600">{bundle.description}</p>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-3xl font-bold textcolor1">
                      {bundle.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {bundle.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {bundle.products.map((product, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-bgcolor1 rounded-full mr-3 "></div>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-bgcolor1 transition-all duration-300 hover:scale-105">
                  Book Bundle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        background="primary"
        className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white text-center"
      >
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Give Your Car a Showroom Shine?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of happy customers who trust us to keep their vehicles spotless, protected, and looking their best all year round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold"
            >
              <Link to="/booking">Book a Wash</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 text-primary hover:bg-bgcolor1 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ProductPage;
