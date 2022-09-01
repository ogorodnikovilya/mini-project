import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ButtonAdd,
  OneJoke,
  AlertMessage
} from '..';
import './style.scss';

const Main = () => {
  const { jokes, error } = useSelector(state => state.joke);
  const [jokesFromLocalStorage, setJokesFromLocalStorage] = useState();

  useEffect(() => {
    setJokesFromLocalStorage(JSON.parse(localStorage.getItem('jokes')) || []);
  }, [jokes]);

  return (
    <div className="main-box">
      <div className="main-box__button">
        <ButtonAdd />
      </div>
  
      <div className="main-box__jokes-container">
      {
        jokesFromLocalStorage?.length === 0 ? (
          <p>Нажмите на кнопку, чтобы получить шутки</p>
        ) : (
          jokesFromLocalStorage?.map(joke => 
            <OneJoke
              key={joke.id}
              text={joke.value}
            />
          )
        )
      }

      { error && <AlertMessage error={error} /> }
      </div>
    </div>
  )
}

export default Main