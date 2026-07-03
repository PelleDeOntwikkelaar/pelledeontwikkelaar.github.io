import { Link } from 'react-router-dom'
import { Eyebrow } from './Eyebrow'
import { ServiceCard } from './ServiceCard'
import { useLang } from '@/lib/i18n'

export function ServicesSection() {
  const { t } = useLang()

  return (
    <section className="mx-auto max-w-[1200px] px-[22px] py-[80px] min-[720px]:px-[40px]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>{t.whatIDo}</Eyebrow>
          <h2 className="font-display text-ink mt-3 text-[29px] leading-[1.1] font-light tracking-[-0.01em] min-[720px]:text-[42px]">
            {t.servicesHeading}
          </h2>
        </div>
        <Link
          to="/services"
          className="text-forest hover:text-forest-deep font-sans text-[14px] font-semibold"
        >
          {t.allServices}
        </Link>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-7 min-[720px]:grid-cols-2 min-[980px]:grid-cols-3">
        {t.services.map((service) => (
          <ServiceCard key={service.key} service={service} />
        ))}
      </div>
    </section>
  )
}
