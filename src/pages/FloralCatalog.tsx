import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Search, Heart, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import floral1 from "@/assets/floral-1.jpg";
import floral2 from "@/assets/floral-2.jpg";
import floral3 from "@/assets/floral-3.jpg";
import floral4 from "@/assets/floral-4.jpg";
import floral5 from "@/assets/floral-5.jpg";
import floral6 from "@/assets/floral-6.jpg";

const FloralCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Bridal Bouquets",
    "Centerpieces", 
    "Ceremony Arrangements",
    "Table Garlands",
    "Floral Backdrops",
    "Corporate Events"
  ];

  const floralProducts = [
    {
      id: 1,
      name: "Classic Bridal Bouquet",
      price: "₦45,000",
      originalPrice: "₦55,000",
      rating: 4.9,
      image: floral1,
      category: "Bridal Bouquets",
      description: "Elegant white roses with eucalyptus greenery, perfect for traditional weddings",
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Rainbow Centerpiece",
      price: "₦25,000",
      rating: 4.8,
      image: floral2,
      category: "Centerpieces",
      description: "Vibrant mixed flowers in glass vase, brings color to any celebration",
      inStock: true,
      featured: false
    },
    {
      id: 3,
      name: "Wedding Ceremony Arch",
      price: "₦85,000",
      rating: 4.9,
      image: floral3,
      category: "Ceremony Arrangements",
      description: "Luxury floral arch with pink and white blooms for unforgettable ceremonies",
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: "Eucalyptus Table Garland",
      price: "₦18,000",
      rating: 4.7,
      image: floral4,
      category: "Table Garlands",
      description: "Natural eucalyptus with white accents, perfect for rustic or modern events",
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: "Purple Dreams Bouquet",
      price: "₦38,000",
      rating: 4.8,
      image: floral5,
      category: "Bridal Bouquets",
      description: "Stunning purple and white arrangement for the modern bride",
      inStock: false,
      featured: false
    },
    {
      id: 6,
      name: "Floral Backdrop Wall",
      price: "₦120,000",
      rating: 5.0,
      image: floral6,
      category: "Floral Backdrops",
      description: "Instagram-worthy flower wall perfect for photos and grand entrances",
      inStock: true,
      featured: true
    }
  ];

  const filteredProducts = floralProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = floralProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Floral
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Catalog
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover our exquisite collection of fresh floral arrangements, 
            handcrafted by expert florists for your special moments.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for bouquets, centerpieces, arrangements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Arrangements</h2>
            <p className="text-muted-foreground">Our most popular and stunning floral creations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent">Featured</Badge>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-4">{product.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-accent">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button variant="accent" size="sm" className="gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & All Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "accent" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <Badge className="absolute top-3 left-3 bg-accent text-xs">Featured</Badge>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={product.inStock ? "default" : "destructive"} className="text-xs">
                      {product.inStock ? "In Stock" : "Pre-order"}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-base mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm mb-3 line-clamp-2">
                    {product.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-accent">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      variant={product.inStock ? "accent" : "secondary"}
                      size="sm"
                      className="gap-1 text-xs px-3"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      {product.inStock ? "Add" : "Pre-order"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FloralCatalog;