import { HeroSection } from "@/components/hero-section"
import { FeaturedListings } from "@/components/featured-listings"
import { MissionSection } from "@/components/mission-section"
import { AppDownload } from "@/components/app-download"
import { BannerAd } from "@/components/banner-ad"
import { CookieConsent } from "@/components/cookie-consent"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Overlay de desenvolvimento */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-2xl text-center max-w-md mx-4">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Estamos em Desenvolvimento</h2>
            <p className="text-gray-600 mb-6">
              Nosso site está passando por melhorias. Em breve estaremos de volta com uma experiência ainda melhor!
            </p>
            
          </div>
        </div>
      </div>

      {/* Conteúdo original com blur */}
      <div className="blur-sm pointer-events-none">
        <div className="w-full">
          <BannerAd placement="header" />
        </div>
        <HeroSection />
        <FeaturedListings />
        <MissionSection />
        <AppDownload />
        <CookieConsent />
      </div>
    </main>
  )
}
