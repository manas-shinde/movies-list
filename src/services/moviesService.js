import axios from "axios";
import config from "../config.json";

export function getMovies() {
  return axios.get(config.apiUrl + "/movies");
}

export function deleteMovie(movieId) {
  return axios.delete(`${config.apiUrl}/${movieId}`);
}

export function getMovie(movieId) {
  return axios.get(`${config.apiUrl}/movies/${movieId}`);
}

export function saveMovie(movie) {}
