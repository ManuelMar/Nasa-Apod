import axios from 'axios';

const API_KEY = 'ngGZ6MvdTBApp8E2Zc5fwjcnmuoyZOF5zrH1ZBr0';
//https://api.nasa.gov/planetary/apod?api_key=${API_KEY}
const ROOT_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const FETCH_APOD = 'FETCH_APOD';

export function fetchApod(date){
  const url = `${ROOT_URL}&date=${date}`;
  const request = axios.get(url);

  return{
    type: FETCH_APOD,
    payload: request
  };
}
