import axios from 'axios'

export function getAllQuotes() {
  return axios.get('https://type.fit/api/quotes')
}




export default function getImage() {
  axios.create({
    baseURL: 'https://api.pexels.com',
    headers: {
      Authorization: '563492ad6f917000010000016e0e9dbed1d74d1ebabdc39e7a3fb970',
    },
  })
}
