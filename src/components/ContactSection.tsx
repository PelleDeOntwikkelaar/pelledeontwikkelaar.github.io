import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-6">
            Vraag je Gratis Consultatie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Klaar om uw bedrijfsnetwerk te upgraden? Neem vandaag nog contact op voor een gratis consult en een vrijblijvende offerte.
            Krijg een beoordeling van uw huidige situatie en advies voor de beste Ubiquiti-oplossing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Laat van je horen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name">Naam *</label>
                    <Input id="name" placeholder="Naam" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business">Bedrijfsnaam</label>
                    <Input id="business" placeholder="Bedrijfsnaam" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email">Email *</label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone">Phone</label>
                    <Input id="phone" type="tel" placeholder="+32 498 65 55 65" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="project">Project Details</label>
                  <Textarea 
                    id="project" 
                    placeholder="Korte beschrijving van de verwachtingen en of huidige situatie."
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Verzenden
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div>+32 498 65 55 65</div>
                    <div className="text-sm text-muted-foreground">Bell of whatsapp</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div>info@pelledeontwikkelaar.be</div>
                    <div className="text-sm text-muted-foreground">Email</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div>Antwerpen</div>
                    <div className="text-sm text-muted-foreground">80 km radius</div>
                  </div>
                </div>

              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}