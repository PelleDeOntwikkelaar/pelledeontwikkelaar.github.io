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
              Betrouwbare netwerken, op maat gemaakt.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hallo, ik ben Pelle en ik werk als software-ingenieur.
              Naast mijn vaste job zet ik mijn kennis en expertise in als zelfstandige in bijberoep.
              Ik help ondernemingen met het opzetten van veilige en snelle netwerken.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ik specialiseer me in Ubiquiti: Unifi-systemen,
              omdat ik ervan overtuigd ben dat je voor een eerlijke prijs een fantastisch netwerk kunt bouwen.
              Dit garandeert een sterke productkennis en langdurige ondersteuning.
              Ik werk graag aan een duurzame relatie met eigenaars van kleine ondernemingen en retail managers,
              zodat ik kan meegroeien als jouw vaste partner.
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