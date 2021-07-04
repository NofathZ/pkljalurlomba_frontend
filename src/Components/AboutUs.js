import { Container, Col, Row } from 'react-bootstrap'
import './AboutUs.scss'
import AboutUsIcon from './img/about-us-icon.svg'

function AboutUs() {
  return(
    <Container>
      <Row>
        <Col>
            <img src={AboutUsIcon} />
        </Col>
        <Col className="description">
          <h1 className="title-desc" style={{fontWeight:"bold"}}>About Us</h1>
          <p className="desc-desc">Staylo is a solution for you who live in Jakarta and tired of staying at home during the pandemic and want a new vibes. Staylo provides online hotel booking services with various conveniences.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs