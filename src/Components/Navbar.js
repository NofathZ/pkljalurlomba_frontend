import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap"
import './Navbar.scss'
import logo from './img/logo.svg';


function NavbarComp() {
  return(
    <Navbar bg="transparent">
      <Container>
        <Row className="navbar-style">
          <Col className="d-flex">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{'LOGOPICT'}
            </Navbar.Brand>
          </Col>
          <Col className="d-flex">
            <Nav.Link className="navbar-link" href="#apartment">Apartment</Nav.Link>
            <Nav.Link className="navbar-link" href="#hotel" >Hotel</Nav.Link>
            <Nav.Link className="navbar-link" href="#homestay">Homestay</Nav.Link>
            <Nav.Link className="navbar-link" href="#about">About</Nav.Link>
          </Col>
          <Col className="d-flex justify-content-end">
            <Nav.Link className="navbar-link" href="#home">Register</Nav.Link>
            <Nav.Link className="navbar-link" href="#features">Login</Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavbarComp