import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL

export default axios.create({
  baseURL: BASE_URL
});


export const headers = (token) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + token
    }
  }
}