import { Button } from './ui/button'
import { Menu, Wifi } from 'lucide-react'

export function Header() {
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
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              Over mij
            </a>
            <a
              href="#why-ubiquiti"
              className="text-foreground hover:text-primary transition-colors"
            >
              Waarom Ubiquiti
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Vraag een offerte!</a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}
