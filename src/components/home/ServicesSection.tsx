import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Palette, Package, ArrowRight } from "lucide-react";
import LinkButton from "../ui/LinkButton";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description:
        "Complete event planning from concept to execution. We handle every detail to ensure your event runs seamlessly.",
      features: [
        "Timeline Management",
        "Vendor Coordination",
        "Budget Planning",
        "Day-of Coordination",
      ],
      color: "text-accent",
    },
    {
      icon: Palette,
      title: "Event Decoration",
      description:
        "Transform your venue with our creative decoration services. Beautiful designs that reflect your vision and style.",
      features: [
        "Theme Development",
        "Floral Arrangements",
        "Lighting Design",
        "Custom Backdrops",
      ],
      color: "text-primary",
    },
    {
      icon: Package,
      title: "Event Rentals",
      description:
        "Premium quality rental items for all your event needs. From furniture to entertainment equipment.",
      features: [
        "Furniture Rentals",
        "Tents & Canopies",
        "Audio/Visual Equipment",
        "Table Settings",
      ],
      color: "text-accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Premium</h2>
            <span className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive event solutions to make your special
            occasions memorable and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full w-fit">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <span>
                    <Link to={"/services"}>Learn More</Link>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <LinkButton variant="hero" to="/booking" text=" Get Custom Quote" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
