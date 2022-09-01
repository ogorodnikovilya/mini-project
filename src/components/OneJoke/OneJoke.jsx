import { Card } from 'react-bootstrap';
import './style.scss';

function OneKid({ text }) {
  return <Card className="joke-card">
    <Card.Text>
      {text}
    </Card.Text>
  </Card>;
}

export default OneKid;
