import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Event Planning", href: "#services" },
      { name: "Event Decoration", href: "#services" },
      { name: "Event Rentals", href: "#services" },
      { name: "Custom Packages", href: "#contact" }
    ],
    marketplace: [
      { name: "Table Decorations", href: "#marketplace" },
      { name: "Lighting", href: "#marketplace" },
      { name: "Backdrops", href: "#marketplace" },
      { name: "Centerpieces", href: "#marketplace" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Portfolio", href: "#portfolio" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Book Consultation", href: "#contact" },
      { name: "FAQs", href: "#faq" },
      { name: "Privacy Policy", href: "#privacy" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/joefloxygloba", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://instagram.com/joefloxygloba", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Twitter, href: "https://twitter.com/joefloxygloba", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "https://linkedin.com/company/joefloxygloba", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Youtube, href: "https://youtube.com/@joefloxygloba", label: "YouTube", color: "hover:text-red-500" },
    { icon: MessageCircle, href: "https://wa.me/2341234567890", label: "WhatsApp", color: "hover:text-green-500" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
                JOEFLOXY GLOBAL
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Creating unforgettable moments through premium event planning, decoration, and rental services. Your vision, our expertise.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>hello@joefloxygloba.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>123 Event Plaza, Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Follow Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg transition-all duration-300 hover:bg-primary-foreground/20 hover:scale-105 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-accent">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-accent">Marketplace</h4>
            <ul className="space-y-3">
              {footerLinks.marketplace.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-accent">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-accent">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-foreground/5 rounded-lg p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter for event planning tips, new products, and exclusive offers.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:ring-2 focus:ring-accent outline-none"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-hover transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80">
              © {currentYear} JOEFLOXY GLOBAL. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;