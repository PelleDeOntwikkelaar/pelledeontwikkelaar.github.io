import { Header } from '@/components/Header.tsx'
import { HeroSection } from '@/components/HeroSection.tsx'
import { ServicesSection } from '@/components/ServicesSection.tsx'
import { AboutSection } from '@/components/AboutSection.tsx'
import { WhyUbiquitiSection } from './components/WhyUbiquitiSection'
import { Footer } from '@/components/Footer.tsx'
import { ContactSection } from '@/components/ContactSection.tsx'

function App() {
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
  )
}

export default App
