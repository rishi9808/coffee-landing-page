import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import OrderNow from "./_components/OrderNow";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <OrderNow />
      <Testimonials />
      <Footer />
    </div>
  );
}
