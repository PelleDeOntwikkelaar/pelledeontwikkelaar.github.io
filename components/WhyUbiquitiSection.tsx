import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DollarSign, Smartphone, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Enterprise Features at Small Business Prices",
    description: "Get the same advanced networking features that large corporations use, but at a fraction of the cost of traditional enterprise equipment."
  },
  {
    icon: Smartphone,
    title: "Easy Management with Mobile App",
    description: "Monitor and manage your entire network from your smartphone with the UniFi mobile app. No technical expertise required."
  },
  {
    icon: TrendingUp,
    title: "Scales with Your Business",
    description: "Start small and easily add more access points, switches, or locations as your business grows. All managed from one central dashboard."
  },
  {
    icon: Shield,
    title: "Built-in Security and Guest Networks",
    description: "Advanced security features, automatic updates, and isolated guest networks keep your business data safe while providing customer WiFi."
  }
];

export function WhyUbiquitiSection() {
  return (
    <section id="why-ubiquiti" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-6">
            Why Ubiquiti UniFi for Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ubiquiti has revolutionized business networking by making enterprise-grade 
            features accessible to small businesses. Here's why it's the smart choice.
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
        
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">Ready to Upgrade Your Network?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how Ubiquiti UniFi can transform your business connectivity
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}