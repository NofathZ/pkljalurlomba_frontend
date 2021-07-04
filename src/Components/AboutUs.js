import { Container } from 'react-bootstrap'
import './AboutUs.scss'
import AboutUsIcon from './img/about-us-icon.svg'

function AboutUs() {
  return(
    <Container className="d-flex">
      <div className="image">
        <img src={AboutUsIcon} />
      </div>
      <div className="desc">
        <h1 className="title-desc">About Us</h1>
        <p className="desc-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus eu, sit in massa tortor dictum non at. Aliquet egestas quisque at egestas elit in velit lorem ut. Sed accumsan, diam ullamcorper elit. Risus risus nulla non eros, purus, magna orci tincidunt lorem. Sit etiam ullamcorper leo adipiscing lorem.</p>
      </div>
    </Container>
  )
}

export default AboutUs