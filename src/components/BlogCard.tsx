import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image, 
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
      featured ? 'md:col-span-2' : ''
    }`}>
      <div className={`aspect-${featured ? '[16/9]' : '[4/3]'} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardHeader className="space-y-4">
        <div className="flex justify-between items-start">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className={`font-bold group-hover:text-accent transition-colors line-clamp-2 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className={`text-muted-foreground ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
          {excerpt}
        </p>
        
        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm">
              <p className="font-medium">{author}</p>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2 hover:gap-3 transition-all duration-300"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;