import { cn } from '@/lib/utils'

type EyebrowTone = 'forest' | 'brass' | 'muted'

const TONE_CLASSES: Record<EyebrowTone, string> = {
  forest: 'text-forest',
  brass: 'text-brass',
  muted: 'text-muted-foreground',
}

/** Uppercase kicker — Libre Franklin 12px / 600, 0.2em tracking. */
export function Eyebrow({
  children,
  tone = 'forest',
  className,
}: {
  children: React.ReactNode
  tone?: EyebrowTone
  className?: string
}) {
  return (
    <p
      className={cn(
        'font-sans text-[12px] font-semibold tracking-[0.2em] uppercase',
        TONE_CLASSES[tone],
        className
      )}
    >
      {children}
    </p>
  )
}
