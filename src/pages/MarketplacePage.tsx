import Header from "@/components/Header";
import MarketplaceSection from "@/components/MarketplaceSection";
import Footer from "@/components/Footer";

const MarketplacePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default MarketplacePage;