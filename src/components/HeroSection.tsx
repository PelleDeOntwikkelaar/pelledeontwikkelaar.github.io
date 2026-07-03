import { Link } from 'react-router-dom'
import { Eyebrow } from './Eyebrow'
import { useLang } from '@/lib/i18n'

export function HeroSection() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden">
      {/* Decorative thin-ring circle + giant watermark P — hidden on mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 hidden translate-x-1/4 -translate-y-1/2 min-[720px]:block"
      >
        <div className="border-line flex size-[460px] items-center justify-center rounded-full border-[1.5px]">
          <span
            className="font-display leading-none font-light"
            style={{ fontSize: 300, color: 'rgba(28,107,71,0.06)' }}
          >
            P
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-[22px] pt-[76px] pb-[60px] min-[720px]:px-[40px] min-[720px]:pt-[120px] min-[720px]:pb-[96px]">
        <Eyebrow>{t.positioning}</Eyebrow>

        <h1 className="font-display text-ink mt-5 max-w-[580px] text-[36px] leading-[1.1] font-light tracking-[-0.02em] min-[720px]:text-[52px]">
          {t.hero.title}
        </h1>

        <p className="text-muted-foreground mt-6 max-w-[560px] font-sans text-[17px] leading-[1.6] min-[720px]:text-[20px]">
          {t.hero.lead}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/services"
            className="bg-forest text-paper hover:bg-forest-deep rounded-[7px] px-7 py-[13px] font-sans text-[15px] font-semibold transition-colors"
          >
            {t.hero.exploreServices}
          </Link>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="border-line text-ink hover:border-forest hover:text-forest rounded-[7px] border px-7 py-[13px] font-sans text-[15px] font-semibold transition-colors"
          >
            {t.hero.bookConsult}
          </Link>
        </div>
      </div>
    </section>
  )
}
