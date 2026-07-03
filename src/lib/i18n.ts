// i18n content + context for the bilingual (EN/NL) site.
// Copy lifted verbatim from the approved "Editorial Calm" handoff
// (design_handoff_website_rebuild/i18n.reference.ts).
// EN is the default; the choice persists to localStorage['pdo_lang'].

import { createContext, useContext } from 'react'

export type Lang = 'en' | 'nl'

export const LANG_STORAGE_KEY = 'pdo_lang'

export interface Service {
  key: 'advisory' | 'software' | 'networks'
  number: 1 | 2 | 3
  title: string
  tagline: string
  body: string
  items: string[] // 4 items; the home card shows the first 3
  meta: string
}

export interface Copy {
  positioning: string
  nav: { advisory: string; software: string; networks: string; contact: string }
  hero: {
    title: string
    lead: string
    exploreServices: string
    bookConsult: string
  }
  whatIDo: string
  servicesHeading: string
  allServices: string
  learnMore: string
  services: Service[]
  stats: { value: string; label: string }[]
  why: {
    eyebrow: string
    heading: string
    lead: string
    benefits: { title: string; desc: string }[]
  }
  servicesPage: {
    eyebrow: string
    title: string
    lead: string
    ctaTitle: string
  }
  discuss: string
  contact: {
    eyebrow: string
    heading: string
    lead: string
    fName: string
    fCompany: string
    fEmail: string
    fPhone: string
    fProject: string
    phName: string
    phCompany: string
    phEmail: string
    phPhone: string
    phProject: string
    submit: string
    submitting: string
    successTitle: string
    successBody: string
    errorMsg: string
    phoneLabel: string
    emailLabel: string
    locationLabel: string
    locationValue: string
    radius: string
  }
  footer: {
    tagline: string
    servicesLabel: string
    contactLabel: string
    rights: string
    installer: string
  }
}

