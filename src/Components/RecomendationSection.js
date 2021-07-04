import { Container, Row, Col, Button } from 'react-bootstrap'
import RecomendationCard from './RecomendationCard'

function RecomendationSection() {
  return(
    <Container>
      <h1>Recommendation</h1>
      <div className="d-flex justify-content-between flex-wrap">
        <RecomendationCard covidFree />
        <RecomendationCard covidFree />
        <RecomendationCard covidFree />
        <RecomendationCard covidFree />
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="outline-success">View All</Button>{' '}
      </div>
    </Container>
  )
}

export default RecomendationSection