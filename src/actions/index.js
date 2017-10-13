import axios from 'axios';
import { APIKEY } from '../config/keys';

const API_KEY = APIKEY;
const ROOT_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const FETCH_APOD = 'FETCH_APOD';

export function fetchApod(date) {
  const url = `${ROOT_URL}&date=${date}`;
  const request = axios.get(url);

  return {
    type: FETCH_APOD,
    payload: request
  };
}
