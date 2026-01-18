import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Shield, Clock, CheckCircle } from 'lucide-react'
import imageSource from '../assets/home_image.jpeg'

export function HeroSection() {
  return (
    <section className="from-secondary/30 bg-gradient-to-b to-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-primary mb-6 text-4xl leading-tight lg:text-5xl">
              Jouw bedrijfsnetwerk, klaar voor de toekomst
            </h1>
            <p className="text-muted-foreground mb-8 text-xl">
              Geen gedoe meer met traag internet of onveilige verbindingen. Met
              Ubiquiti UniFi-systemen zorg ik voor een netwerk dat niet alleen
              betaalbaar is, maar ook ijzersterk, schaalbaar en met oog voor
              detail geïnstalleerd.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="px-8 text-lg" asChild>
                <a href="#contact">Vraag een gratis adviesgesprek aan</a>
              </Button>
            </div>

            <div className="flex flex-col gap-6 text-sm sm:flex-row">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>Uitgebreide garantie (tot 5 jaar)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Hulp op afstand wanneer je die nodig hebt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Ubiquiti installateur</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src={imageSource}
              alt="Professional network installation"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-sm">Network Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
