import FeatureCard from './FeatureCard'
import { Container, Row, Col } from 'react-bootstrap'
import Covid19 from './img/covid-19.svg'
import Distance from './img/distance.svg'
import Monitor from './img/monitor.svg'
import Rating from './img/rating.svg'
import Taxi from './img/taxi.svg'
import LocationPin from './img/location-pin.svg'

function FeaturesSection() {
  return(
    <Container>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1>Features Section</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit euismod tortor amet lobortis eu magna.</p>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        <FeatureCard icon={Monitor} title="Booking" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit euismod tortor amet lobortis eu magna." /> 
        <FeatureCard icon={Taxi} title="Pick up" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit euismod tortor amet lobortis eu magna." /> 
        <FeatureCard icon={Distance} title="Distance" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit euismod tortor amet lobortis eu magna." /> 
        <FeatureCard icon={Rating} title="Rating and review" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit euismod tortor amet lobortis eu magna." /> 
        <FeatureCard icon={Covid19} title="Covid information" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit euismod tortor amet lobortis eu magna." /> 
        <FeatureCard icon={LocationPin} title="Places" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit euismod tortor amet lobortis eu magna." /> 
      </div>
    </Container>
  )
}

export default FeaturesSection