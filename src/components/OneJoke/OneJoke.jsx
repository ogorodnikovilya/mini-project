import React from 'react';
import { Card } from 'react-bootstrap';
import './style.scss'

const OneKid = ({ text }) => (
  <Card className="joke-card">
    <Card.Text>
      {text}
    </Card.Text>
  </Card>
)

export default OneKid