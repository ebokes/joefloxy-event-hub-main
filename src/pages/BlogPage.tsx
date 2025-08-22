import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter } from "lucide-react";
import dreamWedding from "@/assets/dream-wedding.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import budgetFriendly from "@/assets/budget-friendly.jpg";
import tableSetting from "@/assets/table-setting.jpg";
import eventPlanning from "@/assets/event-planning.jpg";
import stageBackdrop from "@/assets/stage-backdrop.jpg";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Wedding Tips",
    "Corporate Events",
    "Party Planning",
    "Trends",
    "DIY Ideas",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Planning Your Dream Wedding",
      excerpt:
        "Planning a wedding can be overwhelming, but with the right approach and timeline, you can create the perfect day. Here are our top tips from years of wedding planning experience.",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Wedding Tips",
      image: dreamWedding,
      // featured: true,
    },
    {
      id: 2,
      title: "Corporate Event Trends for 2024",
      excerpt:
        "Stay ahead of the curve with the latest corporate event trends that will impress your clients and colleagues in the coming year.",
      author: "Michael Chen",
      date: "Dec 12, 2023",
      readTime: "6 min read",
      category: "Corporate Events",
      image: corporateEvent,
    },
    {
      id: 3,
      title: "Budget-Friendly Party Decoration Ideas",
      excerpt:
        "Create stunning party decorations without breaking the bank. These creative DIY ideas will transform your space on any budget.",
      author: "Emma Williams",
      date: "Dec 10, 2023",
      readTime: "5 min read",
      category: "DIY Ideas",
      image: budgetFriendly,
    },
    {
      id: 4,
      title: "The Art of Table Setting for Formal Events",
      excerpt:
        "Master the elegance of proper table setting with our comprehensive guide to creating memorable dining experiences.",
      author: "David Rodriguez",
      date: "Dec 8, 2023",
      readTime: "7 min read",
      category: "Party Planning",
      image: tableSetting,
    },
    {
      id: 5,
      title: "Sustainable Event Planning: Eco-Friendly Celebrations",
      excerpt:
        "Learn how to plan beautiful events while minimizing environmental impact with these sustainable practices and green alternatives.",
      author: "Lisa Green",
      date: "Dec 5, 2023",
      readTime: "9 min read",
      category: "Trends",
      image: eventPlanning,
    },
    {
      id: 6,
      title: "Creating Instagram-Worthy Event Backdrops",
      excerpt:
        "Design stunning photo opportunities at your events with these creative backdrop ideas that guests will love to share.",
      author: "Alex Turner",
      date: "Dec 3, 2023",
      readTime: "6 min read",
      category: "DIY Ideas",
      image: stageBackdrop,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Event Planning
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Blog & Tips
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover expert insights, trending ideas, and practical tips to make
            your events unforgettable. From planning to execution, we share our
            knowledge to help you succeed.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles, tips, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 focus:bg-white focus:text-foreground"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "accent" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Event Tips
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest event planning tips, trends, and exclusive content
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="luxury" size="lg">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
