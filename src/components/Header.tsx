import { Button } from "./ui/button";
import { Menu, Wifi } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Wifi className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary">Pelle De Ontwikkelaar</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Over mij</a>
            <a href="#why-ubiquiti" className="text-foreground hover:text-primary transition-colors">Waarom Ubiquiti</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button>Vraag een offerte!</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}