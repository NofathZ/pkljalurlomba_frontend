import './Payment.scss'
import NavbarGreen from '../Components/NavbarGreen'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Payment() {
  return(
    <>
      <div className="background-payment-page">
        <NavbarGreen />
        <Container>
          <Row>
            <Col sm={7}>
              <div className="information-card">
                <form>
                  <h4 className="payment-title-card">Your Information</h4>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                  </div>
                  <Row>
                    <Col>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="exampleInputPN" />
                      </div>
                    </Col>
                    <Col>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail" />
                      </div>
                    </Col>
                  </Row>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                </form>
              </div>
              <div className="guest-card">
                <form>
                  <h4 className="payment-title-card">Guest Information</h4>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Guest Name</label>
                    <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" />
                  </div>
                </form>
              </div>
            </Col>
            <Col sm={5}>
              <div className="booking-details">
                <h4 className="payment-title-card">Booking Details</h4>
                <div className="payment-information-card">
                  <label>Check-in</label>
                  <label>Mon, 05 July 2021</label>
                </div>
                <div className="payment-information-card">
                  <label>Check-out</label>
                  <label>Tue, 06 July 2021</label>
                </div>
                <div className="payment-information-card">
                  <img src="http://staylo.herokuapp.com/images/penginapan/1.jpg" style={{width: "150px"}} />
                  <div>
                    <h5>Grand Hyatt Jakarta</h5>
                    <p>Luxury room</p>
                    <p>1 Room . 1 Guest . 1 Night</p>
                  </div>
                </div>
                <div className="payment-information-card">
                  <label>Total</label>
                  <label>IDR 2.400.000</label>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end align-items-center mt-3">
              <Button style={{backgroundColor:"#02C39B"}}>Continue to payment</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Payment