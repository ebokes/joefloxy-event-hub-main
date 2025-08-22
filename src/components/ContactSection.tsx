import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 123 456 7890", "+234 987 654 3210"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@joefloxygloba.com", "bookings@joefloxygloba.com"],
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Event Plaza", "Lagos, Nigeria"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start planning your perfect event? Contact us today for a free consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8">Let's Talk About Your Event</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're planning a wedding, corporate event, birthday party, or any special occasion, we're here to help make it extraordinary.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="p-6 hover:shadow-card transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-primary p-8 rounded-lg text-white">
              <h4 className="text-2xl font-bold mb-4">Quick Response Guarantee</h4>
              <p className="mb-4">
                We understand that event planning is time-sensitive. That's why we guarantee a response to all inquiries within 24 hours.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24-Hour Response Time</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Name</Label>
                      <Input
                        id="contactName"
                        placeholder="Your full name"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input
                      id="contactPhone"
                      type="tel"
                      placeholder="+234 123 456 7890"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactSubject">Subject</Label>
                    <Input
                      id="contactSubject"
                      placeholder="What can we help you with?"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactMessage">Message</Label>
                    <Textarea
                      id="contactMessage"
                      placeholder="Tell us about your event or ask us any questions..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full text-lg py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;