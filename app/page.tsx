import Hero from "@/components/hero"
import Features from "@/components/features"
import Vision from "@/components/vision"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import CTA from "@/components/cta"
import Forums from "@/components/forums"
import PlatformShowcase from "@/components/platform-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Features />
        <CTA />
        <Forums />
        <PlatformShowcase />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

