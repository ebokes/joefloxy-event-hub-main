import Header from "@/components/Header";
import ServicesSection from "@/components/home/ServicesSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/ui/floating-icons";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesSection />
      </main>
      <FloatingChat />
      <Footer />
    </div>
  );
};

export default ServicesPage;
