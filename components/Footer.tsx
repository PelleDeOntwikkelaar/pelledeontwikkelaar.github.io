import { Wifi, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wifi className="h-8 w-8" />
              <span className="text-xl">NetConnect Pro</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Professional Ubiquiti UniFi network installations for small businesses 
              and retail locations. Enterprise-grade networking made simple and affordable.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@netconnectpro.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Serving Local Area & Surrounding Communities</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Network Installation</li>
              <li>WiFi Setup</li>
              <li>Security Systems</li>
              <li>Network Support</li>
              <li>Consultation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#why-ubiquiti" className="hover:text-white transition-colors">Why Ubiquiti</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 NetConnect Pro. All rights reserved. | Licensed Network Installer | Ubiquiti Certified
          </p>
        </div>
      </div>
    </footer>
  );
}