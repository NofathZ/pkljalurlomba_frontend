import './ListStay.scss'
import { useState, useEffect } from 'react'
import Searchbar from '../Components/Searchbar'
import CardLodging from './CardLodging'
import { Container, Button, Card, InputGroup, FormControl, ButtonGroup, ToggleButton, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import lodging from '../api/lodging'
import { Redirect } from 'react-router-dom'

import NavbarWhite from '../Components/NavbarWhite'
import NavbarGreen from '../Components/NavbarGreen'

function setFilter(filter) {
  console.log(filter)
  if (filter == "jumlah kasus") {
    console.log("masuk sini")
    // <Redirect to="" />
    window.location = "https://staylo.herokuapp.com/api/penginapan/?sortByCovid=true"
  }
  else if (filter == "perubahan jumlah kasus") {

  }
}
function ListStay() {

  const [radioValue, setRadioValue] = useState("")
  const [lodgings, setLodgings] = useState([])
  const [filter, setFilter] = useState('')

  const radios = [
    { name: "Covid case (lowest first)", value: "jumlah kasus" },
  ];

  useEffect(async () => {
    await lodging.get('/penginapan').then((resp) => {
      setLodgings(resp.data.data)
    })
  }, [])

  async function filtering(filter) {
    console.log(filter)
    if (filter == "jumlah kasus") {
      await lodging.get('/penginapan?sortByCovid=true').then(resp => {
        setLodgings(resp.data.data)
        console.log(resp.data.data)
      })
      console.log("Berhasil")
    }
    else if (filter == "perubahan jumlah kasus") {
      await lodging.get('/penginapan?sortByChangeCovid=true').then(resp => {
        setLodgings(resp.data.data)
      })
      console.log("Berhasil")
    }
  }

  return(
    <div className="list-stay-container">
      <NavbarGreen />
      <Searchbar/>
      <Container>
        <Row>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Filter</Card.Title>
                <Card.Text>
                  {radios.map((radio, index) => (
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="filter-data" id={radio.name} value={radio.value} />
                        <label className="form-check-label" for={radio.name}>
                          {radio.name}
                        </label>
                      </div>
                    ))}
                </Card.Text>
              </Card.Body>
              <Button style={{backgroundColor:"#02C39B"}} onClick={() => filtering(document.querySelector('input[name="filter-data"]:checked') == null ? "null" : document.querySelector('input[name="filter-data"]:checked').value)}>
                Filter
              </Button>
            </Card>
          </Col>
          <Col>
            {lodgings.map((lodging) => (
              <CardLodging id={lodging.id} nama={lodging.nama} jenis={lodging.jenis} lokasi={lodging.lokasi} cover_photo={lodging.cover_photo} jumlah_kasus={lodging.jumlah_kasus} star={lodging.rating} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ListStay