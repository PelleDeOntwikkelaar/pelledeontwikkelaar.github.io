import { Eyebrow } from './Eyebrow'
import { useLang } from '@/lib/i18n'

export function WhyUniFiSection() {
  const { t } = useLang()

  return (
    <section className="mx-auto max-w-[1200px] px-[22px] py-[80px] min-[720px]:px-[40px]">
      <div className="max-w-[680px]">
        <Eyebrow>{t.why.eyebrow}</Eyebrow>
        <h2 className="font-display text-ink mt-3 text-[29px] leading-[1.1] font-light tracking-[-0.01em] min-[720px]:text-[42px]">
          {t.why.heading}
        </h2>
        <p className="text-muted-foreground mt-5 font-sans text-[17px] leading-[1.6] min-[720px]:text-[20px]">
          {t.why.lead}
        </p>
      </div>

      {/* 1px gaps over a line background read as hairline rules between cells */}
      <div className="bg-line mt-10 grid grid-cols-1 gap-[1px] overflow-hidden rounded-[14px] min-[720px]:grid-cols-2">
        {t.why.benefits.map((benefit, i) => (
          <div key={benefit.title} className="bg-card p-10">
            <span className="font-display text-forest text-[30px] leading-none font-light">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-ink mt-4 text-[24px] font-medium tracking-[-0.01em]">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground mt-2 font-sans text-[15px] leading-[1.6]">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
