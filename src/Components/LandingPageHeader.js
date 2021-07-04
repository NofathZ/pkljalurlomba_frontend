import { declareInterface } from '@babel/types'
import NavbarWhite from './NavbarWhite'
import Datepicker from './Datepicker'
import './LandingPageHeader.scss'
import { Container, Row, Col, Button } from 'react-bootstrap';

function LandingPageHeader() {
  return(
    <div>
      <div className="landing-page-header-background"></div>
      <div className="landing-page-header-background-cover">
        <Container className="myCountainer">
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-start">
              <h1 className="landing-page-title">Find your <span style={{color: "#02C39B"}} className="green-high">better</span> place</h1>
              <p className="landing-page-text">You can find the best places for staycation  and is equipped with real-time info about the spread of covid so you don't worry</p>
            </Col>
            <Col>
              <div class="pic-ctn">
                <img src="https://picsum.photos/200/300?t=1" alt="" class="pic" />
                <img src="https://picsum.photos/200/300?t=2" alt="" class="pic" />
                <img src="https://picsum.photos/200/300?t=3" alt="" class="pic" />
                <img src="https://picsum.photos/200/300?t=4" alt="" class="pic" />
                <img src="https://picsum.photos/200/300?t=5" alt="" class="pic" />
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