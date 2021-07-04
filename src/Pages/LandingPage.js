import Navbar from '../Components/NavbarWhite'
import LandingPageHeader from '../Components/LandingPageHeader'
import RecomendationSection from '../Components/RecomendationSection'
import FeaturesSection from '../Components/FeaturesSection'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'
import './LandingPage.scss'
import { Container, Row, Col } from 'react-bootstrap';
import NavbarWhite from '../Components/NavbarWhite'
import NavbarGreen from '../Components/NavbarGreen'

function LandingPage() {
  return(
    <div>
      <NavbarWhite />
      <LandingPageHeader />
      <RecomendationSection />
      <FeaturesSection />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default LandingPage