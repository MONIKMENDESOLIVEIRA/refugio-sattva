import { About } from "@/components/About"
import { Booking } from "@/components/Booking"
import { Cabins } from "@/components/Cabins"
import { CookieConsent } from "@/components/CookieConsent"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Intro } from "@/components/Intro"
import { WhatsAppButton } from "@/components/WhatsAppButton"

function App() {
  return (
    <>
      <Header />
      <main id="main-container">
        <Hero />
        <Intro />
        <About />
        <Cabins />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}

export default App
