import { Link } from 'react-router-dom'
import { useLang, type Service } from '@/lib/i18n'

/**
 * Design-system ServiceCard: serif numeral, title, tagline, first three
 * capability items, and a "Learn more" link. The whole card deep-links into
 * the matching block on the services page. Quiet hover lift, no scale jump.
 */
export function ServiceCard({ service }: { service: Service }) {
  const { t } = useLang()

  return (
    <Link
      to={`/services#${service.key}`}
      className="group bg-card border-line hover:shadow-card flex h-full flex-col rounded-[14px] border p-7 transition-shadow duration-200"
    >
      <span className="font-display text-forest text-[34px] leading-none font-light">
        {String(service.number).padStart(2, '0')}
      </span>

      <h3 className="font-display text-ink mt-4 text-[24px] font-medium tracking-[-0.01em]">
        {service.title}
      </h3>
      <p className="text-muted-foreground mt-2 font-sans text-[15px] leading-[1.5]">
        {service.tagline}
      </p>

      <ul className="divide-line mt-5 divide-y">
        {service.items.slice(0, 3).map((item) => (
          <li
            key={item}
            className="text-ink py-[10px] font-sans text-[14px] leading-snug"
          >
            {item}
          </li>
        ))}
      </ul>

      <span className="text-forest group-hover:text-forest-deep mt-auto inline-flex items-center gap-1 pt-6 font-sans text-[14px] font-semibold">
        {t.learnMore}
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  )
}
