import './DetailLodging.scss'
import PhotoGallery from '../Components/PhotoGallery'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import NavbarWhite from '../Components/NavbarWhite'
import NavbarGreen from '../Components/NavbarGreen'
import { useEffect, useState } from 'react'
import lodging from '../api/lodging'
import Footer from '../Components/Footer'
import Person from '../Components/img/Person.svg'
import { Link } from 'react-router-dom'

function DetailLodging(props) {

  function getID(pathname) {
    let paths = pathname.split('/')
    let id = paths[paths.length-1]
    return id
  }

  const [lodgingData, setLodgingData] = useState([])
  const [fasilitasKesehatan, setFasilitasKesehatan] = useState([])
  const [fotoLodging, setFotoLodging] = useState([])
  const [reviews, setReviews] = useState([])
  let ID = getID(window.location.pathname)

  useEffect(async () => {
    await lodging.get('/penginapan/detail/'+ID).then(resp => {
      setLodgingData(resp.data.data)
      setFasilitasKesehatan(resp.data.data.fasilitas)
      setFotoLodging(resp.data.data.photo)
      setReviews(resp.data.data.review)
    })
  }, [])

  return(
    <div>
      <NavbarGreen />
      <Container>
      <PhotoGallery photo={fotoLodging} />
      <div className="section-card">
        <div className="hotel-info__wrapper">
          <div >
            <div >{lodgingData.jenis}</div>
            <h3 className="title-section" >{lodgingData.nama}</h3>
            <div >
              <div className="location ellipsis">{lodgingData.lokasi}</div>
            </div>
          </div>
          <div className="price-info"><div className="price-info__caption">Mulai dari</div>
            <div style={{color: "#FD9100"}}>IDR 361.347</div>
            <div className="price-info__label">per kamar per malam</div>
            <div>
              <Link to={{pathname:"/payment/"+ID}}>
                <Button type="button" className="button default small">Pesan Kamar</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section-card">
        {lodgingData.deskripsi}
      </div>
      <div className="section-card">
        <h4 className="title-section">Fasilitas Kesehatan</h4>
        <div className="card-fasilitas">
          {fasilitasKesehatan.map(data => (
            <div>{data}</div>
          ))}
        </div>
      </div>
      <div className="section-card">
        <h4 className="title-section">Informasi Covid</h4>
        <p>Jumlah kasus : {lodgingData.jumlah_kasus}</p>
        <p>Jumlah kasus sebelumnya : {lodgingData.jumlah_kasus_sebelumnya}</p>
        <p>Data terakhir diperbarui : {lodgingData.last_update}</p>
      </div>
      <div className="section-card">
        <h4 className="title-section">Review</h4>
        {reviews.map(review => (
          <div className="d-flex mb-3">
            <div className="mr-3">
              <div className="reviewer-profile">
                <img src={Person} />
              </div>
              <div>Anonymous</div>
            </div>
            <div>
              <p>{review}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
    <Footer />
  </div>
  )
}

export default DetailLodging