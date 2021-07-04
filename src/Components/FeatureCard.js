import './FeatureCard.scss'

import { Card, Button } from 'react-bootstrap'

function FeatureCard(props) {
  return(
    <Card className="feature-card">
      <center>
        <img src={props.icon} />
        <Card.Body>
          <Card.Title style={{fontWeight:"bold"}}>{props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
      </center>
    </Card>
  )
}

export default FeatureCard