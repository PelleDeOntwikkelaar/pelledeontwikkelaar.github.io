import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Clock, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl text-primary mb-6 leading-tight">
              Professional Network Solutions for Small Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specializing in Ubiquiti UniFi systems, we deliver enterprise-grade networking 
              that small businesses can afford. Reliable, scalable, and professionally installed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Our Work
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>5 Year Equipment Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Same-Day Service Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Certified Ubiquiti Installer</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558618667-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="Professional network installation"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Network Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}