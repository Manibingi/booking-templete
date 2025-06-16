import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContentBlock {
  type: "paragraph" | "heading";
  text: string;
}

interface BlogPostContentProps {
  post: {
    id: string;
    title: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    img: string;
    content: ContentBlock[];
  };
  relatedPosts: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
  }>;
}

const BlogPostContent: FC<BlogPostContentProps> = ({ post, relatedPosts }) => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="mx-2">•</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold textcolor2 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-4 overflow-hidden">
              <img
                src={post.img}
                alt={`${post.author}'s profile picture`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold textcolor2">{post.author}</p>
              <div className="flex items-center text-sm">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] rounded-xl overflow-hidden mb-8 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Blog Content */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-3xl font-bold textcolor2 mt-12 mb-6"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Author Bio */}
        <div
          className="bg-gray-50 rounded-xl p-8 mb-12 animate-fade-in shadow-sm"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
              <img
                src={post.img}
                alt={`${post.author}'s profile picture`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold textcolor2 mb-2">
                About {post.author}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.author} is a certified car detailing expert with years of
                experience in automotive care and maintenance. Specializing in{" "}
                {post.category.toLowerCase()}, they share their expertise to
                help car owners maintain their vehicles in optimal condition.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Website
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold textcolor2 mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card
                key={relatedPost.id}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0"
              >
                <CardHeader className="p-0">
                  <div className="w-full h-48 rounded-t-xl overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                        {relatedPost.category}
                      </span>
                      <span>{relatedPost.date}</span>
                    </div>
                    <CardTitle className="text-lg textcolor2 mb-2">
                      {relatedPost.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Link to={`/blog/${relatedPost.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Back to Blog */}
        <div
          className="text-center mt-12 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            variant="outline"
            asChild
            className="hover:bg-primary hover:text-white transition-colors"
          >
            <Link to="/blog">← Back to All Posts</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
