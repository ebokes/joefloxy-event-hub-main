import Header from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/ui/floating-icons";

const BookingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BookingSection />
        <FloatingChat />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
