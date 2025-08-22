import Header from "@/components/Header";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;