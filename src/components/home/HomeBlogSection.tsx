import budgetFriendly from "@/assets/budget-friendly.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import stageBackdrop from "@/assets/stage-backdrop.jpg";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
import LinkButton from "../ui/LinkButton";

const HomeBlogSection = () => {
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
      title: "Creating Instagram-Worthy Event Backdrops",
      excerpt:
        "Design stunning photo opportunities at your events with these creative backdrop ideas that guests will love to share.",
      author: "Alex Turner",
      date: "Dec 3, 2023",
      readTime: "6 min read",
      category: "DIY Ideas",
      image: stageBackdrop,
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
    <div className="min-h-screen pt-6 mt-9">
      <div className=" flex justify-center mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Event Planning
          <span className="block bg-gradient-accent bg-clip-text text-transparent">
            Blog & Tips
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
          <div className="text-center">
            <LinkButton to="/blog" text="View All Articles" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBlogSection;
