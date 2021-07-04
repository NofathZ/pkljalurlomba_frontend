import './Filter.scss'
import { Container, Button, Dropdown, DropdownButton } from 'react-bootstrap'

function Filter() {
  return(
    <div className="filter-container">
      <Container className="list-filter">
        <div className="area">
          <h1>Area</h1>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="checkin">
          <h1>Check in</h1>
        </div>
        <div className="checkout">
          <h1>Check out</h1>
        </div>
        <div className="kamar">
          <h1>Kamar</h1>
        </div>
        <Button variant="success">Search</Button>
      </Container>
    </div>
  )
}

export default Filter