import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '32f0cbf58eec1b8b9202349d60237365';

export async function getTrendMovies() {
  return await axios(`trending/movie/week?api_key=${API_KEY}`).then(
    resp => resp.data.results
  );
}

export async function getMoviesBySearch(query) {
  return await axios(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  ).then(resp => resp.data.results);
}

export async function getMovieDetails(movieId) {
  return await axios(`movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(
    resp => resp.data
  );
}

export async function getMovieCast(movieId) {
  return await axios(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then(resp => resp.data);
}

export async function getMovieReviews(movieId) {
  return await axios(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  ).then(resp => resp.data.results);
}
