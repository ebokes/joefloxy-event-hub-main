import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Search } from "lucide-react";
import LinkButton from "../ui/LinkButton";

const HomeMarketplaceSection = () => {
  const categories = [
    "Table Decorations",
    "Lighting",
    "Backdrops",
    "Centerpieces",
    "Floral Arrangements",
    "Linens & Fabrics",
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Elegant Gold Centerpiece",
      price: "₦15,000",
      rating: 4.8,
      image: "🏺",
      category: "Centerpieces",
      inStock: true,
    },
    {
      id: 2,
      name: "LED String Lights",
      price: "₦8,500",
      rating: 4.9,
      image: "💡",
      category: "Lighting",
      inStock: true,
    },
    {
      id: 3,
      name: "Floral Backdrop Panel",
      price: "₦25,000",
      rating: 4.7,
      image: "🌸",
      category: "Backdrops",
      inStock: false,
    },
    {
      id: 4,
      name: "Silk Table Runner",
      price: "₦12,000",
      rating: 4.6,
      image: "🎀",
      category: "Linens & Fabrics",
      inStock: true,
    },
  ];

  return (
    <section id="marketplace" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 md:mb-6">
            <h2 className="text-3xl md:text-4xl font-bold ">Event</h2>
            <span className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Marketplace
            </span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Browse and purchase premium event decoration items and props for
            your special occasions.
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{product.image}</div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant={product.inStock ? "default" : "destructive"}
                      className="text-xs"
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-4">
                    Category: {product.category}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">
                      {product.price}
                    </span>
                    <Button
                      variant={product.inStock ? "default" : "secondary"}
                      size="sm"
                      disabled={!product.inStock}
                      className="gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {product.inStock ? "Add to Cart" : "Notify Me"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <LinkButton to="/marketplace" text=" Browse All Products" />
        </div>
      </div>
    </section>
  );
};

export default HomeMarketplaceSection;
