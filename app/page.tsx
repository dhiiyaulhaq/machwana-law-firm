import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import TrustIndicators from "./components/home/TrustIndicators";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyUs from "./components/home/WhyUs";
import Industries from "./components/home/Industries";
import ContactCTA from "./components/home/ContactCTA";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustIndicators />

      <About />

      <Services />

      <WhyUs />

      <Industries />

      <ContactCTA />

      <Footer />
    </>
  );
}