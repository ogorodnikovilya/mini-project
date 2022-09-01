import {
  takeEvery,
  put,
  call,
  fork
} from 'redux-saga/effects';
import { getJoke } from '../../services/joke-service';
import {
  getJokeError,
  getJokeLoading,
  getJokeSuccess
} from '../reducers/joke';

const getNewJoke = async () => {
  try {
    const response = await getJoke();
    return response.data;
  } catch (error) {
    throw error;
  };
};

function* workerFetchJokeSaga() {
  try {
    yield put(getJokeLoading());
    const oneJoke = yield call(getNewJoke);

    yield put(getJokeSuccess(oneJoke));
    const jokesInLocalStorage = JSON.parse(localStorage.getItem('jokes')) || [];

    jokesInLocalStorage.push(oneJoke);
    localStorage.setItem('jokes', JSON.stringify(jokesInLocalStorage));
  } catch (error) {
    yield put(getJokeError('Ошибка в получении данных'))
  };
};

function* watchFetchJokeSaga() {
  yield takeEvery('LOAD_JOKE', workerFetchJokeSaga);
};

function* rootSaga() {
  yield fork(watchFetchJokeSaga);
};

export {
  workerFetchJokeSaga,
  watchFetchJokeSaga,
  rootSaga
};