import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import "../../styles/style.css";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
  index?: number;
}

const TestimonialCard = ({
  name,
  role,
  rating,
  text,
  image,
  index = 0,
}: TestimonialCardProps) => {
  return (
    <Card
      className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 shadow-lg h-full min-h-[300px] my-6 w-full bg-white animate-fade-in flex flex-col justify-between"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="flex items-center justify-center">
            <span className="text-primary text-sm font-medium  ">
              <img
                className="rounded-full h-[80px] w-[80px]"
                src={image}
                alt=""
              />
            </span>
          </div>
          <div>
            <CardTitle className="text-xl textcolor2">{name}</CardTitle>

            <CardDescription className="text-base">{role}</CardDescription>
          </div>
        </div>
        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-textcolor1 textcolor1" />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 italic text-lg leading-relaxed">"{text}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
