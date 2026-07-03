import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { StatBand } from '@/components/StatBand'
import { WhyUniFiSection } from '@/components/WhyUniFiSection'
import { ContactSection } from '@/components/ContactSection'
import { PageMeta } from '@/components/PageMeta'
import { PROFESSIONAL_SERVICE_SCHEMA, SITE_URL } from '@/lib/structuredData'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Pelle De Ontwikkelaar — Advisory, Software & UniFi Networks"
        description="Calm, considered IT for founders: startup advisory, software consulting, and authorised UniFi / Ubiquiti network installation in Antwerp (80 km radius)."
        keywords="startup advisory, fractional CTO, software consulting, UniFi installer, Ubiquiti specialist, netwerkinstallatie Antwerpen, Unifi installateur, wifi KMO, Pelle De Ontwikkelaar"
        canonical={`${SITE_URL}/`}
        jsonLd={PROFESSIONAL_SERVICE_SCHEMA}
      />
      <HeroSection />
      <ServicesSection />
      <StatBand />
      <WhyUniFiSection />
      <ContactSection />
    </>
  )
}
