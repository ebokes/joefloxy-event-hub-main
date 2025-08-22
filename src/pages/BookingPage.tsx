import Header from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const BookingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;