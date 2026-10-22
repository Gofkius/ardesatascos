import Navbar from './Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Services from './Services'
import Zones from './Zones'
import Gallery from './Gallery'
import Faq from './Faq'
import Rehook from './Rehook'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Zones />
        <Gallery />
        <Faq />
        <Rehook />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default HomePage
