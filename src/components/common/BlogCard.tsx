import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "../../styles/style.css";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  index?: number;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  category,
  readTime,
  image,
  index = 0,
}: BlogCardProps) => {
  return (
    <Card
      className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg h-full my-6 animate-fade-in overflow-hidden group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-4 p-0">
        <div className="relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Blog Image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4 mt-4 px-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs mr-3">
            {category}
          </span>
          <span>{readTime}</span>
        </div>
        <CardTitle className="text-xl leading-tight textcolor2 px-6">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed px-6">
          {excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 px-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:scale-110 transition-transform duration-300"
          >
            <Link
              to={`/blog/${id}`}
              className="bg-white border-2 border-primary text-primary hover:bg-bgcolor1 hover:text-white"
            >
              Read More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
