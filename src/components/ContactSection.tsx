import { useForm, ValidationError } from '@formspree/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactSection() {
  // IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm('xpwlyyap')

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="bg-secondary/20 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-primary mb-6 text-3xl lg:text-4xl">
            Bedankt voor je bericht!
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Ik neem zo snel mogelijk contact met je op.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="bg-secondary/20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-primary mb-6 text-3xl lg:text-4xl">
            Klaar voor de volgende stap?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Wil je je bedrijfsnetwerk naar een hoger niveau tillen? Vul dan
            hieronder je gegevens in voor een gratis consult en een
            vrijblijvende offerte. Ik analyseer jouw situatie en geef je
            persoonlijk advies over de beste Ubiquiti-oplossing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Laat van je horen</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name">Naam *</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Naam"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-destructive text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business">Bedrijfsnaam</label>
                      <Input
                        id="business"
                        name="business"
                        placeholder="Bedrijfsnaam"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email">Email *</label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-destructive text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone">Telefoon</label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+32 498 65 55 65"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project">Project Details</label>
                    <Textarea
                      id="project"
                      name="message"
                      placeholder="Vertel me meer over je project of huidige situatie."
                      rows={4}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-destructive text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={state.submitting}
                  >
                    {state.submitting
                      ? 'Verzenden...'
                      : 'Vraag consultatie aan'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contactgegevens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <div>+32 498 65 55 65</div>
                    <div className="text-muted-foreground text-sm">
                      Whatsapp
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <div>info@pelledeontwikkelaar.be</div>
                    <div className="text-muted-foreground text-sm">Email</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <div>Antwerpen</div>
                    <div className="text-muted-foreground text-sm">
                      80 km radius
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
