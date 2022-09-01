import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { clearJokeError } from '../../../store/reducers/joke';

const AlertMessage = ({error}) => {
  const dispatch = useDispatch();

  return (
    <Alert
      variant="danger"
      dismissible
      onClose={() => dispatch(clearJokeError())}
    >
      <Alert.Heading>
        {error}
      </Alert.Heading>
    </Alert>
  )
}

export default AlertMessage