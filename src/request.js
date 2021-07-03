import axios from 'axios';
const BASE_URL = `http://localhost:18000/api/v1`

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