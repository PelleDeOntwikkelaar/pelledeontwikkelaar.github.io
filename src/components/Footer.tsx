import { Link } from 'react-router-dom'
import { Monogram } from './Monogram'
import { useLang } from '@/lib/i18n'
import { CONTACT } from '@/lib/contact'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-ink text-paper-on-ink">
      <div className="mx-auto max-w-[1200px] px-[22px] pt-[88px] pb-10 min-[720px]:px-[40px]">
        <div className="grid grid-cols-1 gap-12 min-[720px]:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <Monogram variant="reversed" size={48} />
              <span className="font-display text-paper text-[18px] font-medium">
                Pelle De Ontwikkelaar
              </span>
            </Link>
            <p className="font-display text-paper mt-6 max-w-[320px] text-[26px] leading-[1.2] font-light">
              {t.footer.tagline}
            </p>
            <a
              href={CONTACT.emailHref}
              className="text-brass mt-5 inline-block font-sans text-[15px] hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-ink-muted font-sans text-[11px] font-semibold tracking-[0.2em] uppercase">
              {t.footer.servicesLabel}
            </p>
            <ul className="mt-4 space-y-3">
              {t.services.map((service) => (
                <li key={service.key}>
                  <Link
                    to={`/services#${service.key}`}
                    className="text-paper-on-ink hover:text-paper font-sans text-[15px] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-ink-muted font-sans text-[11px] font-semibold tracking-[0.2em] uppercase">
              {t.footer.contactLabel}
            </p>
            <ul className="mt-4 space-y-3 font-sans text-[15px]">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="text-paper-on-ink hover:text-paper transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-paper-on-ink">{t.contact.locationValue}</li>
              <li className="text-ink-muted">VAT {CONTACT.vat}</li>
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-16 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.12)] pt-8 font-sans text-[13px] min-[720px]:flex-row min-[720px]:items-center min-[720px]:justify-between">
          <p className="text-ink-muted">{t.footer.rights}</p>
          <p className="text-ink-muted">{t.footer.installer}</p>
        </div>
      </div>
    </footer>
  )
}
