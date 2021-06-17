import axios from 'axios';
const BASE_URL = `https://localhost:18000/api/v1`

export default axios.create({
  baseURL: BASE_URL
});
