import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {Smartphone, TrendingUp, Shield, EuroIcon} from "lucide-react";

const benefits = [
  {
    icon: EuroIcon,
    title: "Zakelijke functies voor de prijs van een kleine onderneming",
    description: "Krijg dezelfde geavanceerde netwerkfuncties die grote bedrijven gebruiken, maar dan voor een fractie van de kosten van traditionele zakelijke apparatuur."
  },
  {
    icon: Smartphone,
    title: "Eenvoudig beheer met mobiele app",
    description: "Bewaak en beheer uw gehele netwerk vanaf uw smartphone met de UniFi mobiele app. Geen technische expertise vereist."
  },
  {
    icon: TrendingUp,
    title: "Schaalt mee met uw bedrijf",
    description: "Begin klein en voeg eenvoudig meer access points, switches of locaties toe naarmate uw bedrijf groeit. Alles wordt beheerd vanuit één centraal dashboard."
  },
  {
    icon: Shield,
    title: "Ingebouwde beveiliging en gastnetwerken",
    description: "Geavanceerde beveiligingsfuncties, automatische updates en geïsoleerde gastnetwerken houden uw bedrijfsgegevens veilig terwijl u wifi aanbiedt aan klanten."
  }
];

export function WhyUbiquitiSection() {
  return (
    <section id="why-ubiquiti" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-6">
            Waarom Ubiquiti UniFi voor uw onderneming?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ubiquiti heeft een revolutie teweeggebracht in de zakelijke netwerken door functies van topniveau beschikbaar te maken voor kleine bedrijven.
            Dit maakt het de slimste keuze voor zeer veel ondernemingen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}