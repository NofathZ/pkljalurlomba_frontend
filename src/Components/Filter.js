import './Filter.scss'
import { Container, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'

function Filter() {
  return(
    <div className="filter-container">
      <Container>
        {/* <div className="area">
          <p>Area</p>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="checkin">
          <p>Check in</p>
        </div>
        <div className="checkout">
          <p>Check out</p>
        </div>
        <div className="kamar">
          <p>Kamar</p>
        </div>
        <Button variant="success">Search</Button> */}
        <Row>
          <Col><p style={{textAlign: "left"}}>Area</p></Col>
          <Col><p style={{textAlign: "left"}}>Check in</p></Col>
          <Col><p style={{textAlign: "left"}}>Check out</p></Col>
          <Col><p style={{textAlign: "left"}}></p></Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-start">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="d-flex justify-content-start">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="d-flex justify-content-start">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="d-flex justify-content-start">
            <Button variant="success">Button</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Filter