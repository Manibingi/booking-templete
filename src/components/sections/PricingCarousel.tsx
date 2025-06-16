import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Check, X } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const PricingCarousel = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const pricingPlans = [
    {
      name: "Basic Wash",
      description: "Perfect for regular maintenance",
      price: "$19.99",
      period: "/wash",
      features: [
        "Exterior Hand Wash",
        "Tire Cleaning",
        "Basic Interior Vacuum",
        "Window Cleaning",
        "Air Freshener"
      ],
      popular: false,
      icon: "🚗",
    },
    {
      name: "Premium Detail",
      description: "Complete interior and exterior cleaning",
      price: "$49.99",
      period: "/detail",
      features: [
        "All Basic Wash Features",
        "Interior Deep Cleaning",
        "Leather Conditioning",
        "Clay Bar Treatment",
        "Wax Application"
      ],
      popular: true,
      icon: "✨",
    },
    {
      name: "Ultimate Detail",
      description: "Showroom quality finish",
      price: "$99.99",
      period: "/detail",
      features: [
        "All Premium Features",
        "Paint Correction",
        "Ceramic Coating",
        "Engine Bay Cleaning",
        "Premium Wax Treatment"
      ],
      popular: false,
      icon: "👑",
    },
  ];

  const comparisonFeatures = [
    {
      feature: "Exterior Wash",
      starter: "Basic",
      professional: "Premium",
      enterprise: "Ultimate",
    },
    {
      feature: "Interior Cleaning",
      starter: "Basic",
      professional: "Deep Clean",
      enterprise: "Premium",
    },
    {
      feature: "Wax Treatment",
      starter: false,
      professional: "Standard",
      enterprise: "Premium",
    },
    {
      feature: "Paint Correction",
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      feature: "Ceramic Coating",
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      feature: "Engine Bay Cleaning",
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      feature: "Leather Conditioning",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      feature: "Clay Bar Treatment",
      starter: false,
      professional: true,
      enterprise: true,
    },
  ];

  return (
    <Section background="white">
      <SectionHeader
        title="Choose Your Perfect Plan"
        subtitle="Select the plan that best fits your needs and scale as you grow. All plans include our core features with varying limits and support levels."
      />

      <div className="mb-20 px-4">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {pricingPlans.map((plan, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <PricingCard {...plan} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-8 py-6">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Feature Comparison
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Features
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">
                  Starter
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">
                  Professional
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {item.feature}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.starter === "boolean" ? (
                      item.starter ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{item.starter}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.professional === "boolean" ? (
                      item.professional ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{item.professional}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof item.enterprise === "boolean" ? (
                      item.enterprise ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{item.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default PricingCarousel;
