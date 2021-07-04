import FeatureCard from './FeatureCard'
import { Container, Row, Col } from 'react-bootstrap'
import './FeaturesSection.scss'
import Covid19 from './img/covid-19.svg'
import Distance from './img/distance.svg'
import Monitor from './img/monitor.svg'
import Rating from './img/rating.svg'
import Taxi from './img/taxi.svg'
import LocationPin from './img/location-pin.svg'

function FeaturesSection() {
  return(
    <Container className="feature-section-container">
      <div className="d-flex justify-content-center align-items-center flex-column feature-section-title">
        <h1 style={{fontWeight:"bold"}}>Features Section</h1>
        <p> We provide features that help you to avoid Covid-19 so you can staycation comfortably without having to worry</p>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        <FeatureCard icon={Monitor} title="Booking" content="The booking process is very simple, suitable for those of you who like convenience. " /> 
        <FeatureCard icon={Taxi} title="Pick up" content="Pick up and drop off service with health protocols to make you feel safe." /> 
        <FeatureCard icon={Distance} title="Distance" content="Information aboout the distance to the nearest hotel for those of you who don't want to be far from home." /> 
        <FeatureCard icon={Rating} title="Rating and review" content="Rating for the quality of hotel rooms and the implementation of health protocols." /> 
        <FeatureCard icon={Covid19} title="Covid information" content="Information about the active cases of COVID-19 around the hotel." /> 
        <FeatureCard icon={LocationPin} title="Places" content="Information about important places around the hotel that you need to know" /> 
      </div>
    </Container>
  )
}

export default FeaturesSection