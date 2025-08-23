import Header from "@/components/Header";
import MarketplaceSection from "@/components/MarketplaceSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/ui/floating-icons";

const MarketplacePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MarketplaceSection />
      </main>
      <FloatingChat />
      <Footer />
    </div>
  );
};

export default MarketplacePage;
