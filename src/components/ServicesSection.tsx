import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {Wifi, Shield, Building2, Store, Zap, HeadphonesIcon, CoffeeIcon, Cctv} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Netwerken voor Retail",
    description: "Creëer een betrouwbaar en gescheiden netwerk voor je retailomgeving. Met aparte wifi voor klanten en veilige verbindingen voor je POS-systemen, voorraadbeheer en camera's, zorg je voor een professionele en veilige werkomgeving."
  },
  {
    icon: CoffeeIcon,
    title: "Veilig WiFi voor Horeca",
    description: "Van de barista tot de klant: bied iedereen een veilig en stabiel wifi-netwerk. Met een gerust hart laat je gasten genieten van je koffie en de wifi, terwijl je eigen systemen perfect afgeschermd blijven."
  },
  {
    icon: Building2,
    title: "Netwerken voor Kleine Kantoren",
    description: "Zet de basis voor een productieve werkomgeving. Met een draadloze netwerkinfrastructuur van Unifi, inclusief access points, gateways en switches, zorgen we voor naadloze en betrouwbare connectiviteit."
  },
  {
    icon: Wifi,
    title: "WiFi 6/7 Upgrades",
    description: "Klaar voor de toekomst? Upgrade naar de nieuwste wifi-standaarden en profiteer van hogere snelheden en een betere dekking. De perfecte manier om je netwerk naar een hoger niveau te tillen."
  },
  {
    icon: Shield,
    title: "Netwerkbeveiliging",
    description: "Veiligheid staat voorop. Wij zorgen voor de juiste instellingen zodat je met een gerust hart wifi kunt aanbieden aan zowel klanten als personeel, zonder dat je je zorgen hoeft te maken over cyberdreigingen."
  },
  {
    icon: Cctv,
    title: "Camerabewaking & Toegangscontrole",
    description: "Bescherm je onderneming met enterprise-grade oplossingen. Onze diensten omvatten de installatie van Unifi Protect camera's, toegangscontrole en andere beveiligingssystemen voor een complete beveiliging van jouw pand."
  },
  {
    icon: Zap,
    title: "Netwerk Optimalisatie",
    description: "Haal het maximale uit je netwerk. Wij optimaliseren de prestaties door middel van performance tuning, bandbreedtebeheer en QoS-configuraties, zodat je altijd de beste netwerkkwaliteit kunt garanderen."
  },
  {
    icon: HeadphonesIcon,
    title: "Service & Onderhoud",
    description: "Je netwerk groeit met je mee. Met onze doorlopende ondersteuning ben je altijd verzekerd van remote monitoring, onderhoud en snelle service. Wij zijn jouw vaste partner, zodat jij je kunt focussen op je zaak."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-6">
            Volledige Netwerk Installaties
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