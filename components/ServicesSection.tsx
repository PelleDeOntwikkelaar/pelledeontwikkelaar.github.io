import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Wifi, Shield, Building2, Store, Zap, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Office Network Setup",
    description: "Complete network infrastructure for offices up to 100+ users with UniFi access points, switches, and security gateways."
  },
  {
    icon: Store,
    title: "Retail POS Networks",
    description: "Reliable networks for retail environments with separate guest WiFi, POS systems, and inventory management connectivity."
  },
  {
    icon: Wifi,
    title: "WiFi 6 Upgrades",
    description: "Upgrade to the latest WiFi 6 technology with Ubiquiti's U6 series for faster speeds and better coverage."
  },
  {
    icon: Shield,
    title: "Network Security",
    description: "Enterprise-grade security with UniFi Protect cameras, access control, and threat detection systems."
  },
  {
    icon: Zap,
    title: "Network Optimization",
    description: "Performance tuning, bandwidth management, and QoS configuration to ensure optimal network performance."
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Remote monitoring, maintenance, and 24/7 support to keep your network running smoothly."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-6">
            Complete Ubiquiti Network Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From small offices to multi-location retail chains, we design and install 
            Ubiquiti UniFi networks that scale with your business.
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