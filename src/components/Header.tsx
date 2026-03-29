import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, Wifi, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'Over mij' },
  { href: '#why-ubiquiti', label: 'Waarom Ubiquiti' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-border sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wifi className="text-primary h-8 w-8" />
            <span className="text-primary text-xl font-semibold">
              Pelle De Ontwikkelaar
            </span>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Vraag een offerte!</a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigatiemenu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-border border-t bg-white px-4 pb-4 md:hidden"
        >
          <nav className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-foreground hover:text-primary rounded-md px-3 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Vraag een offerte!
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
