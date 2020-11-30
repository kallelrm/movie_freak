import axios from 'axios';
import { API_KEY } from './env';

const API_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: `${API_URL}`,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export default api;
