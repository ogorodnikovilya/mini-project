import axios from 'axios';
import { JOKE_URL } from '../constants';

export const getJoke = () => axios.get(JOKE_URL);
