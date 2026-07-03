import { cn } from '@/lib/utils'

type MonogramVariant = 'ring' | 'reversed' | 'solid' | 'bare'

interface MonogramProps {
  /** ring: forest ring on paper · reversed: paper ring on ink ·
   *  solid: forest fill, paper P · bare: ring-less P (tight spaces) */
  variant?: MonogramVariant
  /** outer diameter in px (min 24 per brand guidelines) */
  size?: number
  className?: string
}

const VARIANT_CLASSES: Record<MonogramVariant, string> = {
  ring: 'text-forest border-forest border-[1.5px]',
  reversed: 'text-paper border-paper border-[1.5px]',
  solid: 'bg-forest text-paper',
  bare: 'text-forest',
}

/**
 * The one bespoke brand mark: a circular "P" set in Newsreader. Recreated
 * from the design-system spec (assets/monogram.svg ships only inside the
 * compiled DS bundle, not as a file in the handoff).
 */
export function Monogram({
  variant = 'ring',
  size = 38,
  className,
}: MonogramProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'font-display inline-flex shrink-0 items-center justify-center rounded-full leading-none select-none',
        VARIANT_CLASSES[variant],
        className
      )}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.52),
        fontWeight: 500,
        paddingBottom: Math.round(size * 0.04),
      }}
    >
      P
    </span>
  )
}
