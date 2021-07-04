import Navbar from '../Components/Navbar'
import LandingPageHeader from '../Components/LandingPageHeader'
import RecomendationSection from '../Components/RecomendationSection'
import FeaturesSection from '../Components/FeaturesSection'
import './LandingPage.scss'
import { Container, Row, Col } from 'react-bootstrap';

function LandingPage() {
  return(
    <div>
      <LandingPageHeader />
      <RecomendationSection />
      <FeaturesSection />      
    </div>
  )
}

export default LandingPage