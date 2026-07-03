import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@/components/Analytics'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LangProvider } from '@/components/LangProvider'
import { ScrollToHash } from '@/components/ScrollToHash'
import { SiteNav } from '@/components/SiteNav'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'

declare global {
  interface Window {
    __PRERENDER_READY__?: boolean
  }
}

function App() {
  // Signals scripts/prerender.mjs that React has finished its first render
  // (including hoisted <PageMeta> head tags) and it's safe to snapshot the DOM.
  useEffect(() => {
    window.__PRERENDER_READY__ = true
  }, [])

  return (
    <ErrorBoundary>
      <Analytics />
      <LangProvider>
        <ScrollToHash />
        <div className="bg-paper text-ink flex min-h-screen flex-col">
          <SiteNav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LangProvider>
    </ErrorBoundary>
  )
}

export default App
