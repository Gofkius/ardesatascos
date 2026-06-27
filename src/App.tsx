import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Rehook from "./components/Rehook"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Stats from "./components/Stats"
import './index.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats />
      <Reviews />
      <Services />
      <Rehook/>
      <Footer/>
    </>
  )
}

export default App
