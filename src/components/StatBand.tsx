import { useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function StatBand() {
  const { t } = useLang()

  return (
    <section className="border-line bg-paper-shell border-y">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 px-[22px] py-[56px] min-[720px]:grid-cols-3 min-[720px]:px-[40px] min-[720px]:py-[72px]">
        {t.stats.map((stat, i) => (
          <div
            key={stat.value}
            className={cn(
              i > 0 &&
                'border-line mt-10 min-[720px]:mt-0 min-[720px]:border-l min-[720px]:pl-12'
            )}
          >
            <div className="font-display text-ink text-[64px] leading-none font-light tracking-[-0.02em]">
              {stat.value}
            </div>
            <p className="text-muted-foreground mt-3 max-w-[240px] font-sans text-[15px] leading-[1.5]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
