import Header from "@/components/Header";

import Footer from "@/components/Footer";
import FloatingChat from "@/components/ui/floating-icons";
import GallerySection from "@/components/GallerySection";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GallerySection />
      </main>
      <FloatingChat />
      <Footer />
    </div>
  );
};

export default GalleryPage;
