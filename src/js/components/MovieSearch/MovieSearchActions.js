import axios from 'axios';

const API_KEY = '8730e0e';
const ROOT_URL = 'https://omdbapi.com/?t=';

export function enterTerm(term) {
  return {
    type: 'UPDATE_TERM',
    payload: term
  };
}

export function getTerm(term) {
  const req = axios.get(`${ROOT_URL}${term}&apikey=${API_KEY}`);
  return {
    type: 'GET_TERM',
    payload: req
  };
}
