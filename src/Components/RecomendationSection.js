import { Container, Row, Col, Button } from 'react-bootstrap'
import RecomendationCard from './RecomendationCard'
import './RecomendationSection.scss'
import { Link } from 'react-router-dom'

function RecomendationSection() {
  return(
    <Container className="recomendation-section-container">
      <h1 style={{fontWeight:"bold"}}>Recommendation</h1>
      <div className="d-flex justify-content-between flex-wrap">
        <RecomendationCard covidFree />
        <RecomendationCard covidFree />
        <RecomendationCard covidFree />
        <RecomendationCard covidFree />
      </div>
      <div className="d-flex justify-content-center button-view-all">
        <Link to="/lodging">
          <Button variant="outline-success">View All</Button>{' '}
        </Link>
      </div>
    </Container>
  )
}

export default RecomendationSection