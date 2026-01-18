import { Wifi, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Wifi className="h-8 w-8" />
              <span className="text-xl">Pelle De Ontwikkelaar</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Professionele Ubiquiti UniFi netwerk installaties voor kleine
              ondernemingen en handelszaken. Enterprise-grade netwerk simpel en
              betaalbaar.
            </p>
            <div className="space-y-2">
              <div className="text-primary-foreground/80 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+32 498 65 55 65</span>
              </div>
              <div className="text-primary-foreground/80 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@pelledeontwikkelaar.be</span>
              </div>
              <div className="text-primary-foreground/80 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Antwerpen en ruime omgeving</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg">Services</h3>
            <ul className="text-primary-foreground/80 space-y-2">
              <li>Netwerk Installatie</li>
              <li>WiFi Setup</li>
              <li>Security Systems</li>
              <li>Network Support</li>
              <li>Consultatie</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg">Links</h3>
            <ul className="text-primary-foreground/80 space-y-2">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  Over mij
                </a>
              </li>
              <li>
                <a
                  href="#why-ubiquiti"
                  className="transition-colors hover:text-white"
                >
                  Waarom Ubiquiti
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-primary-foreground/20 mt-12 border-t pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Pelle De Ontwikkelaar | BE0803.076.163
          </p>
        </div>
      </div>
    </footer>
  )
}