export const CONTENT: Record<Lang, Copy> = {
  en: {
    positioning: 'Advisory · Software · Networks',
    nav: {
      advisory: 'Advisory',
      software: 'Software',
      networks: 'Networks',
      contact: 'Contact',
    },
    hero: {
      title: "Calm, considered IT for founders who'd rather be building.",
      lead: 'I help early-stage teams make sound technology decisions, build the right software, and put reliable networks in the walls — from the first architecture call to the UniFi install.',
      exploreServices: 'Explore services',
      bookConsult: 'Book a consultation',
    },
    whatIDo: 'What I do',
    servicesHeading: 'Three ways to work together',
    allServices: 'All services →',
    learnMore: 'Learn more',
    services: [
      {
        key: 'advisory',
        number: 1,
        title: 'Advisory',
        tagline: 'IT strategy and architecture for founders.',
        body: 'A standing technical partner for the stage before you have a CTO. I sit in on the hard calls — architecture, hiring, build-vs-buy — and write down the priorities so the team can move without second-guessing.',
        items: [
          'Technical due diligence',
          'Architecture & roadmap',
          'Build-vs-buy & vendor selection',
          'Fractional CTO retainer',
        ],
        meta: 'From a one-off review to a monthly retainer',
      },
      {
        key: 'software',
        number: 2,
        title: 'Software',
        tagline: 'The right software, built properly.',
        body: 'Consultancy and hands-on development for the product that matters most right now. Small, well-factored, maintainable — software your next engineer will thank you for, not inherit with dread.',
        items: [
          'Web & internal tools',
          'API & integration work',
          'Code review & rescue',
          'Hand-off documentation',
        ],
        meta: 'Fixed-scope sprints or embedded delivery',
      },
      {
        key: 'networks',
        number: 3,
        title: 'Networks',
        tagline: 'UniFi / Ubiquiti, designed and installed.',
        body: 'UniFi installer for offices and workspaces that need wifi to simply work. Proper site survey, clean cabling, and a network you can actually see and manage.',
        items: [
          'Site survey & coverage design',
          'Install & configuration',
          'Cabling & rack tidy',
          'Monitoring & support',
        ],
        meta: 'Ubiquiti installer · Antwerp + 80 km',
      },
    ],
    stats: [
      { value: '5+', label: 'years building and advising on software' },
      { value: '1', label: 'free advisory call' },
      {
        value: '80 km',
        label: 'network install radius from Antwerp for ubiquiti installations',
      },
    ],
    why: {
      eyebrow: 'Why UniFi',
      heading: 'Enterprise-grade networking, small-business economics.',
      lead: 'Ubiquiti put top-tier network features within reach of small teams. That makes UniFi the sensible choice for offices, retail, and hospitality that just need wifi to work.',
      benefits: [
        {
          title: 'Enterprise features, small-business price',
          desc: 'The same advanced network features large companies use, for a fraction of the cost of traditional enterprise hardware.',
        },
        {
          title: 'Manage it from your phone',
          desc: 'Monitor and manage your whole network from the UniFi app. No technical expertise required.',
        },
        {
          title: 'Scales as you grow',
          desc: 'Start small and add access points, switches, or sites as you grow — all from one central dashboard.',
        },
        {
          title: 'Security and guest networks built in',
          desc: 'Advanced security, automatic updates, and isolated guest networks keep your business data safe.',
        },
      ],
    },
    servicesPage: {
      eyebrow: 'Services',
      title: 'From the first architecture call to the network in the walls.',
      lead: 'Three connected practices for early-stage teams. Engage one, or let them carry each other.',
      ctaTitle:
        "Not sure which one you need? That's exactly what the first call is for.",
    },
    discuss: 'Discuss',
    contact: {
      eyebrow: 'A first conversation is free',
      heading:
        "Tell me what you're building, and I'll tell you where I'd start.",
      lead: "Share a few details and I'll come back with where I'd start — no obligation.",
      fName: 'Name',
      fCompany: 'Company',
      fEmail: 'Email',
      fPhone: 'Phone',
      fProject: 'What are you working on?',
      phName: 'Your name',
      phCompany: 'Company name',
      phEmail: 'you@email.com',
      phPhone: '+32 …',
      phProject: 'Tell me a bit about your project or current situation.',
      submit: 'Request a consultation',
      submitting: 'Sending…',
      successTitle: 'Thanks for your message.',
      successBody: "I'll get back to you as soon as I can.",
      errorMsg: 'Something went wrong. Please check the fields and try again.',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email',
      locationLabel: 'Based in',
      locationValue: 'Antwerp, Belgium',
      radius: '80 km service radius',
    },
    footer: {
      tagline: "Let's talk about what you're building.",
      servicesLabel: 'Services',
      contactLabel: 'Contact',
      rights: '© 2026 Pelle De Ontwikkelaar. All rights reserved.',
      installer: 'UniFi / Ubiquiti installer',
    },
  },

  nl: {
    positioning: 'Advies · Software · Netwerken',
    nav: {
      advisory: 'Advies',
      software: 'Software',
      networks: 'Netwerken',
      contact: 'Contact',
    },
    hero: {
      title: 'Rustige, doordachte IT voor oprichters die liever bouwen.',
      lead: 'Ik help jonge teams om de juiste technologiekeuzes te maken, de juiste software te bouwen en betrouwbare netwerken in de muren te krijgen — van het eerste architectuurgesprek tot de UniFi-installatie.',
      exploreServices: 'Bekijk diensten',
      bookConsult: 'Plan een gesprek',
    },
    whatIDo: 'Wat ik doe',
    servicesHeading: 'Drie manieren om samen te werken',
    allServices: 'Alle diensten →',
    learnMore: 'Meer weten',
    services: [
      {
        key: 'advisory',
        number: 1,
        title: 'Advies',
        tagline: 'IT-strategie en architectuur voor oprichters.',
        body: 'Een vaste technische partner voor de fase vóór je een CTO hebt. Ik zit mee aan tafel bij de moeilijke keuzes — architectuur, aanwervingen, zelf bouwen of kopen — en schrijf de prioriteiten op zodat het team vooruit kan zonder te twijfelen.',
        items: [
          'Technische due diligence',
          'Architectuur & roadmap',
          'Zelf bouwen of kopen & leverancierskeuze',
          'Fractioneel CTO-abonnement',
        ],
        meta: 'Van een eenmalige review tot een maandelijks abonnement',
      },
      {
        key: 'software',
        number: 2,
        title: 'Software',
        tagline: 'De juiste software, degelijk gebouwd.',
        body: 'Advies en hands-on ontwikkeling voor het product dat nu het belangrijkst is. Klein, goed gestructureerd en onderhoudbaar — software waar je volgende engineer je dankbaar voor is.',
        items: [
          'Web & interne tools',
          'API- & integratiewerk',
          'Code review & redding',
          'Overdrachtsdocumentatie',
        ],
        meta: 'Sprints met vaste scope of ingebedde levering',
      },
      {
        key: 'networks',
        number: 3,
        title: 'Netwerken',
        tagline: 'UniFi / Ubiquiti, ontworpen en geïnstalleerd.',
        body: 'Erkend UniFi-installateur voor kantoren en werkplekken waar de wifi gewoon moet werken. Een degelijke site survey, nette bekabeling en een netwerk dat je echt kunt zien en beheren.',
        items: [
          'Site survey & dekkingsontwerp',
          'Installatie & configuratie',
          'Bekabeling & rack-opruim',
          'Monitoring & ondersteuning',
        ],
        meta: 'Erkend Ubiquiti-installateur · Antwerpen + 80 km',
      },
    ],
    stats: [
      { value: '5+', label: 'jaar software bouwen en erover adviseren' },
      { value: '1', label: 'gratis advies gesprek' },
      { value: '80 km', label: 'installatieradius vanuit Antwerpen' },
    ],
    why: {
      eyebrow: 'Waarom UniFi',
      heading: 'Netwerken op enterpriseniveau, aan kmo-prijzen.',
      lead: 'Ubiquiti bracht netwerkfuncties van topniveau binnen het bereik van kleine teams. Dat maakt UniFi de logische keuze voor kantoren, retail en horeca waar de wifi gewoon moet werken.',
      benefits: [
        {
          title: 'Enterprisefuncties aan een kmo-prijs',
          desc: 'Dezelfde geavanceerde netwerkfuncties die grote bedrijven gebruiken, maar voor een fractie van de kosten van klassieke zakelijke apparatuur.',
        },
        {
          title: 'Beheer alles vanaf je telefoon',
          desc: 'Bewaak en beheer je hele netwerk via de UniFi-app. Geen technische kennis nodig.',
        },
        {
          title: 'Groeit mee met je bedrijf',
          desc: 'Begin klein en voeg eenvoudig access points, switches of locaties toe — alles vanuit één centraal dashboard.',
        },
        {
          title: 'Beveiliging en gastnetwerken inbegrepen',
          desc: 'Geavanceerde beveiliging, automatische updates en geïsoleerde gastnetwerken houden je bedrijfsgegevens veilig.',
        },
      ],
    },
    servicesPage: {
      eyebrow: 'Diensten',
      title: 'Van het eerste architectuurgesprek tot het netwerk in de muren.',
      lead: 'Drie verbonden praktijken voor jonge teams. Kies er één, of laat ze elkaar versterken.',
      ctaTitle:
        'Niet zeker welke je nodig hebt? Daar dient het eerste gesprek net voor.',
    },
    discuss: 'Bespreek',
    contact: {
      eyebrow: 'Een eerste gesprek is gratis',
      heading: 'Vertel me wat je bouwt, en ik vertel je waar ik zou beginnen.',
      lead: 'Geef wat details en ik laat je weten waar ik zou starten — vrijblijvend.',
      fName: 'Naam',
      fCompany: 'Bedrijfsnaam',
      fEmail: 'E-mail',
      fPhone: 'Telefoon',
      fProject: 'Waar werk je aan?',
      phName: 'Je naam',
      phCompany: 'Bedrijfsnaam',
      phEmail: 'jij@email.be',
      phPhone: '+32 …',
      phProject: 'Vertel me wat meer over je project of huidige situatie.',
      submit: 'Vraag een gesprek aan',
      submitting: 'Versturen…',
      successTitle: 'Bedankt voor je bericht.',
      successBody: 'Ik neem zo snel mogelijk contact met je op.',
      errorMsg: 'Er ging iets mis. Controleer de velden en probeer opnieuw.',
      phoneLabel: 'Telefoon / WhatsApp',
      emailLabel: 'E-mail',
      locationLabel: 'Gevestigd in',
      locationValue: 'Antwerpen, België',
      radius: '80 km werkradius',
    },
    footer: {
      tagline: 'Laten we praten over wat je bouwt.',
      servicesLabel: 'Diensten',
      contactLabel: 'Contact',
      rights: '© 2026 Pelle De Ontwikkelaar. Alle rechten voorbehouden.',
      installer: 'UniFi / Ubiquiti-installateur',
    },
  },
}

export interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Copy
}

export const LangContext = createContext<LangContextValue | null>(null)

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LangProvider')
  return ctx
}
