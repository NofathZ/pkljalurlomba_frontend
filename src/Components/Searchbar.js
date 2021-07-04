import './Searchbar.scss'
import { Container, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
import Datepicker from './Datepicker'

function Searchbar() {
  return(
    <div className="filter-container">
      <Container>
        <Row>
          <Col><p style={{textAlign: "left"}}>Area</p></Col>
          <Col><p style={{textAlign: "left"}}>Check in</p></Col>
          <Col><p style={{textAlign: "left"}}>Check out</p></Col>
          <Col><p style={{textAlign: "left"}}></p></Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-start">
            <DropdownButton id="dropdown-basic-button" title="Lokasi">
              <Dropdown.Item href="">Jakarta Barat</Dropdown.Item>
              <Dropdown.Item href="">Jakarta Pusat</Dropdown.Item>
              <Dropdown.Item href="">Jakarta Selatan</Dropdown.Item>
              <Dropdown.Item href="">Jakarta Utara</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="d-flex justify-content-start">
            <Datepicker />
          </Col>
          <Col className="d-flex justify-content-start">
            <Datepicker />
          </Col>
          <Col className="d-flex justify-content-start">
            <Button style={{backgroundColor:"#02C39B"}}>Search</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Searchbar