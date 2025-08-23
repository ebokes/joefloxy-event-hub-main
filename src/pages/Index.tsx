import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/home/HomeBlogSection";
import HomeGallerySection from "@/components/home/HomeGallerySection";
import HomeMarketplaceSection from "@/components/home/HomeMarketplaceSection";
import ServicesSection from "@/components/home/ServicesSection";
import FloatingChat from "@/components/ui/floating-icons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HomeMarketplaceSection />
      <HomeGallerySection />
      <BlogSection />
      <FloatingChat />
      <Footer />
    </div>
  );
};

export default Index;
