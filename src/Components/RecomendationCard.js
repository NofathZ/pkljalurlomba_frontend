import './RecomendationCard.scss'
import TestPict from './img/testpict.jpg'
import { Card } from 'react-bootstrap'
import Start from './img/start-recomendation.svg'
import Secure from './img/secure-recomendation.svg'
import DistanceIcon from './img/distance-recomendation.svg'

import DiscountIcon from './img/facility-icon/discount-icon.svg'
import GymIcon from './img/facility-icon/gym-icon.svg'
import PoolIcon from './img/facility-icon/pool-icon.svg'
import RestaurantIcon from './img/facility-icon/restaurant-icon.svg'
import SpaIcon from './img/facility-icon/spa-icon.svg'
import WifiIcon from './img/facility-icon/wifi-icon.svg'

function RecomendationCard(props) {
  return(
    <div class="center container-recomendation">
      <div class="property-card">
        <a href="#">
          <div class="property-image"></div>
        </a>
        <div class="property-description">
          <div className="property-desc-title">
            <label>Raffless Hotel</label>
            <label>
              4.8
              <img src={Start} />
            </label>
            {
              props.covidFree ? 
              <>
                <label className="other-info">
                  <img src={Secure} />
                  <img src={DistanceIcon} />
                </label>
              </>
              :
              ""
            }
          </div>
          <div className="property-desc-title-2">
            <label className="price">
              <label>Starting from</label>
              <label>IDR2.500.000 / night</label>
            </label>
            <label className="location">
              <img src={DistanceIcon} />
              <label>Setiabudi</label>
            </label>
          </div>
          <div className="property-desc-description">
            <p>Fasilitas</p>
            <div className="property-facility">
              <img src={GymIcon} />
              <img src={PoolIcon} />
              <img src={RestaurantIcon} />
              <img src={SpaIcon} />
              <img src={WifiIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecomendationCard