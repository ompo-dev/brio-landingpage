import Hero from "@/components/hero"
import Features from "@/components/features"
import Vision from "@/components/vision"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

