// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { API_KEY } from './env';

const API_URL = 'https://api.themoviedb.org/3/';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY, IMAGE_BASE_URL };
