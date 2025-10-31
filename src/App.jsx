import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Program from './sections/Program.jsx'
import Speakers from './sections/Speakers.jsx'
import Committee from './sections/Committee.jsx'
import CfP from './sections/CfP.jsx'
import FormBlock from './sections/FormBlock.jsx'
import Fees from './sections/Fees.jsx'
import Venue from './sections/Venue.jsx'
import FAQ from './sections/FAQ.jsx'
import Partners from './sections/Partners.jsx'
import Footer from './sections/Footer.jsx'

export default function App(){
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Program/>
        <Speakers/>
        <Committee/>
        <CfP/>
        <FormBlock/>
        <Fees/>
        <Venue/>
        <FAQ/>
        <Partners/>
      </main>
      <Footer/>
    </div>
  )
}
