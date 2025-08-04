import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import imageSource from "../assets/experience_image2.jpeg";


export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Netwerk Installateur
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-primary mb-6">
              Lokale Expertise, Enterprise-Grade Resultaten
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hoi mijn naam is Pelle en ik ben in het dagelijks leven software ingenieur.
              Daarnaast biedt ik mijn kennis en arbeid aan als zelfstandige in bijberoep.
              Waarom ben ik hiermee begonnen? Het aantal keer dat ik zelf in een koffie bar zat en via het netwerk aan een POS systeem of aan alle andere gebruikers geraakte, is al niet meer op een hand te tellen.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Het vooroordeel: goede netwerken komen met een met een gigantisch prijskaartje.
              Maar dit hoeft het absoluut niet te zijn.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Als zelfstandige in bij beroep heb ik mij gespecialiseerd in de fantastische systemen van Ubiquiti: Unifi.
              Deze gefocuste expertise betekent een goede product kennis en betrouwbare lange termijn ondersteuning.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ik bouw graag een langetermijn relatie op met de eigenaars van kleine ondernemingen en retail managers.
              Zodat ik een vaste partner kan zijn en het netwerk mee kan groeien met de onderneming.
            </p>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src={imageSource}
              alt="Network technician working"
              className="rounded-lg shadow-xl w-full"
            />

          </div>
        </div>
      </div>
    </section>
  );
}