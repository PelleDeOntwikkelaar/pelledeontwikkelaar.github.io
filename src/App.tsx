import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { WhyUbiquitiSection } from "../components/WhyUbiquitiSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import '../styles/globals.css'


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyUbiquitiSection />
      <ContactSection />
      <Footer />
    </div>
  );
}