import {
  LOAD_JOKE,
  CLEAR_JOKE_ERROR,
  GET_JOKE_ERROR,
  GET_JOKE_LOADING,
  GET_JOKE_SUCCESS
} from '../../constants';

const initialState = {
  jokes: JSON.parse(localStorage.getItem('jokes')) || [],
  isLoading: false,
  error: null
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE_LOADING:
      return { ...state, isLoading: true };
    case GET_JOKE_SUCCESS:
      return { isLoading: false, jokes: [...state.jokes, action.payload] };
    case GET_JOKE_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case CLEAR_JOKE_ERROR:
      return { ...state, error: null }
  };
  return state;
};

const loadJoke = () => ({ type: LOAD_JOKE });
const getJokeLoading = () => ({ type: GET_JOKE_LOADING });
const clearJokeError = () => ({ type: CLEAR_JOKE_ERROR });
const getJokeSuccess = (payload) => ({ type: GET_JOKE_SUCCESS, payload });
const getJokeError = (payload) => ({ type: GET_JOKE_ERROR, payload });

export {
  jokeReducer,
  getJokeLoading,
  getJokeSuccess,
  getJokeError,
  clearJokeError,
  loadJoke
};
