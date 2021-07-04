import './CardLodging.scss'
import { Row, Col } from 'react-bootstrap'
import testpict from '../Components/img/testpict.jpg'
import { Link } from 'react-router-dom'
import Star from '../Components/img/star.svg'

function CardLodging(props) {

  return(
    <Link to={{
      pathname:`/detail-lodging/${props.id}`, 
    }}>
      <Row className="card-lodging" onClick={() => console.log(props.id)}>
        <Col>
          <div className="image">
            <img src={props.cover_photo} />
          </div>
        </Col>
        <Col>
          <h3>{props.nama}</h3>
          <label style={{color: "#8d8d8d", marginRight: "5px"}}>{props.jenis}</label>
          <label>{props.star}</label>
          <label>
            <img src={Star} style={{width: "13px"}} />
          </label>
          <p style={{color:"#0096f4"}}>{props.lokasi}</p>
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <center>
            {
              props.jumlah_kasus == 0 ? 
              <h4 style={{color:"#02c39b"}}>Free Covid</h4>
              :
              props.jumlah_kasus >= 1 && props.jumlah_kasus <= 20 ?
              <h4 style={{color:"#fcdb05"}}>Less Covid</h4>
              :
              <h4 style={{color:"#ff4828"}}>Lot of Covid</h4>
            }
            <p>In radius 5km</p>
          </center>
          <center>
            <h5>IDR 200.000</h5>
          </center>
        </Col>
      </Row> 
    </Link>
  )
}

export default CardLodging