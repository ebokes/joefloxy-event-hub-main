import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Perfect Event
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create something amazing? Fill out our booking form and let's start planning your unforgettable event.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl">Event Booking Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 123 456 7890"
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-base font-medium">Service Type</Label>
                  <Select>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select the service you need" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planning">Event Planning</SelectItem>
                      <SelectItem value="decoration">Event Decoration</SelectItem>
                      <SelectItem value="rentals">Event Rentals</SelectItem>
                      <SelectItem value="complete">Complete Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-base font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Event Date
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventTime" className="text-base font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Event Time
                    </Label>
                    <Input
                      id="eventTime"
                      type="time"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="text-base font-medium flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Guest Count
                    </Label>
                    <Input
                      id="guestCount"
                      type="number"
                      placeholder="100"
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue" className="text-base font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Event Location/Venue
                  </Label>
                  <Input
                    id="venue"
                    placeholder="Enter the venue address or location"
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base font-medium">Estimated Budget</Label>
                  <Select>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500k">Under ₦500,000</SelectItem>
                      <SelectItem value="500k-1m">₦500,000 - ₦1,000,000</SelectItem>
                      <SelectItem value="1m-2m">₦1,000,000 - ₦2,000,000</SelectItem>
                      <SelectItem value="2m-5m">₦2,000,000 - ₦5,000,000</SelectItem>
                      <SelectItem value="above-5m">Above ₦5,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-medium">Additional Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your event vision, special requirements, or any questions you have..."
                    className="min-h-[120px] text-base"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button variant="hero" size="lg" className="flex-1 text-lg py-6">
                    Submit Booking Request
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 text-lg py-6">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;