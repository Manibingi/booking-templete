import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  link?: string;
  buttonText?: string;
  index?: number;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features = [],
  link = "/services",
  buttonText = "Learn More",
  index = 0,
}: ServiceCardProps) => {
  return (
    <Card
      className="h-full bg-white shadow-lg border-0 transition-all duration-300 hover:shadow-2xl hover:scale-105 group animate-fade-in flex flex-col justify-between"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="text-center pb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 textcolor1" />
        </div>
        <CardTitle className="text-xl font-bold textcolor2 mb-4">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0 flex flex-col flex-1">
        <p className="text-gray-600 mb-6 leading-relaxed flex-1">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4">
          <Button
            className="w-full bg-primary text-white border-2 border-primary hover:bg-bgcolor1 hover:text-white transition-all duration-300 hover:scale-105 py-3 text-base font-semibold shadow-md"
            asChild
          >
            <Link to={link}>{buttonText}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
