import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-6">
            Get Your Free Network Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to upgrade your business network? Contact us today for a free consultation 
            and quote. We'll assess your current setup and recommend the best Ubiquiti solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name">Name *</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business">Business Name</label>
                    <Input id="business" placeholder="Your business name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email">Email *</label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone">Phone</label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="project">Project Details</label>
                  <Textarea 
                    id="project" 
                    placeholder="Tell us about your networking needs, current setup, number of users, etc."
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Send Message & Get Free Quote
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
                    <div>(555) 123-4567</div>
                    <div className="text-sm text-muted-foreground">Call or text</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div>info@netconnectpro.com</div>
                    <div className="text-sm text-muted-foreground">Email us anytime</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div>Serving Local Area</div>
                    <div className="text-sm text-muted-foreground">50 mile radius</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div>Mon-Fri: 8AM-6PM</div>
                    <div className="text-sm text-muted-foreground">Emergency support available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Quick Response Guarantee</h3>
                <p className="text-sm opacity-90">
                  We respond to all inquiries within 2 hours during business hours. 
                  Emergency support available 24/7 for existing clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}