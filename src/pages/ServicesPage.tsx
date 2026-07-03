import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/Eyebrow'
import { PageMeta } from '@/components/PageMeta'
import { useLang, type Service } from '@/lib/i18n'
import { buildBreadcrumbSchema, SITE_URL } from '@/lib/structuredData'

function ServiceBlock({ service }: { service: Service }) {
  const { t } = useLang()

  return (
    <div
      id={service.key}
      className="border-line grid scroll-mt-24 grid-cols-1 gap-14 border-t py-16 min-[720px]:grid-cols-[0.8fr_1.2fr]"
    >
      {/* Left rail */}
      <div>
        <span className="font-display text-forest text-[52px] leading-none font-light">
          {String(service.number).padStart(2, '0')}
        </span>
        <h2 className="font-display text-ink mt-4 text-[32px] font-medium tracking-[-0.01em]">
          {service.title}
        </h2>
        <p className="font-display text-muted-foreground mt-3 text-[20px] italic">
          {service.tagline}
        </p>
        <p className="text-brass mt-5 font-sans text-[11px] font-semibold tracking-[0.1em] uppercase">
          {service.meta}
        </p>
      </div>

      {/* Right detail */}
      <div>
        <p className="text-ink font-sans text-[18px] leading-[1.7] min-[720px]:text-[20px]">
          {service.body}
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-x-10 min-[720px]:grid-cols-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="border-line text-ink border-t py-3 font-sans text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          to={{ pathname: '/', hash: '#contact' }}
          className="border-line text-ink hover:border-forest hover:text-forest mt-8 inline-flex rounded-[7px] border px-6 py-3 font-sans text-[14px] font-semibold transition-colors"
        >
          {t.discuss} {service.title} →
        </Link>
      </div>
    </div>
  )
}

export function ServicesPage() {
  const { t } = useLang()

  return (
    <>
      <PageMeta
        title="Services: Advisory, Software & Networks"
        description="Three connected practices for early-stage teams: IT advisory, software consulting and development, and UniFi / Ubiquiti network installation in Antwerp."
        canonical={`${SITE_URL}/services`}
        jsonLd={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <section className="mx-auto max-w-[1200px] px-[22px] pt-[80px] pb-10 min-[720px]:px-[40px] min-[720px]:pt-[120px]">
        <Eyebrow>{t.servicesPage.eyebrow}</Eyebrow>
        <h1 className="font-display text-ink mt-4 max-w-[860px] text-[40px] leading-[1.1] font-light tracking-[-0.02em] min-[720px]:text-[60px]">
          {t.servicesPage.title}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-[620px] font-sans text-[17px] leading-[1.6] min-[720px]:text-[20px]">
          {t.servicesPage.lead}
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-[22px] pb-10 min-[720px]:px-[40px]">
        {t.services.map((service) => (
          <ServiceBlock key={service.key} service={service} />
        ))}
      </section>

      {/* CTA band */}
      <section className="bg-forest text-paper">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 px-[22px] py-[80px] min-[720px]:flex-row min-[720px]:items-center min-[720px]:justify-between min-[720px]:px-[40px]">
          <h2 className="font-display max-w-[640px] text-[30px] leading-[1.15] font-light min-[720px]:text-[40px]">
            {t.servicesPage.ctaTitle}
          </h2>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="bg-paper text-ink shrink-0 rounded-[7px] px-7 py-[13px] font-sans text-[15px] font-semibold transition-opacity hover:opacity-90"
          >
            {t.hero.bookConsult}
          </Link>
        </div>
      </section>
    </>
  )
}
