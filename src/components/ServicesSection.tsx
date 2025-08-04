import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {Wifi, Shield, Building2, Store, Zap, HeadphonesIcon, CoffeeIcon, Cctv} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Retail POS Netwerk",
    description: "Betrouwbare netwerken voor retail omgevingen met gescheiden guest WiFi, POS systems, inventory management connectivity en cameras."
  },
  {
    icon: CoffeeIcon,
    title: "Latte Art",
    description: "Van de casual swiper tot de koffiebar werker: biedt met gerust hart een veilig netwerk aan je klanten."
  },
  {
    icon: Building2,
    title: "Kantoor Netwerk Setup",
    description: "Draadloze Netwerk infrastructuur voor kleine kantoren met Unifi access points, gateways en switches. "
  },
  {
    icon: Wifi,
    title: "WiFi 6/7 Upgrades",
    description: "Maak gebruik van de hogere snelheid en betere spreiding die met de moderne WiFi standaarden komen. "
  },
  {
    icon: Shield,
    title: "Netwerk Beveiliging",
    description: "Stel met een gerust gemoed wifi ter beschikking aan klanten en personeel."
  },
  {
    icon: Cctv,
    title: "Beveiliging",
    description: "Enterprise-grade beveiliging met UniFi Protect cameras, toegangs controle, en beveiligings systeem."
  },
  {
    icon: Zap,
    title: "Network Optimalisatie",
    description: "Performance tuning, bandbreedte management en QoS configuratie om de optimale netwerk kwaliteit te kunnen garanderen."
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Remote monitoring, onderhoud, en 24/7 support."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-6">
            Volledige Ubiquiti Netwerk Installaties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van kleine kantoren tot handelszaken: Ontwerp en installatie Ubiquiti UniFi-netwerken die kunnen meegroeien met uw bedrijf.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}