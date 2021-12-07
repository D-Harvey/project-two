import axios from 'axios';

export function getAllQuotes() {
  return axios.get('https://type.fit/api/quotes')
}

function headers() {
  return {
    headers: { Authorization: 'Bearer 563492ad6f917000010000016e0e9dbed1d74d1ebabdc39e7a3fb970' },
  }
}

export function getImages() {
  return axios.create('https://api.pexels.com', headers())
}