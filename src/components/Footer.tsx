import { Wifi, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wifi className="h-8 w-8" />
              <span className="text-xl">Pelle De Ontwikkelaar</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Professionele Ubiquiti UniFi netwerk installaties voor kleine ondernemingen en handelszaken.
              Enterprise-grade netwerk simpel en betaalbaar.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+32 498 65 55 65</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@oelledeontwikkelaar.be</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Antwerpen en ruime omgeving</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Netwerk Installatie</li>
              <li>WiFi Setup</li>
              <li>Security Systems</li>
              <li>Network Support</li>
              <li>Consultatie</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Over mij</a></li>
              <li><a href="#why-ubiquiti" className="hover:text-white transition-colors">Waarom Ubiquiti</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Pelle De Ontwikkelaar | BE0803.076.163
          </p>
        </div>
      </div>
    </footer>
  );
}