import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LangProvider } from '@/components/LangProvider'
import { ScrollToHash } from '@/components/ScrollToHash'
import { SiteNav } from '@/components/SiteNav'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'

function App() {
  return (
    <ErrorBoundary>
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
