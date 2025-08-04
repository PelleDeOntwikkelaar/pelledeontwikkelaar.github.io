import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Star, Users, Award, Wrench } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Trusted Network Installer
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-primary mb-6">
              Local Expertise, Enterprise-Grade Results
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 8 years of experience in network infrastructure, I specialize exclusively 
              in Ubiquiti UniFi systems. This focused expertise means faster installations, 
              better optimization, and reliable long-term support for your business.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I work directly with small business owners and retail managers to understand 
              their unique networking needs, from simple WiFi coverage to complex multi-site 
              deployments with centralized management.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-4">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl text-primary mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl text-primary mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Google Rating</div>
              </div>
              <div className="text-center p-4">
                <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop"
              alt="Network technician working"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg">
              <Badge variant="secondary" className="bg-white text-primary">
                Ubiquiti Certified
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}