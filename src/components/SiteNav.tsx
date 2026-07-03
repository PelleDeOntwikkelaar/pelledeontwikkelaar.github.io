import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Monogram } from './Monogram'
import { useLang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const SERVICE_KEYS = ['advisory', 'software', 'networks'] as const

function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  return (
    <div
      className={cn(
        'border-line inline-flex rounded-[7px] border p-[2px]',
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(['en', 'nl'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            'rounded-[5px] px-2 py-[3px] text-[12px] font-semibold uppercase transition-colors',
            lang === code
              ? 'bg-forest text-paper'
              : 'text-muted-foreground hover:text-ink'
          )}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export function SiteNav() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[280ms] ease-out',
        scrolled
          ? 'border-line border-b bg-[rgba(246,244,238,0.86)] backdrop-blur-[10px] backdrop-saturate-[1.1]'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-[22px] py-[18px] min-[720px]:px-[40px]">
        {/* Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Monogram variant="ring" size={38} />
          <span className="font-display text-ink text-[18px] font-medium tracking-[-0.01em]">
            Pelle De Ontwikkelaar
          </span>
        </Link>

        {/* Desktop cluster */}
        <nav className="hidden items-center gap-7 min-[720px]:flex">
          {SERVICE_KEYS.map((key) => (
            <Link
              key={key}
              to={`/services#${key}`}
              className="text-ink hover:text-forest font-sans text-[14px] font-medium transition-colors"
            >
              {t.nav[key]}
            </Link>
          ))}
          <LangToggle />
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="bg-forest text-paper hover:bg-forest-deep rounded-[7px] px-[18px] py-2 font-sans text-[13px] font-semibold transition-colors"
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="border-line text-ink relative flex size-10 items-center justify-center rounded-[7px] border min-[720px]:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-[10px] w-[18px]">
            <span
              className={cn(
                'bg-ink absolute left-0 block h-[1.5px] w-full transition-transform duration-[220ms] ease-out',
                menuOpen ? 'top-1/2 rotate-45' : 'top-0'
              )}
            />
            <span
              className={cn(
                'bg-ink absolute bottom-0 left-0 block h-[1.5px] w-full transition-transform duration-[220ms] ease-out',
                menuOpen ? 'bottom-1/2 -rotate-45' : ''
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="bg-paper border-line border-t px-[22px] pb-6 min-[720px]:hidden">
          <nav className="flex flex-col">
            {SERVICE_KEYS.map((key) => (
              <Link
                key={key}
                to={`/services#${key}`}
                onClick={() => setMenuOpen(false)}
                className="border-line text-ink font-display border-b py-4 text-[22px]"
              >
                {t.nav[key]}
              </Link>
            ))}
            <Link
              to={{ pathname: '/', hash: '#contact' }}
              onClick={() => setMenuOpen(false)}
              className="bg-forest text-paper hover:bg-forest-deep mt-5 rounded-[7px] py-3 text-center font-sans text-[14px] font-semibold transition-colors"
            >
              {t.nav.contact}
            </Link>
            <div className="mt-5 flex justify-center">
              <LangToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
