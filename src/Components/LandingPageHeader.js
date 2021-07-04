import { declareInterface } from '@babel/types'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import './LandingPageHeader.scss'
import { Container, Row, Col, Button } from 'react-bootstrap';

function LandingPageHeader() {
  return(
    <div>
      <div className="landing-page-header-background"></div>
      <div className="landing-page-header-background-cover">
        <Navbar />
        <Container className="myCountainer">
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-start">
              <h1 className="landing-page-title">Find your better place</h1>
              <p className="landing-page-text">You can find the best places for staycation  and is equipped with real-time info about the spread of covid so you don't worry</p>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <div className="landing-page-booking-box">
                  <h3>Book now!</h3>
                  <div className="check-in-out">
                    <div>
                      {/* <Datepicker /> */}
                    </div>
                    <div>
                      {/* <Datepicker /> */}
                    </div>
                  </div>
                  <div className="location-guest"></div>
                  <Button>Check Availability</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="landing-page-header"></div>
    </div>
  )
}

export default LandingPageHeader