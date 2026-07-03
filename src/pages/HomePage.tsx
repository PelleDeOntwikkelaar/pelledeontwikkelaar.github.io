import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { StatBand } from '@/components/StatBand'
import { WhyUniFiSection } from '@/components/WhyUniFiSection'
import { ContactSection } from '@/components/ContactSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatBand />
      <WhyUniFiSection />
      <ContactSection />
    </>
  )
}
