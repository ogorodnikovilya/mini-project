import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { loadJoke } from '../../../store/reducers/joke';
import './style.scss';

const ButtonAdd = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.joke);

  return (
    <Button
      variant="info"
      className="button-add"
      onClick={() => dispatch(loadJoke())}
      disabled={isLoading}
    >
      MORE!!!
    </Button>
  )
}

export default ButtonAdd