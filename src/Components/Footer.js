import './Footer.scss'
import { Container, Col, Row } from 'react-bootstrap'


function Footer() {
  return(
    <div className="footer-container">
      <Container>
        <Row>
          <Col>Logo</Col>
          <Col>
            <h5>About</h5>
            <ul>
              <li>Privacy policy</li>
              <li>Help Center</li>
              <li>Terms and condition</li>
            </ul>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <ul>
              <li>cs@staylo.com</li>
              <li>+6223-9837-1827</li>
            </ul>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer