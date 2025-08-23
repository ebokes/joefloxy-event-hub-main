import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Calendar, Users, MapPin, Link } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import LinkButton from "../ui/LinkButton";

const HomeGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      image: portfolio1,
      title: "Elegant Wedding Ceremony",
      category: "Wedding",
      description:
        "A luxurious wedding celebration with gold and white theme, featuring crystal chandeliers and exquisite floral arrangements.",
      details: {
        guests: "200+",
        location: "Lagos Continental Hotel",
        date: "December 2023",
      },
    },
    {
      id: 2,
      image: portfolio2,
      title: "Corporate Gala Dinner",
      category: "Corporate",
      description:
        "Professional corporate event with modern decor, branded elements, and sophisticated atmosphere.",
      details: {
        guests: "500+",
        location: "Eko Hotel & Suites",
        date: "November 2023",
      },
    },
    {
      id: 3,
      image: portfolio3,
      title: "Birthday Celebration",
      category: "Birthday",
      description:
        "Vibrant and joyful birthday party setup with colorful decorations and festive atmosphere.",
      details: {
        guests: "100+",
        location: "Private Residence",
        date: "October 2023",
      },
    },
  ];

  const categories = [
    "All",
    "Wedding",
    "Corporate",
    "Birthday",
    "Social",
    "Charity",
    "Cultural",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 md:mb-6">
            <h2 className="text-3xl md:text-4xl font-bold ">Our</h2>{" "}
            <span className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take a look at some of our recent projects and see how we transform
            ordinary spaces into extraordinary experiences.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="mb-2">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {portfolioItems.map(
                  (item) =>
                    item.id === selectedImage && (
                      <div key={item.id}>
                        <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-8">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <Badge variant="secondary" className="mb-2">
                                {item.category}
                              </Badge>
                              <h3 className="text-3xl font-bold">
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-lg text-muted-foreground mb-6">
                            {item.description}
                          </p>

                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                              <Users className="w-5 h-5 text-accent" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Guests
                                </p>
                                <p className="font-semibold">
                                  {item.details.guests}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                              <MapPin className="w-5 h-5 text-accent" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Location
                                </p>
                                <p className="font-semibold">
                                  {item.details.location}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                              <Calendar className="w-5 h-5 text-accent" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Date
                                </p>
                                <p className="font-semibold">
                                  {item.details.date}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <Button variant="hero" className="flex-1">
                              Plan Similar Event
                            </Button>
                            <Button variant="outline" className="flex-1">
                              View More Projects
                            </Button>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <LinkButton to="/gallery" text="View Complete Portfolio" />
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
