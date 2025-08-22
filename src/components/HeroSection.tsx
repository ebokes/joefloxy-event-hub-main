import { Button } from "@/components/ui/button";
import { Calendar, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Event Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Creating
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Unforgettable
              </span>
              Moments
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Transform your special occasions into extraordinary experiences
              with JOEFLOXY GLOBAL's premium event planning, decoration, and
              rental services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="luxury"
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <span>
                  <Calendar className="mr-2" />
                  <Link to="/booking">Book Your Event</Link>
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center animate-slide-in-left">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-accent mr-2" />
                  <span className="text-3xl font-bold text-white">500+</span>
                </div>
                <p className="text-white/80">Events Completed</p>
              </div>
              <div
                className="text-center animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-accent mr-2" />
                  <span className="text-3xl font-bold text-white">1000+</span>
                </div>
                <p className="text-white/80">Happy Clients</p>
              </div>
              <div
                className="text-center animate-slide-in-left"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-accent mr-2" />
                  <span className="text-3xl font-bold text-white">5+</span>
                </div>
                <p className="text-white/80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
